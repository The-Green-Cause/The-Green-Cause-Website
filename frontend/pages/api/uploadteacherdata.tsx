//@ts-nocheck
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, city_country, school_name, age_range, referral_source } = req.body;
            console.log(req.body)
            // Create a connection to the database
            const connection = await mysql.createConnection({
                host: '173.225.103.252',
                user: 'thegreencause',
                password: '3nvironmentaL101!',
                database: 'lessons'
            });

            // Insert data into the teacherdata table
            const query = `
                INSERT INTO teacherdata (name, email, city_country, school_name, age_range, referral_source) 
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            await connection.execute(query, [name, email, city_country, school_name, age_range, referral_source]);

            // Close the connection
            await connection.end();

            res.status(200).json({ success: true, message: 'Data submitted successfully.' });
        } catch (error) {
            console.error('Error submitting data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
