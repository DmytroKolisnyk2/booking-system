import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ConfirmatorPage.module.scss"; //Оформлення
import BgWrapper from "../../components/BgWrapper/BgWrapper"; //Елемент сторінки
import Confirmator from "../../components/Confirmation/Confirmation";  // структурвання виводу
import ConfirmationButtons from "../../components/ConfirmationButtons/ConfirmationButtons"; //вантажимо кнопочки
import Header from "../../components/Header/Header";  // підключаємо шапку
import { useParams } from "react-router-dom";
import { getCurrentConfirmator } from "../../redux/confirmator/confirmated-operations"; // Ключові дані
import ConfirmatorComments from "../../components/ConfirmatorComments/ConfirmatorComments";  // коментарі 
import ConfirmatorDatePicker from "../../components/ConfirmatorDatePicker/ConfirmatorDatePicker"; // дата пікер
import { getUserById } from "../../helpers/user/user";  // отримаємо менеджерів
import { getConfirmatorAppointments } from "../../redux/confirmator/confirmator-selectors"; // загальна проброска типів

const ConfirmedPage = () => {
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

      <BgWrapper top={-200} title="Confirmed" />
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

export default ConfirmedPage;
