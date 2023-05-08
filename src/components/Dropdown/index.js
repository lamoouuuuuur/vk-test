import {BsChevronDown, BsChevronLeft} from "react-icons/bs";
import {RxCross1} from "react-icons/rx"
import styles from "./Dropdown.module.scss"
import React from 'react'

export default function Dropdown({items, title, name, height, onSelectItem, selectedItem, isOpen, onOpen}) {
    const [searchItem, setSearchItem] = React.useState("");
    const onInputItem = (event) => {
        setSearchItem(event.target.value);
    }
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdownBtn} onClick={onOpen}>
                <p>{selectedItem ? `Выбран(а): ${name} ${selectedItem} ` : title}</p>
                {isOpen ? <BsChevronDown /> : <BsChevronLeft />}
            </div>

            {isOpen && (
                <div className={styles.dropdownContent}>
                    <div className={styles.dropdownSearch}>
                        <input onChange={onInputItem} value={searchItem} placeholder="Поиск..."/>
                        {searchItem && (
                            <RxCross1 onClick={() => setSearchItem("")}/>
                        )}
                    </div>

                    <div style={{height: height}} className={styles.dropdownItems}>
                        {isOpen && items
                            .filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()))
                            .map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className={styles.dropdownItem}
                                        onClick={() => {
                                            onSelectItem(item.name);
                                            setSearchItem("");
                                            onOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </div>
                                )
                            })}
                    </div>
                </div>
            )}
        </div>
    )
}