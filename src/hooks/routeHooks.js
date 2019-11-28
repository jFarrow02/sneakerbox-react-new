import {useEffect, useState} from 'react';
import axios from 'axios';

export const useFetchedData = conf=>{

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios(conf)
            .then((fetched)=>{
                setData(fetched.data);
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
            })

    }, [loading, conf] /*activate effect ONLY if 'loading' changes*/);

    return [loading, data]
};