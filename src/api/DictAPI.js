import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
const API_DICTIONARY_URL = REACT_APP_API_URL + '/dict';

const getTypesRequest = () => axios.get(API_DICTIONARY_URL);

export default { getTypesRequest };
