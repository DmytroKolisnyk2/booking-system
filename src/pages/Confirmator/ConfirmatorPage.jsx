import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ConfirmatorPage.module.scss";
import BgWrapper from "../../components/BgWrapper/BgWrapper";
import Confirmator from "../../components/Confirmation/Confirmation";
import ConfirmationButtons from "../../components/ConfirmationButtons/ConfirmationButtons";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { getCurrentConfirmator } from "../../redux/confirmator/confirmator-operations";
import ConfirmatorComments from "../../components/ConfirmatorComments/ConfirmatorComments";
import ConfirmatorDatePicker from "../../components/ConfirmatorDatePicker/ConfirmatorDatePicker";
import { getUserById } from "../../helpers/user/user";
import { getConfirmatorAppointments } from "../../redux/confirmator/confirmator-selectors";

const ConfirmatorPage = () => {
  const [value, setValue] = useState("");
  const { confirmatorId } = useParams();
  const [confirmatorName, setConfirmatorName] = useState("");
  const appointments = useSelector(getConfirmatorAppointments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentConfirmator());
    getUserById(+confirmatorId)
      .then((data) => {
        setConfirmatorName(data.data.name);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <Header user={{ name: confirmatorName, role: "Confirmator" }} />

      <BgWrapper top={-200} title="Confirmator" />
      <ConfirmatorDatePicker />
      <section className={styles.tableSection}>
        <h2 className={styles.title}>Confirmation</h2>
        {appointments.length === 0 ? (
          <h2 className={styles.errorTitle}>Nothing to confirm yet</h2>
        ) : (
          <div className={styles.table__wrapper}>
            <Confirmator />

            <div className={styles.btn_wrapper}>
              <ConfirmationButtons value={value} setValue={setValue} />
            </div>
            <div className={styles.btn_input_wrapper}>
              <ConfirmatorComments value={value} />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ConfirmatorPage;
