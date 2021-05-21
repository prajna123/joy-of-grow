import React from "react";
import '../Product/Popup.css';
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.productId == 1 ?
        <div>
            <h2>Investment Advisory</h2>
            <h3>Strategize your future</h3>
            <p>We'll assess your present income, expenditure, future plan, goal, investment if any, and strategize for optimal return.</p>
            <p>With this service we should be able to chalk out a plan, select correct asset class, investment product and asset distribution.</p>
        </div> : null}
        {props.productId == 2 ?
        <div>
            <h2>Portfolio Management</h2>
            <h3>Equity portfolio for Investment</h3>
            <p>With this service we’ll manage your money and provide guaranteed return of 10% per annum. We’ll charge 10% of your profit (along with stipulated fees) to give you timely entry and exit plan of a particular script as per our research and analysis.</p>
            <p>Our time frame of investment mon 6 months, max 3-5 yrs. It’s a pure investment plan as we don’t encourage any trading / intraday.</p>
        </div> : null}
        {props.productId == 3 ?
        <div>
            <h2>Income Generation</h2>
            <h3>Steps towards Financial Freedom</h3>
            <p>With this service we’ll navigate you to the financial freedom and additional income generation. This is a long-term plan; no shortcut is available</p>
            
        </div> : null}
      </div>
    </div>
  );
};
 
export default Popup;