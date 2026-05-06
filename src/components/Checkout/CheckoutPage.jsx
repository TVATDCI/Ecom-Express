import { useState } from "react";
import { use } from "react";
import { ProductContext } from "../../context/ProductContext";
import ShippingForm from "./ShippingForm";
import OrderSummary from "./OrderSummary";
import OrderConfirmation from "./OrderConfirmation";

const CheckoutPage = () => {
  const [step, setStep] = useState("shipping");
  const [shippingData, setShippingData] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const { state: cart, placeOrder } = use(ProductContext);

  const handleShippingSubmit = (data) => {
    setShippingData(data);
    setStep("summary");
  };

  const handleBackToShipping = () => {
    setStep("shipping");
  };

  const handlePlaceOrder = () => {
    const id = placeOrder(shippingData);
    setOrderId(id);

    console.log(
      `[Ecom-Express] Order confirmation email simulated to: ${shippingData.email}`
    );

    setStep("confirmation");
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shippingCost = subtotal > 50 ? 0 : 5;
    return subtotal + shippingCost;
  };

  if (step === "shipping") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
          <ShippingForm onSubmit={handleShippingSubmit} />
        </div>
      </div>
    );
  }

  if (step === "summary") {
    return (
      <OrderSummary
        shippingData={shippingData}
        onBack={handleBackToShipping}
        onPlaceOrder={handlePlaceOrder}
      />
    );
  }

  if (step === "confirmation") {
    return (
      <OrderConfirmation
        orderId={orderId}
        email={shippingData.email}
        total={calculateTotal()}
        items={cart}
      />
    );
  }

  return null;
};

export default CheckoutPage;
