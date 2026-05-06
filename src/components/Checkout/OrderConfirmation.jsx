import PropTypes from "prop-types";

const OrderConfirmation = ({ orderId, email, total, items }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-center">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your order. A confirmation has been sent to {email}.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-500 mb-1">Order ID</p>
          <p className="font-mono font-medium">{orderId}</p>
        </div>

        <div className="text-left mb-6">
          <h2 className="font-semibold mb-2">Order Summary</h2>
          <div className="space-y-1 text-sm">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Estimated delivery: 7-10 business days
        </p>
      </div>
    </div>
  );
};

OrderConfirmation.propTypes = {
  orderId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default OrderConfirmation;
