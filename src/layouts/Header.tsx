import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Box 
} from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit' 
          }}
        >
          E-Commerce Store
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCart />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile">
            <Person />
          </IconButton>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;