import React, { Component } from "react";
import TopLogo from "./TopLogo"
import BottomNav from "./BottomNav"
import TopHome from "./TopHome";
import api from "../helpers/API";
import Price from "./Price";
import Explore from "./ExploreContainer";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom"
import axios from "axios"
import chunks from "../helpers/chunks"

export default class Home extends Component {
    state = {
        search: ""
    }
    componentDidMount() {
        const range1 = api.get("/range1")
        const range2 = api.get("/range2")
        const range3 = api.get("/range3")
        const range4 = api.get("/range4")
        const top = api.get("/top")
        axios.all([range1, range2, range3, range4, top]).then(axios.spread((...response) => {
            const res1 = response[0].data
            const res2 = response[1].data
            const res3 = response[2].data
            const res4 = response[3].data
            const top = response[4].data
            this.setState({
                range1: chunks(res1, 20),
                range2: chunks(res2, 20),
                range3: chunks(res3, 20),
                range4: chunks(res4, 20),
                favorites: top
            })
        }))
    }
    render() {
        if (this.state.favorites !== undefined) {
            return (
                <>
                    <TopLogo />
                    <Router>
                        <Switch>
                            <Redirect from="/home" to="/" />
                            <Route path="/" render={() => (<TopHome data={this.state.favorites} />)} exact />
                            <Route path="/price" render={() => (<Price range1={this.state.range1} range2={this.state.range2} range3={this.state.range3} range4={this.state.range4} />)} />
                            <Route path="/explore" render={() => (<Explore range1={this.state.range1} range2={this.state.range2} range3={this.state.range3} range4={this.state.range4} />)} />
                        </Switch>
                        <BottomNav selectPage={this.selectPage} />
                    </Router>
                </>
            );
        }
        else {
            return <h1>Loading</h1>
        }
    }
}


