import React, { Component } from 'react'
import { Tab, Tabs, Paper, Typography } from "@material-ui/core"
import { AttachMoney } from "@material-ui/icons"
import PriceContents from "./PriceContents"
import priceTab from "../helpers/priceTab"

export default class Price extends Component {
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    state = {
        priceRange: 1
    }
    handleTabClick = (event, value) => {
        this.setState({
            priceRange: value
        })
    }
    render() {
        return (
            <PriceContents tabs={priceTab} selectedTab={this.state.priceRange} onChange={this.handleTabClick} />
        )
    }
}

