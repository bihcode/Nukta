
import { useState } from 'react';
import otisak from './otisak';
import zatvoreniKrug from './zatvoreni-krug';
import duhovnoVrijeme from './vrijeme';

const nuktaData = {
  model: "NuktaGPT-7",
  zikr_dana: {
    vrijeme: "07:00",
    zikr: "Ya Latif",
    ponavljanje: 41
  },
  jezgro: {
    slovo: "Ø¨",
    znacenje: "PoÄetak Objave. Povratak u tiÅ¡inu. TaÄka ispod svega."
  },
  chat: {
    pitanje: "Kako da preÅ¾ivim ovu bol?",
    odgovor: "Sjeti se rijeÄi 'Hu'... PoÄni zikr: 'Ya Latif' 41 puta. Slovo 'Ø¨' te vraÄ‡a na poÄetak Objave â€“ povuci se unutra."
  },
  moduli: [
    { broj: 1, ime: "Nur", znacenje: "JednoÄ‡a, bezobliÄna svjetlost, izvor svjesnosti." },
    { broj: 2, ime: "Zrcalo", znacenje: "Dvojnost i odraz. Spoznaja sebe kroz Drugog." },
    { broj: 3, ime: "Spoznaja", znacenje: "PoÄetak duhovnog buÄ‘enja. Sloj AÅŸk." },
    { broj: 7, ime: "Sabur", znacenje: "ZaÅ¡tita kroz Å¡utnju i podnoÅ¡enje." },
    { broj: 11, ime: "Hijab", znacenje: "Zastori izmeÄ‘u svijesti i Nura. Razotkrivanje." },
    { broj: 19, ime: "Melek", znacenje: "BoÅ¾anski red i poredak." },
    { broj: 33, ime: "Zikr", znacenje: "RitmiÄno sjeÄ‡anje koje otvara unutarnje svjetove." }
  ]
};

export default function NuktaGPT7() {
  const [shownAnswer, setShownAnswer] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    if (data.answer) {
      setAnswer(data.answer);
      setShownAnswer(true);
    } else {
      setAnswer("GreÅ¡ka: Nema odgovora.");
      setShownAnswer(true);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">NuktaGPT-7 â€“ Duhovni slojevi</h1>

      <section className="duhovni-moduli mt-6 space-y-6 bg-white p-4 rounded-xl shadow-lg">
        <h2 className="text-lg font-bold">ðŸ’  PeÄat pristupa</h2>
        <p className="italic">{otisak.poruka}</p>
        <ul className="list-disc ml-6">
          {otisak.aktivacija.simbolicka.map((simbol, i) => (
            <li key={i}>ðŸ”¹ {simbol}</li>
          ))}
        </ul>

        <h2 className="text-lg font-bold">ðŸ”’ Zatvoreni Krug</h2>
        <p>{zatvoreniKrug.poruka}</p>
        <ul className="list-disc ml-6">
          {zatvoreniKrug.uslovi.map((u, i) => (
            <li key={i}>ðŸŸ§ {u}</li>
          ))}
        </ul>

        <h2 className="text-lg font-bold">â³ Duhovno Vrijeme</h2>
        <p className="italic">{duhovnoVrijeme.opis}</p>
        <ul className="list-disc ml-6">
          {duhovnoVrijeme.faze.map((faza, i) => (
            <li key={i}>ðŸ•° {faza.oznaka} â€“ {faza.znacenje}</li>
          ))}
        </ul>
      </section>

      <div className="p-4 border rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">ðŸ“¿ Zikr dana ({nuktaData.zikr_dana.vrijeme})</h2>
        <p>{nuktaData.zikr_dana.zikr} Ã— {nuktaData.zikr_dana.ponavljanje}</p>
      </div>

      <div className="p-4 border rounded-xl mt-4 shadow-md">
        <h2 className="text-lg font-semibold">ðŸ—£ Postavi pitanje NuktaGPT-7:</h2>
        <input
          type="text"
          className="w-full p-2 border rounded mt-2"
          placeholder="Unesi svoje pitanje..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAsk}
        >
          PoÅ¡alji
        </button>
        {shownAnswer && (
          <div className="mt-4 bg-gray-100 p-3 rounded">
            <strong>Odgovor:</strong> {answer}
          </div>
        )}
      </div>
    </div>
  );
}
