import React from 'react';
import {ScrollView as Scroll} from 'react-native';

const ScrollView = (props)=>{
    return(
        <Scroll {...props}>
            {props.children}
        </Scroll>
    )
}

export default ScrollView;