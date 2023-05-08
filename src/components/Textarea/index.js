import React from "react";
import styles from "./Textarea.module.scss"

export default function Textarea({text, setText}) {
    const textareaRef = React.useRef();
    return (
        <div className={styles.textareaWrapper}>
            <div className={styles.textareaContent}>
                <p className="title">Введите комментарий</p>
                <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={setText}
                    placeholder="Введите комментарий..."
                    style={{ resize: "none", overflow: "hidden" }}
                />
            </div>
        </div>
    );
}