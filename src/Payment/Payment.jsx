import { Box, TextField } from "@material-ui/core";
import { useStyles } from "./PaymentStyles";
import { FaUser, FaLock } from "react-icons/fa";

export const Payment = () => {
  const styles = useStyles();

  return (
    <Box className={styles.Mainpage}>
      <Box className={styles.page}>
        <Box className={styles.box1}>
          <Box className={styles.travelerInfo}>
            <button>Sign in for Fast Booking</button>
            <p style={{ lineHeight: "0" }}>
              <FaUser /> Traveler Info
            </p>
            <Box>
              <TextField
                error
                id="outlined-error-helper-text"
                label="First Name"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Last Name"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Email"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Confirm Email"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Phone Number"
                type="Number"
                // helperText="Required"
                variant="outlined"
                required
              />
            </Box>
          </Box>
          <hr />
          <Box className={styles.SecurePayment}>
            <p style={{ lineHeight: "0" }}>
              <FaLock /> Secure Payment
            </p>
            <img src="Payment.png" alt="payment" />
            <p>
              To be billed in AUD, select Visa, MasterCard or American Express.
              Other payment methods will be billed in USD.
            </p>
            <Box>
              <TextField
                error
                id="outlined-error-helper-text"
                label="First Name"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Last Name"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Card Number"
                // helperText="Required"
                variant="outlined"
                required
              />
              <Box style={{ display: "flex", gap: "20px" }}>
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Exp MM"
                  type="number"
                  max="12"
                  // helperText="Required"
                  variant="outlined"
                  required
                />
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Exp YYYY"
                  // helperText="Required"
                  variant="outlined"
                  required
                />
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="CVV"
                  // helperText="Required"
                  variant="outlined"
                  required
                />
              </Box>
            </Box>

            <h4>Billing Address</h4>
            <Box>
              <TextField
                error
                id="outlined-error-helper-text"
                label="Address 1"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Address 2 (Optional)"
                // helperText="Required"
                variant="outlined"
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="Country"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                error
                id="outlined-error-helper-text"
                label="City or Town"
                // helperText="Required"
                variant="outlined"
                required
              />
              <Box style={{ display: "flex", gap: "20px" }}>
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="State"
                  // helperText="Required"
                  variant="outlined"
                  required
                />
                <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Zip code"
                  // helperText="Required"
                  variant="outlined"
                  required
                />
              </Box>
            </Box>
          </Box>
          <hr />
          <Box>
            <p style={{ fontSize: "20px" }}>Review policies</p>
            <p
              style={{
                width: "95%",
                backgroundColor: "#e9e9e9",
                padding: "10px",
                fontSize: "15.5px",
              }}
            >
              By selecting "Book now", I agree that I have read and accept
              Hotwire's Rules and Restrictions , Terms of Use and Privacy
              Policy.
            </p>
          </Box>
        </Box>
        <Box className={styles.box2}></Box>
      </Box>
    </Box>
  );
};
