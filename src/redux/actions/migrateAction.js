import { MIGRATE_ACCESS} from "./types";

export const migarteAccessAction = (data, onSuccess, onError) => {
    return {
        type: MIGRATE_ACCESS,
        data,
        onSuccess,
        onError,
    };
};
