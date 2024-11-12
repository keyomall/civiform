const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const csrf = require('csurf');
const morgan = require('morgan');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const citizenRoutes = require('./routes/citizens');
const formRoutes = require('./routes/forms');
const municipalityRoutes = require('./routes/municipalities');
const authMiddleware = require('./middleware/auth');
const reportRoutes = require('./routes/reports');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/citizens', authMiddleware, citizenRoutes);
app.use('/api/forms', authMiddleware, formRoutes);
app.use('/api/municipalities', authMiddleware, municipalityRoutes);
app.use('/api/reports', authMiddleware, reportRoutes);

// Configuración de seguridad
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // límite de 100 solicitudes por ventana por IP
});
app.use(limiter);

app.use(csrf({ cookie: true }));

// Error handling middleware
app.use(errorHandler);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;