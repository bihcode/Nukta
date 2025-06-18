import path from 'path';
import { fileURLToPath } from 'url';

// Ako koristiš ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Služi statičke fajlove iz public/
app.use(express.static('public'));

// Glavna ruta
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
