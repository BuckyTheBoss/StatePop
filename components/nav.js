import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from "@mui/material";


const Nav = () => {

    return (
        <>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography variant={'h6'} className={''}>
                        StatePop
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Nav;