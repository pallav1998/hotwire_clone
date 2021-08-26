import axios from "axios"
import styles from './HotelResult.module.css';
import WifiIcon from '@material-ui/icons/Wifi';
import PoolIcon from '@material-ui/icons/Pool';
import SecurityIcon from '@material-ui/icons/Security';
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
import { useEffect, useMemo, useState } from "react"
import  Button  from "@material-ui/core/Button";


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  cont2: {
    minWidth:"1000px",
    maxWidth:"320px",
    justifyContent:"center",
    margin:"auto",
  },
  
}));





export function HotelResult() {
    const [images,setImages]=useState([])
    const [resultData,setResultData]=useState({})
    const [isloading,setIsloading]=useState(true)
    const [iserror,setIserror]=useState(false)
    const [show,setShow]=useState(false)

    const classes=useStyles()

    const today=new Date(Date.now()).toDateString()

    const ratinghotel=useMemo(()=>{
      return Math.floor(Math.random()*2+3)
    },[])
    const price=Math.floor(Math.random()*70+90)
    useEffect(() => {
        getData()
       
    }, [])
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
    if(isloading){
        return <h4>loading...</h4>
    }
    if(iserror){
        return <h4>uh oh something went wrong....</h4>
    }
   console.log(ratinghotel,"rh")
    return (
        <div>
         <div className={styles.Slider}>
             <img src={images[0].url}  width="70%"height="300px"alt="pn"/>
         </div>
         <Grid container  className={classes.cont2} >
          <Grid
          xs={12}
          lg={9}
          md={9}
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
            <svg focusable="false" data-id="SVG_HW_AMENITIES_BED_CHOICE" width="16px" height="16px" viewBox="0 0 16 16"><path stroke="none" fill="currentColor" id="a" d="M1.23 4c.114 0 .206.091.206.205v3.18H15.59V12a.205.205 0 0 1-.205.205h-1.026a.205.205 0 0 1-.205-.205V8.82H1.436V12a.205.205 0 0 1-.205.205H.205A.205.205 0 0 1 0 12V4.205C0 4.091.092 4 .205 4zm2.257.24a1.23 1.23 0 1 1 0 2.461 1.23 1.23 0 0 1 0-2.461zm4.419-.137c2.813 0 5.61.918 7.684 2.461H5.538v-1.89c0-.2.144-.376.343-.408a12.662 12.662 0 0 1 2.025-.163z"></path></svg><span>Bed Choice</span> 
            </p>
            </div>



            <div className={styles.gc4}>
              <SecurityIcon color="disabled" />
              <p>This hotel has implemented enhanced health and safety measures.</p>
              <p>Learn more</p>
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
              <div> 
                  <div>
                  <p>  Hotel chooses bed type</p>  
                  <p>  Learn more</p>  
                  </div>
                  <div>
                  <p>  ${price}/night</p>  
                  <p>  Price details</p>  
                  </div>
                  <div>
                    <Button variant="contained" color="secondary">Reserve</Button>
                    <p>It takes only 2 minutes</p>
                  </div>    
              </div>
              <div> 
                  <div>
                  <p>Standard Room, 2 Double Beds, Non Smoking</p>  
                  </div>
                  <div>
                  <p>  ${price+5}/night</p>  
                  <p>  Price details</p>  
                  </div>
                  <div>
                    <Button variant="contained" color="secondary">Reserve</Button>
                    <p>It takes only 2 minutes</p>
                  </div>    
              </div>

            </div>
            </div>
          </Grid>
          <Grid 
           xs={12}
           lg={3}
           md={3}
           sm={12}
          item>
            skbhkbvs
          </Grid>
         </Grid>
        
        </div>
    )
}
