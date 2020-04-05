import React, { Component } from 'react'
import PriceContents from "./PriceContents"
import priceTab from "../helpers/priceTab"

export default class Price extends Component {
    state = {
        priceRange: 1,
        page: 1
    }
    handleTabClick = (event, value) => {
        this.setState({
            priceRange: value
        })
    }
    //Use this function to change the selected data base on selected tab
    requestData = () => {
        if (this.state.priceRange === 1) {
            this.setState({
                data: this.props.range1
            })
        } else if (this.state.priceRange === 2) {
            this.setState({
                data: this.props.range2
            })
        } else if (this.state.priceRange === 3) {
            this.setState({
                data: this.props.range3
            })
        } else if (this.state.priceRange === 4) {
            this.setState({
                data: this.props.range4
            })
        }
    }
    //Pass this function to PriceContents comp, in order to set the "page" state
    pagination = (event, value) => {
        this.setState({
            page: value
        })
    }
    componentDidMount() {
        this.setState({
            data: this.props.range1
        })
    }
    componentDidUpdate(prevProp, prevState) {
        if (prevState.priceRange !== this.state.priceRange) {
            this.requestData()
        }
    }
    render() {
        if (this.state.data !== undefined) {
            return (
                <PriceContents data={this.state.data[this.state.page]} pagination={this.pagination} length={this.state.data.length} tabs={priceTab} selectedTab={this.state.priceRange} onChange={this.handleTabClick} />
            )
        } else {
            return <h1>Loading</h1>
        }
    }
}

