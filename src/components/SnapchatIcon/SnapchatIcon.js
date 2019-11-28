import React from 'react';
import {useFill} from '../../hooks/uiHooks';

const SnapchatIcon = props=>{
    const [fill, setFill] = useFill('#fff9d4');
    const toggleFill = (newFill)=>{
        if(!props.fillTogglable){return}
        setFill(newFill);
    }
    return(
        <svg 
            alt='snapchat'
            className='snapchat-icon'
            focusable='false'
            height={props.height}
            onMouseEnter={()=>{toggleFill(props.newFill)}}
            onMouseLeave={()=>{toggleFill(props.initialFill)}}
            // viewBox="-62 0 512 512" 
            viewBox="0 -16 511.99949 511"
            width={props.width}
            xmlns="http://www.w3.org/2000/svg">
            <path 
                d="m489.4375 332.257812-22.179688-8.597656c-34.984374-13.554687-56.421874-46.179687-59.726562-83.160156h44.46875c16.570312 0 30-13.433594 30-30 0-16.570312-13.429688-30-30-30h-44.9375l1.300781-14.253906c8.0625-88.8125-62.910156-165.746094-152.363281-165.746094-88.996094 0-160.46875 76.476562-152.363281 165.746094l1.300781 14.253906h-44.9375c-16.570312 0-30 13.429688-30 30 0 16.566406 13.429688 30 30 30h45.839844l-2.6875 12.449219c-6.957032 32.257812-27.613282 58.683593-58.359375 70.679687l-20.523438 8.027344c-9.785156 2.199219-17.84375 8.671875-21.738281 17.609375-4.246094 9.753906-3.105469 21.222656 3.089844 30.671875 12.117187 18.53125 39.304687 25.328125 61.949218 29.722656 5.726563 24.988282 18.96875 36.050782 39.375 32.929688 44.707032-6.871094 47.710938-3.367188 63.828126 8.230468 7.207031 5.1875 17.183593 11.648438 32.273437 19.628907 16.007813 6.59375 34.128906 9.917969 52.425781 9.917969 20.054688 0 41.296875-3.984376 59.140625-12.027344 3.558594-2.050782 7.542969-4.730469 11.9375-7.730469 18.515625-12.601563 39.210938-28.316406 71.933594-19.734375 11.9375 3.105469 22.019531 2.109375 29.972656-2.972656 11.453125-7.292969 14.238281-20.097656 15.777344-28.34375 23.726563-4.746094 55.253906-11.527344 65.214844-35.464844 3.675781-8.863281 3.367187-18.574219-.851563-26.632812-4.234375-8.070313-12.042968-13.855469-19.160156-15.203126zm0 0"
                fill={fill}
            />
        </svg>
    )
}

export default SnapchatIcon;