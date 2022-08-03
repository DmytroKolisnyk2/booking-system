import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import { putCourse, deleteCourse } from "../../../helpers/api.js";
import Form from "../../Form/Form";
import FormInput from "../../FormInput/FormInput";

const NewManager = ({ isOpen, handleClose, id }) => {
  const [name, setName] = useState("");
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
