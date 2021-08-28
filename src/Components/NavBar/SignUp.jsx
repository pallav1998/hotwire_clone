import {
  Box,
  TextField,
  Button,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./NavBarStyles";
import { TiTick } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { nanoid } from "nanoid";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUsers } from "../../ReduxStore/action";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const [signup, setSignup] = useState(false);
  const styles = useStyles();
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("value:", value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const payload = { ...formData, id: nanoid() };
    // alert("Thank For Filling The Details");
    console.log("payload:", payload);
    axios
      .post("http://localhost:3001/userData", payload)
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((error) => error);
  };

  return (
    <Box>
      <Button
        className={styles.button2}
        onClick={() => setSignup(!signup)}
        variant="contained"
        color="primary"
      >
        Sign up
      </Button>
      <Modal onClose={() => setSignup(false)} open={signup}>
        <Paper className={styles.modal1}>
          <Box>
            <Box className={styles.SignUpBox1}>
              <Typography variant="h6">Create An Account</Typography>
              <CloseIcon onClick={() => setSignup(false)} />
            </Box>

            <Box className={styles.SignUpBox2}>
              <Box className={styles.SignUpBox3}>
                <p>
                  <TiTick /> Get faster bookings
                </p>
                <p>
                  <TiTick /> Add more nights or a room to your stay
                </p>
                <p>
                  <TiTick /> Easy access to all your trip info
                </p>
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
                  onChange={handleChange}
                  name="FName"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  name="LName"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  name="Email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  name="Password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </Box>
              <Box className={styles.SignUpBox4}>
                <p>(6-30 characters, case-sensitive, no spaces)</p>
                <p>
                  By creating a Hotwire account, I acknowledge that I have read
                  and accept the Privacy policy.
                </p>
              </Box>
            </Box>
            <Box className={styles.SignUpBox6}>
              <Box className={styles.SignInBox5}>
                <Button
                  onClick={handleSubmit}
                  className={styles.button1}
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
                <p>Forgot Password ?</p>
              </Box>
              <hr />
              <Box className={styles.SignInBox6}>
                <p>Don't have an Account?</p>
                {/* <NavLink to={"/SignIn"}>
                  <Button
                    className={styles.button1}
                    variant="contained"
                    color="primary"
                  >
                    Create One
                  </Button>
                </NavLink> */}
                <Button
                  className={styles.button1}
                  variant="contained"
                  color="primary"
                >
                  Create One
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};
