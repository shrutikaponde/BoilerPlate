import {Dimensions, Platform, StatusBar} from 'react-native';
import {moderateScale} from "../utils/scaling";

const BASELINE=moderateScale(16);

const statusBarHeight = StatusBar.currentHeight;
const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('screen').height;
const screen_width = Dimensions.get('screen').width;
const height = Platform.OS == 'ios' ? screen_height : window_height - statusBarHeight;
const width = Platform.OS == 'ios' ? screen_width : window_width;
const primaryFontStyle = Platform.OS == 'ios' ? {fontFamily:'JosefinSans',fontWeight:'bold',fontSize:BASELINE+1} : {fontFamily:'JosefinSans-Bold',fontSize:BASELINE+1};
const secondaryFontStyle = Platform.OS == 'ios' ? {fontFamily:'JosefinSans',fontWeight:'normal'} : {fontFamily:'JosefinSans',fontWeight:'normal'};
const headerTitleStyle = Platform.OS == 'ios' ?  {fontFamily:'JosefinSans', fontWeight:'bold', alignSelf: 'center'} : {fontFamily:'JosefinSans-Bold',fontWeight:'normal' ,alignSelf: 'center', marginLeft:-25};
const headerStyle =  Platform.OS == 'ios' ? {backgroundColor:'#EF4F2F', borderBottomColor: '#EF4F2F' } : { backgroundColor:'#EF4F2F', borderBottomColor: '#EF4F2F'};
const bodySecondaryBold = Platform.OS == 'ios' ? {fontFamily:'Lato',fontWeight:'bold'} : {fontFamily:'Lato-Bold'};
const bodySecondaryRegular = Platform.OS == 'ios' ? {fontFamily:'Lato',fontWeight:'normal',fontSize:BASELINE-1} : {fontFamily:'Lato',fontSize:BASELINE-1};
const containerStyle = Platform.OS == 'ios' ? {flex: 1} : {height: height*9/10 + 4};
const containerHeightWithTopAndBottomNav = Platform.OS == 'ios' ? (height - height/10 - height/10 - 20) : (height - height/10 - height/10 + 4); // height - statusBarHeight - topNavBarHeight - tabBarHeight - tabBarPadding

