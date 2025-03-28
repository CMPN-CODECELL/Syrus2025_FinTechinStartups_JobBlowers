import React, { useState, useRef } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Grid, 
  Alert,
  Snackbar,
  Paper,
  Chip
} from "@mui/material";
import { 
  UploadFile, 
  CheckCircle, 
  TrendingUp, 
  PieChart, 
  ShowChart, 
  AccountBalance,
  MonetizationOn,
  Schedule,
  BarChart 
} from "@mui/icons-material";

const Upload = () => {
  const [uploads, setUploads] = useState({
    incomeStatement: null,
    cashFlow: null,
    balanceSheet: null
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const videoRefs = {
    incomeStatement: useRef(null),
    cashFlow: useRef(null),
    balanceSheet: useRef(null)
  };

  const handleFileChange = (documentType, e) => {
    if (e.target.files && e.target.files[0]) {
      setUploads({
        ...uploads,
        [documentType]: e.target.files[0]
      });
      
      setSnackbarMessage(`${documentType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} uploaded successfully!`);
      setOpenSnackbar(true);
      
      // Pause the video when a file is uploaded
      if (videoRefs[documentType].current) {
        videoRefs[documentType].current.pause();
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const documentTypes = [
    {
      id: "incomeStatement",
      title: "Income Statement",
      description: "Upload your company's income statement showing revenue, expenses, and profit or loss over a specific period.",
      video: "/assets/videos/income-statement.mp4",
      placeholder: "/assets/income-statement-placeholder.jpg",
      metrics: [
        { name: "Revenue Growth", icon: <TrendingUp fontSize="small" />, desc: "Year-over-year revenue trend analysis" },
        { name: "Profit Margins", icon: <PieChart fontSize="small" />, desc: "Gross, operating & net margin calculations" },
        { name: "Expense Analysis", icon: <BarChart fontSize="small" />, desc: "Breakdown of main cost drivers" }
      ]
    },
    {
      id: "cashFlow",
      title: "Cash Flow Statement",
      description: "Upload your cash flow statement showing inflows and outflows of cash during a specific period.",
      video: "/assets/videos/cash-flow.mp4",
      placeholder: "/assets/cash-flow-placeholder.jpg",
      metrics: [
        { name: "Burn Rate", icon: <ShowChart fontSize="small" />, desc: "Monthly cash consumption calculation" },
        { name: "Runway", icon: <Schedule fontSize="small" />, desc: "Months of operation remaining at current burn" },
        { name: "Cash Efficiency", icon: <MonetizationOn fontSize="small" />, desc: "Revenue generated per dollar spent" }
      ]
    },
    {
      id: "balanceSheet",
      title: "Balance Sheet",
      description: "Upload your balance sheet showing assets, liabilities, and equity at a specific point in time.",
      video: "/assets/videos/balance-sheet.mp4", // Fixed path - removed "/public"
      placeholder: "/assets/balance-sheet-placeholder.jpg",
      metrics: [
        { name: "Debt-to-Equity", icon: <AccountBalance fontSize="small" />, desc: "Financial leverage & risk assessment" },
        { name: "Current Ratio", icon: <ShowChart fontSize="small" />, desc: "Short-term liquidity health" },
        { name: "Working Capital", icon: <MonetizationOn fontSize="small" />, desc: "Operational efficiency evaluation" }
      ]
    }
  ];

  return (
    <Box sx={{ p: 4, bgcolor: '#121212', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: "bold", color: '#f5f5f5' }}>
        Upload Financial Documents
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: '#e0e0e0' }}>
        Upload your financial documents to get insights about your startup's financial health. 
        Our AI will analyze the documents and provide recommendations.
      </Typography>

      <Grid container spacing={4}>
        {documentTypes.map((doc) => (
          <Grid item xs={12} md={4} key={doc.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 8px 24px rgba(255, 255, 255, 0.1)' },
                bgcolor: '#1e1e1e',
                borderRadius: 2
              }}
            >
              {uploads[doc.id] ? (
                <Box sx={{ height: 200, backgroundColor: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="body1" sx={{ color: '#f0f0f0' }}>
                    Document uploaded successfully
                    <CheckCircle color="success" sx={{ ml: 1, verticalAlign: 'middle' }} />
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ height: 200, bgcolor: '#2a2a2a' }}>
                  <video
                    ref={videoRefs[doc.id]}
                    autoPlay
                    muted
                    loop
                    poster={doc.placeholder}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={doc.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, bgcolor: '#1e1e1e' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f5f5f5' }}>
                  {doc.title}
                  {uploads[doc.id] && (
                    <CheckCircle color="success" sx={{ ml: 1, verticalAlign: 'middle' }} />
                  )}
                </Typography>
                <Typography variant="body2" color="#d0d0d0" sx={{ mb: 2 }}>
                  {doc.description}
                </Typography>
                
                {/* Metrics Card */}
                <Paper 
                  elevation={1} 
                  sx={{ 
                    mb: 2, 
                    p: 1.5, 
                    bgcolor: '#282828', 
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#f0f0c0' }}>
                    Metrics We'll Extract:
                  </Typography>
                  
                  {doc.metrics.map((metric, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', mb: idx < doc.metrics.length - 1 ? 1 : 0 }}>
                      <Chip
                        icon={metric.icon}
                        label={metric.name}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mr: 1, minWidth: 120, bgcolor: '#333333', color: '#f0f0c0', borderColor: '#f0f0c0' }}
                      />
                      <Typography variant="caption" color="#d0d0d0" sx={{ flexGrow: 1 }}>
                        {metric.desc}
                      </Typography>
                    </Box>
                  ))}
                </Paper>

                <Button
                  variant="contained"
                  component="label"
                  startIcon={<UploadFile />}
                  fullWidth
                  sx={{ 
                    bgcolor: uploads[doc.id] ? 'success.dark' : '#f0f0c0', 
                    color: uploads[doc.id] ? 'white' : '#121212',
                    '&:hover': { 
                      bgcolor: uploads[doc.id] ? 'success.main' : '#e6e6b8' 
                    }
                  }}
                >
                  {uploads[doc.id] ? "Change Document" : "Upload Document"}
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.png"
                    hidden
                    onChange={(e) => handleFileChange(doc.id, e)}
                  />
                </Button>
                {uploads[doc.id] && (
                  <Typography variant="body2" sx={{ mt: 1, color: "#b0b0b0" }}>
                    File: {uploads[doc.id].name}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Button 
          variant="contained" 
          size="large"
          disabled={!uploads.incomeStatement || !uploads.cashFlow || !uploads.balanceSheet}
          sx={{ 
            py: 1.5, 
            px: 4, 
            fontSize: '1.1rem',
            bgcolor: '#f0f0c0',
            color: '#121212',
            '&:hover': { bgcolor: '#e6e6b8' },
            '&.Mui-disabled': {
              bgcolor: 'rgba(240, 240, 192, 0.3)',
              color: 'rgba(0, 0, 0, 0.38)'
            }
          }}
        >
          Submit All Documents for Analysis
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            bgcolor: '#2e7d32',
            color: 'white'
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Upload;
