/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/common/navigation/NavigationService';

export function navigateToHome(params) {
    NavigationService.navigate('Home', params);
}

export function navigateToRegister(params) {
    NavigationService.navigate('Register', params);
}

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigationReset() {
    NavigationService.reset();
}