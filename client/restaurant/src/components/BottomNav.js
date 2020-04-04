import React from 'react'
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100
    },
});

export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} selected />
            <BottomNavigationAction label="Search by Price" icon={<AttachMoneyIcon />} />
            <BottomNavigationAction label="Explore" icon={<LocationOnIcon />} />
        </BottomNavigation>
    )
}
