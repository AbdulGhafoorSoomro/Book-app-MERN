import React, { useState } from 'react'
import  {AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor: "#232F3D"}} position='sticky'>
            <Toolbar>
                <Typography>
                    <LibraryBooksIcon></LibraryBooksIcon>
                </Typography>
                <Tabs 
                sx={{ml:"auto"}}
                value={value} 
                indicatorColor='secondary' 
                textColor='inherit' 
                onChange={(e,val)=>setvalue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Book"/>
                    <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                    <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>

    </div>
  );
}

export default Header;