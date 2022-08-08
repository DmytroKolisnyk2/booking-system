import styles from "./Form.module.scss";
import InputSubmit from "../InputSubmit/InputSubmit";
import InputDelete from "../InputDelete/InputDelete";
import { useState, useEffect } from "react";
import {
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerCurrentWorkWeek,
} from "../../redux/manager/manager-operations";

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
  handleClose,
  isDelete,
  isThatConsultResult,
  consultResult,
  apiHelperRequest,
  apiHelperInfo,
  ...formData
}) => {
  const [error, setError] = useState(false);
  console.log(apiHelperInfo);
  const handleSubmit = async (event) => {
    if (type.type === "no-request") {
      onSubmit && onSubmit();
      return;
    }

    try {
      event.preventDefault();
      const data = new FormData();
      for (const i in formData) {
        data.append(i, formData[i]);
      }
      data.append("description", "test");
      +role === 1 && (await requests.user(data));
      if (+role !== 1 && +role && isDelete) {
        await requests.userDelete(id);
      }
      type.type === "post"
        ? await requests.post(data).catch(() => setError(!error))
        : await requests[type.type](data, requests.additional);
    } catch (e) {
      setError(!error);
      return console.log(e);
    }
    !error && onSubmit && onSubmit();
  };
  const handleDelete = async () => {
    +role === 1 && (await requests.userDelete(id));
    await requests.delete(requests.additional);
    !error && onSubmit && onSubmit();
  };
  return (
    <div className={styles.modal} style={{ width: width }}>
      <h3 className={styles.title}>{title}</h3>
      <form
        onSubmit={(e) => {
          if (isThatConsultResult === true) {
            // e.preventDefault();
            if (consultResult === true) {
              apiHelperRequest(
                Number(apiHelperInfo.managerId),
                apiHelperInfo.weekId,
                apiHelperInfo.dayIndex,
                apiHelperInfo.slotHour,
                7
              )
                .then((data) => {})
                .catch((error) =>
                  apiHelperInfo.dispatch(setManagerError(error))
                )
                .finally(() =>
                  apiHelperInfo.dispatch(setManagerLoading(false))
                );
              apiHelperInfo.dispatch(
                changeStatusSlot(
                  apiHelperInfo.dayIndex,
                  apiHelperInfo.hourIndex,
                  7
                )
              );
            } else {
              apiHelperRequest(
                Number(apiHelperInfo.managerId),
                apiHelperInfo.weekId,
                apiHelperInfo.dayIndex,
                apiHelperInfo.slotHour,
                8
              )
                .then((data) => {})
                .catch((error) =>
                  apiHelperInfo.dispatch(setManagerError(error))
                )
                .finally(() =>
                  apiHelperInfo.dispatch(setManagerLoading(false))
                );

              apiHelperInfo.dispatch(
                changeStatusSlot(
                  apiHelperInfo.dayIndex,
                  apiHelperInfo.hourIndex,
                  8
                )
              );
            }
          }
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
