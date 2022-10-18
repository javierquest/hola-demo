import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/QuestDesignSystem5LightTheme';
import Test1 from 'src/components/Test1/Test1';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Test1/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;