import {
  Container,
  Paper,
  Stack,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import Lottie from 'lottie-web';
import animationData from '../../public/assets/lottieData/backgroundWave.json';
import { useEffect, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch } from '../utils/hooks/reduxHooks';
import { signUpUser } from '../store/slices/signUp';
import React from 'react';

export interface inputForm {
  email: string;
  user_name: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const SignUp = () => {
  const dispatch = useAppDispatch();
  const initialState: inputForm = {
    email: '',
    user_name: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  };
  const el = useRef<Element>(null);
  const [formValues, setFormValues] = useState(initialState);
  useEffect(() => {
    if (el.current !== null)
      Lottie.loadAnimation({
        container: el.current,
        animationData,
        autoplay: true,
        renderer: 'svg',
      });
  }, []);
  const handleInputChange =
    (prop: keyof inputForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues({ ...formValues, [prop]: event.target.value });
    };
  const handlePasswordChange = (prop: keyof inputForm) => () => {
    setFormValues({ ...formValues, [prop]: !formValues[prop] });
  };
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '95vh', position: 'relative' }}
      >
        <Box
          ref={el}
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: 0,
            width: '100%',
            height: '100%',
          }}
        ></Box>
        <Container maxWidth="sm" style={{ zIndex: 1 }}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Stack style={{ lineHeight: '1.5rem' }} spacing={2}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => handleInputChange('email')(e)}
              />
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(e) => handleInputChange('user_name')(e)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                type={formValues.showPassword ? 'text' : 'password'}
                variant="outlined"
                onChange={(e) => handleInputChange('password')(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handlePasswordChange('showPassword')}
                        edge="end"
                      >
                        {formValues.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                type={formValues.showConfirmPassword ? 'text' : 'password'}
                variant="outlined"
                onChange={(e) => handleInputChange('confirmPassword')(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handlePasswordChange('showConfirmPassword')}
                        edge="end"
                      >
                        {formValues.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(signUpUser(formValues));
                }}
              >
                Sign Up
              </Button>
              <Typography align="center">
                <Link href="/about">Already have an account ? Login</Link>
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </Grid>
      <Footer />
    </>
  );
};

export default SignUp;
