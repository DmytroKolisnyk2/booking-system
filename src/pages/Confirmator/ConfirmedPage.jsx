import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ConfirmatorPage.module.scss"; //Оформлення
import BgWrapper from "../../components/BgWrapper/BgWrapper"; //Елемент сторінки
import Confirmator from "../../components/Confirmation/Confirmed";  // структурвання виводу
import ConfirmationButtons from "../../components/ConfirmationButtons/ConfirmedButtons"; //вантажимо кнопочки
import Header from "../../components/Header/Header";  // підключаємо шапку
import { useParams } from "react-router-dom";
import { getCurrentConfirmed } from "../../redux/confirmator/confirmed-operations"; // Ключові дані
import ConfirmatorComments from "../../components/ConfirmatorComments/ConfirmatorComments";  // коментарі 
import ConfirmedDatePicker from "../../components/ConfirmatorDatePicker/ConfirmedDatePicker"; // дата пікер
import { getUserById } from "../../helpers/user/user";  // отримаємо менеджерів
import { getConfirmedAppointments } from "../../redux/confirmator/confirmed-selectors"; // загальна проброска типів

const ConfirmedPage = () => {
  const [value, setValue] = useState("");
  const { confirmatorId } = useParams();
  const [confirmatorName, setConfirmatorName] = useState("");
  const appointments = useSelector(getConfirmedAppointments);
  console.log(appointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentConfirmed());
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
      <Header 
      endpoints={[
        { text: "Confirmator", path: '../confirmator/'+confirmatorId },
        { text: "Confirmed", path: '../confirmed/'+confirmatorId },
       
      ]}
      user={{ name: confirmatorName, role: "Confirmator" }} />

      <BgWrapper top={-200} title="Confirmed" />
      <ConfirmedDatePicker />
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
