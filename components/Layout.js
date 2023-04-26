import React from 'react';
import Nav from "@/components/nav";
import Box from "@mui/material/Box";


const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Box m={2}>
                {children}
            </Box>
        </>
    );
}

export default Layout;