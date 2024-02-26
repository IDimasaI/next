export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body; // Получаем данные из тела POST-запроса
  
        // Просто отправим полученные данные обратно
        res.status(200).json({ receivedData: data });
      } catch (error) {
        console.error('Error processing POST request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      // Если метод запроса не POST, вернем ошибку метода
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }