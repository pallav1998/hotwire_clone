import axios from "axios"
import styles from './HotelResult.module.css';
import WifiIcon from '@material-ui/icons/Wifi';
import PoolIcon from '@material-ui/icons/Pool';
import SecurityIcon from '@material-ui/icons/Security';
import Avatar from '@material-ui/core/Avatar';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CheckSharpIcon from '@material-ui/icons/CheckSharp';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import BusinessIcon from '@material-ui/icons/Business';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SmokeFreeIcon from '@material-ui/icons/SmokeFree';
import HearingIcon from '@material-ui/icons/Hearing';
import PetsIcon from '@material-ui/icons/Pets';
import Grid from "@material-ui/core/Grid"
import Rating from '@material-ui/lab/Rating';
import { useEffect, useMemo, useRef, useState } from "react"
// import  Paper  from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles((theme) => ({
  cont2: {
    minWidth:"1000px",
    maxWidth:"320px",
    justifyContent:"center",
    margin:"auto",
  },
  cp:{
    color:"rgb(3,133,46)",
  }
}));




export function HotelResult() {
    const [images,setImages]=useState([])
    const [imageInd,setImageInd]=useState(0)
    const [resultData,setResultData]=useState({})
    const [isloading,setIsloading]=useState(true)
    const [iserror,setIserror]=useState(false)
    const [show,setShow]=useState(false)
    const [positionFixed,setPositionFixed]=useState(["relative","-80px"])
    const scrollHeight=useRef(["relative",0])
    const classes=useStyles()

    const today=new Date(Date.now()).toDateString()

    const ratinghotel=useMemo(()=>{
      return Math.floor(Math.random()*2+3)
    },[])
    const price=useMemo(()=>{
      return Math.floor(Math.random()*70+90)
    },[])
    useEffect(() => {
      window.addEventListener("scroll",handleScroll)
        getData()
    }, [])
    function handleScroll(e){
      // scrollHeight.current=window.pageYOffset
      if(window.pageYOffset>246){
        console.log(scrollHeight,"scroll height","hello")
      console.log(window.pageYOffset )
        setPositionFixed(["fixed","0px"])
        scrollHeight.current=["fixed","50px"]
      }
      else{
        setPositionFixed(["relative","-80px"])
      }
    }
    async function getData(){
      try {
        let {data}=await axios.get("http://localhost:3000/data?hotelId=3faf8507-307f-4846-936c-a1465b3cfc42")
        console.log(data[0])
        setImages(data[0].images)
        setResultData(data[0])
        setIsloading(false)
      } catch (error) {
        setIsloading(false)
        setIserror(true)
      }
    }
    //242.13333129882812
    if(isloading){
        return <h4>loading...</h4>
    }
    if(iserror){
        return <h4>uh oh something went wrong....</h4>
    }
  //  console.log(ratinghotel,"rh")
  function handleImages(direction){
    if(direction==="prev"){
      if(imageInd===0){
        setImageInd(images.length-1)
        return
      }
      setImageInd((prev)=>prev-1)
    }
    else{
      if(imageInd===images.length-1){
        setImageInd(0)
        return
      }
      setImageInd((prev)=>prev+1)
    }
  }

  
    return (
        <div>
         <div className={styles.Slider}>
             <img src={images[imageInd].url}  width="50%"alt="pn"/>
            
         </div>
         <div> <button onClick={()=>handleImages("prev")} disable  className={styles.btnp} > {"<"} </button>
             <button onClick={()=>handleImages("next")}  className={styles.btnn}> {">"} </button></div>
         <Grid container  className={classes.cont2} >
          <Grid
          xs={12}
          lg={8}
          md={8}
          sm={12}
          item className={classes.gridContanier1} 
          >
            <div className={styles.gridContanier1}>
            <div>
            <img src="https://ak-secure.hotwirestatic.com/current/static/images/branding/hw-logos/HR-logo-withTM.svg" alt="" height="18px" />
            </div>


            <div className={styles.gc1Header}> <p>{resultData.starRating}-star {resultData.name}</p> </div>



            <div className={styles.gc2}>

              <p> <span>{ratinghotel}/5 </span> <span>Good! </span> <span>(1,001-1500   <img src="https://ak-secure.hotwirestatic.com/current/static/images/checkout/angular-resources/icons/expedia-logo-vector.svg" alt="logo" />  reviews)</span></p>

            </div>


            <div className={styles.gc3}> 
            <p>
            <svg focusable="false" data-id="SVG_HW_AMENITIES_BED_CHOICE" width="15px" height="15px" viewBox="0 0 16 16"><path stroke="none" fill="currentColor" id="a" d="M1.23 4c.114 0 .206.091.206.205v3.18H15.59V12a.205.205 0 0 1-.205.205h-1.026a.205.205 0 0 1-.205-.205V8.82H1.436V12a.205.205 0 0 1-.205.205H.205A.205.205 0 0 1 0 12V4.205C0 4.091.092 4 .205 4zm2.257.24a1.23 1.23 0 1 1 0 2.461 1.23 1.23 0 0 1 0-2.461zm4.419-.137c2.813 0 5.61.918 7.684 2.461H5.538v-1.89c0-.2.144-.376.343-.408a12.662 12.662 0 0 1 2.025-.163z"></path></svg><span>Bed Choice</span> 
            </p>
            </div>



            <div className={styles.gc4}>
              <div><SecurityIcon style={{fill: "white"}} /></div>
              <div><p>This hotel has implemented enhanced health and safety measures.</p></div>
              <div><p>Learn more</p></div>
            </div>


            <div className={styles.gc5}>
              <p>What's the name of the hotel?</p>
              <p>We partner with hotels to give you deeper discounts than standard rates. Hot Rate Hotel names are revealed once you book.</p>
              <p style={{color:"rgb(84,91,108)",fontWeight:"700"}}>Guaranteed hotel chain</p>
              <p>This Hot Rate Hotel is guaranteed to be a regional or national hotel chain. Here are a few examples of chains you might get:</p>
              <div className={styles.gc51}>
              <div ><img src="https://static.hotwire.com/current/static/images/hotel/hotelChain/doubletree_by_hilton.png?ver=9e89d9c1" alt="" /></div>
              <div><img src="https://static.hotwire.com/current/static/images/hotel/hotelChain/sheraton_hotels_resorts.png?ver=9e89d9c1" alt="" /></div>
              <div><img src="https://static.hotwire.com/current/static/images/hotel/hotelChain/hyatt_hotels_resorts.png?ver=9e89d9c1" alt="" /></div>
              <div><img src="https://static.hotwire.com/current/static/images/hotel/hotelChain/crowne_plaza_hotels_resorts.png?ver=9e89d9c1" alt="" /></div>
              </div>
              <div className={styles.gc52}>
                <div><p>What’s this hotel’s class rating?</p></div>
                <div>
                  <Rating
                  name="half-rating-read"
                  defaultValue={ratinghotel}
                  precision={0.5}
                  readOnly
                  />
                </div>
                <div><p>Hotel class guide</p></div>

              </div>
              </div>


              <div className={styles.gc6}>
              <div className={styles.gc61}>
                <div><p>Amenities</p></div>
                <div>
                <div ><div><BusinessIcon/></div> <p>Business center</p></div> <div><div><FitnessCenterIcon/></div> <p>Fitness center</p></div> <div><div><WifiIcon/></div> <p>Internet access</p></div> <div><div><PetsIcon/></div> <p> Pet friendly</p></div> <div><div><PoolIcon/></div> <p>Pool(s) </p></div> <div><div><RestaurantIcon/></div> <p>Reastaurant(s)</p></div> <div><div><SmokeFreeIcon/></div> <p>Smoke-Free rooms</p></div>
                </div>
              </div>
              <div className={styles.gc62}>
               <div> <p>Accesibility</p></div>
               <div>
                 <div><HearingIcon/></div>
                 <div><p>Accessible for hearing impaired</p></div>
               </div>
               <div>
                 <div><VisibilityOffIcon/></div>
                 <div><p>Accessible for visually impaired</p></div>
               </div>
              </div>
            </div>


            <div >
            <div className={styles.gc7} style={{maxHeight:!show?"220px":"100%",overflow:"hidden"}}>
              <div><p>Health and safety measures <span>New</span></p></div>
              <div><p>Information is provided directly by the hotel. Updated {today}</p></div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Property follows a brand or regulatory agency's sanitization guidelines</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Property is cleaned with disinfectant</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Social distancing measures are in place</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Guests are provided with free hand sanitizer</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Staff wears personal protective equipment</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Contactless check-out is available</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Individually-wrapped food options are available</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Commonly-touched surfaces are cleaned with disinfectant</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Bed sheets and towels are washed at a temperature of at least 60°C/140°F</p>
              </div>
              <div>
                <div><CheckSharpIcon/></div>
                <p>Staff temperature checks are conducted regularly</p>
              </div>
            </div>
            <button className={styles.gc8btn} onClick={()=>setShow(!show)}>Show {!show?"more":"fewer"}</button>
            </div>



            <div className={styles.gc9}>
              <div><p>Guest ratings</p></div>
              <div className={styles.gc91}>
              <div >
                <div>
                <p>Good!</p>
                </div>
                <div className={styles.gc92}>
                  <p>{ratinghotel}</p>
                  <p>
                  <span>Overall guest rating</span>
                  <span>Based on 1,001 - 1,500 reviews</span>
                  </p>
                </div>
                </div>
              <div className={styles.gc93}>
                <p>Ratings summary</p>
                <p> <span>Condition of hotel</span> <span> <span></span> </span>   <span>4.0</span> </p>
                <p> <span>Quality of service </span> <span> <span></span> </span>  <span>4.2</span> </p>
                <p> <span>Room comfort</span> <span> <span></span> </span>  <span>4.0</span> </p>
                <p> <span>Room cleanliness </span> <span> <span></span> </span>  <span>4.0</span> </p>
                <p> <span>Ratings powered by</span> <img src="https://ak-secure.hotwirestatic.com/current/static/images/checkout/angular-resources/icons/expedia-logo-vector.svg" alt="" /></p>
              </div>
              </div>

            </div>



            <div className={styles.gcc10}>

              <div> <p>Choose your room</p> </div>
              <div className={styles.gcc11}> 
                  <div>
                  <p>  Hotel chooses bed type</p>  
                  <p >  Learn more</p>  
                  </div>
                  <div>
                  <p> <span> ${price}</span> /night</p>  
                  <p>  Price details</p>  
                  </div>
                  <div>
                    <button >Reserve</button>
                    <p>It takes only 2 minutes</p>
                  </div>    
              </div>
            </div>
            <div className={styles.gcc12}>
              <div><p>Location</p><p>{resultData?.address?.line1}</p></div>
              <div className={styles.gcc121}>
                <div>
                  <CircularProgress 
                className={classes.cp}
                style={{color:"rgb(3,133,46)"}}
                variant="determinate" {...{value:(ratinghotel/5)*100}}/>
                </div>
                <div>
                  <p>Great Location!</p>
                  <p>Our customers rated the location of this hotel a  <span>{ratinghotel}</span> out of <span> 5</span></p>
                </div>
              </div>
            </div>
            {/* add maps component here */}


            <div className={styles.gcc13}>
              <div><p className={styles.bigBlackwords}>Hotel policies</p></div>
              <div> <div><Avatar/></div> <div>An adult over 21 must be present at check-in to assume all liability for the booking</div></div>
            </div>



            <div className={styles.gcc14}>
              <div><p className={styles.bigBlackwords}>About this deal</p></div>
              {/* next */}
              <div>
                <p className={styles.blackwords}>Booking</p>
                <p>Your account will be charged for the full amount when you book.</p>
              </div>
              {/* next */}
              <div>
                <p className={styles.blackwords}>Cancellation policy</p>
                <p>All bookings are final (no refunds, no changes).</p>
              </div>
              {/* next */}
              <div className={styles.gc141}>
                <p><span><MonetizationOnIcon/></span>
                <span className={styles.blackwords}>Low price guarantee</span> </p>
                <p>Found a better deal from the same hotel after booking? Contact us, and we'll match it. <span className={styles.bluewords}>Learn more</span></p>
              </div>
            </div>


            <div>
              <p>* Savings based on median published rate we’ve found on leading retail travel sites in the last 24-48 hours for the same neighborhood, hotel class, and stay dates.</p>
            </div>
            </div>
          </Grid>
          <Grid 
           xs={12}
           lg={4}
           md={4}
           sm={12}
          item>
            <div className={styles.gd} style={{position:positionFixed[0],top:positionFixed[1]}}>

              <div className={styles.gd1} >  
              { /* 1st div*/}
                <div className={styles.gd11}>
                  <div>
                    <p><span className={styles.posSet}><MonetizationOnIcon 
                    fontSize="small"
                    style={{fill: "white"}} /></span> <span>Sale!</span></p>
                  </div>
                  <div className={styles.midDiv1}>
                    <p >{resultData.starRating}-star hotel </p>
                  </div>
                  <div className={styles.traingle}>  <p> <span>49%off</span> </p> 
                  </div>
                </div>
                <div className={styles.gd2}>
                  <div className={styles.midDiv}> <p> <span>${price+50}*</span> <span>${price}</span> <span>/night</span></p>
                    <p>Non-refundable rate</p>
                    <p className={styles.bluewords}>Price details</p>
                    <button className={styles.btnRes}>Reserve</button>
                    <p>It only takes 2 minutes</p>
                  </div>
                </div>
              </div>
              {/* second div */}
              <div className={styles.gd3}>
                <div>
                  <div><ShowChartIcon/></div>
                  <div><p>High interest!</p> </div>
                </div>
                <div>10 booked this hotel today!</div>
              </div>
              {/* third div */}
              <div className={styles.gd4}>
                <div><p className={styles.bigBlackwords}>Price checker</p></div>
                <div><p>Save <span className={styles.blackwords}>${price} per night</span> with this Hot Rate® Hotel!</p></div>
                <div> <div> <img src="https://ak-secure.hotwirestatic.com/current/static/images/branding/hw-logos/HR-logo-withTM.svg" alt="" height="18px" /></div> <div>${price}</div> </div>
                <div> <p className={styles.blackwords}>Retail Price</p> <p className={styles.blackwords}>${price+50}</p> </div>
              </div>
            </div>

          </Grid>
         </Grid>
        
        </div>
    )
}
