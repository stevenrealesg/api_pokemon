import axios from "axios";

const getList = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    return data.results
}

const getInfo = async (id) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return data
}

export default { getList, getInfo }