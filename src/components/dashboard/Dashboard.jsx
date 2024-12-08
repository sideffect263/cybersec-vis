// src/components/dashboard/Dashboard.jsx

import React from 'react';
import { Grid, Container } from '@mui/material';
import AlertPanel from './AlertPanel';
import StatisticsPanel from './StatisticsPanel';

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        {/* Statistics Section */}
        <Grid item xs={12}>
          <StatisticsPanel />
        </Grid>

        {/* Main Content Section */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* Visualization placeholder - will be replaced with actual component */}
            <Grid item xs={12}>
              <div style={{ 
                height: '400px', 
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                3D Visualization Area
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Alerts Section */}
        <Grid item xs={12} md={4}>
          <AlertPanel />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;