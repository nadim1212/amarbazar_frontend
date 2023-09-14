import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import '../styles/style.css'
 
const Refund = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="term">
      <h2>DELIVERY POLICY</h2> 
<p>





1. At 'Alien Lifestyle'  we are committed to deliver the Products in good condition, so we ship our Products  through renowned and reputed couriers. <br></br>

2.We are committed to deliver our products within 7 (seven) working days after order is confirmed in terms of outside Dhaka. <br></br>

3.We are committed to deliver our Products  within 4 (four) working days after order is confirmed in terms of inside Dhaka.<br></br>

4.We deliver each order only to a single destination as specified in the purchase order.<br></br>

5.Some exceptional cases delivery may be multiple in respect of multiple items of single order/invoice without imposing extra delivery charge.<br></br>

6.Delivery cost inside Dhaka is of Tk. 80/- and outside Dhaka is of Tk. 120/- will be borne by the customer.<br></br>
</p>
    </div>
  );
};

export default Refund;
