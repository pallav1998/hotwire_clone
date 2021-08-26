import {
  Box,
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

export const NavBar = () => {
  const [support, setSupport] = useState("Feedback");
  const [currency, setCurrency] = useState("USD");
  const styles = useStyles();

  return (
    <Container maxWidth="sm">
      <AppBar className={styles.navbar}>
        <Toolbar>
          <Grid container>
            <Grid item container xs={12}>
              <Box className={styles.flex}>
                <Box className={styles.box1}>
                  <img className={styles.image} src=".\logo.png" alt="Logo" />
                  <Typography variant="h6">Hotels</Typography>
                  <Typography variant="h6">Cars</Typography>
                  <Typography variant="h6">Flight</Typography>
                  <Typography variant="h6">Vacations</Typography>
                </Box>

                <Box className={styles.box2}>
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

                  {/* Modal for Sign In */}
                  <SignIn />

                  {/* Modal for Sign Up */}
                  <SignUp />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
