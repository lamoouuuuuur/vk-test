import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import styles from "./Datepicker.module.scss"
import ru from 'date-fns/locale/ru'


export default function Datepicker({ selectedDate, setSelectedDate }) {
    return(
        <div className={styles.datepicker}>
            <div className={styles.dateWrapper}>
                {selectedDate ? (
                    <div>Выбрана дата: {selectedDate.toLocaleString([], {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                    })}
                    </div>) : (<div>Выберите дату</div>)}

                <DatePicker
                    selected={selectedDate || new Date()}
                    onChange={date => setSelectedDate(date)}
                    locale={ru}
                    dateFormat="dd/MM/yyyy h:mm"
                    minDate={new Date()}
                    minTime={new Date().getTime()}
                    showTimeInput
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    inline
                />
            </div>
        </div>
    )
}