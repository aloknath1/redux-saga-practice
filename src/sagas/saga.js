import { put, takeLatest, call } from 'redux-saga/effects';
import { fetchData } from "../api";
import { loadPostData, loadPostSuccess, loadPostFailure } from "../store/actions";

export function* API_RESPONSE_ASYNC()
{
    try {
        const response = yield call(fetchData);
        yield put(loadPostSuccess(response));
    } catch (e) {
        yield put(loadPostFailure(e));
    }
}

export function* watchAPI() {
    yield takeLatest(loadPostData, API_RESPONSE_ASYNC);
}