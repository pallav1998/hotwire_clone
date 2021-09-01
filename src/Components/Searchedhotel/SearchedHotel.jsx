// import PlaceIcon from '@material-ui/icons/Place';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import WifiIcon from '@material-ui/icons/Wifi';
import HotelIcon from '@material-ui/icons/Hotel';
import PoolIcon from '@material-ui/icons/Pool';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import CancelIcon from '@material-ui/icons/Cancel';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import axios from "axios"
import SecurityIcon from '@material-ui/icons/Security';
import { useEffect, useState } from 'react';
import "./Hotel.css"
import ReactMapGL from 'react-map-gl';
import {  MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
//import Mapp from './map';


   const sortCom = [
  {
    value: 'Best Match',
   
  },
  {
    value: 'Price(low to hight)',
    
  },
  {
    value: 'Price(high to low)',
    
  },
  {
    value: 'Hotel class(hight to low)',
    
     },
   {
    value: 'Hotel class(low to hight)',
    
  }
];
const priceRange = [
      "Any"
]
    
const hotelClass = [
  "Any",
  "5-Star",
  "4-Star",
  "3-Star",
  "2-Star",
  "1-Star"
]

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Good',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };
export default function SearchHotel() {

  const [sort, setSort] = useState("Best Match")
  const [price, setPrice] = useState("Any")
  const [hotelClass1, setHotelClass1] = useState("Any")
  const [bottom1, setBottom1] = useState("white")
  const [bottom2, setBottom2] = useState()
  const [bottom3, setBottom3] = useState()
  const [backC, setBackC] = useState("white");
  const [backC1, setBackC1] = useState();
  const [backC2, setBackC2] = useState();
  const [inpdata, setInpData] = useState("Philipsburg")
  const [mainData1, setMainData1] = useState([])
  const [loading,setloading]=useState(true)
  const history=useHistory()
   const [viewport, setViewport] = useState({
    "longitude": -73.9809184,
    "latitude": 40.7500621,
    zoom: 10
  });
  

  // console.log(mainData1,"mdata1")
     
    
     const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
   const handleChangePriceRange = (event) => {
    setPrice(event.target.value);
  };
   const handleChangeHotelClass = (event) => {
    setHotelClass1(event.target.value);
  };

  useEffect(() => {
    // axios.get("http://localhost:3001/data")
    //   .then((data) => {
    //     var mainData=data.data
    //     let updateData = mainData.filter((e) => inpdata === e.address.city)
    //     //console.log(updateData)
    //     // updateData=[updateData[0]]
    //     setMainData1(updateData)
    //     setloading(false)
    // })
    console.log("running")
    getData()
  }, [])
  function getData(){
    let arr=[]
    axios.get("http://localhost:3001/search")
    .then((res1)=>{
      // console.log(res1.data,"searchdata")
      setInpData(res1.data.destination)
        axios.get(`http://localhost:3001/data?address.city=${res1.data.destination}`).then(({data})=>{
          // console.log(data,"citydata")
          arr=[...data]
          axios.get(`http://localhost:3001/data`).then((res)=>{
            // console.log(res.data,"res.data  before")
            let f=[]
            for(let i=0;i<res.data.length;i++){
              // console.log(res.data[i].address.country,"in loop")
              if(res.data[i].address.country==="GBR"){
                f.push(res.data[i])
              }
            }
            // res.data=res.data.filter((item)=>item.address.country==="USA")
            // console.log(res.data,"res.data  ")
            arr=[...arr,...f]
            
            setMainData1(arr)
            // setViewport({...arr[0].location,zoom:12})
            setloading(false)
            })
            .catch((err)=>{
              console.log(err)
              setloading(false)
            })
        })
        .catch((err)=>{
          console.log(err)
          setloading(false)
        })
    })
  //  `http://localhost:3001/data?city=chicago`
  }  
  const handleSearch = (e) => {
      // axios.get("http://localhost:3001/data")
      //   .then((data) => {
      //     var mainData = data.data
      //     const updateData = mainData.filter((e) => inpdata === e.address.city)
      //     console.log(updateData)
      //     setMainData1(updateData)
      //   })
      let arr=[]
   
        axios.get(`http://localhost:3001/data?address.city=${inpdata}`).then(({data})=>{
          console.log(data,"citydata")
          arr=[...data]
          axios.get(`http://localhost:3001/data?address.country=USA`).then((res)=>{
            // console.log(`http://localhost:3001/data?address.country=${res1.data.country}`)
            // console.log(res.data,"country data")
            arr=[...arr,...res.data]
            
            setMainData1(arr)
            // setViewport({...arr[0].location,zoom:12})
            setloading(false)
            })
            .catch((err)=>{
              console.log(err)
            })
        })
        .catch((err)=>{
          console.log(err)
        })
    
       
  }
  function handleClick(id){
    const payload={
      hotelId:id
    }
    axios.put("http://localhost:3001/hotelsearch",payload)
    .then((res)=>{
      history.push("/hotelResult")
    })
  }
  
  if(loading){
    return <h1 style={{marginTop:"100px",textAlign:"center"}}>...loading</h1>
  }

    return <>
        <div className="SMainDiv">
        <div className="SMainDiv-Div1">
          <Paper  className="paper1">
      <IconButton className="" >
        <LocationOnIcon fontSize="small" className="locationIcon"/>
      </IconButton>
            <InputBase
              className="inp1"
        onChange={(e)=>{setInpData(e.target.value)}}
        placeholder="Where would you like to stay?"
              value={inpdata}
              onKeyPress={handleSearch}
      />
      <IconButton type="submit" onClick={()=>{setInpData("")}}>
        <CancelIcon fontSize="small" className="cancelIcon"/>
      </IconButton>
      
      
    </Paper>
     <Paper  className="paper2">
      <IconButton className="" >
      < DateRangeIcon fontSize="small" className="Calender"/>
      </IconButton>
     <input className="inp2" type="date"/>
     
      
      
          </Paper>
          <Paper  className="paper2">
      <IconButton className="" >
      < DateRangeIcon fontSize="small" className="Calender"/>
      </IconButton>
     <input className="inp2" type="date"/>
     
      
      
    </Paper>
               
                <button  onClick={handleSearch} className="searchbtn" variant="contained">Search</button>
                
                
            </div>
            <div className="SMainDiv-Div2">
          <div style={{cursor:"pointer",backgroundColor:`${backC}`, borderBottom: `${bottom1}` }} onClick={() => {
             setBottom1("white")
            setBottom3("")
            setBottom2("")
            setBackC("white")
            setBackC1("lightgray")
            setBackC2("lightgray")
            console.log(bottom1)
          }
          }
            
          >
                    All<br/> Hotels

                </div>
                <div style={{ cursor:"pointer",backgroundColor:`${backC1}`,borderBottom: `${bottom2}` }} onClick={() => {
           setBottom3("")
            setBottom1("")
            setBottom2("white")
            setBackC("lightgray")
            setBackC1("white")
            setBackC2("lightgray")
          
          }
          }>
                    <span>Hot rated</span><br/>
                    Avg $38
                    </div>
                 <div style={{cursor:"pointer",backgroundColor:`${backC2}`, borderBottom:`${bottom3}`}} onClick={() => {
            setBottom2("")
            setBottom1("")
            setBottom3("white")
            setBackC("lightgray")
            setBackC1("lightgray")
            setBackC2("white")
          }
          }>
                Standard Rate Hotels <br/>Avg $47
               
            </div>
            </div>
        <div  className="SMainDiv-Div3">
          <div>
               <TextField
          id="standard-select-sort"
          select
          label="Sort by"
          value={sort}
            onChange={handleChangeSort}
            variant="outlined"
          
        >
          {sortCom.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
            </TextField>
          </div>
          <div >
          
           <TextField
          id="standard-select-sort"
          select
          label="Price range"
          value={price}
            onChange={handleChangePriceRange}
            variant="outlined"
          
        >
          {priceRange.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
            </TextField>
          </div>
          <div>
          
           <TextField
          id="standard-select-sort"
          select
          label="Price range"
          value={hotelClass1}
            onChange={handleChangeHotelClass}
            variant="outlined"
          
        >
          {hotelClass.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

           </div>
          

        </div>
        
        <div className="SMainDiv-Div4">
          <div className="SMainDiv-Div4-Div1">
            
            {mainData1.map((e)=>{
              // console.log(e,"ee in map")
              return <div className="SMainDiv-Div4-Div1-child" onClick={()=>handleClick(e.hotelId)} style={{cursor:"pointer"}}>
              <div className="SMainDiv-Div4-Div1-child-left">
                <img src={ e.images.length===0?"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F07%2F10-lotte-new-york-palace-WBNYC0517.jpg":e.images[0].url} alt="done"/>
              </div>
              <div className="SMainDiv-Div4-Div1-child-right">
                <div className="SMainDiv-Div4-Div1-child-right-Div1">
                
                  <SecurityIcon style={ {fontSize:15,marginLeft:5,marginTop:5}}/>
                    <h5>Enhanced safety</h5>
              
                </div>
                <Rating style={{marginTop:5}} size="Small" name="half-rating-read" defaultValue={e.starRating} precision={0.5} readOnly />
                <div className="SMainDiv-Div4-Div1-child-right-Div2">
                  <WhatshotIcon style={{marginTop:20,color:"#e54042"}}/>
                  <p><span>Hote Rate</span>  {e.starRating}-star Hotel</p>
                </div>
                <div className="SMainDiv-Div4-Div1-child-right-Div3">
                  <p>in {e.address.city} - { e.address.line1}</p>
                </div>
                <div className="SMainDiv-Div4-Div1-child-right-Div4">
                  <div><span>{ e.starRating}</span>/5</div>
                  {e.starRating > 3 ? <p></p> : e.starRating <= 4 ? <p>Good</p> : e.starRating <= 5 ? <p>Excellent</p>:<p>Extra Ordinary</p>}
                </div>
                <div className="SMainDiv-Div4-Div1-child-right-Div5">
                  <div>
                    <p>Free..</p>
                    <LocalParkingIcon style={{fontSize:15,marginLeft:3}}/><WifiIcon style={{fontSize:16}}/>
                  </div>
                  <div>
                    <p>inclueds</p>
                    <HotelIcon style={{ fontSize: 15, marginLeft: 8, marginTop: 2 }} />
                    <PoolIcon style={{ fontSize: 15, marginLeft: 8, marginTop: 2 }}/>
                  </div>
                  <div>View all amenities</div>
                </div>
                <div className="Price"> <span>$</span>{ ((e.location.latitude) % Math.abs(e.location.longitude)).toFixed(2)}<p>per night</p></div>
              </div>
            </div>
            })}
           
          </div>
          <div className="SMainDiv-Div4-Div2">
             <ReactMapGL
      mapStyle={'mapbox://styles/mapbox/dark-v9'}
          mapboxApiAccessToken={
              "pk.eyJ1IjoiaWFtcGl5dXNrciIsImEiOiJja3N3cGFkNzAxdXhmMnBwbnJuNml2bDQ3In0.iF36CAn3kfvLKAngTIMhmA"
      }
      {...viewport}
      width="675px"
      height="700px"
      onViewportChange={(viewport) => setViewport(viewport)}
    ></ReactMapGL>
          </div>
          
        </div>
         <div className="bottomDiv">
            <p className="bottomDivP">
              For all prices: Availability is limited and rates are subject to change. Prices are dynamic and vary based on date of booking, length of stay and hotel class. Prices do not include taxes and fees. Hotwire is different from retail travel sites. With Hotwire you enter the date and location. Hotel revealed only after booking.

*Savings based on lowest published rate we've found on leading retail travel sites in the last 24-48 hours for the same neighborhood, hotel class, and stay dates.

Receive an instant $20 off a Hot Rate® car when booking on the Hotwire mobile or tablet app. The app is available to download from (i) the iTunes store for iPhone, iPad and iPod Touch and (ii) the Google Play Store for Android tablets and phones. Limit one (1) coupon per user account and per car booking. Restrictions: Coupon must be redeemed by 11:59 pm (Pacific Time) on August 27, 2021. Bookings are subject to availability at the time of booking and all applicable terms and conditions. The price of the qualifying booking must be at least $200 not including taxes and fees. Coupon may not be used with other coupons. Discounts, minimum bookings, and maximum discounts are in USD. Coupon discount cannot be applied against supplier-charged fees, cancellation or change penalties, administrative fees, or other miscellaneous charges, which are the sole responsibility of the customer. In the event that you change or cancel any part of your booking, the coupon will not apply to the changed travel schedule. Terms and conditions of this coupon are as written and cannot be changed by any representation of any unauthorized person, including employees of Hotwire, Inc. Coupon is not transferable and is not redeemable for cash. Hotwire, Inc. may revoke or change this offer at any time. Void where prohibited by law.
              </p>
              </div>
            
      </div>
     
        </>
}