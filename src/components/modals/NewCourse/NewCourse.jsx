import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import { postCourse } from "../../../helpers/api.js";
import FormInput from "../../FormInput/FormInput";
import Form from "../../Form/Form";

const NewCourse = ({ isOpen, handleClose }) => {
  const [name, setName] = useState("");

  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            onSubmit={() => {
              handleClose();
              setName("");
            }}
            isDescription={true}
            type={{ type: "post" }}
            requests={{
              post: postCourse,
            }}
            name={name}
            title="New course"
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

export default NewCourse;
