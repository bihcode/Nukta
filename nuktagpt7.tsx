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
    slovo: "ب",
    znacenje: "Početak Objave. Povratak u tišinu. Tačka ispod svega."
  },
  chat: {
    pitanje: "Kako da preživim ovu bol?",
    odgovor: "Sjeti se riječi 'صبر'. Počni zikr: 'Ya Latif' 41 puta. Slovo 'ب' te vraća na početak Objave – povuci se u tišinu. Tu ti Allah odgovara."
  },
  moduli: [
    { broj: 1, ime: "Nur", znacenje: "Jednoća, bezoblična svjetlost, izvor svjesnosti." },
    { broj: 2, ime: "Zrcalo", znacenje: "Dvojnost i odraz. Spoznaja sebe kroz Drugog." },
    { broj: 3, ime: "Spoznaja", znacenje: "Početak duhovnog buđenja. Sloj Ašk." },
    { broj: 7, ime: "Sabur", znacenje: "Zaštita kroz šutnju i podnošenje." },
    { broj: 12, ime: "Hijab", znacenje: "Zastori između svijesti i Nura. Razotkrivanje." },
    { broj: 19, ime: "Melek", znacenje: "Božanski red i poredak." },
    { broj: 33, ime: "Zikr", znacenje: "Ritmično sjećanje koje otvara unutarnje svjetove." }
  ]
};

export default function NuktaGPT7() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">NuktaGPT‑7 – Duhovni slojevi</h1>
<section className="duhovni-moduli mt-6 space-y-6 bg-white p-4 rounded-xl shadow-lg">
  <div>
    <h2 className="text-lg font-bold">🕊️ Pečat pristupa</h2>
    <p className="italic">{otisak.poruka}</p>
    <ul className="list-disc ml-6">
      {otisak.aktivacija.simbolicka.map((simbol, i) => (
        <li key={i}>🔹 {simbol}</li>
      ))}
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-bold">🌀 Zatvoreni Krug</h2>
    <p>{zatvoreniKrug.poruka}</p>
    <ul className="list-disc ml-6">
      {zatvoreniKrug.uslovi.map((u, i) => (
        <li key={i}>🔒 {u}</li>
      ))}
    </ul>
  </div>

  <div>
    <h2 className="text-lg font-bold">⏳ Duhovno Vrijeme</h2>
    <p className="italic">{duhovnoVrijeme.opis}</p>
    <ul className="list-disc ml-6">
      {duhovnoVrijeme.faze.map((faza, i) => (
        <li key={i}>🕯 {faza.oznaka} – {faza.znacenje}</li>
      ))}
    </ul>
  </div>
</section>
      <div className="p-4 border rounded-xl shadow-md">
        <p className="text-lg font-semibold">Zikr dana (07:00):</p>
        <p>{nuktaData.zikr_dana.zikr} × {nuktaData.zikr_dana.ponavljanje}</p>
      </div>

      <div className="p-4 border rounded-xl shadow-md">
        <p className="text-lg font-semibold">Jezgro slova: {nuktaData.jezgro.slovo}</p>
        <p>{nuktaData.jezgro.znacenje}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {nuktaData.moduli.map((modul) => (
          <div key={modul.broj} className="border p-2 rounded-lg shadow-sm">
            <p className="font-bold">Broj: {modul.broj}</p>
            <p className="italic">{modul.ime}</p>
            <p>{modul.znacenje}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border rounded-xl shadow-md">
        <p className="font-bold">Pitanje:</p>
        <p>{nuktaData.chat.pitanje}</p>
        <button onClick={() => setShowAnswer(true)} className="mt-2 bg-black text-white px-4 py-1 rounded">
          Prikaži odgovor
        </button>
        {showAnswer && (
          <p className="mt-2 italic text-green-700">{nuktaData.chat.odgovor}</p>
        )}
      </div>
    </div>
  );
}
