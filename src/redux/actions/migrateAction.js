import { MIGRATE_ACCESS, STOP_SCHEDULER} from "./types";

export const migarteAccessAction = (data, onSuccess, onError) => {
    return {
        type: MIGRATE_ACCESS,
        data,
        onSuccess,
        onError,
    };
};

export const stopSchedulerAction = (data, onSuccess, onError) => {
    return {
        type: STOP_SCHEDULER,
        data,
        onSuccess,
        onError,
    };
};