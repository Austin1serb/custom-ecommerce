require('dotenv').config();
require('./config/mongoose.config');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const frontEndDomain = process.env.FRONTEND_DOMAIN

app.use(
    cors({
        origin: frontEndDomain,
        credentials: true,
    }),
    express.json({ limit: "50mb" }),
    express.urlencoded({ limit: "50mb", extended: true }),
    (cookieParser()),
);

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'https://maps.googleapis.com', 'https://web.squarecdn.com'],
            styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],
            imgSrc: ["'self'", 'https://res.cloudinary.com'],
            connectSrc: ["'self'", 'https://connect.squareup.com', 'http://localhost:8000'],
            frameSrc: ["'self'"],
            objectSrc: ["'none'"],
            // Add other directives as needed
        },
    },
}));


const productRoutes = require('./routes/products.routes');
const orderRoutes = require('./routes/orders.routes');
const guestRoutes = require('./routes/guest.routes')
const customerRoutes = require('./routes/customers.routes');
const shippoRoutes = require('./routes/shippo.routes');
const { uploadToCloudinary } = require('./services/cloudinary');
const suggestionsRoutes = require('./routes/suggestions.routes');
const paymentRoutes = require('./routes/payment.routes');
const passwordResetRoutes = require('./routes/passwordReset.routes')
const contactRouter = require('./routes/contact.routes');

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api', passwordResetRoutes);
app.use("/api/", suggestionsRoutes);
app.use('/api/payment', paymentRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);
app.use('/api/guest', guestRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/upload", uploadToCloudinary);
app.use('/api/shippo', shippoRoutes);
app.use(bodyParser.json());
app.use('/api/contact', contactRouter);




app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});