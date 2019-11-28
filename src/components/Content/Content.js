import React from 'react';
import './Content.scss';
import {resolveComponentName} from '../../services/resolveComponentService';
import {Redirect, Route} from 'react-router-dom';
import {navConfig} from '../../data/config';

const Content = ()=>{

    return(   
        <main className='Content'>
           
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
                        return <Route key={`route-${idx}`} path={conf.url}>{resolveComponentName(conf.component)}</Route>
                    }
                })
            }
            <Route path='/'><Redirect to='/home'></Redirect></Route>
        </main>
    );
}

export default Content;