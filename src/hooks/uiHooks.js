import {useState} from 'react';

export const useFill = (initialFill) =>{
    const [fill, setFill] = useState(initialFill);
    return [fill, setFill];
}