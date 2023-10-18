import { delay, put, takeLatest, } from "redux-saga/effects";
import { DOWN, LEFT, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP, RESET, RIGHT, setDisDirection, STOP_GAME, UP, } from "./actions";

export function* moveSaga(params) {
    while (params.type !== RESET && params.type !== STOP_GAME) {
        yield put({
            type: params.type.split("_")[1],
            payload: params.payload,
        });
        switch (params.type.split("_")[1]) {
            case RIGHT:
                yield put(setDisDirection(LEFT));
                break;

            case LEFT:
                yield put(setDisDirection(RIGHT));
                break;

            case UP:
                yield put(setDisDirection(DOWN));
                break;

            case DOWN:
                yield put(setDisDirection(UP));
                break;
        }
        yield delay(100);
    }
}

function* watcherSagas() {
    yield takeLatest(
        [MOVE_RIGHT, MOVE_LEFT, MOVE_UP, MOVE_DOWN, RESET, STOP_GAME],
        moveSaga
    );
}

export default watcherSagas;