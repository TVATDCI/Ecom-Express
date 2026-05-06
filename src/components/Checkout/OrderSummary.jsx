import { use } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../../context/ProductContext";

const OrderSummary = ({ shippingData, onBack, onPlaceOrder }) => {
  const { state: cart } = use(ProductContext);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 50 ? 0 : 5;
  const total = subtotal + shippingCost;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Order Summary</h1>
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Shipping To</h2>
          <div className="text-gray-700">
            <p>{shippingData.fullName}</p>
            <p>{shippingData.address1}</p>
            {shippingData.address2 && <p>{shippingData.address2}</p>}
            <p>
              {shippingData.city}, {shippingData.postalCode}
            </p>
            <p>{shippingData.country}</p>
            <p className="mt-1">{shippingData.email}</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div>
          <h2 className="text-lg font-semibold mb-2">Items</h2>
          <div className="space-y-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center py-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>
              {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={onBack}
            className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back to Shipping
          </button>
          <button
            onClick={onPlaceOrder}
            className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  shippingData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string,
    city: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
  onPlaceOrder: PropTypes.func.isRequired,
};

export default OrderSummary;
