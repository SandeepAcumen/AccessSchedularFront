import { api } from "./api";

export const migarteAccessApi = (params) => {
    return api.post(`/migrate`, JSON.stringify(params));
};

export const stopSchedulerApi = (params) => {
    return api.post(`/stop-scheduler`, JSON.stringify(params));
};
