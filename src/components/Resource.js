import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resource = ({ path, render}) => {
    const initialState = {
        trans: [],
        loading: true,
        error: null,
    };

    const [state, setState] = useState(initialState);

    useEffect( () => {
        const getData = async () => {
            try {
                const result = await axios.get(path);
                const newData = {
                    trans: result.data,
                    loading: false,
                    error: null,
                };
                setState(newData);
            } catch (error) {
                setState ({
                    trans: [],
                    loading: false,
                    error: error.message,
                });
            }
        };
        getData();
    }, [path]);

    return <div className="showList">{render(state)}</div>;
        
};

export default Resource;