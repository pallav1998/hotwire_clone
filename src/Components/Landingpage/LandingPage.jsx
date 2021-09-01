/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import styles from "./LandingPage.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useRef } from "react";

export const LandingPage = () => {
  const history=useHistory()
  const hotelButton=useRef()
  const hotelButtondummy=useRef()
  const profession = [
    {
      title: "Hotel",
      url: "https://uxwing.com/wp-content/themes/uxwing/download/31-location-travel-map/hotel.png",
    },
    { title: "Car", url: "https://static.thenounproject.com/png/72-200.png" },
    {
      title: "Flight",
      url: "https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png",
    },
    {
      title: "Bundle",
      url: "https://uxwing.com/wp-content/themes/uxwing/download/31-location-travel-map/hotel.png",
    },
  ];
  const [myprofession, setMyprofession] = useState({
    title: "Hotel",
    url: "https://uxwing.com/wp-content/themes/uxwing/download/31-location-travel-map/hotel.png",
  });
  //      function display(){

  //         inputRef.current.style.background="white";
  //         inputRef.current.style.border="none";
  //         inputRef.current.style.borderTop="3px solid red";
  //         inputRef.current.style.color="#db3939";
  // }

  //*********************************** */ form data*****************************************

  const [user, setUser] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guest: "",
  });
  // useEffect(()=>{
  //   hotelButton.current.click()
  //   // console.log(hotelButton.current,'hotel buyggchh')
  // },[])
  const { destination, checkin, checkout, guest } = user;
  const onInputchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // ***********************************************use HistoryRounded.push************************************************
  const onsubmit =  (e) => {
    e.preventDefault();
    const payload={...user,country:"USA"}
     axios.put("http://localhost:3001/search", payload)
     .then((res)=>{
      history.push("/searchHotel")
    })
    .catch((err)=>{
      console.log(err)
    })
    // *********************************************use HistoryRounded.push*************************************************************
  };
   function sendDestinations([search,country]){
   const payload={
    destination:search,
    checkin: "",
    checkout: "",
    guest: 5,
    country
   }

    axios.put("http://localhost:3001/search", payload)
    .then((res)=>{
      history.push("/searchHotel")
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  return (
    <>
      <div className={styles.container} style={{ marginTop: "65px" }}>
        <div className={styles.topBanner}>
          <span class="title">
            <i class="fab fa-hotjar" style={{ "marginRight": "10px" }}></i>Want
            to stay in an expensive hotel for cheap?
            <strong style={{ "fontWeight": "10", marginLeft: "10px" }}>
              Yeah, you do.
            </strong>
            <a
              class="link-text"
              href="https://www.hotwire.com/bookbeyond"
              rel="noopener noreferrer"
              target="_blank"
            >
              Find out how
            </a>
          </span>
        </div>
        <div className={styles.backgroundPic}>
          <div className={styles.card}>
            <div style={{ display: "flex", width: "99.8%" }}>
            {profession.map((profession,ind) => (
                <button
                  className={styles.cardButton}
                  type="button"
                  default
                  ref={ind===0?hotelButton:hotelButtondummy}
                  key={ind}
                  onClick={() => setMyprofession(profession)}
                >
                  {
                    <img
                      src={profession.url}
                      alt="loading"
                      style={{ height: "15px" }}
                    />
                  }
                  <br />
                  {profession.title}
                </button>
              ))}
            </div>
            {myprofession.title === "Hotel" && (
              <div className={styles.formLabel}>
                <form onSubmit={(e) => onsubmit(e)}>
                  <h1 clas="formHeading">Search hotel deals</h1>
                  <label>Destination</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-map-marker-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="destination"
                        value={destination}
                        onChange={(e) => onInputchange(e)}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                      />
                    </i>
                  </div>
                  <br />
                  <label>Checkin</label> <label>Checkout</label> <br />
                  <input
                    type="date"
                    name="checkin"
                    value={checkin}
                    onChange={(e) => onInputchange(e)}
                  />
                  <input
                    type="date"
                    name="checkout"
                    value={checkout}
                    onChange={(e) => onInputchange(e)}
                  />
                  <br />
                  <br />
                  <label>Guest</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-user-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="guest"
                        value={guest}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                        onChange={(e) => onInputchange(e)}
                      />
                    </i>
                  </div>
                  <button>Find a hotel</button>
                </form>
              </div>
            )}
            {myprofession.title === "Car" && (
              <div className={styles.formLabel}>
                <form onSubmit={(e) => onsubmit(e)}>
                  <h1 clas="formHeading">Enter your location</h1>
                  <label>Destination</label>
                  <br />
                  <div className={styles.input}>
                    <i
                      class="fas fa-map-marker-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="destination"
                        value={destination}
                        onChange={(e) => onInputchange(e)}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                      />
                    </i>
                  </div>{" "}
                  <br />
                  <label>Pick-up date</label>{" "}
                  <label style={{ marginLeft: "40px" }}>Pick-up time</label>{" "}
                  <br />
                  <input
                    type="date"
                    name="checkin"
                    value={checkin}
                    onChange={(e) => onInputchange(e)}
                  />
                  <input
                    type="time"
                    name="checkout"
                    value={checkout}
                    onChange={(e) => onInputchange(e)}
                  />{" "}
                  <br /> <br />
                  <label>Guest</label> <br />
                  <div className={styles.input}>
                    <i
                      class="fas fa-user-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="guest"
                        value={guest}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                        onChange={(e) => onInputchange(e)}
                      />
                    </i>
                  </div>
                  <button>Find a Car</button>
                </form>
              </div>
            )}
            {myprofession.title === "Flight" && (
              <div className={styles.formLabel}>
                <form onSubmit={(e) => onsubmit(e)}>
                  <h1 clas="formHeading">Search hotel deals</h1>
                  <label>Fly from</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-map-marker-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="destination"
                        value={destination}
                        onChange={(e) => onInputchange(e)}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                      />
                    </i>
                  </div>{" "}
                  <br />
                  <label>Fly to</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-map-marker-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="destination"
                        value={destination}
                        onChange={(e) => onInputchange(e)}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                      />
                    </i>
                  </div>
                  <br />
                  <label>Departing</label> <label>Returning</label> <br />
                  <input
                    type="date"
                    name="checkin"
                    value={checkin}
                    onChange={(e) => onInputchange(e)}
                  />
                  <input
                    type="date"
                    name="checkout"
                    value={checkout}
                    onChange={(e) => onInputchange(e)}
                  />
                  <br /> <br />
                  <label>Passengers</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-user-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="guest"
                        value={guest}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                        onChange={(e) => onInputchange(e)}
                      />
                    </i>
                  </div>
                  <button>Find a Flight</button>
                </form>
              </div>
            )}
            {myprofession.title === "Bundle" && (
              <div className={styles.formLabel}>
                <form onSubmit={(e) => onsubmit(e)}>
                  <h1 clas="formHeading">Search hotel deals</h1>
                  <label>Fly from</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-map-marker-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="destination"
                        value={destination}
                        onChange={(e) => onInputchange(e)}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                      />
                    </i>
                  </div>{" "}
                  <br />
                  <label>Fly to</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-map-marker-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="destination"
                        value={destination}
                        onChange={(e) => onInputchange(e)}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                      />
                    </i>
                  </div>{" "}
                  <br />
                  <label>Departing</label>{" "}
                  <label style={{ marginLeft: "70px" }}>Returning</label> <br />
                  <input
                    type="date"
                    name="checkin"
                    value={checkin}
                    onChange={(e) => onInputchange(e)}
                  />
                  <input
                    type="date"
                    name="checkout"
                    value={checkout}
                    onChange={(e) => onInputchange(e)}
                  />{" "}
                  <br /> <br />
                  <input
                    type="time"
                    name="checkin"
                    value={checkin}
                    onChange={(e) => onInputchange(e)}
                  />
                  <input
                    type="time"
                    name="checkout"
                    value={checkout}
                    onChange={(e) => onInputchange(e)}
                  />
                  <br /> <br />
                  <label>Passengers</label>
                  <div className={styles.input}>
                    <i
                      class="fas fa-user-alt"
                      aria-hidden="true"
                      style={{ marginTop: "2px", marginLeft: "10px" }}
                    >
                      <input
                        type="text"
                        name="guest"
                        value={guest}
                        placeholder="ex:207-2074444"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                          outline: "none",
                          marginLeft: "20px",
                          marginTop: "5px",
                          paddingBottom: "5px",
                        }}
                        onChange={(e) => onInputchange(e)}
                      />
                    </i>
                  </div>
                  <button>Find a Deal</button>
                </form>
              </div>
            )}
          </div>

          <div className={styles.learn_more}>
            <img
              src="https://tpc.googlesyndication.com/simgad/16159382514288190354?"
              alt="loading"
              style={{ height: "40px", marginLeft: "50px", marginTop: "10px" }}
            />
            <span style={{ marginTop: "18px", marginRight: "60px" }}>
              Give the world a shot
              <button className={styles.laernButton}>Learn more</button>
            </span>
          </div>
        </div>
        <div className={styles.whyChoose}>
          <img
            src="https://ak-secure.hotwirestatic.com/current/static/images//shared-experiments/RTB19/uhp-confidence-992@2x.png"
            alt="loading"
          />
        </div>
        <div className={styles.mobile}>
          <div className={styles.mobileImg}>
            <img
              src="https://ak-secure.hotwirestatic.com/current/static/images/car/home/app-download-banner/iPhoneXLeft_Copy-2x.png"
              alt="loading"
            />
          </div>
          <div className={styles.heading}>
            <h1>Download the free Hotwire app</h1>
            <h3>For faster, easier booking and exclusive deals.</h3>
            <div className={styles.playstore}>
              <div className={styles.playstoreImg}>
                <img
                  src="https://ak-secure.hotwirestatic.com/current/static/images/car/home/app-download-banner/App_button_-_iOS-2x.png"
                  alt="loading"
                />
              </div>
              <div className={styles.playstoreImg1}>
                <img
                  src="https://ak-secure.hotwirestatic.com/current/static/images/car/home/app-download-banner/App_button_-_Android-2x.png"
                  alt="loading"
                />
              </div>
            </div>
            <p className={styles.ptag}>
              Send a download link to your mobile device
            </p>
            <div className={styles.inp}>
              <div className={styles.input}>
                <i
                  class="fa fa-mobile"
                  aria-hidden="true"
                  style={{ marginTop: "5px", marginLeft: "10px" }}
                >
                  <input
                    className={styles.mobileInput}
                    type="text"
                    placeholder="ex:207-2074444"
                  />
                </i>
              </div>
              <button className={styles.btn}>Send me The Link</button>
            </div>
            <p className={styles.para}>
              By providing your number, you agree to receive a one-time
              automated text message with a link to get the app. Our app offers
              promotions and booking services. No purchase necessary. Standard
              text message rates may apply.
            </p>
          </div>
        </div>
        <div className={styles.email}>
          <div>
            <i class="far fa-envelope"></i>
            <span className={styles.emailHeading}>
              {" "}
              Unlock an extra $10 off your next Hot Rate® Hotel when you sign up
              for email!
            </span>
          </div>
          <div className={styles.emailInput}>
            <input type="text" />{" "}
            <button className={styles.btn} style={{ marginTop: "-10px" }}>
              Subscribe
            </button>
            <p style={{ fontSize: "11px" }}>
              By subscribing, I acknowledge that I have read and accept the
              Privacy policy.
            </p>
          </div>
        </div>
        <div className={styles.headings}>
          <h1 className={styles.find}>Find 4-Star Hotels at 2-Star Prices</h1>
        </div>
        <div className={styles.grid}>
          <div onClick={()=>sendDestinations(["Atlanta","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/131217-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>42% off</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>Atlanta, GA</h2>
              <del>$238</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>139</span> <span>/night</span>
            </div>
          </div>

          <div onClick={()=>sendDestinations(["Boston","USA"])} >
            <div className={styles.inner}>
              <img
                src="	https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/4869-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>38%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>Boston, MA</h2>
              <del>$198</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>123</span> <span>/night</span>
            </div>
          </div>
          {/* change from here */}
          <div onClick={()=>sendDestinations(["Seatel","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/24239-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>31%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>Seatel, WA</h2>
              <del>$228</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>159</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["Nashville","USA"])} >
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/23801-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>36%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>Nashville, Tn</h2>
              <del>$185</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>119</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["San Francisco","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/14657-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>62%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>San Francisco, CA</h2>
              <del>$435</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>169</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["Chicago","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/30046-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>32%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i
                  class="fas fa-star-half-alt"
                  style={{ color: "#f5f3f0" }}
                ></i>
              </h3>
              <p>4-star Hot rate hotel in</p>
              <h2>Chicago, IL</h2>
              <del>$204</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>139</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["Montreal","Canada"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/6928-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>42%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>Montreal, Canada</h2>
              <del>$238</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>139</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["Orlando","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/30112-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>33%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "#f5f3f0" }}></i>
              </h3>
              <p>4-star Hot rate hotel in</p>
              <h2>Orlando, FL</h2>
              <del>$228</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>154</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["TORONTO","Canada"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/15605-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>49%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>TORONTO, CANADA</h2>
              <del>$278</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>143</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["Los Angles","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/2764-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>39%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>Los Angles, CA</h2>
              <del>$296</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>183</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["Denver","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/30117-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>29%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star-half-alt" style={{ color: "orange" }}></i>
              </h3>
              <p>4.5-star Hot rate hotel in</p>
              <h2>Denver, CO</h2>
              <del>$238</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>139</span> <span>/night</span>
            </div>
          </div>
          <div onClick={()=>sendDestinations(["Manhattan","USA"])}>
            <div className={styles.inner}>
              <img
                src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/17211-1x.jpg"
                alt="loading"
              />
            </div>
            <div className={styles.bad}>
              <div className={styles.badge}></div>
            </div>
            <div className={styles.head}>
              <h3>40%</h3>
              <p>off</p>
            </div>
            <div className={styles.star}>
              <h3>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "orange" }}></i>
                <i class="fas fa-star" style={{ color: "#f5f3f0" }}></i>
              </h3>
              <p>4-star Hot rate hotel in</p>
              <h2>Manhattan, NY</h2>
              <del>$165</del> <span className={styles.doller_symbol}>$</span>
              <span className={styles.doller}>99</span> <span>/night</span>
            </div>
          </div>
        </div>
        <div className={styles.advertisement}>
          <div> </div>
          <p>Advertisements</p>
          <div> </div>
        </div>
        <div className={styles.ad}>
          <div>
            <img
              src="https://tpc.googlesyndication.com/simgad/10787181852956966775?"
              alt="loading"
            />
          </div>
          <div>
            <img
              src="	https://s0.2mdn.net/10773729/CBD-SP_US_PROS_Ongoing-Q2-F2_V1_300x250.jpg"
              alt="loading"
            />
          </div>
          <div>
            <img
              src="https://tpc.googlesyndication.com/simgad/5725789910368400227"
              alt="loading"
            />
          </div>
        </div>
        <hr />
        <br />
        <br />
        <hr />
      </div>
      <div className={styles.details}>
        <details>
          <summary>Discover where you can go with Hotwire</summary>
          <div className={styles.detail}>
            <h3>Popular Hotel Destinations</h3>
            <a href="#">Las Vegas </a>
            <a href="#">HotelsChicago</a>
            <a href="#">HotelsSan Diego</a> <a href="#">HotelsDenver</a>
            <a href="#"> HotelsAtlanta</a>
            <a href="#"> HotelsAustin</a>
            <a href="#"> HotelsOrlando</a>
          </div>
          <div className={styles.detail}>
            <h3>Popular Hotel Destinations</h3>
            <a href="#">Las Vegas </a>
            <a href="#">HotelsChicago</a>
            <a href="#">HotelsSan Diego</a> <a href="#">HotelsDenver</a>
            <a href="#"> HotelsAtlanta</a>
            <a href="#"> HotelsAustin</a>
            <a href="#"> HotelsOrlando</a>
          </div>
          <div className={styles.detail}>
            <h3>Popular Hotel Destinations</h3>
            <a href="#">Las Vegas </a>
            <a href="#">HotelsChicago</a>
            <a href="#">HotelsSan Diego</a> <a href="#">HotelsDenver</a>
            <a href="#"> HotelsAtlanta</a>
            <a href="#"> HotelsAustin</a>
            <a href="#"> HotelsOrlando</a>
          </div>
          <div className={styles.detail}>
            <h3>Popular Hotel Destinations</h3>
            <a href="#">Las Vegas </a>
            <a href="#">HotelsChicago</a>
            <a href="#">HotelsSan Diego</a> <a href="#">HotelsDenver</a>
            <a href="#"> HotelsAtlanta</a>
            <a href="#"> HotelsAustin</a>
            <a href="#"> HotelsOrlando</a>
          </div>
          <h4>Find 4-Star Hotels at 2-Star Prices</h4>
          <p style={{ fontSize: "x-small" }}>
            Whether you're looking for awesome hotel deals at your favorite
            travel sites, unsold rooms, or a wallet-friendly rate that fits your
            budget, Hotwire offers more than 173,000 hotels throughout North
            America, Europe, Latin America and Asia. And if you're looking for
            cheap hotels, or one that's located in your desired destination,
            Hotwire has just what you're looking for as your go-to source among
            travel sites. Need help with booking last-minute travel and
            destinations on your vacation wish list? We've built a killer mobile
            app and supereasy planning tools that allow you to search and find
            last minute travel deals!
          </p>
        </details>
      </div>
    </>
  );
};
