import React from "react";
import { useState, useEffect } from "react";
import { getGroups } from "../../helpers/group/group";
import { getCourses } from "../../helpers/course/course";
import styles from "./CrmLinks.module.scss";
import { Fade } from "react-awesome-reveal";
import FormInput from "../FormInput/FormInput";
import Form from "../Form/Form";

export default function Groups({ text, isOpenModal, dataName }) {
  const [link, setLink] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <Form
        onSubmit={() => {
          // handleClose();
          setData([
            {
              date: "Пн, 17.08, 12:00",
              course: "Minecraft",
              manager: "Maria",
              number: "number",
            },
            {
              date: "Пн, 17.08, 12:00",
              course: "Minecraft",
              manager: "Maria",
              number: "number",
            },
            {
              date: "Пн, 17.08, 12:00",
              course: "Minecraft",
              manager: "Maria",
              number: "+2347891287367",
            },
          ]);
          // setLink("");
        }}
        isDescription={true}
        type={{ type: "no-request-test" }}
        status={{
          successMessage: "Successfully found",
          failMessage: "Failed to found appointments",
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
                    {groups.map((item) => {
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
