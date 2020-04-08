import React from 'react'
import Rating from "@material-ui/lab/Rating";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export default function Range({ data }) {
    let optionCheck = value => {
        if (value === 1) {
            return <CheckIcon color="action" fontSize="small" className="yes" />
        } else if (value === 0) {
            return <CloseIcon color="secondary" />
        }
    }
    let contents = data.map((content, index) => (
        <div key={index} className="top-container__contents row mb-3">
            <div className="align-self-center">
                <img className="top-container__contents--restaurant-ava rounded" src={content.image} />
            </div>
            <div className="ml-3 align-self-center details">
                <p className="top-container__contents--restaurant-name">{content.name}</p>
                <div className="stars mt-1">
                    <Rating name="half-rating-read" defaultValue={content.rating.aggregate_rating} precision={0.1} size="small" readOnly />
                </div>
                <div className="option mt-1">
                    <span className="delivery mr-2">Delivery: {optionCheck(content.has_online_delivery)}</span>
                    <span className="booking">Booking: {optionCheck(content.has_table_booking)}</span>
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
