## Oystr Onboarding SDK Documentation

The Onboarding SDK provides a convenient way to integrate the SpinStack Payment System into your web application. This documentation outlines the steps to set up and use the SDK for processing payments.

### Installation

To use the Onboarding SDK, you need to include the SDK script in your HTML file. You can either host the script locally or use a CDN. Here's an example of including the SDK using a CDN:

```
npm install @myestery/oystr-onboarding
```

### Initialization and Onboarding Creation

To initialize the SpinStack SDK and create a payment order, you can use the following code:

```javascript
Onboarding.setup("pub-41c31d69-1dcc-4b2c-89b9-2c7e335df4bc").initialize({
  user_id: "1235678",
  reference: "1235678",
});
```
