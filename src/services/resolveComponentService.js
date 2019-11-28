import React from 'react';
import {
    Home,
    MyAccount,
    Product,
    ThumbnailGroup,
} from '../components';

const resolveComponentName = (name, props)=>{
    const map = {
        Home: props ? <Home {...props}/> : <Home/>,
        MyAccount: props ? <MyAccount {...props}/> : <MyAccount/>,
        Product: props ? <Product {...props}/> : <Product/>,
        ThumbnailGroup: props ? <ThumbnailGroup {...props}/> : <ThumbnailGroup/>,
    };
    return map[name];
}

export {
    resolveComponentName
};