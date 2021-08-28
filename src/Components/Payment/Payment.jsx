import { Box, TextField } from "@material-ui/core";
import { useStyles } from "./PaymentStyles";
import { FaUser, FaLock } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";

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
          <Box className={styles.ReviewPolicies}>
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
            <Box>
              <Box>
                <button>Book Now</button>
                <div>
                  <div>
                    <p>Check-In</p>
                    <h3>Fri-Aug 27</h3>
                  </div>
                  <div>
                    <p>Check-In</p>
                    <h3>Sat-Aug 28</h3>
                  </div>
                </div>
              </Box>
              <Box>
                <p>
                  <BsDot /> All bookings are final (no refunds, no changes)
                </p>
                <p>
                  <BsDot /> We'll bill your account the full amount now.
                </p>
                <p>
                  <BsDot /> You pay the hotel directly for charges like room
                  service or resort fees.
                </p>
                <p>
                  <BsDot /> You'll find out the hotel's name after booking.
                </p>
                <p>
                  <BsDot /> The hotel requires a credit card at check-in. They
                  may not take debit cards.
                </p>
              </Box>
            </Box>
            <Box>
              <p>
                <AiFillTags /> Low price guarantee
              </p>
              <h4>You will be charged a total of AUD42.73</h4>
              <p>(Including taxes and fees)</p>
              <p>
                *Savings based on lowest published rate we've found on leading
                retail travel sites in the last 24-48 hours for the same
                neighborhood, hotel class, and stay dates.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className={styles.box2}></Box>
      </Box>
      <Box className={styles.RefNo}>
        <p>Customer service reference number: 6335564271</p>
      </Box>
    </Box>
  );
};
