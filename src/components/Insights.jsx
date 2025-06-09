import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Rating,
  CircularProgress,
} from "@mui/material";
import {
  TrendingUp,
  Schedule,
  LocationOn,
  Star,
  Warning,
  CheckCircle,
} from "@mui/icons-material";

const Insights = () => {
  const generateRandomData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  };

  const userBehaviorData = generateRandomData(24);
  const conversionData = generateRandomData(30);
  const performanceData = generateRandomData(12);

  const insights = [
    {
      title: "Peak Traffic Hours",
      description: "Most users are active between 2 PM - 4 PM",
      impact: "High",
      recommendation: "Schedule important updates during off-peak hours",
      icon: <Schedule />,
    },
    {
      title: "Geographic Performance",
      description: "North America shows 23% higher conversion rates",
      impact: "Medium",
      recommendation: "Focus marketing efforts on similar regions",
      icon: <LocationOn />,
    },
    {
      title: "User Retention",
      description: "Day 7 retention rate has improved by 15%",
      impact: "High",
      recommendation: "Analyze successful onboarding changes",
      icon: <TrendingUp />,
    },
  ];

  const alerts = [
    {
      type: "warning",
      message: "Server response time increased by 12%",
      time: "2 hours ago",
    },
    {
      type: "success",
      message: "Mobile conversion rate improved",
      time: "4 hours ago",
    },
    {
      type: "warning",
      message: "Bounce rate spike detected",
      time: "6 hours ago",
    },
  ];

  const userSegments = [
    { name: "New Users", percentage: 35, color: "#2196f3" },
    { name: "Returning Users", percentage: 45, color: "#4caf50" },
    { name: "Premium Users", percentage: 20, color: "#ff9800" },
  ];

  const heatmapData = Array.from({ length: 7 }, (_, day) =>
    Array.from({ length: 24 }, (_, hour) => ({
      day,
      hour,
      value: Math.floor(Math.random() * 100),
    }))
  ).flat();

  const CircularProgressWithLabel = ({ value, label, color }) => (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        size={80}
        thickness={4}
        sx={{ color }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );

  const HeatmapChart = ({ data }) => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
      {Array.from({ length: 7 }, (_, day) => (
        <Box key={day} sx={{ display: "flex", gap: 0.5 }}>
          {Array.from({ length: 24 }, (_, hour) => {
            const cellData = data.find((d) => d.day === day && d.hour === hour);
            return (
              <Box
                key={hour}
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: `rgba(33, 150, 243, ${
                    cellData?.value / 100 || 0
                  })`,
                  borderRadius: 0.5,
                }}
              />
            );
          })}
        </Box>
      ))}
    </Box>
  );

  const SimpleAreaChart = ({ data, color }) => (
    <Box sx={{ position: "relative", height: 100 }}>
      <svg width="100%" height="100" viewBox="0 0 300 100">
        <defs>
          <linearGradient
            id={`gradient-${color}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          fill={`url(#gradient-${color})`}
          stroke={color}
          strokeWidth="2"
          points={`0,100 ${data
            .map(
              (value, index) =>
                `${(index * 300) / (data.length - 1)},${100 - value}`
            )
            .join(" ")} 300,100`}
        />
      </svg>
    </Box>
  );

  return (
    <Box sx={{ height: "100vh", overflow: "auto", pb: 4 }}>
      {/* Key Insights */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {insights.map((insight, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {insight.icon}
                  <Typography variant="h6" sx={{ ml: 1 }}>
                    {insight.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {insight.description}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Impact:</strong> {insight.impact}
                </Typography>
                <Typography variant="body2">
                  <strong>Recommendation:</strong> {insight.recommendation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* User Behavior Analysis */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              User Behavior Analysis
            </Typography>
            <SimpleAreaChart data={userBehaviorData} color="#2196f3" />
          </Paper>
        </Grid>

        {/* Alerts */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Alerts
            </Typography>
            <List>
              {alerts.map((alert, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemIcon>
                      {alert.type === "warning" ? (
                        <Warning color="warning" />
                      ) : (
                        <CheckCircle color="success" />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={alert.message}
                      secondary={alert.time}
                    />
                  </ListItem>
                  {index < alerts.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* User Segments */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              User Segments
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}
            >
              {userSegments.map((segment, index) => (
                <CircularProgressWithLabel
                  key={index}
                  value={segment.percentage}
                  label={segment.name}
                  color={segment.color}
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Activity Heatmap */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Activity Heatmap (7 days × 24 hours)
            </Typography>
            <HeatmapChart data={heatmapData} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography variant="caption">12 AM</Typography>
              <Typography variant="caption">6 AM</Typography>
              <Typography variant="caption">12 PM</Typography>
              <Typography variant="caption">6 PM</Typography>
              <Typography variant="caption">11 PM</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Performance Metrics */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Performance Metrics
            </Typography>
            <SimpleAreaChart data={performanceData} color="#4caf50" />
          </Paper>
        </Grid>

        {/* Customer Satisfaction */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Customer Satisfaction
            </Typography>
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Rating value={4.2} precision={0.1} size="large" readOnly />
              <Typography variant="h4" sx={{ mt: 1 }}>
                4.2 / 5.0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Based on 1,247 reviews
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Conversion Funnel */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Conversion Funnel Analysis
            </Typography>
            <SimpleAreaChart data={conversionData} color="#ff9800" />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Insights;
