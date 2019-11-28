import React from 'react';
import {
    ThumbnailGroup,
    Home,
    MyAccount,
} from '../components';

const resolveComponentName = (name, props)=>{
    const map = {
        ProductThumbnails: props ? <ThumbnailGroup {...props}/> : <ThumbnailGroup/>,
        Home: props ? <Home {...props}/> : <Home/>,
        MyAccount: props ? <MyAccount {...props}/> : <MyAccount/>,
    };
    return map[name];
}

export {
    resolveComponentName
};