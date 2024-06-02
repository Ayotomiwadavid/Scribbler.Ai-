require('dotenv').config()
let stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
let userSubPlan;

let subscriptionMap = new Map([
    [1, {priceInCent: 1900, name: 'Premium Package', PackageInterval: '1mon'}],
    [2, {priceInCent: 10000, name: 'Coporate Package', PackageInterval: '1y'}]
])

const FreeTrial = () => {
};

const premiumPackage = () => {
}

const corporatePackage = () => {}

const subscribeToAPlan = (req, res, next) => {
    const subscriptionDetails = req.body;
    let {id} = subscriptionDetails;
    userSubPlan = id
        console.log(id);
};

module.exports = {subscribeToAPlan}