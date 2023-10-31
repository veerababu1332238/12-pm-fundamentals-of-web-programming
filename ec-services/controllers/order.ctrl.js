const orderService = require('../services/order.svc');
const constants = require('../constants');
const jwt = require('jsonwebtoken');
const Razorpay = require('razorpay');

class OrderController {    
    async createOrderId(req, res) {
        try {
            const rpInstance = new Razorpay({
                key_id: 'rzp_test_EzABhFAwaqK12A',
                key_secret: '7lLWpk6G8NLrtPFZMCkTOKrD'
            });
            const order = await rpInstance.orders.create({
                amount: req.body.totalAmount * 100,
                currency: 'INR',
                receipt: 're1',
                payment_capture: '0'
            });
            res.status(constants.STATUS_CODES.CREATED);
            res.send({status: 'Created successfully', order});
        } catch(error) {
            console.log(error);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: error });
        }

    }
    async insert(req, res) {
        try {
            const decodedToken = await jwt.decode(req.headers.authorization);
            req.body.userId = req.body.userId;
            const order = await orderService.create(req.body);
            res.status(constants.STATUS_CODES.CREATED);
            res.send({status: 'Created successfully', order});
        } catch(error) {
            console.log(error);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: error });
        }

    }
    async orderByUserId(req, res) {
        try {
            const orders = await orderService.byUserId(req.params.userId);
            res.status(constants.STATUS_CODES.SUCCESS);
            res.send({status: 'Orders', orders});
        } catch(error) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
}

module.exports = new OrderController();