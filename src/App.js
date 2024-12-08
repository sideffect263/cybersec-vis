// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';

// Create theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a237e', // Deep Blue
    },
    secondary: {
      main: '#4caf50', // Success Green
    },
    error: {
      main: '#f44336', // Error Red
    },
    warning: {
      main: '#ff9800', // Alert Orange
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
    }
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes as components are created */}
            {/* <Route path="/network" element={<NetworkView />} /> */}
            {/* <Route path="/geo" element={<GeoView />} /> */}
            {/* <Route path="/threats" element={<ThreatView />} /> */}
            {/* <Route path="/reports" element={<ReportView />} /> */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;