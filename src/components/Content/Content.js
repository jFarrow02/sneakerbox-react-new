import React from 'react';
import './Content.scss';
import {
    Home,
    MyAccount,
    ProductThumbnails,
} from '../index';
import {Route} from 'react-router-dom';
import {navConfig} from '../../data/config';

const resolveComponentName = (name, props)=>{
    const map = {
        ProductThumbnails: props ? <ProductThumbnails {...props}/> : <ProductThumbnails/>,
        Home: props ? <Home {...props}/> : <Home/>,
        MyAccount: props ? <MyAccount {...props}/> : <MyAccount/>,
    };
    return map[name];
}

const Content = ()=>{

    return(   
        <main className='Content'>
            Content goes here
            {
                navConfig.map((conf, idx)=>{
                    const productsTest = /\/products\//;
                    if(productsTest.test(conf.url)){
                        return(
                            <Route
                                key={`route-${idx}`}
                                path={conf.url}
                            >
                                {resolveComponentName(conf.component, {category: conf.url.split('/products/')[1]})}
                            </Route>
                        )
                    }
                    else{
                        return <Route key={`route-${idx}`} path={conf.url}>{resolveComponentName(conf.url)}</Route>
                    }
                })
            }
            
        </main>
    );
}

export default Content;