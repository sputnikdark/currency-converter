# Währungsrechner (Currency Converter)

> Responsive real-time currency converter web application with German UI, built with modern Vanilla JavaScript and ExchangeRate-API.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://sputnikdark.github.io/currency-converter/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 🇩🇪 Überblick (Deutsch)

Ein leichtgewichtiger und performanter Währungsrechner für den Browser. Die Anwendung ruft aktuelle Wechselkurse über die REST-Schnittstelle von **ExchangeRate-API** ab und aktualisiert die Beträge in Echtzeit bei Benutzereingaben oder Währungswechsel.

### Hauptfunktionen
- **Echtzeit-Kurse:** Direkte Anbindung an die ExchangeRate-API für aktuelle Wechselkurse (EUR, USD, GBP, CHF, PLN, UAH, JPY, CAD).
- **Asynchrone Datenverarbeitung:** Einsatz moderner JavaScript-Features (`async/await`, `fetch()`).
- **In-Memory Caching:** Abgerufene Wechselkurse werden zwischengespeichert (`Map`), um überflüssige Netzwerkabfragen zu minimieren.
- **Interaktiver Währungstausch:** Schneller Tausch zwischen Ausgangs- und Zielwährung per Knopfdruck inklusive Animation.
- **Fehlerbehandlung:** Robuste Behandlung von Netzwerkfehlern und ungültigen Eingaben mit klarem Benutzer-Feedback.
- **Responsives Design:** Modernes, kartenbasiertes UI, optimiert für Mobilgeräte und Desktop.

---

## 🇬🇧 Overview (English)

A lightweight and responsive client-side currency calculator built with Vanilla JavaScript. It interfaces with the **ExchangeRate-API** to provide live exchange calculations with zero external frontend libraries.

### Technical Highlights
- **Vanilla JavaScript (ES6+):** Clean DOM event listeners, async request pipelines, defensive error boundaries.
- **Network Optimization:** Custom caching mechanism prevents duplicate API calls for previously fetched currencies.
- **Responsive CSS:** Fluid flexbox layout, custom focus states, and CSS transitions.

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** Semantic HTML5, CSS3 (Custom Variables, Flexbox, Transitions)
- **Logic:** Vanilla JavaScript (ES6 Modules, Fetch API, Async/Await)
- **External API:** [ExchangeRate-API v4](https://www.exchangerate-api.com/)

---

## 🚀 Getting Started

Clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/sputnikdark/currency-converter.git
cd currency-converter
```

No build step or package installation required.

---

## 👤 Author

**Andrii Rebikov**
- GitHub: [@sputnikdark](https://github.com/sputnikdark)
- Email: [andriirebikov@gmail.com](mailto:andriirebikov@gmail.com)
- Location: Erfurt, Germany
