// pages/api/fetchThumbnail.js
import axios from 'axios';
//@ts-ignore
export default async (req, res) => {
  if (req.method === 'POST') { // Changed from GET to POST
    const { title } = req.body; // Changed from req.query to req.body

    try {
      // const response = await axios.post(`http://173.225.103.252:8080/thumbnail`, { // Changed from axios.get to axios.post
      // const response = await axios.post(`http://173.225.103.252:8080/thumbnail`, { // Changed from axios.get to axios.post
      const response = await axios.post(`http://173.225.103.252:8080/thumbnail`, { // Changed from axios.get to axios.post

        title: title,
      });

      const thumbnail = response.data;

      res.status(200).json({ thumbnail });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch thumbnail' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
