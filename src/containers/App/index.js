import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as AppActions } from "../App/redux"
import { actions as ListingActions } from "../Listing/redux"
import Search from "../Search";
import Listing from "../Listing";
import Recommendation from "../Recommendation";
import Spinner from '../../components/spinner';
import API from "../../config/endpoint";
import { fetchAppListFromLocalStorage } from "../../utils/Utils";
import { APP_LIST_TIME_TO_LIVE } from "../../config/settings";
import "../../assets/css/app/index.scss";
import {BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from "./home";
import Test from "./test";



class App extends Component {
    render() {
        return (
            <Router>
                <nav style={{ padding:10, zIndex:999, width:"100%", height: "30px", position: "fixed", backgroundColor:"white" }}>
                    <NavLink to='/' exact style={{ padding: 10 }} activeClassName='active'>
                        Home
                    </NavLink>

                    <NavLink to='/test' exact style={{ padding: 10 }} activeClassName='active'>
                        TEST
                    </NavLink>
                </nav>
                <Route path='/' exact component={Home} />
                <Route path='/test' exact component={Test} />
            </Router>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        app: state.app,
        listing: state.listing,
        search: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(AppActions, dispatch),
        ...bindActionCreators(ListingActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);