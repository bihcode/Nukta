function otvoriAdminPanel(lozinka) {
  const sifra = "destur123"; // Promijeni po potrebi
  if (lozinka === sifra) {
    alert("Dobrodošao u admin panel.");
    // Ovdje će ići logika za uređivanje sadržaja
  } else {
    alert("Pogrešna lozinka.");
  }
}

// Privremeni poziv da testiraš funkciju:
document.addEventListener("DOMContentLoaded", () => {
  const lozinka = prompt("Unesi lozinku za admin panel:");
  otvoriAdminPanel(lozinka);
});
