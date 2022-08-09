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
import ConfirmatorDatePicker from "../../components/ConfirmatorDatePicker/ConfirmatorDatePicker";
import PostponeModal from "../../components/modals/PostponeModal/PostponeModal";

const ConfirmatorPage = () => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { confirmatorId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentConfirmator());
  }, []);

  return (
    <>
      <Header user={{ name: confirmatorId, role: "Confirmator" }} />

      <BgWrapper title="Confirmator">
        <ConfirmatorDatePicker />
      </BgWrapper>
      <section className={styles.tableSection}>
        <h2 className={styles.title}>Confirmation</h2>
        <div className={styles.table__wrapper}>
          <Confirmator />

          <div className={styles.btn_wrapper}>
            <ConfirmationButtons value={value} setValue={setValue} />
          </div>
          <div className={styles.btn_input_wrapper}>
            <ConfirmatorComments value={value} />
          </div>
        </div>
      </section>
      <PostponeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ConfirmatorPage;
