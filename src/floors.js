const generateFloors = () => {
    const floors = [];
    for (let i=3; i <= 27; i++) {
        floors.push({
            id: i,
            name: i.toString()
        })
    }
    return floors;
}

const floors = generateFloors();

export default floors;