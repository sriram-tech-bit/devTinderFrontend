import axios from 'axios'
import React from 'react'
import { Base_URL } from '../utils/constants'
import  { useState, useEffect } from "react";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(null); // null = loading
  const [membershipType, setMembershipType] = useState("");

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(Base_URL + "/premium/verify", {
        withCredentials: true,
      });
      setIsUserPremium(!!res.data.isPremium);
      setMembershipType(res.data.membershipType || "");
      return !!res.data.isPremium;
    } catch (err) {
      console.error(err);
      setIsUserPremium(false);
      return false;
    }
  };

  // The webhook arrives a few seconds after payment, so poll until it lands
  const waitForPremium = async () => {
    for (let i = 0; i < 10; i++) {
      await new Promise((r) => setTimeout(r, 2000));
      if (await verifyPremiumUser()) return;
    }
  };

  const handlePayment = async (planType) => {
    try {
      const res = await axios.post(
        Base_URL + "/payment/create",
        { planType },
        { withCredentials: true }
      );
      const { orderId, amount, currency, notes, keyId } = res.data;

      const options = {
        key: keyId,
        amount,
        currency,
        name: "devTinder",
        description: `${planType} membership`,
        order_id: orderId,
        prefill: {
          name: `${notes.firstName} ${notes.lastName}`,
          email: notes.emailId,
        },
        theme: { color: "#F37254" },
        handler: waitForPremium,
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

  if (isUserPremium === null) return <div className="text-center my-10">Loading...</div>;

  return isUserPremium ? (
    <h1 className="text-center my-10 text-2xl">
      You are already a premium user {membershipType && `(${membershipType})`}
    </h1>
  ) : (
    /* your Silver / Gold cards, unchanged */
  );
};