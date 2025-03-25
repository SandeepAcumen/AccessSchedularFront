import { all } from "redux-saga/effects";
import { migrateAccessWatcher, stopSchedulerWatcher } from "./migrateSaga";

export default function* rootSaga() {
        yield all([
                migrateAccessWatcher(),
                stopSchedulerWatcher()
        ]);
}
