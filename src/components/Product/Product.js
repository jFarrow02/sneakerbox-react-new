import React from 'react';
import './Product.scss';
import {
    Heading,
    Image,
} from '../../components';
import propTypes from 'prop-types';

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
    const imgSrc = props.imageFiles.thumbnail;
    return(
        <div className='Product'>
            <Heading headingLevel='4' text={modelName}/>
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

Product.propTypes = {
    desc: propTypes.string,
    imageFiles: propTypes.object,
    isThumbnail: propTypes.bool,
    modelName: propTypes.string,

};

Product.defaultProps = {
    desc: '',
    imageFiles: {
        thumbnail: '',
    },
    isThumbnail: false,
    modelName: '',
}

/***SCHEMA***/
/**
 "slug": "test-womens-01",
            "sku": "PROD0000-0002",
            "modelName": "Test Womens 01",
            "desc": "A test sneaker for women",
            "totalReviews": 0,
            "avgReview": null,
            "pricing": {
                "reg": 99.99,
                "sale": 79.99,
                "from": "2019-10-02T04:00:00.000Z",
                "to": "2019-11-28T19:42:07.817Z"
            },
            "primaryCategory": "5db4915a5e000802f16e1920",
            "categories": [
                "5db4915a5e000802f16e191c"
            ],
            "details": {
                "sole": "Synthetic rubber",
                "upper": "Leather",
                "colors": [
                    "black/red",
                    "red/white",
                    "white/white"
                ]
            },
            "imageFiles": {
                "tiny": "sneakers-005-tn.png",
                "thumbnail": "sneakers-005-tn.png",
                "large": "sneakers-005.png"
            },
            "sizes": [
                8,
                8.5,
                9,
                9.5,
                10,
                10.5,
                11,
                11.5,
                12,
                13
            ],
            "key": "Product"
        }
 */