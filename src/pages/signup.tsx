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
  IconButton
} from "@mui/material";
import Link from "next/link";
import Lottie from "lottie-web";
import animationData from "../../public/assets/lottieData/backgroundWave.json";
import { useEffect,useRef,useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {Visibility,VisibilityOff} from '@mui/icons-material';


const SignUp = () => {
    const el = useRef(null)
    const [formValues,setFormValues]=useState({
        email:'',
        username:'',
        password:'',
        confirmPassword:'',
        showPassword:false,
        showConfirmPassword:false
    })
    console.log(formValues)
  useEffect(() => {
    Lottie.loadAnimation({
      container:el.current,
      animationData,
      autoplay:true,
      renderer:"svg",
    });
   
  }, []);
  const handleInputChange = (prop)=>(event)=>{
    setFormValues({...formValues,[prop]:event.target.value});
}
const handlePasswordChange = (prop)=>()=>{
    setFormValues({...formValues,[prop]:!formValues[prop]})
}
  return (
      <>
      <NavBar/>
    <Grid
     
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh",position:"relative"}}
    >
      <Box
         ref = {el}
        sx={{ position: "absolute" ,top:"0",left:"0",zIndex:0,width:"100%",height:"100%" }}
      ></Box>
      <Container maxWidth="sm" style = {{zIndex:"1"}} >
        <Paper elevation={3} style={{ padding: "1rem" }}>
          <Stack style={{ lineHeight: "1.5rem" }} spacing={2}>
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>handleInputChange("email")}/>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e)=>handleInputChange("username")}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type ={formValues.showPassword ?"text":"password"}
              variant="outlined"
              onChange={(e)=>handleInputChange("password")}
              InputProps={{
                endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePasswordChange("showPassword")}
                    edge="end"
                  >
                    {formValues.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>)
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              type ={formValues.showConfirmPassword ?"text":"password"}
              variant="outlined"
              onChange={(e)=>handleInputChange("confirmPassword")}
              InputProps={{
                endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePasswordChange("showConfirmPassword")}
                    edge="end"
                  >
                    {formValues.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>)
              }}
            />
            <Button variant="contained">Sign Up</Button>
            <Typography align="center">
              <Link href="/about">Already have an account ? Login</Link>
            </Typography>
          </Stack>
        </Paper>
      </Container>
     
    </Grid>
    <Footer/>
   

    </>
  );
};

export default SignUp;
