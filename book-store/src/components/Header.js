import React from 'react'
import  {AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Header = () => {
  return (
    <div>
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                    <LibraryBooksIcon></LibraryBooksIcon>
                </Typography>
                <Tabs value={0} indicatorColor='secondary' textColor='inherit'>
                    <Tab label="Add Book"/>
                    <Tab label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>

    </div>
  );
}

export default Header;