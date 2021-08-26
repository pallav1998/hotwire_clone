import React,{useRef,useState} from 'react'
import "./LandingPage.css"
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import { fontSize } from '@material-ui/system';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ApartmentSharpIcon from '@material-ui/icons/ApartmentSharp';
import FlightIcon from '@material-ui/icons/Flight';


const LandingPage = () => {
     const inputRef=useRef(null)
     const profession=[{"title": "Hotel","url":"https://uxwing.com/wp-content/themes/uxwing/download/31-location-travel-map/hotel.png"},
     {"title": "Car","url":"https://static.thenounproject.com/png/72-200.png"},
     {"title": "Flight","url":"https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/444/aiga_departingflights-512.png"},{"title": "Bundle","url":"https://uxwing.com/wp-content/themes/uxwing/download/31-location-travel-map/hotel.png"}]
     const [myprofession,setMyprofession]=useState("")
     function display(){
       
        
        inputRef.current.style.background="white";
        inputRef.current.style.border="none";
        inputRef.current.style.borderTop="3px solid red";
        inputRef.current.style.color="#db3939";



    
     }
    return (
        <>
        <div classsName="container">
            <div className="top-banner">
                <span class="title"><i class="fab fa-hotjar" style={{"margin-right":"10px"}}></i>Want to stay in an expensive hotel for cheap?<strong style={{"font-weight": "10" ,"marginLeft":"10px"}}>Yeah, you do.</strong>
                <a class="link-text"  href="https://www.hotwire.com/bookbeyond" rel="noopener noreferrer" target="_blank">Find out how</a>
                </span>
            </div>
            <div className="background-pic">
            
                <div className="card">
                {/* <div style={{"display":"flex"}}>
                <div className="hotel"  > */}
               <div style={{"display":"flex" ,"width":"99.8%"}} >
                 {
                     profession.map(profession=>(
                       <button  className="cardButton" type="button" key={profession} onClick={()=> setMyprofession(profession)}>
                            {<img src={profession.url} alt="loading" style={{"height":"15px"}}/>}<br/>
                      {profession.title}
                
                   
                       </button>
                       
                     )

                     ) 
                 }
                 </div>
                  {myprofession.title==="Hotel" &&<div className="formLabel">
                      
                      <form action="">
                          <h1 clas="formHeading">Search hotel deals</h1>
                          <label>Destination</label>
                          <div className="input">
                          <i class="fas fa-map-marker-alt" aria-hidden="true"  style={{"marginTop":"2px","marginLeft":"10px"}}><input  type="text" placeholder="ex:207-2074444"style={{"border":"none","background":"none","font-size":"20px","outline":"none","marginLeft":"20px","marginTop":"5px" ,"paddingBottom":"5px"}}/></i>
                          </div>
                          <label>Checkin</label>    <label >Checkout</label> <br/>
                          <input type="date" />
                      
                          <input type="date" />
                          <label >Guest</label>
                          <div className="input">
                          <i class="fas fa-user-alt" aria-hidden="true"  style={{"marginTop":"2px","marginLeft":"10px"}}><input  type="text" placeholder="ex:207-2074444"style={{"border":"none","background":"none","font-size":"20px","outline":"none","marginLeft":"20px","marginTop":"5px" ,"paddingBottom":"5px"}}/></i>
                          </div>
                          <button>Find a hotel</button>
                      </form>
                  </div>}
                         {myprofession.title==="Car" &&<form>
                              <h1>Car</h1>
                        <input type="text" />
                        <button>submit</button></form>}
                         {myprofession.title==="Flight" &&<form>
                              <h1>Flight</h1>
                        <input type="text" />
                        <button>submit</button></form>}
                          {myprofession.title==="Bundle" &&<form>
                               <h1>Bundle</h1>
                        <input type="text" />
                        <button>submit</button></form>}
                </div>
               
               
               
               <div className="learn_more">
                   <img src="https://tpc.googlesyndication.com/simgad/16159382514288190354?" alt="loading" style={{"height":"40px","marginLeft":"50px","marginTop":"10px"}}/>
                   <span style={{"marginTop":"18px","marginRight":"60px"}}>Give the world a shot<button className="laernButton">Learn more</button></span>
               </div>
            </div>
            <div className="why-Choose">
                <img src="https://ak-secure.hotwirestatic.com/current/static/images//shared-experiments/RTB19/uhp-confidence-992@2x.png" alt="loading" />
            </div>
            <div className="mobile">
                <div className="mobileImg">
                    <img src="https://ak-secure.hotwirestatic.com/current/static/images/car/home/app-download-banner/iPhoneXLeft_Copy-2x.png" alt="loading" />
                </div>
                <div className="heading"><h1>Download the free Hotwire app</h1>
                <h3>For faster, easier booking and exclusive deals.</h3>
                <div className="playstore">
                    <div  className="playstore-img"><img src="https://ak-secure.hotwirestatic.com/current/static/images/car/home/app-download-banner/App_button_-_iOS-2x.png" alt="loading" /></div>
                    <div className="playstore-img1"><img src="https://ak-secure.hotwirestatic.com/current/static/images/car/home/app-download-banner/App_button_-_Android-2x.png" alt="loading" /></div>
                </div>
                <p className="ptag">Send a download link to your mobile device</p>
             <div className="inp">
                <div className="input">
                     <i class="fa fa-mobile" aria-hidden="true"  style={{"marginTop":"5px","marginLeft":"10px"}}><input className="mobile-Input" type="text" placeholder="ex:207-2074444"/></i>
                </div>
                 <button className="btn">Send me The Link</button>
              </div>
               <p className="para">By providing your number, you agree to receive a one-time automated text message with a link to get the app. Our app offers promotions and booking services. No purchase necessary. Standard text message rates may apply.</p>
             </div>
            </div>
             <div className="email">
               <div><i class="far fa-envelope"></i><span className="emailHeading"> Unlock an extra $10 off your next Hot Rate® Hotel when you sign up for email!</span></div>
                <div className="emailInput">
                    <input type="text" /> <button  className="btn" style={{"marginTop":"-10px"}}>Subscribe</button>
                    <p style={{"fontSize":"11px"}}>By subscribing, I acknowledge that I have read and accept the Privacy policy.</p>
                </div>
             </div>
             <div className="headings">
                <h1 className="find">Find 4-Star Hotels at 2-Star Prices</h1>
             </div>
             <div className="grid">
            
             <div>
              
                 <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/131217-1x.jpg" alt="loading" />
                 </div>
             <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>42% off</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>Atlanta, GA</h2>
               <del>$238</del> <span className="doller_symbol">$</span><span className="doller">139</span> <span>/night</span>
                 </div>
             </div>
             <div>
              <div className="inner">
                 <img src="	https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/4869-1x.jpg" alt="loading" />
             </div>
             <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>38%</h3>
                   <p>off</p>
                 
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>Boston, MA</h2>
               <del>$198</del> <span className="doller_symbol">$</span><span className="doller">123</span> <span>/night</span>
                 </div>
       



             </div>
             <div>
            <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/24239-1x.jpg" alt="loading" />
             </div>
              <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>31%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>Seatel, WA</h2>
               <del>$228</del> <span className="doller_symbol">$</span><span className="doller">159</span> <span>/night</span>
                 </div>
           
             </div>
             <div>
             <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/23801-1x.jpg" alt="loading" />
             </div>
              <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>36%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>Nashville, Tn</h2>
               <del>$185</del> <span className="doller_symbol">$</span><span className="doller">119</span> <span>/night</span>
                 </div>
         
             </div>
             <div>
             <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/14657-1x.jpg" alt="loading" />
             </div>
              <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>62%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>San Francisco, CA</h2>
               <del>$435</del> <span className="doller_symbol">$</span><span className="doller">169</span> <span>/night</span>
                 </div>
            
             </div>
             <div>
            <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/30046-1x.jpg" alt="loading" />
             </div>
              <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>32%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"#f5f3f0"}}></i></h3>
                  <p>4-star Hot rate hotel in</p>
                  <h2>Chicago, IL</h2>
               <del>$204</del> <span className="doller_symbol">$</span><span className="doller">139</span> <span>/night</span>
                 </div>
            
             </div>
             <div>
            <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/6928-1x.jpg" alt="loading" />
             </div>
              <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>42%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>Montreal, Canada</h2>
               <del>$238</del> <span className="doller_symbol">$</span><span className="doller">139</span> <span>/night</span>
                 </div>
            
             </div>
             <div>
            <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/30112-1x.jpg" alt="loading" />
             </div>
              <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>33%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"#f5f3f0"}}></i></h3>
                  <p>4-star Hot rate hotel in</p>
                  <h2>Orlando, FL</h2>
               <del>$228</del> <span className="doller_symbol">$</span><span className="doller">154</span> <span>/night</span>
                 </div>
             
             </div>
             <div>
            <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/15605-1x.jpg" alt="loading" />
             </div>
              <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>49%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>TORONTO, CANADA</h2>
               <del>$278</del> <span className="doller_symbol">$</span><span className="doller">143</span> <span>/night</span>
                 </div>
         
             </div>
             <div>
                 <div className="inner"><img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/2764-1x.jpg" alt="loading" />
                 </div>
                  <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>39%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>Los Angles, CA</h2>
               <del>$296</del> <span className="doller_symbol">$</span><span className="doller">183</span> <span>/night</span>
                 </div>
           
                 </div>
             <div>
                 <div className="inner"><img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/30117-1x.jpg" alt="loading" />
                 </div>
                  <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>29%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star-half-alt" style={{"color":"orange"}}></i></h3>
                  <p>4.5-star Hot rate hotel in</p>
                  <h2>Denver, CO</h2>
               <del>$238</del> <span className="doller_symbol">$</span><span className="doller">139</span> <span>/night</span>
                 </div>

                 </div>
             <div>
            <div className="inner">
                 <img src="https://ak-secure.hotwirestatic.com/current/static/images/hotel/hotelDeals/17211-1x.jpg" alt="loading" /></div>
            <div className="bad">
                 <div className="badge">
                      
                </div>
               
             </div>
             <div className="head">
                  <h3>40%</h3>
                   <p>off</p>
             </div>
                 <div className="star">
                  <h3><i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"orange"}}></i><i class="fas fa-star" style={{"color":"orange"}}></i>
                  <i class="fas fa-star" style={{"color":"#f5f3f0"}}></i></h3>
                  <p>4-star Hot rate hotel in</p>
                  <h2>Manhattan, NY</h2>
               <del>$165</del> <span className="doller_symbol">$</span><span className="doller">99</span> <span>/night</span>
                 </div>
             </div>
             </div>
           <div className="advertisement">
               <div>  </div>
               <p>Advertisements</p>
               <div>   </div>
           </div>
           <div className="ad">
            <div><img src="https://tpc.googlesyndication.com/simgad/10787181852956966775?" alt="loading" /></div>
            <div><img src="	https://s0.2mdn.net/10773729/CBD-SP_US_PROS_Ongoing-Q2-F2_V1_300x250.jpg" alt="loading" /></div>
            <div><img src="https://tpc.googlesyndication.com/simgad/5725789910368400227" alt="loading" /></div>
           </div>
           <div className="gap">
           <hr /><br /><br />
           <hr />
           </div>
           <div className="details">
               <details>
                   <summary>Discover where you can go with Hotwire</summary>
                   <div className="detail">
                       <h3>Popular Hotel Destinations</h3>
                         <a href="">Las Vegas </a>   
                         <a href="">HotelsChicago</a>
                         <a href="">HotelsSan Diego</a> <a href="">HotelsDenver</a><a href=""> HotelsAtlanta</a><a href=""> HotelsAustin</a><a href=""> HotelsOrlando</a>
                     
                   </div>
                   <div className="detail">
                       <h3>Popular Hotel Destinations</h3>
                         <a href="">Las Vegas </a>   
                         <a href="">HotelsChicago</a>
                         <a href="">HotelsSan Diego</a> <a href="">HotelsDenver</a><a href=""> HotelsAtlanta</a><a href=""> HotelsAustin</a><a href=""> HotelsOrlando</a>
                   </div>
                   <div className="detail"><h3>Popular Hotel Destinations</h3>
                         <a href="">Las Vegas </a>   
                         <a href="">HotelsChicago</a>
                         <a href="">HotelsSan Diego</a> <a href="">HotelsDenver</a><a href=""> HotelsAtlanta</a><a href=""> HotelsAustin</a><a href=""> HotelsOrlando</a></div>
                   <div className="detail"><h3>Popular Hotel Destinations</h3>
                         <a href="">Las Vegas </a>   
                         <a href="">HotelsChicago</a>
                         <a href="">HotelsSan Diego</a> <a href="">HotelsDenver</a><a href=""> HotelsAtlanta</a><a href=""> HotelsAustin</a><a href=""> HotelsOrlando</a></div>
                         <h4>Find 4-Star Hotels at 2-Star Prices</h4>
                         <p style={{"fontSize":"x-small"}}>Whether you're looking for awesome hotel deals at your favorite travel sites, unsold rooms, or a wallet-friendly rate that fits your budget, Hotwire offers more than 173,000 hotels throughout North America, Europe, Latin America and Asia. And if you're looking for cheap hotels, or one that's located in your desired destination, Hotwire has just what you're looking for as your go-to source among travel sites. Need help with booking last-minute travel and destinations on your vacation wish list? We've built a killer mobile app and supereasy planning tools that allow you to search and find last minute travel deals!</p>
               </details>
           </div>
           <div className="footer-first">
           <div className="footer">
               <div><h3>Travel with Hotwire</h3>
               <p>Deals</p>
               <p>Hotels</p>
               <p>Cars</p>
               <p>Flights</p>
               <p>Vacations</p>
               <p>Mobile app</p></div>
               <div>
                   <h3>Get to know Hotwire</h3>
                    <p>About us</p>
               <p>Careers</p>
               <p>Press Room</p>
               <p>Site map</p>
               <p>Privacy</p>
               <p>Terms of use</p>
               <p>Blog</p>
               </div>
               <div>
                <h3>Customer service</h3>
                <p>Contact us</p>
               <p>Help center</p>
               <p>Feedback</p>
               <p>Manage subscriptions</p>
               <p>Do Not Sell My Personal Information</p>
               </div>
               <div>
               <h3>Partner with Hotwire</h3>
                <p>Affiliates</p>
               <p>Suppliers</p>
               <p>Advertisers</p>
               <p>Tech Blog</p>
               </div>
              
           
           </div>
           <div className="copyRight">
               <hr />
               <img src="https://ak-secure.hotwirestatic.com/current/static/images/core/partner-logos/expedia_group.svg" alt="loading" />
               <p>© 2021 Hotwire, Inc., an Expedia Group company. All rights reserved. Hotwire, Inc. is not responsible for content on external sites. Hotwire, the Hotwire logo, Hot Rate, and "4-star hotels. 2-star prices." are either registered trademarks or trademarks of Hotwire, Inc. in the US and/or other countries. Other logos or product and company names mentioned herein may be the property of their respective owners. CST 2053390-50; NST 20003-0209.</p>
           </div>
           </div>
        </div>
        </>
    )
}

export default LandingPage
