import Modal from "../../Modal/Modal";
import Select from "../../Select/Select";
import React, { useState } from "react";
import { getCourses, postGroup } from "../../../helpers/api.js";
import FormInput from "../../FormInput/FormInput";
import Form from "../../Form/Form";

const NewGroup = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");
  const [course_id, setCourseId] = useState("");
  const [schedule, setSchedule] = useState("");
  const [start_date, setStartDate] = useState(new Date());
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            onSubmit={handleClose}
            type={{ type: "post" }}
            requests={{ post: postGroup }}
            course_id={course_id}
            name={name}
            timetable={"11:20 "}
            title="Create new group"
          >
            <Select
              handler={setCourseId}
              value={course_id}
              setValue={setCourseId}
              request={getCourses}
              label="Group name:"
              defaultValue="Select group"
              title="Course:"
            />

            <FormInput
              title="Start Date:"
              type="date"
              name="date"
              value={start_date}
              placeholder="Select start date"
              isRequired={true}
              handler={setStartDate}
            />
            <FormInput
              title="Class schedule:"
              type="text"
              name="schedule"
              value={schedule}
              placeholder="Wed 18:00-19:30, Sat 10:00-12:30"
              isRequired={true}
              handler={setSchedule}
            />
            <FormInput
              title="Name:"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              isRequired={true}
              handler={setName}
            />
          </Form>
        </Modal>
      )}
    </>
  );
};

export default NewGroup;
