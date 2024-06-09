
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NavButton = styled(Button)`
  && {
    text-transform: capitalize;
    color: #12333a;
    font-size: 1.1rem;
    font-weight: 600;
    width: fit-content;
    padding: 3px 1rem;
    background-color: #fffffd;
    &:hover {
      background-color: #f0f0f0;
    }
    &:active {
      background-color: #e0e0e0;
    }
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const { currentUser, logout, favoritePhotos } = useAuth();

  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleLogoutClick = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };
  const handleFavoritesClick = () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    navigate('/favorites');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <AppBar sx={{ boxShadow: "none" , backgroundColor:"rgb(18, 51, 58,0.7)"}} position="fixed">
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Typography variant="h6" component="div" onClick={handleHomeClick} style={{cursor: 'pointer'}}>
          zetaton
        </Typography>

        <Box>
          <IconButton color="inherit" onClick={handleFavoritesClick}>
            <Badge badgeContent={favoritePhotos.length} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Box>

        {currentUser ? (
          <NavButton onClick={handleLogoutClick}>Logout</NavButton>
        ) : (
          <NavButton onClick={handleLoginClick}>Login</NavButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
