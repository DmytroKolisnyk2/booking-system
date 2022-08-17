import Modal from "../../Modal/Modal";
import React, { useState, useEffect } from "react";
import { putCourse, deleteCourse } from "../../../helpers/course/course";
import Form from "../../Form/Form";
import FormInput from "../../FormInput/FormInput";

const NewManager = ({ isOpen, handleClose, id, dataName }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(dataName);
  }, [isOpen, dataName]);
  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "put", additionalType: "delete" }}
            requests={{
              put: putCourse,
              additional: id,
              delete: deleteCourse,
            }}
            onSubmit={() => {
              handleClose();
              setName("");
            }}
            status={{
              successMessage: "Successfully changed course",
              failMessage: "Failed to change course",
              successMessageDelete: "Successfully deleted course",
              failMessageDelete: "Failed to delete course",
            }}
            name={name}
            title="Change course's info"
          >
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

export default NewManager;
