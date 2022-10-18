import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/QuestDesignSystem5LightTheme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;