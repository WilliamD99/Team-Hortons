import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Rating from "@material-ui/lab/Rating";

export default function Range({ data }) {
    let contents = data.map((content, index) => (
        <div key={index} className="top-container__contents row mb-3">
            <div className="align-self-center">
                <img className="top-container__contents--restaurant-ava rounded" src={content.image} />
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
    return (
        <div className="range-container mt-3 mb-1">
            {contents}
        </div>
    )
}
