import React, { Component } from "react";
import TopLogo from "./TopLogo"
import SlideShow from "./SlideShow"
import BottomNav from "./BottomNav"
import TopHome from "./TopHome";
import api from "../helpers/API";
import Price from "./Price"

export default class Home extends Component {
    state = {
        search: ""
    }
    componentDidMount() {
        let dataObject = api.get("/top")
        dataObject.then(res => {
            this.setState({
                favorites: res.data
            })
        })
    }
    render() {
        if (this.state.favorites !== undefined) {
            return (
                <>
                    <TopLogo />
                    <SlideShow />
                    <TopHome data={this.state.favorites} />
                    <BottomNav selectPage={this.selectPage} />

                </>
            );
        }
        else {
            return <h1>Loading</h1>
        }
    }
}


