import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { useState } from "react";
import { useStyles } from "./NavBarStyles";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../../ReduxStore/action";

export const NavBar = () => {
  const [support, setSupport] = useState("Feedback");
  const [currency, setCurrency] = useState("USD");
  const styles = useStyles();
  const dispatch = useDispatch();
  const runningUser = useSelector((state) => state.runningUser);
  const status = useSelector((state) => state.Loginstatus);
  console.log("statusRedux:", status);
  function signout() {
    dispatch(logOutUser("logout"));
  }
  return (
    <Container maxWidth="sm">
      <AppBar className={styles.navbar}>
        <Toolbar>
          <Grid
            item
            container
            xs={12}
            // sm={6}
            className={styles.flex}
          >
            <Grid item className={styles.box1}>
              <Link to="/">
                {" "}
                <img
                  className={styles.image}
                  src="Logo.png"
                  alt="Logo"
                  height="20"
                  style={{ marginTop: "7px" }}
                />{" "}
              </Link>
              <Typography variant="h6">Hotels</Typography>
              <Typography variant="h6">Cars</Typography>
              <Typography variant="h6">Flight</Typography>
              <Typography variant="h6">Vacations</Typography>
            </Grid>

            <Grid item className={styles.box2}>
              <Typography variant="h6" className={styles.icon}>
                Get the App <PhoneIphoneIcon />
              </Typography>
              <Box>
                <TextField
                  value={support}
                  onChange={(e) => setSupport(e.target.value)}
                  select
                >
                  {[
                    { label: "Feedback", value: "Feedback" },
                    { label: "Help Center", value: "Help Center" },
                    { label: "Message Us", value: "Message Us" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box>
                <TextField
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  select
                >
                  {[
                    { label: "AUD - Australlan Doller", value: "AUD" },
                    { label: "USD - US Dollarr", value: "USD" },
                    { label: "EUR - Euro", value: "EUR" },
                    { label: "CHF - Swiss Franc", value: "CHF" },
                    { label: "CAD - Canadian Dollar", value: "CAD" },
                    { label: "NZD - New Zealand Dollar", value: "NZD" },
                    { label: "DKK - Danish Krone", value: "DKK" },
                    { label: "NOK - Norwegian Kroner", value: "NOK" },
                    { label: "SEK - Swedish Krona", value: "SEK" },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              {status ? (
                <Box className={styles.box2}>
                  <Button>Hi, {runningUser.FName}</Button>
                  <Button className={styles.button2} onClick={() => signout()}>
                    Sign Out
                  </Button>
                </Box>
              ) : (
                <Box className={styles.box2}>
                  <SignIn />
                  <SignUp />
                </Box>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
