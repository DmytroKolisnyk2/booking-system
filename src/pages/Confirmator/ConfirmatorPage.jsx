import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./ConfirmatorPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import Confirmator from "../../components/Confirmation/Confirmation";
import ConfirmationButtons from "../../components/ConfirmationButtons/ConfirmationButtons";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { getCurrentConfirmator } from "../../redux/confirmator/confirmator-operations";
import ConfirmatorComments from "../../components/ConfirmatorComments/ConfirmatorComments";

const ConfirmatorPage = () => {
  const [value, setValue] = useState("");
  const { confirmatorId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentConfirmator());
  }, []);

  return (
    <>
      <Header user={{ name: confirmatorId, role: "Confirmator" }} />

      <BgWrapper title="Confirmator" />
      <section className={styles.tableSection}>
        <h2 className={styles.title}>Confirmation</h2>
        <div className={styles.table__wrapper}>
          <Confirmator />

          <div className={styles.btn_wrapper}>
            <ConfirmationButtons value={value} setValue={setValue} />
          </div>
          <div className={styles.btn_input_wrapper}>
            <ConfirmatorComments value={value} />
            {/* <ConfirmationBtn />
            <input
              type="text"
              className={styles.input}
              id="comment"
              name="comment"
              placeholder="write a comment..."
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmatorPage;
