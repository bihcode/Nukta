import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Obavezna konfiguracija da parsira JSON tijelo
export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Samo POST metoda je podržana." });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Nema pitanja." });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Ti si duhovni vodič iz Rifai tarikata. Odgovori temeljeni na zikru, saburu, Kur'anu i hadisu.",
        },
        {
          role: "user",
          content: question,
        },
      ],
      temperature: 0.7,
    });

    const answer = completion.data.choices[0].message.content;
    res.status(200).json({ answer });
  } catch (error) {
    console.error("Greška:", error);
    res.status(500).json({ error: "Došlo je do greške u odgovoru." });
  }
}
