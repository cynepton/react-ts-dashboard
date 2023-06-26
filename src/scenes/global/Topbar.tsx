import { ColorModeContext, getColorTokens } from '../../theme/theme';
import { ThemeMode } from '../../types/theme';

import React, { useContext} from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const theme = useTheme();
    const colors = getColorTokens(ThemeMode[theme.palette.mode]);
    const colorMode = useContext(ColorModeContext);

    return (<Box key='topBar' display='flex' justifyContent='space-between' p={2}>

        <Box key='searchBar' display='flex' bgcolor={colors.primary[400]}>
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
            <IconButton type='button' sx={{ p: 1 }}><SearchIcon /></IconButton>
        </Box>

        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === ThemeMode.dark ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon />
            </IconButton>
        </Box>
    </Box>);
};

export default Topbar;
