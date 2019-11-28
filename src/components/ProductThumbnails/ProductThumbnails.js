import React from 'react';
import './ProductThumbnails.scss';
import {
    LoadingSpinner,
} from '../index';
import propTypes from 'prop-types';
import {productRoutes} from '../../data/config';
import {useFetchedData} from '../../hooks/routeHooks';
import {SERVER_URLS} from '../../services/httpService';

const ProductThumbnails = (props)=>{
    const categoryParam = props.category !== 'sale' ? `/category-${props.category}` : '';
    let {byCategory} = productRoutes,
        url = `${SERVER_URLS.api}${byCategory}${categoryParam}`;
    const conf = {method: 'GET', url: url,};
    const [loading, data] = useFetchedData(conf);
    const {data: products} = data;
    
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
        if(products.length < 1){
            content = <div>No results found.</div>
        }
        else{
            content = (
                <ul>
                    {
                        products.map((product, idx)=>{
                            return <li key={`item-${idx}`}>{product.modelName}</li>
                        })
                    }
                </ul>
            )
        }
    }
    
    return(
        <section className='ProductThumbnails'>
            <h2>{props.category}</h2>
            {content}
        </section>
    )
};

export default ProductThumbnails;

ProductThumbnails.propTypes = {
    category: propTypes.string,
};

ProductThumbnails.defaultProps = {
    category: '',
}