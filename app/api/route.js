import axios from 'axios';

let response = '';

export async function GET() {
    try {
      await axios.get('https://lady.mail.ru/article/551727-motivatsionnye-frazy/')
      .then((res) => response = res.data.article.content[16].html);
      return Response.json(response);
  
    } catch (error) {
      return new Response('Ошибка при получении данных', { status: error.response?.status || 500 });
    }
  }