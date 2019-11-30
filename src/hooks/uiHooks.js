import {useEffect, useState} from 'react';

// export const useFill = (newFill)=>{
//     let [fill, setFill] = useState(newFill);
//     useEffect(()=>{
//         if(fill !== newFill){setFill(newFill)}
//     }, []);

    /**
     * TODO: 2019-11-28 12:26 EST
     * Line 7:8:  React Hook useEffect has missing dependencies: 'fill' and 'newFill'. 
     * Either include them or remove the dependency array. If 'setFill' needs the current value 
     * of 'newFill', you can also switch to useReducer instead of useState 
     * and read 'newFill' in the reducer  react-hooks/exhaustive-deps
     */
//     return [fill, setFill];
// }
export const useFill = (fill, newFill)=>{
    
    useEffect(()=>{
        return fill !== newFill ? newFill : fill;
    });
}