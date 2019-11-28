import React, {useState} from 'react';
import './FacebookIcon.scss';
//import {useToggleFill} from '../../hooks/uiHooks';

const FacebookIcon = props=>{
    //const [fill, setFill] = useToggleFill('#fff9d4', '#a72002');
    const [fill, setFill] = useState('#fff9d4');
    const toggleFill = (newFill)=>{
        return fill !== newFill ? setFill(newFill) : setFill('#fff9d4');
    }
    return(
        <svg
            alt="facebook"
            className='facebook-logo'
            focusable='false'
            height={props.height}
            onMouseEnter={()=>{toggleFill('#a72002')}}
            onMouseLeave={()=>{toggleFill('#fff9d4')}}
            viewBox="0 0 512 512" 
            width={props.width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0"
                fill={fill}
            />
        </svg>
    )
}

export default FacebookIcon;