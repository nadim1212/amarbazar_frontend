import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import '../styles/style.css'
 
const Delivery = () => {
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
  <h2>Exchange & Refund policy</h2>
  <p>

 1. If your product is defective/damaged or incorrect/incomplete at the time of delivery, please contact us within the applicable return window of 24 hours. Your product may be eligible for a refund or replacement depending on the product category and condition.<br>
</br>

2. Please note that products are not eligible for a return if the customer has a change of mind.<br></br>

3. You will always find the relevant terms and conditions on the product page (Return Policy tab).<br></br>

<h3>VALID REASONS TO RETURN AN ITEM</h3>

1. Delivered Product is damaged (physically destroyed or broken) / defective.<br></br>

2. Delivered Product is incorrect (presentation / specification different from website) / incomplete (missing parts).<br></br>

3. The size of a product does not match with the one ordered.<br></br>

<h3>REASONS THAT WON’T BE CONSIDERED VALID</h3>

1. You no longer have a use for the product  <br></br>

2. You have changed your mind about the purchase after the order has been placed.<br></br>

<h3> TERMS & CONDITIONS TO RETURN A PRODUCT </h3>

1. The product must be unused, unworn, and unwashed.<br></br>

2. The product must include the original tags, user manual, warranty cards, freebies, and accessories.<br></br>

3. The product must be returned in the original and undamaged manufacturer packaging/box.<br></br>

<h3>ISSUANCE OF REFUNDS</h3>

If your product is eligible for a refund, you can choose to refund via exchange courier. Once we have received your product (2-3 working days after the customer has initiated return delivery) and it has undergone quality control (1-2 working days), the expected refund processing window is 7 working days.

Sometimes due to unwanted issues and transportation delays, the refund process may take a bit longer than the expected window.
</p>
    </div>
  );
};

export default Delivery;
