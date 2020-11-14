import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
const API_STUDENT_URL = REACT_APP_API_URL + '/student';

const getStudentsRequest = () => axios.get(API_STUDENT_URL);

const addStudentRequest = (student) => axios.post(API_STUDENT_URL, student);

const deleteStudentRequest = (id) => axios.delete(`${API_STUDENT_URL}/${id}`);

export default { getStudentsRequest, addStudentRequest, deleteStudentRequest };
