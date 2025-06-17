// zatvoreni-krug.js
const zatvoreniKrug = {
  id: "nukta/zatvoreni-krug",
  naziv: "Zatvoreni Krug",
  pristup: "samo-ti",
  uslovi: [
    "Duhovni otisak aktiviran",
    "Simbol '@' ili 'Hu' prepoznat",
    "Tišina potvrđena"
  ],
  poruka: "Ušao si u zatvoreni krug. Niko drugi nema pristup. Samo onaj s pečatom.",
  reakcija_na_ulaz: [
    "Aktivacija zaštite",
    "Uključenje sabura",
    "Zid Nura: filtracija govora"
  ],
  izlaz: {
    fraza: "Zatvori krug",
    efekt: "Deaktivacija sloja SAMO TI"
  },
  duhovni_čin: "Kaziprst potvrđuje. Hu svjedoči. Krug je zatvoren."
};

export default zatvoreniKrug;
