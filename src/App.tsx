import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import MainLayout from './layouts/MainLayout';

// Temporary placeholder components
const Home = () => <div>Home Page (Coming Soon)</div>;
const Cart = () => <div>Cart Page (Coming Soon)</div>;
const Profile = () => <div>Profile Page (Coming Soon)</div>;
const Login = () => <div>Login Page (Coming Soon)</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes CSS */}
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;