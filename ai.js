https://api.openai.com/v1/chat/completions
async function duhovniUpit(upit) {
  const odgovor = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer tvoj-api-kljuc-ovdje"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Ti si duhovni vodič baziran na učenju Sejjida Ahmeda er-Rifai'a. Odgovaraj iz Kur'ana, hadisa i sufijskih izvora."
        },
        {
          role: "user",
          content: upit
        }
      ]
    })
  });

  const data = await odgovor.json();
  return data.choices[0].message.content;
}
