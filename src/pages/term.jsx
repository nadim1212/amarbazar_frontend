import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import '../styles/style.css'
 
const Term = () => {
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
      <h2>Terms & Conditions</h2> 
<p>


 
1 . Please provide actual information while creating your “User ID”. <br></br>

2 . You are solely responsible for your user ID and the activity that occurs while signed in.<br></br>

3 . After registration you will obtain a user ID. Access to this site is not authorized for any other person using your user ID.<br></br>

4 . Please notify us immediately if you become aware that your user id is being used without authorization.<br></br>

5 . No cash value for any voucher.<br></br>

6 . Each deal has a specific term associated with the deal, which will be presented to you at the time you commit to purchase the particular deal.<br></br>

7 . No cash back will be issued for partial redemption of the paid portion of a Voucher, except as required by law.<br></br>

8. charge will be 80 BDT inside of Dhaka city and outside of Dhaka city 120 BDT. <br></br>

9.If any product needs to be returned, it must be done so within 72 hours of delivery.<br></br>

10.Used and damaged products cannot be returned.<br></br>

11.No cash refund, products can only be exchanged.<br></br>

12. 'Alien Lifestyle'  holds the right to alter any terms and conditions at any given condition.<br></br>
</p>
    </div>
  );
};

export default Term;
