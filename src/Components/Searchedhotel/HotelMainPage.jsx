import { useEffect } from "react";
import axios from "axios";
import "./Hotel.css";
import { link } from "../../utils/Localstorage";

export default function HotelMainPage() {
  useEffect(() => {
    axios.get(`${link}/data`).then((data) => {
      console.log(data.data);
    });
  }, []);

  return (
    <>
      <div className="MainDiv">
        <div className="MainDiv1div">
          <h2>Save up to 60% on Hotels*</h2>
          <h1>Book beyond your wildest means</h1>
        </div>
        <div className="MainDiv2div">
          <img
            src="https://forever.travel-assets.com/flex/flexmanager/images/2021/06/03/WhyChooseHotwire.png"
            alt="done"
          />
        </div>
        <div className="MainDiv3div">
          <h3>Save up to 60% on Hotels</h3>
          <h5>
            Book your hotel through Hotwire and get up to 60%* off. Whether
            you’re looking for a five-star luxury resort, a comfortable downtown
            hotel or a budget option near the airport, we’ve got you covered.
          </h5>
          <h5>
            For low prices, our Hot Rate® Hotels offer deep discounts if you
            book before learning the name of the hotel. You choose the
            neighborhood, star rating and amenities, and we’ll find you an
            incredible deal. Prefer to know the name of the hotel before you
            pay? You have that option too. Whether you’re going on a business
            trip, romantic weekend, family vacation or last-minute getaway –
            wherever and whenever you need a hotel, Hotwire comes through with
            great deals – guaranteed. If you find a lower price for the same
            hotel within 24 hours of booking, we will refund the difference
            How’s that for peace of mind?
          </h5>
          <h5>
            Since 2000, we’ve been making travel and adventure affordable
            through our great deals. We work with top chain and independent
            hotels to offer their unsold inventory at deep discounts. Get a
            five-star hotel at three-star prices – or a two-star hotel for a
            song. With the money you save, you can splurge on a fancy meal or
            once-in-a-lifetime activity, shop for more souvenirs or save for
            your next trip with Hotwire.
          </h5>
        </div>
        <div></div>
      </div>
    </>
  );
}
