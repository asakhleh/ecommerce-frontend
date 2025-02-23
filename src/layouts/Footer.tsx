import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Grid,
  Divider 
} from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4,                    // Padding top and bottom
        mt: 'auto',              // Pushes footer to bottom
        backgroundColor: (theme) => theme.palette.grey[100]
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your trusted e-commerce platform for quality products 
              and exceptional shopping experience.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/products" color="text.secondary">Products</Link>
              <Link href="/categories" color="text.secondary">Categories</Link>
              <Link href="/deals" color="text.secondary">Special Deals</Link>
              <Link href="/new-arrivals" color="text.secondary">New Arrivals</Link>
            </Box>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Customer Service
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/contact" color="text.secondary">Contact Us</Link>
              <Link href="/shipping" color="text.secondary">Shipping Info</Link>
              <Link href="/returns" color="text.secondary">Returns</Link>
              <Link href="/faq" color="text.secondary">FAQ</Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Copyright Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} E-Commerce Store. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/privacy" color="text.secondary" variant="body2">
              Privacy Policy
            </Link>
            <Link href="/terms" color="text.secondary" variant="body2">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;