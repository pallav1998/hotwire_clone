import {
  Box,
  Button,
  Checkbox,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./NavBarStyles";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {  loginUser } from "../../ReduxStore/action";

export const SignIn = () => {
  const [signin, setSignin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const styles = useStyles();
  const dispatch = useDispatch();
   
  useEffect(() => {
  }, []);

  // const details = useSelector((state) => state.data);
  const loginError = useSelector((state) => state.loginError);
  console.log(loginError,"erroe")
  const handleSignIn = () => {
    dispatch(loginUser({email,password}))
    
  };

  return (
    <Box>
      <Button
        className={styles.button1}
        onClick={() => setSignin(!signin)}
        variant="contained"
        color="primary"
      >
        Sign In
      </Button>
      <Modal onClose={() => setSignin(false)} open={signin}>
        <Paper className={styles.modal}>
          <Box>
            <Box className={styles.SignInBox1}>
              <Typography variant="h6">Sign In</Typography>
              <CloseIcon onClick={() => setSignin(false)} />
            </Box>
            <Box className={styles.SignInBox2}>
              <Button variant="contained">
                <FaFacebook className={styles.svg} /> FaceBook
              </Button>
              <Button variant="contained">
                <FcGoogle className={styles.svg} /> Google
              </Button>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <p>or</p>
            </Box>
            <Box className={styles.SignInBox3}>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </Box>
            <Box className={styles.SignInBox4}>
              <Checkbox color="secondary" size="medium" />
              <p>Remember Me</p>
            </Box>
            <Box className={styles.SignInBox5}>
              <Button
                className={styles.button1}
                onClick={handleSignIn}
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              <p style={{color:"red"}}>{loginError?"Wrong Credentials!":""}</p>
              <p>Forgot Password ?</p>
            </Box>
            <hr />
            <Box className={styles.SignInBox6}>
              <p>Don't have an Account?</p>
              <Button
                className={styles.button1}
                variant="contained"
                color="primary"
              >
                Create One
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
