import React from 'react'
import { Tab, Tabs, Paper } from "@material-ui/core"

const renderTab = tabItemData => (
    <Tab key={tabItemData.value} label={tabItemData.label} value={tabItemData.value} />
);

export default function PriceContents({ tabs, selectedTab, onChange }) {
    return (
        <div className="price-container mt-3">
            <Tabs value={selectedTab} onChange={onChange} indicatorColor="primary">
                {tabs.map(renderTab)}
            </Tabs>

        </div>
    )
}
