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
    let iconWidth, iconHeight = '50px'
    return(
        <footer className='Footer'>
            <div className='Footer--icon-row'>
                <Link
                    linkDescription='Sneakerbox on Twitter'
                    url='#'
                    newWindow={false}
                >
                    <TwitterIcon fillTogglable={true} height={iconHeight} initialFill='#fff9d4' newFill='#fd3a0f' width={iconWidth}/>
                </Link>
                <Link
                    linkDescription='Sneakerbox on Facebook'
                    url='#'
                    newWindow={false}
                >
                    <FacebookIcon fillTogglable={true} height={iconHeight} initialFill='#fff9d4' newFill='#fd3a0f' width={iconWidth}/>
                </Link>
                <Link
                    linkDescription='Sneakerbox on Snapchat'
                    url='#'
                    newWindow={false}
                >
                    <SnapchatIcon fillTogglable={true} height={iconHeight} initialFill='#fff9d4' newFill='#fd3a0f' width={iconWidth}/>
                </Link>
                <Link
                    linkDescription='Sneakerbox on Pinterest'
                    url='#'
                    newWindow={false}
                >
                    <PinterestIcon fillTogglable={true} height={iconHeight} initialFill='#fff9d4' newFill='#fd3a0f' width={iconWidth}/>
                </Link>
            </div>
            
            <Copyright/>
        </footer>
    )
}

export default Footer;