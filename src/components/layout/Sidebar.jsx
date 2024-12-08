// src/components/layout/Sidebar.jsx

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  Toolbar
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  NetworkCheck as NetworkIcon,
  Public as GlobeIcon,
  Security as SecurityIcon,
  Assessment as ReportIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = ({ open }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Network Analysis', icon: <NetworkIcon />, path: '/network' },
    { text: 'Geographical View', icon: <GlobeIcon />, path: '/geo' },
    { text: 'Threat Intelligence', icon: <SecurityIcon />, path: '/threats' },
    { text: 'Reports', icon: <ReportIcon />, path: '/reports' }
  ];

  const secondaryMenuItems = [
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      open={open}
    >
      <Toolbar /> {/* Spacer to push content below app bar */}
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {secondaryMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;