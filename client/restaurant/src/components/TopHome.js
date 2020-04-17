import React, { Component } from 'react'
import Rating from "@material-ui/lab/Rating";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Icon, InputGroup, Input } from "rsuite"
import SlideShow from "./SlideShow"
import { Link } from "react-router-dom"

export default class TopHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }
    searchBar = (event) => {
        this.setState({
            search: event
        })
    }
    contents = this.props.data.map((content, index) => (
        <div key={index} className="top-container__contents row mb-3">
            <div className="align-self-center">
                <img alt="avatar" className="top-container__contents--restaurant-ava rounded" src={content.image} />
            </div>
            <div className="ml-3 align-self-center">
                <p className="top-container__contents--restaurant-name">{content.name}</p>
                <div className="stars">
                    <Rating name="half-rating-read" defaultValue={content.rating.aggregate_rating} precision={0.1} size="small" readOnly />
                </div>
                <div className="money mt-1">
                    <Rating name="customized-color" defaultValue={parseInt(content.price_range)} precision={1} icon={<AttachMoneyIcon fontSize="inherit" size="small" readOnly />} />
                </div>
            </div>
        </div>
    ))
    render() {
        return (
            <>
                <SlideShow />
                <div className="search-container d-flex justify-content-center">
                    <InputGroup className="search-bar mt-3 ">
                        <Input placeholder="Search ..." onChange={this.searchBar} />
                        <InputGroup.Addon>
                            <Icon icon="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </div>
                <div className="top-container d-flex mt-3">
                    <div className="title d-flex mb-3">
                        <p>Our Choices</p>
                        <Link to="/price">All restaurants</Link>
                    </div>
                    {this.contents}
                </div>
            </>
        )
    }

}
