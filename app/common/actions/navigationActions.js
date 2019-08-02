/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/common/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToRegisterNow(params) {
    NavigationService.navigate('Register', params);
}

export function navigationReset() {
    NavigationService.reset();
}