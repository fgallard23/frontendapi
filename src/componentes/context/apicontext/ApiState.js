import React, { useReducer } from "react";
import axios from "axios";
import ApiContext from './apiContext'
import ApiReducer from './apiReducer'

// import type
import {
    GET_ALL_FILES,
    GET_CONTENT_FILE,
    SET_LOADING
} from '../type'

const ApiState = props => {
    const initialState = { //initial parameters
        files: [],
        contentFile: [],
        loading: false
    };

    // define reducer
    const [state, dispatch] = useReducer(ApiReducer, initialState);

    //get All Files
    const getAllFiles = async () => {
        setLoading();
        await axios.get('http://localhost:8010/files/list', { timeout: 1500 })
            .then(response => {
                //console.log(response.data);

                // Create instance 
                dispatch({
                    type: GET_ALL_FILES,
                    payload: response.data // files because the trama
                });
            });
    };

    // get content file
    const getContentFile = async filename => {
        setLoading();
        await axios.get(`http://localhost:8010/files/data?fileName=${filename}`, { timeout: 1500 })
            .then(response => {
                //console.log(response.data);

                // Create instance
                dispatch({
                    type: GET_CONTENT_FILE,
                    payload: response.data // content file
                });
            });
    };

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    //return context about initial parameters and functions
    return (<ApiContext.Provider
        value={{
            files: state.files,
            contentFile: state.contentFile,
            loading: state.loading,
            getAllFiles,
            getContentFile
        }}
    >
        {props.children /*always*/}
    </ApiContext.Provider>);
};

export default ApiState;