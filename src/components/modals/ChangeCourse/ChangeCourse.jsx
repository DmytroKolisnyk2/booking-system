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
// {isOpen && (
//   <Modal open={isOpen} onClose={handleClose}>
//     <div className={styles.modal}>
//       <h3 className={styles.title}>Change course's info</h3>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label className={styles.input__label}>
//           <p className={styles.input__label}>Course name:</p>
//           <input
//             className={styles.input}
//             type="text"
//             name="name"
//             required
//             placeholder="Course name"
//             onChange={(e) => setName(e.currentTarget.value)}
//           />
//         </label>
//         <div className={styles.button__wrapper}>
//           <button
//             type="button"
//             className={styles.input__delete}
//             onClick={handleDelete}
//           >
//             Delete
//           </button>
//           <input
//             className={styles.input__submit}
//             type="submit"
//             value="Save"
//           />
//         </div>
//       </form>
//       <p className={styles.exit}>Click outside to exit</p>
//     </div>
//   </Modal>
// )}
