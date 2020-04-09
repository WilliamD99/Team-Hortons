import React from 'react'
import { Tab, Tabs } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import Range from "./PriceRange/Range"

const renderTab = tabItemData => (
    <Tab key={tabItemData.value} label={tabItemData.label} value={tabItemData.value} />
);

export default function PriceContents({ tabs, selectedTab, onChange, length, pagination, data }) {
    return (
        <>
            <div className="tabs-container mt-3">
                <Tabs value={selectedTab} onChange={onChange} indicatorColor="primary">
                    {tabs.map(renderTab)}
                </Tabs>
            </div>
            <h4 className="price-title mt-2">Search results</h4>
            <Range data={data} />
            <Pagination className="mt-2" count={length} onChange={pagination} />
        </>
    )

}
