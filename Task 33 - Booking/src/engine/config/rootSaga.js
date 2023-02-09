// Core
import {all, call} from 'redux-saga/effects';
// Watchers
import {destinationsWatcher} from '../core/destination/saga/watchers';
import {hotelsWatcher} from '../core/hotels/saga/watchers';

export function* rootSaga() {
    yield all([
        call(destinationsWatcher),
        call(hotelsWatcher),
    ])
}