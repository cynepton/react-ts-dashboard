import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

const App: React.FC = (): ReactElement => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <div className="app">
                        <Sidebar />
                        <main className="content">
                            <Topbar />
                            <Routes>
                                <Route path='/' element={<div>Hello</div>} />
                            </Routes>
                        </main>
                    </div>
                </ProSidebarProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
