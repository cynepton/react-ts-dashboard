import React, { useState } from 'react';
import { ThemeMode } from '../../types/theme';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { getColorTokens } from '../../theme/theme';
import { Sidebar as ProSidebar, Menu, MenuItem, useProSidebar, menuClasses } from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Sidebar: React.FC = () => {
    const theme = useTheme();
    const colors = getColorTokens(ThemeMode[theme.palette.mode]);
    const { collapsed: isCollapsed, collapseSidebar } = useProSidebar();
    const [selected, setSelected] = useState('Dashboard');

    return (
        <ProSidebar
            backgroundColor={colors.primary[400]}
            style={{
                border: 'none'
            }}
        >
            <Menu
                rootStyles={{
                    [`.${menuClasses.button}`]: {
                        color: colors.grey[100],
                        '&:hover': {
                            backgroundColor: colors.primary[400],
                            color: colors.grey[200]
                        }
                    },
                    [`.${menuClasses.active}`]: {
                        backgroundColor: colors.primary[400],
                        color: colors.grey[200]
                    }
                }}
            >
                <MenuItem
                    /** Workaround to get the Icon to be on the right side of the text */
                    icon={isCollapsed ?
                        <IconButton onClick={() => { collapseSidebar(); }}>
                            <MenuOutlinedIcon />
                        </IconButton>
                        : undefined
                    }
                    style={{
                        textAlign: 'center',
                        margin: '10px 0 20px 0'
                    }}
                >
                    {!isCollapsed && (
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            ml='15px'
                        >
                            <Typography variant='h3' color={colors.grey[100]}>
                                Dashboard
                            </Typography>
                            <IconButton onClick={() => { collapseSidebar(); }}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <Box mb='25px'>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <img
                                alt='profile-user'
                                width='100px'
                                height='100px'
                                src={`/assets/user.png`}
                                style={{ cursor: 'pointer', borderRadius: '50%' }}
                            />
                        </Box>
                        <Box textAlign='center'>
                            <Typography
                                variant='h2'
                                color={colors.grey[100]}
                                fontWeight='bold'
                                sx={{ m: '10px 0 0 0' }}
                            >
                                Isaac A
                            </Typography>
                            <Typography variant='h5' color={colors.greenAccent[500]}>
                                Admin
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Menu>
        </ ProSidebar>
    );
};

export default Sidebar;