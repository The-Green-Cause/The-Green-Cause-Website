import axios from 'axios';

//@ts-ignore
export default async (req, res) => {
  const fetchLessons = async () => {
    try {
      // Replace with the URL of your Go backend that serves the lessons
      // const response = await axios.get('http://173.225.103.252:8080/lessons');
      // const response = await axios.get(`http://173.225.103.252:8080/lessons`); // Changed from axios.get to axios.post
      const response = await axios.get(`http://173.225.103.252:8080/lessons`); // Changed from axios.get to axios.post

      return response.data;
    } catch (error) {
      console.error(`Error fetching lessons: ${error}`);
      return null;
    }
  };

  if (req.method === 'GET') {
    const lessons = await fetchLessons();

    if (lessons) {
      res.status(200).json(lessons);
    } else {
      res.status(500).json({ error: 'Failed to fetch lessons' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
