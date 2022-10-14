import React from "react";
import styles from "../SuperAdmin/SuperAdminPage.module.scss";
import CrmLinks from "../../components/CrmLinks/CrmLinks";

const CrmPage = () => {
  return (
    <div className={styles.main_wrapper}>
      <h3 className={styles.main_title}>Search by CRM link</h3>
      <div className={styles.main_wrapper2}>
        <CrmLinks />
      </div>
    </div>
  );
};

export default CrmPage;
