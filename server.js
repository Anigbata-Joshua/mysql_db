
import dotenv from 'dotenv';
import pool from './configs/db.js';
import app from './app.js'
import UserModel from './models/user.model.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

const startSever = async () => {
    try {
        const connection = await pool.getConnection();
        await connection.ping();

        console.log("Database Connected Successfully");

        connection.release()


        //To-Do : await model creation if noit exist
        await UserModel.createTable()

       app.listen(PORT, ()=> console.log(`Server is running on port http://localhost:${PORT}`))
    } catch (error) {
        console.error('Error starting server:', error.message);
        process.exit(1);
    }
}
startSever();