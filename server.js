import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: 'Nema pitanja.' });

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Ti si duhovni vodič iz Rifai tarikata.' },
        { role: 'user', content: question }
      ]
    });

    const answer = completion.data.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Greška u AI odgovoru.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server radi na portu ${PORT}`);
});
