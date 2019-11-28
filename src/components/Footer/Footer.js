import React from 'react';
import './Footer.scss';
import {
    Copyright,
    FacebookIcon,
    Link,
    PinterestIcon,
    SnapchatIcon,
    TwitterIcon,
} from '../index';

const Footer = ()=>{
    const iconFill = '#d9cab3';
    let iconWidth, iconHeight = '50px'
    return(
        <footer className='Footer'>
            <div className='Footer--icon-row'>
                <Link
                    linkDescription='Sneakerbox on Twitter'
                    url='#'
                    newWindow={false}
                >
                    <TwitterIcon fill={iconFill} height={iconHeight} width={iconWidth}/>
                </Link>
                <Link
                    linkDescription='Sneakerbox on Facebook'
                    url='#'
                    newWindow={false}
                >
                    <FacebookIcon fill={iconFill} height={iconHeight} width={iconWidth}/>
                </Link>
                <Link
                    linkDescription='Sneakerbox on Snapchat'
                    url='#'
                    newWindow={false}
                >
                    <SnapchatIcon fill={iconFill} height={iconHeight} width={iconWidth}/>
                </Link>
                <Link
                    linkDescription='Sneakerbox on Pinterest'
                    url='#'
                    newWindow={false}
                >
                    <PinterestIcon fill={iconFill} height={iconHeight} width={iconWidth}/>
                </Link>
            </div>
            
            <Copyright/>
        </footer>
    )
}

export default Footer;