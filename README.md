# 🧪 QA Automation para Blue Banana — Playwright + TypeScript

Este repositorio contiene una suite de pruebas altamente escalable y parametrizable basada en [Playwright](https://playwright.dev/) y [TypeScript](https://www.typescriptlang.org/), diseñada para garantizar la calidad funcional de tiendas online multiidioma y multidispositivo como [Blue Banana](https://www.bluebananabrand.com/).

---

## 🚀 Características clave

### ✅ Alta parametrización

- 🌍 Test en múltiples **idiomas** (`es`, `en`, ...).
- 📱 Compatibilidad con **múltiples dispositivos** (desktop y mobile).
- 🧩 Configuración de **navegadores cruzados**: Chrome, Safari, Firefox.
- 🧪 Control granular de rutas, títulos, URLs esperadas y locators vía `i18n` y `menuOptions`.

### 🏗️ Escalabilidad

- ♻️ Sistema de definición de menús reutilizable y dinámico.
- 📚 Separación clara por capas: configuración, tipos, páginas y tests.
- 🧵 Encapsulación avanzada con `MenuPage` para gestionar la lógica de interacción paso a paso.
- ⚙️ Capaz de ejecutar docenas de combinaciones (device × idioma) en paralelo con configuración mínima.

---
