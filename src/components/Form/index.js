import React from 'react'
import styles from "./Form.module.scss"
import Dropdown from "../Dropdown";
import Textarea from "../Textarea";
import Datepicker from "../Datepicker";
import Popup from "../Popup";

export default function Form({towers, floors, confRooms}) {
    const [openPopup, setOpenPopup] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentDropDown, setCurrentDropDown] = React.useState(null);
    const [isFormSubmitted, setFormSubmitted] = React.useState(false);
    const [selectedTower, setSelectedTower] = React.useState("");
    const [selectedFloor, setSelectedFloor] = React.useState("");
    const [selectedConfRoom, setSelectedConfRoom] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [selectedTime, setSelectedTime] = React.useState("");
    const fieldsForm = !selectedTower || !selectedFloor || !selectedConfRoom || !selectedTime || !comment;

    const onOpen = (name) => {
        if (currentDropDown === name) {
            setIsOpen(false);
            setCurrentDropDown(null);
        } else {
            setIsOpen(true);
            setCurrentDropDown(name);
        }
    }

    const closePopup = () => {
        setOpenPopup(false);
    }

    const onReloadForm = () => {
        window.location.reload();
    }

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    React.useEffect(() => {
        if (isFormSubmitted) {
            const result = JSON.stringify({
                tower: selectedTower,
                stair: parseInt(selectedFloor),
                conferenceRoom: parseInt(selectedConfRoom),
                time: selectedTime.toLocaleString('ru-RU', options),
                comment: comment
            }, null, 2);
            console.log(result);
        }
    }, [isFormSubmitted])
    // Towers
    const onSelectTower = (tower) => {
        setSelectedTower(tower)
    }
    // Stairs
    const onSelectFloor = (floor) => {
        setSelectedFloor(floor)
    }
    //Conference room
    const onSelectConfRoom = (confRoom) => {
        setSelectedConfRoom(confRoom)
    }
    //Comment
    const adjustTextAreaHeight = (element) => {
        element.style.height = "auto";
        element.style.height = element.scrollHeight + "px";
    };
    const handleChange = (event) => {
        setComment(event.target.value);
        adjustTextAreaHeight(event.target);
    };

    // Submit Form
    const onSubmitForm = (event) => {
        event.preventDefault();
        if (fieldsForm) {
            setOpenPopup(true);
        } else {
            setFormSubmitted(true);
        }
    }

    //Clear Form
    const onClearForm = (event) => {
        event.preventDefault();
        setSelectedTower("");
        setSelectedFloor("");
        setSelectedConfRoom("");
        setSelectedTime("");
        setComment("");
        setFormSubmitted(false);
    }


    return (
        <div className="form">
            <form onSubmit={onSubmitForm}>
                {openPopup && (
                    <Popup
                        title="Пожалуйста, заполните все поля!"
                        isOpen={openPopup}
                        setIsOpen={closePopup}
                    />)}

                {isFormSubmitted && (
                    <Popup
                        title="Форма успешно отправлена"
                        isOpen={openPopup}
                        setIsOpen={onReloadForm}
                    />
                )}
                <Dropdown
                    height="90px"
                    title="Выберите башню"
                    items={towers}
                    name="башня"
                    selectedItem={selectedTower}
                    onSelectItem={onSelectTower}
                    isOpen={isOpen && currentDropDown === 'drop1'}
                    onOpen={() => onOpen('drop1')}
                />

                <Dropdown
                    height="200px"
                    title="Выберите этаж"
                    items={floors}
                    name="этаж"
                    selectedItem={selectedFloor}
                    onSelectItem={onSelectFloor}
                    isOpen={isOpen && currentDropDown === 'drop2'}
                    onOpen={() => onOpen('drop2')}
                />

                <Dropdown
                    height="200px"
                    title="Выберите переговорку"
                    items={confRooms}
                    name="переговорка"
                    selectedItem={selectedConfRoom}
                    onSelectItem={onSelectConfRoom}
                    isOpen={isOpen && currentDropDown === 'drop3'}
                    onOpen={() => onOpen('drop3')}
                />

                <Datepicker
                    selectedDate={selectedTime}
                    setSelectedDate={setSelectedTime}
                />

                <Textarea
                    text={comment}
                    setText={handleChange}
                />
                <div className={styles.btns}>
                    <button className={styles.submitBtn} type="submit">Отправить</button>
                    <button className={styles.clearBtn} onClick={onClearForm}>Очистить</button>
                </div>
            </form>
        </div>
    )
}