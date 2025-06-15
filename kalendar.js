const duhovniDatumi = [
  { datum: "2025-06-15", dogadjaj: "Zikr – Ya Nur" },
  { datum: "2025-07-07", dogadjaj: "Noć dove – Ya Allah, Ya Wadud" },
  { datum: "2025-08-01", dogadjaj: "Dan sabura – Ya Sabur" }
];

function prikaziDuhovniKalendar() {
  const danasnjiDatum = new Date().toISOString().split("T")[0];
  const dogadjaj = duhovniDatumi.find(d => d.datum === danasnjiDatum);
  if (dogadjaj) {
    alert(`Današnji događaj: ${dogadjaj.dogadjaj}`);
  } else {
    console.log("Danas nema posebnog događaja.");
  }
}

document.addEventListener("DOMContentLoaded", prikaziDuhovniKalendar);const duhovniDatumi = [
  { datum: "2025-06-15", dogadjaj: "Zikr – Ya Nur" },
  { datum: "2025-07-07", dogadjaj: "Noć dove – Ya Allah, Ya Wadud" },
  { datum: "2025-08-01", dogadjaj: "Dan sabura – Ya Sabur" }
];

function prikaziDuhovniKalendar() {
  const danasnjiDatum = new Date().toISOString().split("T")[0];
  const dogadjaj = duhovniDatumi.find(d => d.datum === danasnjiDatum);
  if (dogadjaj) {
    alert(`Današnji događaj: ${dogadjaj.dogadjaj}`);
  } else {
    console.log("Danas nema posebnog događaja.");
  }
}

document.addEventListener("DOMContentLoaded", prikaziDuhovniKalendar);
