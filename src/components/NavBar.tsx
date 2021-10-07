import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Knipper
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default NavBar;
