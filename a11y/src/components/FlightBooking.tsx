import { useState } from "react";

import "./FlightBooking.css";

const MAX_PASSENGERS = 3;

const FlightBooking = () => {
  const [adultCount, setAdultCount] = useState(1);

  const incrementCount = () => {
    setAdultCount((prev) => Math.min(MAX_PASSENGERS, prev + 1));
  };

  const decrementCount = () => {
    setAdultCount((prev) => Math.max(1, prev - 1));
  };

  return (
    <article className="flight-booking">
      <header>
        <h1 className="heading-2-text">항공권 예매</h1>
      </header>
      <form>
        <fieldset className="passenger-count">
          <legend className="body-text">성인</legend>
          <div className="counter">
            <button type="button" className="button-text" onClick={decrementCount}>
              -
            </button>
            <span>{adultCount}</span>
            <button type="button" className="button-text" onClick={incrementCount}>
              +
            </button>
          </div>
        </fieldset>
        <button type="submit" className="search-button">항공편 검색</button>
      </form>
    </article>
  );
};

export default FlightBooking;
