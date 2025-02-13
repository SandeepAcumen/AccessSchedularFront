import axios from "axios";

const API_URL = 'http://192.168.29.91:3600';

export const migrateAccessToPsql = async (data) => {
    return axios.post(`${API_URL}/api/migrate`, data,);
};