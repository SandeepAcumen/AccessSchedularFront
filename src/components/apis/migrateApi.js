import axios from "axios";

const API_URL = 'http://34.56.231.181';

export const migrateAccessToPsql = async (data) => {
    return axios.post(`${API_URL}/api/migrate`, data,);
};