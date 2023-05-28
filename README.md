## SpinStack SDK Documentation

The SpinStack SDK provides a convenient way to integrate the SpinStack Payment System into your web application. This documentation outlines the steps to set up and use the SDK for processing payments.

### Installation

To use the SpinStack SDK, you need to include the SDK script in your HTML file. You can either host the script locally or use a CDN. Here's an example of including the SDK using a CDN:

```html
<script src="https://cdn.spinstack.com/sdk/spinstack-sdk.min.js"></script>
```

### Initialization and Payment Creation

To initialize the SpinStack SDK and create a payment order, you can use the following code:

```javascript
SpinStack.setup("your-api-key").initializePayment({
  tx_ref: "33222",
  amount_in_wei: "400000000000000",
  currency: "ETH",
  customer_email: "realworld@gmail.com",
  customer_name: "David",
  title: "Payment for gas",
  description: "description",
});
```

The `tx_ref` represents the transaction reference, `amount_in_wei` is the payment amount in wei, `currency` indicates the currency (e.g., "ETH"), `customer_email` and `customer_name` are the customer's email address and name, respectively. The `title` and `description` fields provide additional information about the payment.

Refer to the SpinStack SDK documentation for more details on events and their usage
