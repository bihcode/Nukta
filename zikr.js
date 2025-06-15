const zikrovi = [
  { dan: "Ponedjeljak", zikr: "Ya Rahman, Ya Rahim" },
  { dan: "Utorak", zikr: "HasbunAllahu wa ni'mal Wakil" },
  { dan: "Srijeda", zikr: "La ilahe illallah" },
  { dan: "Četvrtak", zikr: "Ya Hayyu, Ya Qayyum" },
  { dan: "Petak", zikr: "Allahumma salli 'ala Muhammed" },
  { dan: "Subota", zikr: "Ya Fattah, Ya Razzaq" },
  { dan: "Nedjelja", zikr: "SubhanAllah, Alhamdulillah, Allahu Akbar" }
];

function prikaziDnevniZikr() {
  const danas = new Date().toLocaleDateString("bs-BA", { weekday: "long" });
  const zikr = zikrovi.find(z => z.dan === danas);
  if (zikr) {
    alert(`Dnevni zikr (${zikr.dan}): ${zikr.zikr}`);
  } else {
    alert("Zikr nije pronađen za danas.");
  }
}

document.addEventListener("DOMContentLoaded", prikaziDnevniZikr);
