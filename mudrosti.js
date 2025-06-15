const mudrosti = [
  "Srce koje spominje Allaha nikada nije pusto.",
  "Ko se pouzda u Allaha – Allah mu je dovoljan.",
  "Put evlije je tišina, zikr i služenje.",
  "Sabur je ključ svih duhovnih vrata.",
  "Ašk je plamen koji gori bez dima."
];

function prikaziMudrostDana() {
  const danas = new Date().getDate();
  const mudrost = mudrosti[danas % mudrosti.length];
  alert(`Mudrost dana: "${mudrost}"`);
}

document.addEventListener("DOMContentLoaded", prikaziMudrostDana);
