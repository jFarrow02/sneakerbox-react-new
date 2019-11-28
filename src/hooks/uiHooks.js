import {useEffect, useState} from 'react';

export const useFill = (newFill)=>{
    let [fill, setFill] = useState(newFill);
    useEffect(()=>{
        if(fill !== newFill){setFill(newFill)}
    },[]);

    return [fill, setFill];
}