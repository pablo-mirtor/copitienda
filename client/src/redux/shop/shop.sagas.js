import {takeEvery, call, put, all} from 'redux-saga/effects';
import {firestore, convertCollectionsSnapshopToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    
    try{
        const collectionRef= firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshopToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        );
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}