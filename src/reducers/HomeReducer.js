import types from './../types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let defaultState = {
    isLoading: "false",
    news: []
}

const Home = (state = defaultState, action) => {

    let newState = { ...state }

    let { type, payload } = action;

    switch (type) {

        case types.LOADING:

            newState.isLoading = payload;

            return newState;

        case types.SUCCESS:

            toast.success("New loaded successfully", {
                position: 'top-center'
            });

            newState.news = payload.results;

            return newState;

        case types.FAIL:

            toast.error(payload.msg, {
                position: 'top-center',
                autoClose: 5000
            });

            return newState;

        default:
            return newState;
    }
}

export default Home