export const makePayment = async (amount) => {
  const options = {
    key: "YOUR_RAZORPAY_KEY_ID",
    amount: amount * 100,
    currency: "INR",
    name: "GustoSip",
    description: "Purchase",
    image: "/logo.png",

    handler: function (response) {
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
    },

    prefill: {
      name: "Customer",
      email: "customer@example.com",
      contact: "9876543210",
    },

    theme: {
      color: "#0d9488",
    }
  };

  const razor = new window.Razorpay(options);
  razor.open();
};
