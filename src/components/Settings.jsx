// filepath: d:\IIIT Kottayam\First Year Kalkitech Internship\mui-test\src\components\Settings.jsx
import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Switch,
  FormControlLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Snackbar,
} from "@mui/material";
import {
  Edit,
  Delete,
  Add,
  Notifications,
  Security,
  Palette,
  Language,
} from "@mui/icons-material";

const Settings = ({ themeMode, setThemeMode }) => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const [language, setLanguage] = useState("en");
  const [settingsSaved, setSettingsSaved] = useState(false);

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setThemeMode(newTheme);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  // ...rest of your component data...
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer" },
  ];

  const apiKeys = [
    {
      id: 1,
      name: "Production API",
      key: "pk_live_xxxxx...",
      lastUsed: "2 hours ago",
    },
    {
      id: 2,
      name: "Development API",
      key: "pk_test_xxxxx...",
      lastUsed: "1 day ago",
    },
  ];

  return (
    <Box sx={{ p: 0 }}>
      <Snackbar
        open={settingsSaved}
        autoHideDuration={3000}
        message="Settings saved successfully!"
        onClose={() => setSettingsSaved(false)}
      />

      <Grid container spacing={3}>
        {/* General Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Palette sx={{ mr: 1 }} />
              <Typography variant="h6">General Settings</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Theme</InputLabel>
                <Select
                  value={themeMode}
                  label="Theme"
                  onChange={handleThemeChange}
                >
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                  <MenuItem value="auto">Auto</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={language}
                  label="Language"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setSettingsSaved(true);
                setTimeout(() => setSettingsSaved(false), 3000);
              }}
            >
              Save Changes
            </Button>
          </Paper>
        </Grid>

        {/* ...rest of your component remains the same... */}
        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Notifications sx={{ mr: 1 }} />
              <Typography variant="h6">Notification Settings</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications.email}
                    onChange={() => handleNotificationChange("email")}
                  />
                }
                label="Email Notifications"
                sx={{ display: "block", mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications.push}
                    onChange={() => handleNotificationChange("push")}
                  />
                }
                label="Push Notifications"
                sx={{ display: "block", mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications.sms}
                    onChange={() => handleNotificationChange("sms")}
                  />
                }
                label="SMS Notifications"
                sx={{ display: "block", mb: 1 }}
              />
            </Box>

            <Button variant="contained" color="primary">
              Update Preferences
            </Button>
          </Paper>
        </Grid>

        {/* Profile Settings */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Settings
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  defaultValue="John"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  defaultValue="Doe"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue="john.doe@example.com"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  defaultValue="+1 (555) 123-4567"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Company"
                  defaultValue="Acme Corp"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Position"
                  defaultValue="Administrator"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                Save Profile
              </Button>
              <Button variant="outlined" color="secondary">
                Cancel
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* User Management */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography variant="h6">User Management</Typography>
              <Button startIcon={<Add />} variant="outlined" size="small">
                Add User
              </Button>
            </Box>

            <List>
              {users.map((user, index) => (
                <React.Fragment key={user.id}>
                  <ListItem>
                    <Avatar sx={{ mr: 2 }}>{user.name.charAt(0)}</Avatar>
                    <ListItemText
                      primary={user.name}
                      secondary={
                        <Box>
                          <Typography variant="body2">{user.email}</Typography>
                          <Chip
                            label={user.role}
                            size="small"
                            color="primary"
                          />
                        </Box>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" size="small" sx={{ mr: 1 }}>
                        <Edit />
                      </IconButton>
                      <IconButton edge="end" size="small">
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {index < users.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Security Settings */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Security sx={{ mr: 1 }} />
              <Typography variant="h6">Security Settings</Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                API Keys
              </Typography>
              {apiKeys.map((apiKey, index) => (
                <Box
                  key={apiKey.id}
                  sx={{
                    mb: 2,
                    p: 2,
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    {apiKey.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "monospace" }}
                  >
                    {apiKey.key}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Last used: {apiKey.lastUsed}
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Button size="small" sx={{ mr: 1 }}>
                      Regenerate
                    </Button>
                    <Button size="small" color="error">
                      Delete
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>

            <Button variant="contained" color="primary" startIcon={<Add />}>
              Generate New API Key
            </Button>
          </Paper>
        </Grid>

        {/* System Information */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              System Information
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Version
                </Typography>
                <Typography variant="body1">v2.1.0</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Last Updated
                </Typography>
                <Typography variant="body1">March 15, 2024</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Server Status
                </Typography>
                <Chip label="Online" color="success" size="small" />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Database
                </Typography>
                <Chip label="Connected" color="success" size="small" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
