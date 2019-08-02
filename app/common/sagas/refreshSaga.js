
import { call, put } from 'redux-saga/effects';
import * as navigationActions from 'app/common/actions/navigationActions';
import persistInformationServices from 'app/common/services/persistInformationServices';
export default function* refreshAsync(accessToken) {
    console.log(accessToken)
    persistInformationServices.setAccessToken(accessToken);
    yield call(navigationActions.navigateToHome);    
}
