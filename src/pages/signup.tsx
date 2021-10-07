import {Container,Paper,Stack,TextField,Button} from "@mui/material";
const About = () => (
 <Container maxWidth="sm">
     <Paper elevation={1} style= {{padding:"1rem"}}>
        <Stack style={{lineHeight:"1.5rem"}}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant= "contained" style ={{maxWidth:"50%"}}>Sign Up</Button>
        </Stack>
     </Paper>
 </Container>
);

export default About;
