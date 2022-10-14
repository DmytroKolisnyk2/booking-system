import React from "react";
import { useState } from "react";
import { getAppointmentByCrm } from "../../helpers/appointment/appointment";
import FormInput from "../FormInput/FormInput";
import Form from "../Form/Form";
import { success, error, defaults } from "@pnotify/core";
import {Fade} from "react-awesome-reveal"
defaults.delay = 1000;

export default function CrmLinks() {
  const [link, setLink] = useState("");
  const [data, setData] = useState([0]);

  return (
    <>
      <Fade cascade triggerOnce duration={500} direction="up">
        <Form
          onSubmit={async () => {
            const formData = new FormData();
            formData.append("crm_link", link);
            const res = await getAppointmentByCrm(formData)
              .then((res) => {
                setLink("");
                success("Succesfully found");
                return res.data;
              })
              .catch((err) => {
                error(`Appointment not found, ${err.message}`);
                setData([undefined]);
              });
            res && setData([res]);

            return res;
          }}
          isDescription={true}
          type={{ type: "no-request-test" }}
          status={{
            successMessage: "Successfully found",
            failMessage: "Appointment not found",
          }}
          buttonTitle={"Search"}
          width={"400px"}
          link={link}
          title={false}
          data={data}
        >
          <FormInput
            title="CRM link:"
            type="text"
            name="crm"
            value={link}
            width={"50%"}
            placeholder="CRM link"
            isRequired={true}
            handler={setLink}
          />
        </Form>
      </Fade>
      {/* {errorMessage && <p className="error"> {errorMessage} </p>} */}
      {/* {courses?.length > 0 && (
        <div className={styles.wrapper}>
          {courses.map((i) => {
            if (i.name === "Не призначено") return;
            return (
              <div className={styles.main_wrapper} key={i.id}>
                <p className={styles.mini_title}>{i.name}</p>
                <ul className={styles.list}>
                  <Fade cascade triggerOnce duration={300} direction="up">
                    {CrmLinks.map((item) => {
                      if (item.name === "Не призначено") return;
                      return (
                        item.course_id === i.id && (
                          <li className={styles.ul_items} key={item.id}>
                            <p className={styles.ul_items_text}>{item.name}</p>
                            <button
                              className={styles.ul_items_btn}
                              data-modal="change-user"
                              onClick={() => {
                                setIsOpen(!isOpen);
                                setId(item.id);
                                setName(item.name);
                              }}
                            />
                          </li>
                        )
                      );
                    })}
                  </Fade>
                </ul>
              </div>
            );
          })} */}
      {/* </div> */}
      {/* )} */}
    </>
  );
}
