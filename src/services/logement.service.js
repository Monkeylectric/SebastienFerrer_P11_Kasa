import data from "../data/logements.json";

const getAllHousing = () => {
    return data;
}

const getOneHousing = (id) => {
    let houseTarget;

    data.forEach(house => {
        if (id === house.id) {
            houseTarget = house;
        }
    });

    return houseTarget;
}

const housingFunctions = {
    getAllHousing,
    getOneHousing
}

export default housingFunctions;