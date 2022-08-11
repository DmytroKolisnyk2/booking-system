import styles from "./Form.module.scss";
import InputSubmit from "../InputSubmit/InputSubmit";
import InputDelete from "../InputDelete/InputDelete";
import { useState } from "react";
import { success, error } from "@pnotify/core";
const Form = ({
  type,
  onSubmit,
  title,
  id,
  requests,
  children,
  width,
  text,
  role,
  startName,
  handleClose,
  isDelete,
  isDescription,
  manager,
  status,
  ...formData
}) => {
  const [errorsuccessMessage, setError] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (type.type === "no-request") {
        if (onSubmit) {
          onSubmit()
            .catch((e) => {
              return error(`${status.failMessage}, ${e.message}`);
            })
            .then(() => {
              success(status.successMessage);
              return !errorsuccessMessage && onSubmit && onSubmit();
            });
        }
        return;
      }
      const data = new FormData();
      for (const i in formData) {
        if (!formData[i]) {
          formData[i] = 2;
        }
        data.append(i, formData[i]);
      }
      isDescription && data.append("description", "test");
      if (+role === 2 && type.type === "put") {
        const res = await requests.getByName(startName);
        if (data.get("role_id")) data.delete("role_id");
        await requests
          .user(data, res.data.id)
          .then(() => {
            success(status.successMessage);
            return !errorsuccessMessage && onSubmit && onSubmit();
          })
          .catch((e) => {
            return error(`${status.failMessage}, ${e.message}`);
          });
      }
      if (+role === 2 && type.type === "post") await requests.user(data);
      if (manager) {
        const res = await requests.getByName(startName);
        onSubmit();
        return await requests.user(data, res.data.id).catch(() => {
          return error(status.failMessage);
        });
      }
      if (type.type === "post") {
        return await requests
          .post(data)
          .catch((e) => {
            return error(`${status.failMessage}, ${e.message}`);
          })
          .then(() => {
            success(status.successMessage);
            return !errorsuccessMessage && onSubmit && onSubmit();
          });
      }
      await requests[type.type](data, requests.additional)
        .catch((e) => {
          return error(`${status.failMessage}, ${e.message}`);
        })
        .then(() => {
          success(status.successMessage);
          return !errorsuccessMessage && onSubmit && onSubmit();
        });
    } catch (e) {
      setError(!errorsuccessMessage);
      error(`${status.failMessage}, ${e.message}`);
      console.error(e);
    }
  };
  const handleDelete = async () => {
    if (manager === true) {
      const res = await requests.getByName(startName);
      onSubmit();
      return await requests
        .userDelete(res.data.id)
        .catch(() => {
          return error(status.failMessageDelete);
        })
        .then(() => {
          return success(status.successMessageDelete);
        });
    }
    await requests
      .delete(requests.additional)
      .catch((e) => {
        return error(`${status.failMessageDelete}, ${e.message}`);
      })
      .then(() => {
        return success(status.successMessageDelete);
      });
    if (+role === 2 && type.additionalType === "delete") {
      const res = await requests.getByName(startName);
      await requests.userDelete(res.data.id).catch((e) => {
        return error(`${status.failMessageDelete}, ${e.message}`);
      });
    }

    !errorsuccessMessage && onSubmit && onSubmit();
  };
  return (
    <div className={styles.modal} style={{ width: width }}>
      <h3 className={styles.title}>{title}</h3>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.form}
      >
        {children}
        <div className={styles.button__wrapper}>
          {type.button === "login" && (
            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className={styles.login}
            >
              Log in
            </button>
          )}
          {type.button === "signup" && (
            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e);
              }}
              className={styles.signup}
            >
              Sign Up
            </button>
          )}

          {type.additionalType && <InputDelete handleDelete={handleDelete} />}
          {!type.button && <InputSubmit />}
        </div>
      </form>
      {text}
      <p className={styles.exit}>Click outside to exit</p>
    </div>
  );
};

export default Form;
