import {
    API_URL
} from "../config";

const getResource = async (params) =>{
    const url = `${API_URL}${params}`
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();

}

const getAllCharacters = async (page=1, limit=10) => {
    const res = await getResource(`characters?page=${page}&pageSize=${limit}`);    
    return res.map(_transformCharacter);
};

const getCharacterById = async (id=1) => {
    const res = await getResource(`characters/${id}`);
    return _transformCharacter(res);
};

const getAllBooks = async (page=1, limit=10) => {
    const res = await getResource(`books?page=${page}&pageSize=${limit}`);
    return _transformBook(res);
};

const getBookById = async (id) => {
    const res = await getResource(`books/${id}`);
    return _transformBook(res);

};

const getAllHouses = async (page=1, limit=10) => {
    const res = await getResource(`houses?page=${page}&pageSize=${limit}`);
    return res.map(_transformHouse);
};

const getHouseById = async (id) => {
    const res = await getResource(`houses/${id}`);
    return _transformHouse(res);
};


const _transformCharacter=(data)=>{
    return {
        name:data.name,
        gender: data.gender,
        born: data.born,
        died: data.died,
        culture: data.culture
    }

}

const _transformHouse=(data)=>{
    return {
        name:data.name,
        region: data.region,
        words: data.words,
        titles: data.titles,
        pverlord: data.pverlord,
        ancestralWeapons: data.ancestralWeapons
    }

}

const _transformBook=(data)=>{
    return {
        name:data.name,
        numberOfPages: data.numberOfPages,
        publiser: data.publiser,
        released: data.released
    }

}


export {
    getAllCharacters,
    getCharacterById,
    getAllBooks,
    getBookById,
    getAllHouses,
    getHouseById
};