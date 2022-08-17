import Modal from "../../Modal/Modal";
import React, { useState, useEffect } from "react";
import { putGroup, deleteGroup } from "../../../helpers/group/group";
import Form from "../../Form/Form";
import FormInput from "../../FormInput/FormInput";

const ChangeGroup = ({ isOpen, handleClose, id, dataName }) => {
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
              put: putGroup,
              additional: id,
              delete: deleteGroup,
            }}
            isDelete={true}
            onSubmit={() => {
              handleClose();
              setName("");
            }}
            status={{
              successMessage: "Successfully changed group",
              failMessage: "Failed to change group",
              successMessageDelete: "Successfully deleted group",
              failMessageDelete: "Failed to delete group",
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
