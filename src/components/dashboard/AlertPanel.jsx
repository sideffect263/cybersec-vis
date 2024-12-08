// src/components/dashboard/AlertPanel.jsx

import React, { useState } from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Box,
  Chip,
  Divider
} from '@mui/material';
import {
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  CheckCircle as SuccessIcon,
  MoreVert as MoreVertIcon
} from '@mui/icons-material';

const AlertPanel = () => {
  // Mock alerts - in real app would come from props or state management
  const [alerts] = useState([
    {
      id: 1,
      type: 'error',
      message: 'Potential security breach detected',
      timestamp: new Date().toISOString(),
      source: 'Firewall'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Unusual network activity detected',
      timestamp: new Date().toISOString(),
      source: 'Network Monitor'
    },
    {
      id: 3,
      type: 'info',
      message: 'System update completed',
      timestamp: new Date().toISOString(),
      source: 'System'
    }
  ]);

  const getAlertIcon = (type) => {
    switch (type) {
      case 'error':
        return <ErrorIcon color="error" />;
      case 'warning':
        return <WarningIcon color="warning" />;
      case 'success':
        return <SuccessIcon color="success" />;
      default:
        return <InfoIcon color="info" />;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'error':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      case 'success':
        return '#4caf50';
      default:
        return '#2196f3';
    }
  };

  return (
    <Paper 
      elevation={3}
      sx={{ 
        height: '100%', 
        maxHeight: 400, 
        overflow: 'auto',
        bgcolor: 'background.paper'
      }}
    >
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" component="div">
          Security Alerts
        </Typography>
      </Box>
      
      <List>
        {alerts.map((alert) => (
          <React.Fragment key={alert.id}>
            <ListItem
              secondaryAction={
                <IconButton edge="end">
                  <MoreVertIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                {getAlertIcon(alert.type)}
              </ListItemIcon>
              <ListItemText
                primary={alert.message}
                secondary={
                  <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                    <Chip 
                      label={alert.source}
                      size="small"
                      sx={{ bgcolor: `${getAlertColor(alert.type)}15` }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default AlertPanel;