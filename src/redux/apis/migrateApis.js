import { api } from "./api";

export const migarteAccessApi = (params) => {
    return api.get(`/migrate`, { params });
};
