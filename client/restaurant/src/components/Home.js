import React, { Component } from "react";
import TopLogo from "./TopLogo"
import BottomNav from "./BottomNav"
import TopHome from "./TopHome";
import api from "../helpers/API";
import Price from "./Price";
import Explore from "./Explore";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom"
import axios from "axios"

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

        const range1 = api.get("/range1")
        const range2 = api.get("/range2")
        const range3 = api.get("/range3")
        const range4 = api.get("/range4")
        axios.all([range1, range2, range3, range4]).then(axios.spread((...response) => {
            const res1 = response[0]
            const res2 = response[1]
            const res3 = response[2]
            const res4 = response[3]

            console.log(res1, res2)
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
                            <Route path="/price" render={() => (<Price />)} />
                            <Route path="/explore" render={() => (<Explore />)} />

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


