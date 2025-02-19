import { all } from "redux-saga/effects";
import { migrateAccessWatcher } from "./migrateSaga";

export default function* rootSaga() {
        yield all([
                migrateAccessWatcher()
        ]);
}
