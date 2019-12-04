import {useState} from 'react';

/**
 * Custom hook creates and returns 'fill' binding on state, and 'setFill' function
 * @param {String} initialFill
 * @returns {Array[String|Function]} Array containing the 'fill' {String} and
 * 'setFill' {Function} values.
 */
export const useFill = (initialFill) =>{
    const [fill, setFill] = useState(initialFill);
    return [fill, setFill];
}