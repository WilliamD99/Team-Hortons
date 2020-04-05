import React from "react"
import { AttachMoney } from "@material-ui/icons"

export default [
    {
        label: <AttachMoney />,
        value: 1
    },
    {
        label: <><AttachMoney /><AttachMoney /></>,
        value: 2
    },
    {
        label: <><AttachMoney /><AttachMoney /><AttachMoney /></>,
        value: 3
    },
    {
        label: <><AttachMoney /><AttachMoney /><AttachMoney /><AttachMoney /></>,
        value: 4
    }
]