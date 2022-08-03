import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import styles from "./ManagerPage.module.scss";
import TableCheck from "../../components/TableCheck/TableCheck";
import {
  getDate,
  getTable,
  getTypeSelection,
  getWeekId,
} from "../../redux/manager/manager-selectors";
import {
  changeStatusSlot,
  setManagerError,
  setManagerLoading,
  getManagerCurrentWorkWeek,
} from "../../redux/manager/manager-operations";
import { updateSlot } from "../../helpers/api";
import Button from "../../components/Buttons/Buttons";
import StatusDefinition from "../../components/StatusDefinition/StatusDefinition";  
import DatePicker from "../../components/DatePicker/DatePicker";

const ConsultationPage = () => {
  const { managerId } = useParams();
  const dispatch = useDispatch();
  const tableDate = useSelector(getDate);
  // const table = useSelector(getTable);
  const typeSelection = useSelector(getTypeSelection);
  const weekId = useSelector(getWeekId);
  const arrayDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

<<<<<<< HEAD



const table = [
  [
      {
          "color": 0,
          "slot_id": 0,
          "time": 8
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 9
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 10
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 11
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 12
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 13
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 14
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 15
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 16
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 17
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 18
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 19
      },
      {
          "color": 1,
          "slot_id": 14,
          "time": 20
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 21
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 22
      }
  ],
  [
      {
          "color": 0,
          "slot_id": 0,
          "time": 8
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 9
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 10
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 11
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 12
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 13
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 14
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 15
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 16
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 17
      },
      {
          "color": 1,
          "slot_id": 24,
          "time": 18
      },
      {
          "color": 1,
          "slot_id": 15,
          "time": 19
      },
      {
          "color": 1,
          "slot_id": 8,
          "time": 20
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 21
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 22
      }
  ],
  [
      {
          "color": 2,
          "slot_id": 0,
          "time": 8
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 9
      },
      {
          "color": 2,
          "slot_id": 37,
          "time": 10
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 11
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 12
      },
      {
          "color": 2,
          "slot_id": 32,
          "time": 13
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 14
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 15
      },
      {
          "color": 1,
          "slot_id": 28,
          "time": 16
      },
      {
          "color": 1,
          "slot_id": 23,
          "time": 17
      },
      {
          "color": 1,
          "slot_id": 17,
          "time": 18
      },
      {
          "color": 1,
          "slot_id": 10,
          "time": 19
      },
      {
          "color": 1,
          "slot_id": 6,
          "time": 20
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 21
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 22
      }
  ],
  [
      {
          "color": 0,
          "slot_id": 0,
          "time": 8
      },
      {
          "color": 2,
          "slot_id": 38,
          "time": 9
      },
      {
          "color": 2,
          "slot_id": 39,
          "time": 10
      },
      {
          "color": 2,
          "slot_id": 35,
          "time": 11
      },
      {
          "color": 2,
          "slot_id": 33,
          "time": 12
      },
      {
          "color": 1,
          "slot_id": 31,
          "time": 13
      },
      {
          "color": 1,
          "slot_id": 30,
          "time": 14
      },
      {
          "color": 1,
          "slot_id": 29,
          "time": 15
      },
      {
          "color": 1,
          "slot_id": 27,
          "time": 16
      },
      {
          "color": 1,
          "slot_id": 22,
          "time": 17
      },
      {
          "color": 1,
          "slot_id": 18,
          "time": 18
      },
      {
          "color": 1,
          "slot_id": 11,
          "time": 19
      },
      {
          "color": 1,
          "slot_id": 9,
          "time": 20
      },
      {
          "color": 2,
          "slot_id": 4,
          "time": 21
      },
      {
          "color": 2,
          "slot_id": 3,
          "time": 22
      }
  ],
  [
      {
          "color": 0,
          "slot_id": 0,
          "time": 8
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 9
      },
      {
          "color": 2,
          "slot_id": 36,
          "time": 10
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 11
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 12
      },
      {
          "color": 2,
          "slot_id": 34,
          "time": 13
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 14
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 15
      },
      {
          "color": 1,
          "slot_id": 26,
          "time": 16
      },
      {
          "color": 1,
          "slot_id": 21,
          "time": 17
      },
      {
          "color": 1,
          "slot_id": 19,
          "time": 18
      },
      {
          "color": 1,
          "slot_id": 12,
          "time": 19
      },
      {
          "color": 1,
          "slot_id": 5,
          "time": 20
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 21
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 22
      }
  ],
  [
      {
          "color": 0,
          "slot_id": 0,
          "time": 8
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 9
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 10
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 11
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 12
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 13
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 14
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 15
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 16
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 17
      },
      {
          "color": 1,
          "slot_id": 20,
          "time": 18
      },
      {
          "color": 1,
          "slot_id": 16,
          "time": 19
      },
      {
          "color": 1,
          "slot_id": 7,
          "time": 20
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 21
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 22
      }
  ],
  [
      {
          "color": 0,
          "slot_id": 0,
          "time": 8
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 9
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 10
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 11
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 12
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 13
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 14
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 15
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 16
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 17
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 18
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 19
      },
      {
          "color": 1,
          "slot_id": 13,
          "time": 20
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 21
      },
      {
          "color": 0,
          "slot_id": 0,
          "time": 22
      }
  ]
]






=======
  console.log(table);
>>>>>>> 62f0eff0c8d98c849f645b3b98cee3e7e11af6ed
  const onClickSlot = (dayIndex, hourIndex) => {
    switch (typeSelection) {  
      case "Consultations":
        dispatch(setManagerLoading(true));
        return updateSlot(managerId, weekId, dayIndex, table[dayIndex][hourIndex].time, 1)
          .then((data) => {
            dispatch(
              changeStatusSlot({
                dayIndex,
                hourIndex,
                colorId: 1,
              })
            );
          })
          .catch((error) => dispatch(setManagerError(error)))
          .finally(() => dispatch(setManagerLoading(false)));
      case "Working time":
        dispatch(setManagerLoading(true));
        return updateSlot(managerId, weekId, dayIndex, table[dayIndex][hourIndex].time, 2)
          .then((data) => {
            dispatch(
              changeStatusSlot({
                dayIndex,
                hourIndex,
                colorId: 2,
              })
            );
          })
          .catch((error) => dispatch(setManagerError(error)))
          .finally(() => dispatch(setManagerLoading(false)));
      case "Free":
        dispatch(setManagerLoading(true));
        return updateSlot(managerId, weekId, dayIndex, table[dayIndex][hourIndex].time, 0)
          .then((data) => {
            dispatch(
              changeStatusSlot({
                dayIndex,
                hourIndex,
                colorId: 0,
              })
            );
          })
          .catch((error) => dispatch(setManagerError(error)))
          .finally(() => dispatch(setManagerLoading(false)));
      default:
        break;
    }
  };
  
  useEffect(() => {
    dispatch(getManagerCurrentWorkWeek(1));
  }, []);

  return (
    <section className={styles.tableSection}>
      <StatusDefinition />
      <DatePicker tableDate={tableDate} />
      <div className={styles.wrapperDays}>
        {arrayDays.map((item, index) => {
          return (
            <div key={index} className={styles.day}>
              <h3 className={styles.dayTitle}>{item}</h3>
            </div>
          );
        })}
      </div>
      {console.log(table)}
      <TableCheck table={table} onClickSlotFn={onClickSlot} />
    
    </section>
  );
};

export default ConsultationPage;
