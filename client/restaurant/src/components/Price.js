import React, { Component } from 'react'
import { Tab, Tabs, Paper, Typography } from "@material-ui/core"
import { AttachMoney } from "@material-ui/icons"

export default function Price() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="price-container mt-3">
            <Tabs
                value={value}
                onClick={handleChange}
                aria-label="price-range"
            >
                <Paper square className="mr-1">
                    <Tab icon={<AttachMoney />} aria-label="range-1" className="mr-1" >
                        <p>asd</p>
                    </Tab>
                </Paper>
                <Paper square className="mr-1">
                    <Tab icon={<><AttachMoney /><AttachMoney /></>} aria-label="range-2" className="mr-1" />
                </Paper >
                <Paper square className="mr-1">
                    <Tab icon={<><AttachMoney /><AttachMoney /><AttachMoney /></>} aria-label="range-3" className="mr-1" />
                </Paper>
                <Paper square className="mr-1">
                    <Tab icon={<><AttachMoney /><AttachMoney /><AttachMoney /><AttachMoney /></>} aria-label="range-4" className="mr-1" />
                </Paper>
            </Tabs>


        </div>
    )
}

