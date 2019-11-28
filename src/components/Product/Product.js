import React from 'react';
import './Product.scss';
import {
    Image,
} from '../../components';

const Product = props=>{
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
        isThumbnail,
    } = props;

    
    const now = Date.now();
    //const saleEndDate = pricing.to
    const baseUrl = '../../images/tn_images';
    const imgSrc = props.imageFiles.thumbnail;
    return(
        <div className='Product'>
            <h5>{modelName}</h5>
            <Image
                alt={desc}
                isThumbnail={isThumbnail}
                dynamicImgSrc={imgSrc}
                title={modelName}
            />
        </div>
    )
}

export default Product;

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