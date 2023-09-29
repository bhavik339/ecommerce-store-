import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillContacts } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

export const Services = () => {
  return (
    <section className="servicesWraper">
      <div className="Services">
        <div className="delivery_service">
          <p className="featuredIcon">
            <TbTruckDelivery />
          </p>
          <p>Super Fast And Free Dilivery</p>
        </div>
        <div className="shipping_and_moneyBack_service">
          <div className="shipping_service">
            <p className="featuredIcon">
              <AiFillContacts />
            </p>
            <p>Non-Contact Shipping</p>
          </div>
          <div className="moneyBack_service">
            <p className="featuredIcon">
              <GiReceiveMoney />
            </p>
            <p>Money-Back Guaranteed</p>
          </div>
        </div>
        <div className="private_payment_service">
          <p className="featuredIcon">
            <RiSecurePaymentLine />
          </p>
          <p>Super Secure Payment System</p>
        </div>
      </div>
    </section>
  );
};
