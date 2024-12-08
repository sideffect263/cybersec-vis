// src/components/dashboard/StatisticsPanel.jsx

import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Security as SecurityIcon,
  Warning as WarningIcon,
  NetworkCheck as NetworkIcon,
  Speed as SpeedIcon,
  InfoOutlined as InfoIcon
} from '@mui/icons-material';

const StatisticCard = ({ title, value, icon, color, progress, info }) => (
  <Paper elevation={3} sx={{ p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ mr: 1 }}>
        {icon}
      </Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      {info && (
        <Tooltip title={info}>
          <IconButton size="small">
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
    <Typography variant="h4" component="div" sx={{ mb: 1 }}>
      {value}
    </Typography>
    {progress !== undefined && (
      <Box sx={{ width: '100%' }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: `${color}22`,
            '& .MuiLinearProgress-bar': {
              backgroundColor: color
            }
          }} 
        />
      </Box>
    )}
  </Paper>
);

const StatisticsPanel = () => {
  const stats = [
    {
      title: 'Security Score',
      value: '85%',
      icon: <SecurityIcon sx={{ color: '#4caf50' }} />,
      progress: 85,
      color: '#4caf50',
      info: 'Overall security rating based on current system status'
    },
    {
      title: 'Active Threats',
      value: '12',
      icon: <WarningIcon sx={{ color: '#f44336' }} />,
      color: '#f44336',
      info: 'Number of active security threats detected'
    },
    {
      title: 'Network Status',
      value: '98.5%',
      icon: <NetworkIcon sx={{ color: '#2196f3' }} />,
      progress: 98.5,
      color: '#2196f3',
      info: 'Current network uptime and performance'
    },
    {
      title: 'System Load',
      value: '67%',
      icon: <SpeedIcon sx={{ color: '#ff9800' }} />,
      progress: 67,
      color: '#ff9800',
      info: 'Current system resource utilization'
    }
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatisticCard {...stat} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsPanel;