# El Pollo Loco – Entwicklungsprotokoll

## 📅 Datum
08. August 2025

## ✅ Fortschritt heute
- Projektstruktur in GitHub erstellt und sauber eingecheckt.
- Canvas-Grundgerüst lauffähig mit Pepe-Charakter.
- Charakter-Animationen (Idle, Walk, Jump) aus Assets eingebunden.
- Parallax-Hintergrund (Himmel, Wolken, Vordergrund) implementiert.
- Kamera- und Level-Scroll-System erstellt.
- Fehler „Background already declared“ behoben (doppelte Klasse in `character.class.js` entfernt).
- Bild wird korrekt angezeigt, Steuerung funktioniert.

## ⚙ Technische Details
- LEVEL_WIDTH wird in `game-config.js` gesetzt, aktuell auf **3840**.
- Hintergrund nutzt `complete_background.png` für Level-Scroll.
- Parallax-Layer: Himmel (0.2), Wolken (0.5), Boden (1.0).

## 📌 Nächstes Ziel (für morgen)
- LEVEL_WIDTH final an Bildbreite anpassen.
- Weitere Background-Layer hinzufügen (z. B. 2nd Layer, 3rd Layer) für mehr Tiefe.
- Erste Gegner-Klasse anlegen (Chicken).
- Einfache Kollisionsprüfung zwischen Charakter und Gegner.
- Testlevel mit Gegnern aufstellen.


