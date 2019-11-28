import React from 'react';
import './Product.scss';
import {
    Image,
} from '../../components';

const Product = props=>{
/***SCHEMA***/
    // _id: ObjectId,
    // key: String, -->'PRODUCT'
    // slug: String,
    // sku: String,
    // modelName: String,
    // desc: String,
    // totalReviews: Number,
    // avgReview: Number,
    // pricing: Object,
    // priceHistory: Object,
    // primaryCategory: ObjectId,
    // categories:[ObjectId],
    // tags: [String],
    // details: Object,
    //imageFiles: [{String}],
    // sizes: [{Number}],

    const {
        slug,
        sku,
        modelName, 
        desc, 
        totalReviews,
        avgReview,
        pricing,
        tags,
        details, 
        onSale,
        sizes,
        imgUrl,
    } = props;

    
    const now = Date.now();
    //const saleEndDate = pricing.to
    const baseUrl = '../../../images/tn_images/';
    const imgSrc = props.imageFiles.thumbnail;
    return(
        <div className='Product'>
            <h5>{modelName}</h5>
            <Image
                alt={desc}
                baseUrl={baseUrl}
                imgSrc={imgSrc}
                title={modelName}
            />
        </div>
    )
}

export default Product;
