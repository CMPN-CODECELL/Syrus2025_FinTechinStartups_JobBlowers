import React from "react";
import { Link } from "react-router-dom";
import { 
  FaHome, FaMoneyBillWave, FaChartLine, FaBoxes, FaClipboardCheck, FaUpload 
} from "react-icons/fa";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import "../styles/Sidebar.css";

const StyledSidebar = styled('div')({
  width: '240px',
  height: '100vh',
  background: '#1e1e1e',
  color: '#fff',
  borderRight: '1px solid #333',
});

const LogoContainer = styled(Box)({
  padding: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid #333',
});

const StartupSidebar = () => {
  return (
    <StyledSidebar className="sidebar">
      <LogoContainer className="logo-container">
        <img 
          src="/assets/JEFFSOCUTE.png" 
          alt="Logo" 
          className="logo" 
          style={{ width: '80px', borderRadius: '50%' }} 
        />
      </LogoContainer>
      <ul>
        <li>
          <Link to="home">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="loan">
            <FaMoneyBillWave className="icon" /> Loan & Credit
          </Link>
        </li>
        <li>
          <Link to="cash">
            <FaChartLine className="icon" /> Cash Flow & Investment
          </Link>
        </li>
        <li>
          <Link to="stock">
            <FaBoxes className="icon" /> Stock & Inventory
          </Link>
        </li>
        <li>
          <Link to="credit">
            <FaClipboardCheck className="icon" /> Credit Score & Risk
          </Link>
        </li>
        <li>
          <Link to="upload">
            <FaUpload className="icon" /> Upload Financial Health
          </Link>
        </li>
      </ul>
    </StyledSidebar>
  );
};

export default StartupSidebar;
