import axios from "axios";

// const API_URL = 'http://34.56.231.181';

const API_URL = 'http://localhost:3600';

export const migrateAccessToPsql = async (data) => {
    return axios.post(`${API_URL}/api/migrate`, data,);
};