import {useEffect, useState} from 'react';

export const useToggleFill = (newFill)=>{
    let [fill, setFill] = useState(initialFill);
    useEffect(()=>{
        //console.log(fill === initialFill);
        if(fill !== newFill){setFill(newFill)}
    },[]);

    return [fill];
}