import Modal from "../../Modal/Modal";
import React, { useState } from "react";
import { putGroup, deleteGroup } from "../../../helpers/api.js";
import Form from "../../Form/Form";
import FormInput from "../../FormInput/FormInput";

const ChangeGroup = ({ isOpen, handleClose, id }) => {
  const [name, setName] = useState("");

  return (
    <>
      {isOpen && (
        <Modal open={isOpen} onClose={handleClose}>
          <Form
            type={{ type: "put", additionalType: "delete" }}
            requests={{
              put: putGroup,
              additional: id,
              delete: deleteGroup,
            }}
            onSubmit={() => {
              handleClose();
              setName("");
            }}
            name={name}
            title="Change group's info"
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

export default ChangeGroup;
