# Exportadora Romex S.A. — Interfaz Educativa

Proyecto desarrollado para la **Alianza SENATI**.

Interfaz web profesional e interactiva que presenta la historia y el proceso industrial del cacao de **Exportadora Romex S.A.**

---

## ✨ Características

- **Conoce Nosotros** → Enlace directo al sitio oficial de Romex
- **Línea de Tiempo** → Hitos históricos de la empresa (1957 – 2024)
- **Transformación del Grano** → Proceso industrial completo del cacao (7 etapas)
- Diseño responsive y profesional
- Código modular (HTML + CSS + JavaScript)
- Imágenes locales (carpeta `assets/images/`)

---

## 📁 Estructura del Proyecto

```
romex-senati-cacao/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js          ← Datos + rutas de imágenes
│   └── main.js
├── assets/
│   └── images/          ← AQUÍ VAN TUS IMÁGENES
│       ├── 01-recepcion.jpg
│       ├── 02-seleccion.jpg
│       ├── 03-secado.jpg
│       ├── 04-tostado.jpg
│       ├── 05-nibs.jpg
│       ├── 06-calidad.jpg
│       └── 07-almacen.jpg
└── README.md
```

---

## 🖼 Cómo agregar tus imágenes

1. Coloca tus fotos en la carpeta:
   ```
   assets/images/
   ```

2. Nómbralas exactamente así:

| Nombre del archivo     | Paso                        |
|------------------------|-----------------------------|
| `01-recepcion.jpg`     | Recepción de Materia Prima  |
| `02-seleccion.jpg`     | Selección y Limpieza        |
| `03-secado.jpg`        | Secado y Control de Humedad |
| `04-tostado.jpg`       | Tostado                     |
| `05-nibs.jpg`          | Descascarillado → Nibs      |
| `06-calidad.jpg`       | Control de Calidad          |
| `07-almacen.jpg`       | Almacenado y Despacho       |

3. Si usas otra extensión (`.png`, `.webp`), edita las rutas en el archivo `js/data.js`.

---

## 🚀 Cómo ver el proyecto

### Local
```bash
git clone https://github.com/rframosyataco8-ux/romex-senati-cacao.git
cd romex-senati-cacao
# Abre index.html en el navegador
```

### GitHub Pages
1. Settings → Pages
2. Source: `main` branch → `/ (root)`
3. El sitio estará en:  
   **https://rframosyataco8-ux.github.io/romex-senati-cacao/**

---

## 🛠 Tecnologías

- HTML5 semántico
- CSS3 moderno (variables CSS, Flexbox, Grid)
- JavaScript vanilla
- Google Fonts (Inter) + Material Icons

---

**Proyecto educativo • Alianza SENATI • Exportadora Romex S.A.**
