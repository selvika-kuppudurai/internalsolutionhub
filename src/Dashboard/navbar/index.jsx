import React, { useEffect, useState } from 'react';
import './style.scss';
import { IconButton, Menu, MenuItem, Link } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import logo from "../../assets/lv-logo-white.png"

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    return <>
        <div className="container-fluid header">
            <div className="row logo-row">
                <div className='col-md-3 col-sm-4 d-flex justify-content-start'>
                    <img src={logo} alt="LatentView" className="lv-logo" />
                </div>
                <div className='col-md-6 col-sm-4 d-flex justify-content-center'>
                    <span className='main-heading' style={{color: '#1F84D4', fontWeight: 'bold'}}> {'Internal '} </span>
                    <span className='main-heading' style={{color: '#00C19B', fontWeight: 'bold'}}> {'Solution '} </span>
                    <span className='main-heading' style={{color: '#FDBB30', fontWeight: 'bold'}}> {'Hub'}</span>
                </div>
                <div className="col-md-3 col-sm-4 text-end">
                    <span className="right-div">
                        <div className='user-name-container'>
                            <IconButton
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-bar"
                                aria-haspopup="true"
                                onClick={(event) => setAnchorEl(event.currentTarget)}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-bar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem style={{ fontSize: '13px', padding: '0px 8px' }}>Logout</MenuItem>
                            </Menu>
                            <span className='user-name'>Welcome Renuka</span>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </>;
}

export default Navbar;
