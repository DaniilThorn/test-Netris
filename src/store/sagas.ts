import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_EVENTS, setEvents, setEventsError } from './actions'
import { Event } from '../types'

const API_URL = 'https://5025y.wiremockapi.cloud/json/1';

function* fetchEventsSaga() {
	try {
		const response: Response = yield call(fetch, API_URL);
		if (!response.ok) throw new Error(`OOOooppppsss somthing happen: ${response.status}`);
		const data: Event[] = yield response.json();
		yield put(setEvents(data));
	} catch (error) {
		if (error instanceof Error) {
			yield put(setEventsError(error.message));
		} else {
			yield put(setEventsError('An unknown error occurred.'));
		}
	}
}

export function* rootSaga() {
	yield takeEvery(FETCH_EVENTS, fetchEventsSaga);
}
