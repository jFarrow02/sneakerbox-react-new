import React from 'react';
import './ThumbnailGroup.scss';
import {
    Heading,
    LoadingSpinner,
    Thumbnail,
} from '../index';
import propTypes from 'prop-types';
import {productRoutes} from '../../data/config';
import {useFetchedData} from '../../hooks/routeHooks';
import {SERVER_URLS} from '../../services/httpService';

const ThumbnailGroup = (props)=>{
    const categoryParam = props.category !== 'sale' ? `/category-${props.category}` : '';
    let {byCategory} = productRoutes,
        url = `${SERVER_URLS.api}${byCategory}${categoryParam}`;
    const conf = {method: 'GET', url: url,};
    const [loading, data] = useFetchedData(conf);
    const {data: items} = data;
    
    //Build page content
    let content;
    if(loading){
        content = <div className='loading'>
            <h3><em>Loading...</em></h3>
            <div>
                <LoadingSpinner fill='#90323d'/>
            </div>
        </div>;
    }
    else{
        if(items.length < 1){
            content = <div>No results found.</div>
        }
        else{
            content = items.map((item, idx)=>{
                return(
                    <Thumbnail key={idx} model={item}/>
                )
            })
        }
    }
    
    const initial = props.category.substring(0, 1);
    const categoryName = props.category.replace(initial, initial.toUpperCase())
    return(
        <section className='ThumbnailGroup'>
            <Heading headingLevel='2' text={categoryName}/>
            <div className='ThumbnailGroup--content'>
                {content}
            </div>
        </section>
    )
};

export default ThumbnailGroup;

ThumbnailGroup.propTypes = {
    category: propTypes.string,
};

ThumbnailGroup.defaultProps = {
    category: '',
}