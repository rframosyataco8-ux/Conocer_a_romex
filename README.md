# Exportadora Romex S.A. — Interfaz Educativa

Proyecto para la **Alianza SENATI**.

## Estructura del menú principal

4 tarjetas limpias y ordenadas:

1. **Conoce Nosotros** → Enlace al sitio oficial
2. **Línea de Tiempo** → Historia de la empresa
3. **Transformación** → Proceso del grano de cacao
4. **Video** → Video embebido desde Google Drive

---

## Cómo colocar tu video de Google Drive

1. Sube el video a Google Drive
2. Clic derecho → **Compartir** → elige **Cualquier persona con el enlace**
3. Copia el enlace. Ejemplo:
   ```
   https://drive.google.com/file/d/1ABC123xyz456/view?usp=sharing
   ```
4. El **ID** es la parte larga: `1ABC123xyz456`
5. Abre el archivo `index.html`
6. Busca esta línea:
   ```html
   src="https://drive.google.com/file/d/VIDEO_ID_AQUI/preview"
   ```
7. Reemplaza `VIDEO_ID_AQUI` por tu ID real:
   ```html
   src="https://drive.google.com/file/d/1ABC123xyz456/preview"
   ```

Guarda y el video se reproducirá dentro del sitio.

---

## Cómo clonar

```bash
git clone https://github.com/rframosyataco8-ux/romex-senati-cacao.git
cd romex-senati-cacao
```

Abre `index.html` en el navegador.

---

**Proyecto educativo • Alianza SENATI**
