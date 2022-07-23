import styles from "./NewGroup.module.scss";
import Modal from "../../Modal/Modal";
import React, { Component, useState, useEffect } from "react";
import { getCourses, postGroup } from "../../../helpers/api.js";
import DatePicker from "react-datepicker";
import classnames from "classnames";

const NewGroup = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [schedule, setSchedule] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [courses, setCourses] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("timetable", schedule);
    data.append("start_date", startDate);
    data.append("course_id", courseId);
    data.append("name", name);
    postGroup(data);
  };
  const getCoursesData = async () => {
    const res = await getCourses()
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setCourses(res);
    return res;
  };
  // const courses = [
  //   {
  //     description: "test",
  //     id: 1,
  //     name: "New Course",
  //   },
  //   {
  //     description: "test",
  //     id: 3,
  //     name: "Factorio Guides",
  //   },
  //   {
  //     description: "",
  //     id: 4,
  //     name: "Wed 18:00-19:30, Sat 10:00-12:30",
  //   },
  // ];

  return (
    <div>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <div className={styles.modal}>
            <h3 className={styles.title}>Create new group</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Course:</p>
                <select
                  defaultValue={""}
                  className={classnames(styles.input, styles.select)}
                  onChange={(e) => setCourseId(e.currentTarget.value)}
                  required
                  onClick={(e) => getCoursesData()}
                >
                  <option value="" disabled hidden>
                    Select group
                  </option>
                  {courses.map((i) => {
                    return <option value={i.id} key={i.id}>{i.name}</option>;
                  })}
                </select>
              </label>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Start date:</p>
                <input
                  className={styles.input}
                  type="date"
                  name="name"
                  required
                  value={startDate}
                  placeholder="Select start date"
                  onChange={(e) => setStartDate(e.currentTarget.value)}
                />
                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              </label>

              <label className={styles.input__label}>
                <p className={styles.input__label}>Class schedule:</p>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  required
                  placeholder="Wed 18:00-19:30, Sat 10:00-12:30"
                  onChange={(e) => setSchedule(e.currentTarget.value)}
                />
              </label>
              <label className={styles.input__label}>
                <p className={styles.input__label}>Group name:</p>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </label>

              <input
                className={styles.input__submit}
                type="submit"
                value="Save"
              />
            </form>
            <p className={styles.exit}>Click outside to exit</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NewGroup;
