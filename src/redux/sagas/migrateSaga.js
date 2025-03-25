import { call, takeLatest } from "redux-saga/effects";
import * as migarteApi from "../apis/migrateApis";
import { MIGRATE_ACCESS, STOP_SCHEDULER } from "../actions/types";


export function* migrateAccessWorker(action) {
    try {
        const res = yield call(migarteApi.migarteAccessApi, action.data);
        if (res.status === 200) {
            yield action.onSuccess(res);
        } else {
            yield action.onError(res);
        }
    } catch (error) {
        yield action.onError({
            data: {
                message: error,
            },
        });
    }
}

export function* stopSchedulerWorker(action) {
    try {
        const res = yield call(migarteApi.stopSchedulerApi, action.data);
        if (res.status === 200) {
            yield action.onSuccess(res);
        } else {
            yield action.onError(res);
        }
    } catch (error) {
        yield action.onError({
            data: {
                message: error,
            },
        });
    }
}

/**Watcher functions */
export function* migrateAccessWatcher() {
    yield takeLatest(MIGRATE_ACCESS, migrateAccessWorker);
}

export function* stopSchedulerWatcher() {
    yield takeLatest(STOP_SCHEDULER, stopSchedulerWorker);
}
