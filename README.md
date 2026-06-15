# 🌐 Cloudflare Infrastructure Showcase & Simulator
Profesionálně navržená, plně responzivní webová aplikace vytvořená jako školní projekt. Stránka slouží jako edukativní prezentace globální sítě **Cloudflare**, její architektury a klíčových služeb, doplněná o interaktivní síťový simulátor v JavaScriptu.

---

## 🚀 Technické standardy projektu

* **Sémantické HTML5:** Kód využívá moderní sémantické tagy (`<main>`, `<section>`, `<article>`) pro maximální přístupnost (Accessibility) a správnou SEO strukturu.
* **Pokročilá CSS Architektura:** Designový systém je postaven na nativních CSS proměnných (`:root`), moderním **CSS Grid** layoutu a plynulých mikro-interakcích s cubic-bezier přechody.
* **Vanilla JavaScript (Asynchronní UI):** Kód neobsahuje žádné externí knihovny ani frameworky (jako jQuery). Využívá čistý moderní JavaScript pro řízení animací a logiku widgetu.

## ⚡ Implementované JS & CSS Funkce

1. **Intersection Observer API (Scroll Animace):** JavaScript dynamicky sleduje pozici uživatele na stránce. Jakmile karta vstoupí do zorného pole, plynule se vynoří a rozsvítí pomocí CSS transformací.
2. **Anycast Network Simulator:** Interaktivní widget, který po kliknutí simuluje asynchronní požadavek na nejbližší edge server Cloudflare a generuje reálnou nízkou odezvu (ping) v milisekundách.

## 📁 Struktura repozitáře

```text
├── index.html   # Sémantická struktura a textový obsah aplikace
├── style.css    # Designový systém, prémiový Dark Mode a animace
├── script.js    # Logika pro scroll animace a síťový simulátor
└── README.md    # Technická dokumentace (tento soubor)
