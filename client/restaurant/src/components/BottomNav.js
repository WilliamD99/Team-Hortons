import React, { Component } from 'react'
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom"

export default class BottomNav extends Component {
    state = {
        value: 0,
        pathMap: [
            '/home',
            '/price',
            '/explore'
        ]
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentWillReceiveProps(newProps) {
        const { pathname } = newProps.location;
        const { pathMap } = this.state;

        const value = pathMap.indexOf(pathname);
        if (value > -1) {
            this.setState({
                value
            });
        }
    }
    render() {
        const { value, pathMap } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} showLabels>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to={pathMap[0]} />
                <BottomNavigationAction label="Search by Price" icon={<AttachMoneyIcon />} component={Link} to={pathMap[1]} />
                <BottomNavigationAction label="Explore" icon={<LocationOnIcon />} component={Link} to={pathMap[2]} />
            </BottomNavigation>
        )
    }

}
