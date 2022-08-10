import Modal from "../../Modal/Modal";
import Select from "../../Select/Select";
import React, { useState } from "react";
import { postGroup } from "../../../helpers/group/group";
import { getCourses } from "../../../helpers/course/course";
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
            onSubmit={() => {
              handleClose();
              setName("");
            }}
            type={{ type: "post" }}
            requests={{ post: postGroup }}
            course_id={course_id}
            name={name}
            status={{
              successMessage: "Successfully created group",
              failMessage: "Failed to create group",
            }}
            timetable={schedule}
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
              title="Name:"
              type="text"
              name="name"
              max={50}
              value={name}
              placeholder="Name"
              isRequired={true}
              handler={setName}
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
          </Form>
        </Modal>
      )}
    </>
  );
};

export default NewGroup;
