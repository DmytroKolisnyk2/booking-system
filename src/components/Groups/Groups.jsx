import React from "react";
import { useState, useEffect } from "react";
import { getGroups } from "../../helpers/group/group";
import { getCourses } from "../../helpers/course/course";
import styles from "./Groups.module.scss";
import ChangeGroup from "../modals/ChangeGroup/ChangeGroup";
import { Fade } from "react-awesome-reveal";

export default function Groups({ text, isOpenModal, dataName }) {
  const [groups, setGroups] = useState([]);
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const getGroupsData = async () => {
    const res = await getGroups()
      .then((res) =>
        res.data ? res.data : setErrorMessage("Example error message!")
      )
      .catch((error) => setErrorMessage(error.message));

    setGroups(res);
    return res;
  };
  const getCoursesData = async () => {
    const res = await getCourses()
      .then((res) =>
        res.data ? res.data : setErrorMessage("Example error message!")
      )
      .catch((error) => setErrorMessage(error.message));

    setCourses(res);
    return res;
  };
  useEffect(() => {
    getGroupsData();
    getCoursesData();
  }, []);
  useEffect(() => {
    if (!isOpen || !isOpenModal) {
      getGroupsData();
      getCoursesData();
    }
  }, [isOpen, isOpenModal]);
  return (
    <>
      <ChangeGroup
        isOpen={isOpen}
        handleClose={() => handleClose()}
        id={id}
        dataName={name}
      />

      {errorMessage && <p className="error"> {errorMessage} </p>}
      {courses?.length > 0 && (
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
          })}
        </div>
      )}
    </>
  );
}
