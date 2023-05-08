const generateConfRoom = () => {
    const confRoom = [];
    for (let i=1; i <= 10; i++) {
        confRoom.push({
            id: i,
            name: i.toString()
        })
    }
    return confRoom;
}

const confRoom = generateConfRoom();

export default confRoom;