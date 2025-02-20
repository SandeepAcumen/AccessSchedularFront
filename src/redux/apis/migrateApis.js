import { api } from "./api";

export const migarteAccessApi = (params) => {
    return api.post(`/migrate`, JSON.stringify(params));
};
