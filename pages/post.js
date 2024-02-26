import { useState } from 'react';
const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export default function MyComponent() {
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    try {
      const dataToSend = { value: 'test' };
      const apiUrl = '/api/post/post_api'; // Замените на ваш реальный эндпоинт

      const result = await postData(apiUrl, dataToSend);
      setResponse(result);
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send POST Request</button>
      {response && <div>Response from API: {JSON.stringify(response)}</div>}
    </div>
  );
}