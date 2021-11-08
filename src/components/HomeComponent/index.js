import React, { Component } from 'react'
import Home from './Home';
import { connect } from 'react-redux';
import { serverGetMostViewed } from '../../actions/HomeAction';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const $ = require("jquery");

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected_news: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.setModalContents = this.setModalContents.bind(this);
    }

    componentDidMount() {

        this.props.serverGetMostViewed();

    }

    componentDidUpdate(prevProps, prevState) {

    }

    handleChange = (data) => {
        this.setState(prevState => ({
            profile: {                   // object that we want to update
                ...prevState.profile,    // keep all other key-value pairs
                [data.field]: data.value     // update the value of specific key
            }
        }));
    }

    setModalContents = (data) => {
        console.log(data);
        this.setState({selected_news: data});
    }

    render() {
        return (
            <Home
                { ...this.state }
                home={this.props.home}
                handleChange={this.handleChange}
                set_modal_contents={this.setModalContents}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: { ...state.home }
    }
}

export default connect(mapStateToProps,
    {
        serverGetMostViewed
    }
)(HomeContainer)
