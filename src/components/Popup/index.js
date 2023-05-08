import React from 'react';
import styles from "./Popup.module.scss"

export default function Popup({isOpen, setIsOpen, title}) {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <p>{title}</p>
                <button className={styles.closeBtn} onClick={setIsOpen}>Закрыть</button>
            </div>
        </div>
    )
}