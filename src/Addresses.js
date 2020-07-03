import React from "react";
import SameBillingDelivery from "./scenarios/SameBillingDelivery";
import DifferentBillingDelivery from "./scenarios/DifferentBillingDelivery";
import OnlyBilling from "./scenarios/OnlyBilling";
import OnlyDelivery from "./scenarios/OnlyDelivery";
import OnlyOther from "./scenarios/OnlyOther";
import NoAddresses from "./scenarios/NoAddresses";
import BillingOther from "./scenarios/BillingOther";
import DeliveryOther from "./scenarios/DeliveryOther";

export default function Addresses({ scenario }) {
  return (
    <>
      {scenario === "same" && <SameBillingDelivery />}
      {scenario === "different" && <DifferentBillingDelivery />}
      {scenario === "billing" && <OnlyBilling />}
      {scenario === "delivery" && <OnlyDelivery />}
      {scenario === "other" && <OnlyOther />}
      {scenario === "none" && <NoAddresses />}
      {scenario === "billingOther" && <BillingOther />}
      {scenario === "deliveryOther" && <DeliveryOther />}
    </>
  );
}
