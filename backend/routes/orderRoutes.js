import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import Order from '../models/Order.js';

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private (because we use the 'protect' middleware)
router.post('/', protect, async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' });
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id, // We get this from the protect middleware
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

router.get('/myorders', protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

export default router;