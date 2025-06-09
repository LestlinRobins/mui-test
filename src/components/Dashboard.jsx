// filepath: d:\IIIT Kottayam\First Year Kalkitech Internship\mui-test\src\components\Dashboard.jsx
import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  People,
  ShoppingCart,
  AttachMoney,
  Analytics,
} from "@mui/icons-material";

const Dashboard = () => {
  // Random data generation
  const generateRandomData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  };

  const salesData = generateRandomData(12);
  const revenueData = generateRandomData(7);

  const stats = [
    {
      title: "Total Users",
      value: "12,584",
      change: "+12.5%",
      trend: "up",
      icon: <People />,
      color: "#2196f3",
    },
    {
      title: "Total Orders",
      value: "8,456",
      change: "+8.2%",
      trend: "up",
      icon: <ShoppingCart />,
      color: "#4caf50",
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: "-2.1%",
      trend: "down",
      icon: <AttachMoney />,
      color: "#ff9800",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.5%",
      trend: "up",
      icon: <Analytics />,
      color: "#9c27b0",
    },
  ];

  const recentOrders = [
    {
      id: "#001",
      customer: "John Doe",
      amount: "$125.00",
      status: "Completed",
    },
    { id: "#002", customer: "Jane Smith", amount: "$85.50", status: "Pending" },
    {
      id: "#003",
      customer: "Bob Johnson",
      amount: "$200.00",
      status: "Completed",
    },
    {
      id: "#004",
      customer: "Alice Brown",
      amount: "$75.25",
      status: "Processing",
    },
    {
      id: "#005",
      customer: "Charlie Wilson",
      amount: "$150.00",
      status: "Completed",
    },
  ];

  const topProducts = [
    { name: "Product A", sales: 1250, progress: 85 },
    { name: "Product B", sales: 980, progress: 70 },
    { name: "Product C", sales: 750, progress: 55 },
    { name: "Product D", sales: 620, progress: 45 },
    { name: "Product E", sales: 480, progress: 35 },
  ];

  const SimpleBarChart = ({ data, color }) => (
    <Box sx={{ display: "flex", alignItems: "end", height: 60, gap: 1 }}>
      {data.map((value, index) => (
        <Box
          key={index}
          sx={{
            height: `${value}%`,
            width: 8,
            backgroundColor: color,
            borderRadius: 1,
            opacity: 0.8,
          }}
        />
      ))}
    </Box>
  );

  const SimpleLineChart = ({ data, color }) => (
    <Box sx={{ position: "relative", height: 60 }}>
      <svg width="100%" height="60" viewBox="0 0 200 60">
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="2"
          points={data
            .map(
              (value, index) =>
                `${(index * 200) / (data.length - 1)},${60 - value * 0.6}`
            )
            .join(" ")}
        />
      </svg>
    </Box>
  );

  return (
    <Box sx={{ height: "100vh", overflow: "auto", pb: 4 }}>
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar sx={{ bgcolor: stat.color, mr: 2 }}>
                    {stat.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h4" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {stat.trend === "up" ? (
                    <TrendingUp sx={{ color: "success.main", mr: 1 }} />
                  ) : (
                    <TrendingDown sx={{ color: "error.main", mr: 1 }} />
                  )}
                  <Typography
                    variant="body2"
                    color={stat.trend === "up" ? "success.main" : "error.main"}
                  >
                    {stat.change}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Sales Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Sales
            </Typography>
            <SimpleBarChart data={salesData} color="#2196f3" />
          </Paper>
        </Grid>

        {/* Revenue Trend */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Revenue Trend
            </Typography>
            <SimpleLineChart data={revenueData} color="#4caf50" />
          </Paper>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>
                        <Chip
                          label={order.status}
                          color={
                            order.status === "Completed"
                              ? "success"
                              : order.status === "Pending"
                              ? "warning"
                              : "info"
                          }
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Top Products */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Top Products
            </Typography>
            {topProducts.map((product, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2">{product.name}</Typography>
                  <Typography variant="body2">{product.sales}</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={product.progress}
                  sx={{ height: 8, borderRadius: 1 }}
                />
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
