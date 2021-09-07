import { Box, TextField } from "@material-ui/core";
import { useStyles } from "./PaymentStyles";
import { FaUser, FaLock } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Rating from "@material-ui/lab/Rating";

export const Payment = () => {
  const styles = useStyles();
  const [fetchData,setFetchData]=useState([])
  const tax = 7.22;

  useEffect(() => {
    axios.get("http://localhost:3001/data").then((data) => {
     
      var update=data.data.filter((e)=>"7d5158f8-3de7-4ce3-9a24-036b3c843c52"===e.hotelId)
      console.log(update,1)
       setFetchData(update)

    })
   
  },[])
 console.log(fetchData)
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
        <Box className={styles.box2}>
          <div className={styles.box2_Div1}>
            <CheckCircleOutlineIcon  className={ styles.circleoutIcon}/><span>Low price guarantee</span>
          </div>
          <h2>Trip Summary</h2>
          <hr/>
          <div className={styles.box2_Div2}>
            <WhatshotIcon fontSize="large" className={styles.hotIcon} />
            <h1>Hot Rate <span>Hotel</span> </h1>
          </div>
          <div className={styles.box2_Div3}>
            <p></p>
          </div>
          <div className={styles.box2_Div4}>
            <p>{fetchData[0].address.city} - { fetchData[0].address.line1}</p>
          </div>
          <div className={styles.box2_Div5}>
              <Rating  size="Small" name="half-rating-read" defaultValue={fetchData[0].starRating} precision={0.5} readOnly/>
           
          </div>
           <div className={styles.box2_Div6}>
                    <div><span>{ fetchData[0].starRating}</span>/5</div>
                    {fetchData[0].starRating > 3 ? <p></p> : fetchData[0].starRating <= 4 ? <p>Good</p> : fetchData[0].starRating <= 5 ? <p>Excellent</p>:<p>Extra Ordinary</p>}
          </div>
          <hr />
          <h2>Price Summary</h2>
          
          <div className={styles.box2_Div8}>
               <p>Average room price per night </p>
            <span>$ 50</span>
          </div>
          <div className={styles.box2_Div7}>
            
            <p>Your room price per night </p>
            <span>$ { ((fetchData[0].location.latitude) % Math.abs(fetchData[0].location.longitude)).toFixed(2)}</span>
          </div>
          <hr />
            <div className={styles.box2_Div9}>
            
            <p>Tax & fees </p>
            <span>$ { tax}</span>
          </div>
          <div className={styles.box2_Div10}>
            <div className={styles.box2_Div10_Div}>
              <p>Due now </p>
            <span>$ { tax+Number(((fetchData[0].location.latitude) % Math.abs(fetchData[0].location.longitude)).toFixed(2))}</span>
            </div>
            <hr />
            <p> Book with confidence We price match!</p>
            </div>
          
        </Box>
      </Box>
      <Box className={styles.RefNo}>
        <p>Customer service reference number: 6335564271</p>
      </Box>
    </Box>
  );
};
