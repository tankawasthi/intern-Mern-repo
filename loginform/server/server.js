import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

app.use(cors({ origin: 'http://localhost:5175', credentials: true }));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('RBAC API is running');
});

// Auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`API is running on port http://localhost:${PORT}`);
    });
});
