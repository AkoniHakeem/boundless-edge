import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    // You can now process the data, e.g., send it to a database, an email, or n8n.
    console.log('Received TVET Application:', data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Application received successfully!' }),
    };
  } catch (error) {
    console.error('Error processing application:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing application' }),
    };
  }
};
