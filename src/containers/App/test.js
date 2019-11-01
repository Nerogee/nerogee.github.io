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

class Test extends Component {
    render() {
        return (
            <div style={{paddingTop: "100px"}}>Where is my Jewellery</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);