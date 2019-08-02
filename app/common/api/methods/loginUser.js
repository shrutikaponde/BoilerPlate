import Api from 'app/common/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
    console.log(username, password)
    return Api(
        ApiConstants.LOGIN + '?username=' + username + '&password=' + password,
        null,
        'post',
        null
    );
}
