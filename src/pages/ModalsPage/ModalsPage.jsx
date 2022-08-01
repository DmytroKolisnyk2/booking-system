import React, { useState } from "react";
import NewUser from "../../components/modals/NewUser/NewUser";
import ChangeUser from "../../components/modals/ChangeUser/ChangeUser";
import NewCourse from "../../components/modals/NewCourse/NewCourse";
import ChangeCourse from "../../components/modals/ChangeCourse/ChangeCourse";
import NewGroup from "../../components/modals/NewGroup/NewGroup";
import ChangeGroup from "../../components/modals/ChangeGroup/ChangeGroup";
import NewAppointment from "../../components/modals/NewAppointment/NewAppointment";
import "./ModalsPage.module.scss";

const ModalsPage = () => {
  const [id, setId] = useState(0);
  const [courseId, setCourseId] = useState(0);
  const [groupId, setGroupId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState("");
  const [isNewAppointment, setIsNewAppointment] = useState(false);
  
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div>
        <label>
          You will be editing manager with id {id}
          <input
            type="number"
            placeholder="enter manager id"
            onChange={(e) => setId(e.currentTarget.value)}
          />
        </label>
        <label>
          You will be editing course with id {courseId}
          <input
            type="number"
            placeholder="enter course id"
            onChange={(e) => setCourseId(e.currentTarget.value)}
          />
        </label>
        <label>
          You will be editing group with id {groupId}
          <input
            type="number"
            placeholder="enter course id"
            onChange={(e) => setGroupId(e.currentTarget.value)}
          />
        </label>
      </div>
      <div
        onClick={(e) => {
          e.target.dataset.modal && setModal(e.target.dataset.modal);
        }}
      >
        <button
          data-modal="new-user"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open NewUser
        </button>
        {modal === "new-user" && (
          <NewUser isOpen={isOpen} handleClose={() => handleClose()} />
        )}
        <button
          data-modal="change-user"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open change user
        </button>
        {modal === "change-user" && (
          <ChangeUser
            isOpen={isOpen}
            handleClose={() => handleClose()}
            id={id}
          />
        )}
        <button
          data-modal="new-course"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open new course
        </button>
        {modal === "new-course" && (
          <NewCourse isOpen={isOpen} handleClose={() => handleClose()} />
        )}
        <button
          data-modal="change-course"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open change course
        </button>
        {modal === "change-course" && (
          <ChangeCourse
            isOpen={isOpen}
            handleClose={() => handleClose()}
            id={courseId}
          />
        )}
        <button
          data-modal="new-group"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open new group
        </button>
        {modal === "new-group" && (
          <NewGroup
            isOpen={isOpen}
            handleClose={() => handleClose()}
            id={courseId}
          />
        )}
        <button
          data-modal="change-group"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open change group
        </button>
        {modal === "change-group" && (
          <ChangeGroup
            isOpen={isOpen}
            handleClose={() => handleClose()}
            id={groupId}
          />
        )}
        <button
          data-modal="new=appointment"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Open new appointment
        </button>
        {modal === "new=appointment" && (
          <NewAppointment
            isOpen={isOpen}
            handleClose={() => handleClose()}
            id={groupId}
          />
        )}
      </div>
    </section>
  );
};

export default ModalsPage;
