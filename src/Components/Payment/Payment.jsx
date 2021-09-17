import { Box, TextField } from "@material-ui/core";
import { useStyles } from "./PaymentStyles";
import { FaUser, FaLock } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { useSelector } from "react-redux";

var obj = {
  FirstName: "",
  LastName: "",
  Email: "",
  "Confirm Email": "",
  "Phone Number": "",
  "Firstname In card details": "",
  "Lastname In card details": "",
  "Card Number": "",
  "Expiration Month": "",
  "Expiration Year": "",
  CVV: "",
  "Address 1": "",
  Country: "",
  City: "",
  State: "",
  "Zip code": "",
};
export const Payment = () => {
  const styles = useStyles();
  const [fetchData, setFetchData] = useState([]);
  const tax = 7.22;
  const [isloading, setIsloading] = useState(true);
  const [iserror, setIserror] = useState(false);
  const [checkInDetails, setCheckinDetails] = useState({});
  const [booked, setBooked] = useState(false);
  const [formdata, setFormdata] = useState(obj);
  const today = new Date(Date.now()).toDateString();
  const threedaysAfter = new Date(Date.now() + 100000000).toDateString();
  const Loginstatus = useSelector((state) => state.Loginstatus);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(fetchData);
  function getData() {
    axios
      .get("http://localhost:3001/hotelsearch")
      .then(({ data }) => {
        axios
          .get("http://localhost:3001/search")
          .then((res1) => {
            setCheckinDetails({
              checkIn: res1.data.checkin,
              checkOut: res1.data.checkout,
            });
            getData2(data.hotelId);
          })
          .catch((err) => {
            setIsloading(false);
            setIserror(true);
          });
      })
      .catch((err) => {
        setIsloading(false);
        setIserror(true);
      });
  }
  function getData2(id) {
    axios
      .get(`http://localhost:3001/data?hotelId=${id}`)
      .then(({ data }) => {
        // console.log(data, "resultdata");

        var update = data;
        setFetchData(update);
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
        setIserror(true);
      });
  }
  function handleForm(e) {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }
  function validateForm(formdata) {
    let arr = [];
    for (let key in formdata) {
      if (formdata[key].length === 0) {
        arr.push(key);
      }
    }
    return arr;
  }
  function handleBook() {
    let f = validateForm(formdata);
    console.log("f", f);
    if (f.length === 0) {
      setBooked(true);
    } else if (Loginstatus === false) {
      alert("Please Login to your account and Book a hotel ");
    } else {
      alert(`Please fill ${f.join(", ")} details and Book a hotel `);
    }
  }
  if (isloading) {
    return (
      <h1 style={{ marginTop: "100px", textAlign: "center" }}>loading...</h1>
    );
  }
  if (iserror) {
    return (
      <h1 style={{ marginTop: "100px", textAlign: "center" }}>
        uh oh something went wrong....
      </h1>
    );
  }
  if (booked) {
    return (
      <div
        style={{
          marginTop: "100px",
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <h1>
          Thank you!{" "}
          <span style={{ color: "rgb(212,49,49)" }}>
            {" "}
            {formdata.firstName} {formdata.lastName}{" "}
          </span>
          for Booking from Our service Please visit Again......:){" "}
        </h1>
        ;
        <h1>
          Your Stay is from {checkInDetails.checkIn} to{" "}
          {checkInDetails.checkOut}{" "}
        </h1>
      </div>
    );
  }

  return (
    <Box className={styles.Mainpage}>
      <Box className={styles.page}>
        <Box className={styles.box1}>
          <Box className={styles.travelerInfo}>
            {/* <button>Sign in for Fast Booking</button> */}
            <p style={{ lineHeight: "0" }}>
              <FaUser /> Traveler Info
            </p>
            <Box>
              <TextField
                onChange={handleForm}
                name="FirstName"
                id="outlined-error-helper-text"
                label="First Name"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                name="LastName"
                onChange={handleForm}
                id="outlined-error-helper-text"
                label="Last Name"
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-error-helper-text"
                label="Email"
                name="Email"
                onChange={handleForm}
                // helperText="Required"
                variant="outlined"
                defaultValue="jain@gmail.com"
                required
              />
              <TextField
                id="outlined-error-helper-text"
                label="Confirm Email"
                name="Confirm Email"
                onChange={handleForm}
                // helperText="Required"
                defaultValue="jain@gmail.com"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-error-helper-text"
                name="Phone Number"
                onChange={handleForm}
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
                id="outlined-error-helper-text"
                label="First Name"
                name="Firstname In card details"
                onChange={handleForm}
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-error-helper-text"
                label="Last Name"
                name="Lastname In card details"
                onChange={handleForm}
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-error-helper-text"
                label="Card Number"
                name="Card Number"
                onChange={handleForm}
                // helperText="Required"
                defaultValue="1234-5678-9012-3456"
                variant="outlined"
                required
              />
              <Box style={{ display: "flex", gap: "20px" }}>
                <TextField
                  id="outlined-error-helper-text"
                  label="Exp MM"
                  type="number"
                  max="12"
                  name="Expiration Month"
                  onChange={handleForm}
                  // helperText="Required"
                  defaultValue="09"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-error-helper-text"
                  label="Exp YYYY"
                  name="Expiration Year"
                  onChange={handleForm}
                  max="2030"
                  min="2010"
                  // helperText="Required"
                  defaultValue="2021"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-error-helper-text"
                  label="CVV"
                  name="CVV"
                  onChange={handleForm}
                  // helperText="Required"
                  defaultValue="123"
                  variant="outlined"
                  required
                />
              </Box>
            </Box>

            <h4>Billing Address</h4>
            <Box>
              <TextField
                id="outlined-error-helper-text"
                label="Address 1"
                name="Address 1"
                onChange={handleForm}
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-error-helper-text"
                label="Address 2 (Optional)"
                // helperText="Required"
                variant="outlined"
              />
              <TextField
                id="outlined-error-helper-text"
                label="Country"
                name="Country"
                onChange={handleForm}
                // helperText="Required"
                variant="outlined"
                required
              />
              <TextField
                id="outlined-error-helper-text"
                label="City or Town"
                onChange={handleForm}
                name="City"
                // helperText="Required"
                variant="outlined"
                required
              />
              <Box style={{ display: "flex", gap: "20px" }}>
                <TextField
                  id="outlined-error-helper-text"
                  label="State"
                  onChange={handleForm}
                  name="State"
                  // helperText="Required"
                  variant="outlined"
                  required
                />
                <TextField
                  id="outlined-error-helper-text"
                  label="Zip code"
                  onChange={handleForm}
                  name="Zip code"
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
                <button onClick={() => handleBook()}>Book Now</button>
                <div>
                  <div>
                    <p>Check-In</p>
                    <h3>
                      {checkInDetails.checkIn.length === 0
                        ? today.substring(0, today.length - 5)
                        : checkInDetails.checkIn}
                    </h3>
                  </div>
                  <div>
                    <p>Check-In</p>
                    <h3>
                      {checkInDetails.checkOut.length === 0
                        ? threedaysAfter.substring(0, today.length - 5)
                        : checkInDetails.checkOut}
                    </h3>
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
              <h4>
                You will be charged a total of
                <span>
                  {" "}
                  USD{" "}
                  {tax +
                    Number(
                      (
                        fetchData[0].location.latitude %
                        Math.abs(fetchData[0].location.longitude)
                      ).toFixed(2)
                    )}
                </span>
              </h4>
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
            <CheckCircleOutlineIcon className={styles.circleoutIcon} />
            <span>Low price guarantee</span>
          </div>
          <h2>Trip Summary</h2>
          <hr />
          <div className={styles.box2_Div2}>
            <WhatshotIcon fontSize="large" className={styles.hotIcon} />
            <h1>
              Hot Rate <span>Hotel</span>{" "}
            </h1>
          </div>
          <div className={styles.box2_Div4}>
            <p>
              {fetchData[0].address.city} - {fetchData[0].address.line1}
            </p>
          </div>
          <div className={styles.box2_Div5}>
            <Rating
              size="Small"
              name="half-rating-read"
              defaultValue={fetchData[0].starRating}
              precision={0.5}
              readOnly
            />
          </div>
          <div className={styles.box2_Div6}>
            <div>
              <span>{fetchData[0].starRating}</span>/5
            </div>
            {fetchData[0].starRating > 3 ? (
              <h3>Average</h3>
            ) : fetchData[0].starRating <= 4 ? (
              <h3>Good</h3>
            ) : fetchData[0].starRating <= 5 ? (
              <h3>Excellent</h3>
            ) : (
              <h3>Extra Ordinary</h3>
            )}
          </div>
          <div className={styles.checkInDetails}>
            <div>
              <p style={{ color: "black", fontWeight: "550" }}>Check-in</p>
              <p>
                {checkInDetails.checkIn.length === 0
                  ? today
                  : checkInDetails.checkIn}
              </p>
            </div>
            <div>
              <p style={{ color: "black", fontWeight: "550" }}>Check-out</p>
              <p>
                {checkInDetails.checkOut.length === 0
                  ? threedaysAfter
                  : checkInDetails.checkOut}
              </p>
            </div>
          </div>
          <hr />
          <h2>Price Summary</h2>

          <div className={styles.box2_Div8}>
            <p>Average room price per night </p>
            <span>$ 50</span>
          </div>
          <div className={styles.box2_Div7}>
            <p>Your room price per night </p>
            <span>
              {(
                fetchData[0].location.latitude %
                Math.abs(fetchData[0].location.longitude)
              ).toFixed(2)}
            </span>
          </div>
          <hr />
          <div className={styles.box2_Div9}>
            <p>Tax & fees </p>
            <span>$ {tax}</span>
          </div>
          <div className={styles.box2_Div10}>
            <div className={styles.box2_Div10_Div}>
              <p>Due now </p>
              <span>
                {tax +
                  Number(
                    (
                      fetchData[0].location.latitude %
                      Math.abs(fetchData[0].location.longitude)
                    ).toFixed(3)
                  )}
              </span>
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