const STAGE_URL='https://5i816b28u4.execute-api.us-east-2.amazonaws.com/staging/';
const PROD_URL="https://paefsqq5bc.execute-api.us-east-2.amazonaws.com/prod/";
const DEV_URL="https://k1ps233ljg.execute-api.us-east-2.amazonaws.com/dev/"
const obj = {
    // BASE_URL:__DEV__ ? DEV_URL : STAGE_URL,
    BASE_URL : __DEV__ ? STAGE_URL : STAGE_URL,
    DEV_URL,
    BASELINE:BASELINE,
    SCREEN_HEIGHT:height,
    SCREEN_WIDTH:width,
    STATUS_BAR_HEIGHT: statusBarHeight,
    MARGIN_VALUE:width/6,
    SMALL_MARGIN:width/14,
    FORM_ITEM_HEIGHT:height*0.08,
    SUBCATEGORY_GRID:(height-height/10)/4,

    PRIMARY_FONT_STYLE : primaryFontStyle,
    SECONDARY_FONT_STYLE : secondaryFontStyle,
    HEADER_TITLE_STYLE : headerTitleStyle,
    HEADER_STYLE : headerStyle,
    BODY_BOLD_STYLE : bodySecondaryBold,
    BODY_REGULAR_STYLE : bodySecondaryRegular,

    JOSEFIN_BOLD:'JosefinSans-Bold',
    JOSEFIN:'JosefinSans',
    LATO:'Lato',
    LATO_BOLD:'Lato-Bold',
    
    APP_COLOR : '#EF4F2F',
    APP_COLOR_DARK: '#7C221E',
    APP_COLOR_GRAY : 'rgba(239, 79, 47, 0.15)',
    WHITE_COLOR:'#FFF',
    //APP_COLOR : 'rgba(239, 79, 47, 1)',
    //APP_COLOR_DARK: 'rgba(124, 34, 30, 1)',

    BORDER_WIDTH:2,
    LIST_SEPERATOR_WIDTH:1,
    LIST_SEPERATOR_WIDTH_THIN:0.5,

    FIRST_NAME_PLACEHOLDER : 'first name',
    LAST_NAME_PLACEHOLDER : 'last name',
    EMAIL_PLACEHOLDER : 'name@domain.com',
    MOBILE_PLACEHOLDER : '([999]) [999] [9999]',
    VERIFICATION_NUMBER_PLACEHOLDER : '0',
    CONTACT_US_PLACEHOLDER : 'message',
    PASSWORD_PLACEHOLDER : 'password',
    COMMUNITY_NAME_PLACEHOLDER : 'community name',
    COMMUNITY_ZIP_PLACEHOLDER : 'community zipcode',
    MORE_SCREEN_ICON_SIZE : 25,
    STAR_PLACEHOLDER:'* * * * * * * * * * * *',
    STD_PASS:'Pingpong9!',
    
    
    TOP_MARGIN : height/10,
    
    LIST_ITEM_MY_INFORMATION : 'update profile',
    LIST_ITEM_MY_COMMUNITY : 'change community',
    LIST_ITEM_FAQ : 'frequently asked questions',
    LIST_ITEM_CONTACT_US : 'contact us',
    LIST_ITEM_SIGN_OUT : 'sign out',
    LIST_ITEM_TERMS_OF_USE : 'terms of use',
    LIST_ITEM_PRIVACY_POLICY : 'privacy policy',

    TYPE_PERSIST :"persist/REHYDRATE",

    BARTER_PLACEHOLDER_ITEM_DESC : 'what you have',
    BARTER_PLACEHOLDER_BARTER_ITEM : 'for what you need',
    GRID_HEIGHT: containerHeightWithTopAndBottomNav/5,
    GRID_WIDTH: width/3,
    SUBGRID_WIDTH: width/2,

    GRID_CODE_MESSAGE: 7002,
    GRID_CODE_SELL: 4100,
    GRID_CODE_CALL: 5500,
    GRID_CODE_WEBSITE: 5300,
    GRID_CODE_EMAIL: 5700,
    GRID_CODE_MESSAGE: 5600 ,
    GRID_CODE_MENU: 5200 ,
    GRID_CODE_DIRECTIONS: 5400 ,

    LOOKUP_TEXT_30004: 30004,
    LOOKUP_TEXT_30005: 30005,
    LOOKUP_TEXT_30006: 30006,

    LOOKUP_TEXT_50002: 50002,
    LOOKUP_TEXT_50004: 50004,
    LOOKUP_TEXT_CONFIRMATION: 50005,
    LOOKUP_TEXT_CONFIRMATION_RECOMMEND_BUSINESS: 50006,
    LOOKUP_TEXT_50007: 50007,
    LOOKUP_TEXT_50009: 50009,
    LOOKUP_TEXT_50012: 50012,
    LOOKUP_TEXT_50013: 50013,
    LOOKUP_TEXT_30002: 30002,
    LOOKUP_TEXT_70001: 70001,
    LOOKUP_TEXT_CONTACT_CONFIRMATION: 70002,
    LOOKUP_TEXT_TRADE_CONFIRMATION: 70004,
    LOOKUP_TEXT_SIGNOUT_CONFIRMATION: 70005,
    LOOKUP_TEXT_ADMIN_CANT_CHANGE_COMMUNITY: 70006,
    LOOKUP_TEXT_CHANGE_COMMUNITY_COMFIRMATION: 70007,

    CONTAINER_STYLE: containerStyle,
    MERCHANT_GRID_ICON_SIZE: moderateScale(32),
    CONTAINER_HEIGHT_WITH_TOP_AND_BOTTOM_NAV: containerHeightWithTopAndBottomNav,

    MERCHANT_DETAILS_ERROR: 'merchant has not activated this feature',
    COMMUNITY_DETAILS_ERROR: 'community has not activated this feature',

}

if (!__DEV__) {
    // eslint-disable-line no-undef
    [
        'assert',
        'clear',
        'count',
        'debug',
        'dir',
        'dirxml',
        'error',
        'exception',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'profile',
        'profileEnd',
        'table',
        'time',
        'timeEnd',
        'timeStamp',
        'trace',
        'warn',
    ].forEach(methodName => {
        console[methodName] = () => {
            /* noop */
        };
    });
}
export default obj;
