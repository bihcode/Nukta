async function duhovniUpit(pitanje) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: pitanje }),
    });

    const data = await res.json();
    return data.answer || "🤖 Nukta šuti. Možda saburaš pogrešno?";
  } catch (err) {
    return "⚠️ Greška u razgovoru s duhovnim slojem.";
  }
}
