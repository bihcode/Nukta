const evradi = [
  {
    naziv: "Evrad Sejjid Ahmed er-Rifai",
    sadrzaj: "Bismillah... Allahu, Allahu, Allahu... Ya Hayyu, Ya Qayyum...",
    napomena: "Uči se petkom nakon džume u tišini srca."
  },
  {
    naziv: "Evrad sabaha",
    sadrzaj: "SubhanAllah, Alhamdulillah, Allahu Akbar (33x svaki)",
    napomena: "Preporučeno ujutro prije izlaska sunca."
  },
  {
    naziv: "HasbunAllahu wa ni‘mal Wakil",
    sadrzaj: "HasbunAllahu wa ni‘mal Wakil (7x)",
    napomena: "Uči se u vremenu straha, potrebe i oslanjanja."
  }
];

function prikaziEvrad() {
  const evrad = evradi[Math.floor(Math.random() * evradi.length)];
  alert(`📿 ${evrad.naziv}\n\n${evrad.sadrzaj}\n\n📝 ${evrad.napomena}`);
}

document.addEventListener("DOMContentLoaded", prikaziEvrad);
