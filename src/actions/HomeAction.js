import types from '../types'
import axios from 'axios'

export const serverGetMostViewed = () => {
    return (dispatch) => {

        dispatch({
            type: types.LOADING,
            payload: "true"
        });

        const headers = {
            "Content-Type": "application/json",
        }

        axios({
            headers,
            url: "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=7xstl7SyOzuGpQMeU9AdNjQIObLHNnO3",
            method: 'get'
        }).then((response) => {
            if (response.data.status === "OK") {
                dispatch({
                    type: types.SUCCESS,
                    payload: response.data
                });
                dispatch({
                    type: types.LOADING,
                    payload: "false"
                });
                return
            } else {
                dispatch({
                    type: types.FAIL,
                    payload: {
                        "sucess": "false",
                        "msg": "Your request failed! Please check your internet and try again",
                        "data": []
                    }
                });
                dispatch({
                    type: types.LOADING,
                    payload: "false"
                });
                return
            }
        }).catch((err) => {
            dispatch({
                type: types.FAIL,
                payload: {
                    "sucess": "false",
                    "msg": "Your request failed! Please check your internet and try again",
                    "data": []
                }
            })
            dispatch({
                type: types.LOADING,
                payload: "false"
            })
            return
        })
    }
}