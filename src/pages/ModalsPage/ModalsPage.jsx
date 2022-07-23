import React, { useState, useEffect } from "react";
import NewManager from "../../components/modals/NewManager/NewManager";
import ChangeAdministrator from "../../components/modals/ChangeAdmin/ChangeAdmin";
import NewCourse from "../../components/modals/NewCourse/NewCourse";
import ChangeCourse from "../../components/modals/ChangeCourse/ChangeCourse";
import NewGroup from "../../components/modals/NewGroup/NewGroup";
import ChangeGroup from "../../components/modals/ChangeGroup/ChangeGroup";
import styles from "./ModalsPage.module.scss";

const ModalsPage = () => {
  const [id, setId] = useState(0);
  const [courseId, setCourseId] = useState(0);
  const [groupId, setGroupId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChange, setIsOpenChange] = useState(false);
  const [isNewCourse, setIsNewCourse] = useState(false);
  const [isChangeCourse, setIsChangeCourse] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isChangeGroup, setIsChangeGroup] = useState(false);
  const handleClose = (e) => {
    if (e === 0) {
      setIsOpen(!isOpen);
    } else if (e === 1) {
      setIsOpenChange(!isOpenChange);
    } else if (e === 2) {
      setIsNewCourse(!isNewCourse);
    } else if (e === 3) {
      setIsChangeCourse(!isChangeCourse);
    } else if (e === 4) {
      setIsNewGroup(!isNewGroup);
    }else if (e === 5) {
      setIsChangeGroup(!isChangeGroup);
    }
  };
  return (
    <div>
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

      <button
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        Open newManager
      </button>
      <NewManager isOpen={isOpen} handleClose={() => handleClose(0)} />
      <button
        onClick={() => {
          isOpenChange ? setIsOpenChange(false) : setIsOpenChange(true);
        }}
      >
        Open change administrator
      </button>
      <ChangeAdministrator
        isOpen={isOpenChange}
        handleClose={() => handleClose(1)}
        id={id}
      />
      <button
        onClick={() => {
          isNewCourse ? setIsNewCourse(false) : setIsNewCourse(true);
        }}
      >
        Open new course
      </button>
      <NewCourse isOpen={isNewCourse} handleClose={() => handleClose(2)} />
      <button
        onClick={() => {
          isChangeCourse ? setIsChangeCourse(false) : setIsChangeCourse(true);
        }}
      >
        Open change course
      </button>
      <ChangeCourse
        isOpen={isChangeCourse}
        handleClose={() => handleClose(3)}
        id={courseId}
      />
      <button
        onClick={() => {
          isNewGroup ? setIsNewGroup(false) : setIsNewGroup(true);
        }}
      >
        Open new group
      </button>
      <NewGroup isOpen={isNewGroup} handleClose={() => handleClose(4)} id={courseId} />
      <button
        onClick={() => {
          isChangeGroup ? setIsChangeGroup(false) : setIsChangeGroup(true);
        }}
      >
        Open change group
      </button>
      <ChangeGroup isOpen={isChangeGroup} handleClose={() => handleClose(5)} id={groupId} />
    </div>
  );
};

export default ModalsPage;
