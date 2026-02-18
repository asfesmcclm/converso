# 🏭 Censo Empresas Cuenca 2026

Aplicación web progresiva (PWA) para consultar el censo de empresas de la provincia de Cuenca de cara a las elecciones sindicales 2026.

Funciona tanto en navegador de escritorio como instalada en el móvil (Android/iOS), **con soporte offline**.

---

## 📁 Estructura del proyecto

```
censo-cuenca-2026/
├── index.html       → Aplicación principal (buscador de empresas)
├── datos.js         → Base de datos de empresas en formato JavaScript
├── conversor.html   → Herramienta para regenerar datos.js desde Excel
├── sw.js            → Service Worker (soporte offline y caché)
├── manifest.json    → Configuración PWA (instalación en móvil)
├── icon.png         → Icono de la aplicación
└── README.md        → Este archivo
```

---

## 🚀 Cómo usar

### Consultar empresas
Abre `index.html` en cualquier navegador. Puedes:
- **Buscar** por nombre de empresa, municipio, sector o CIF.
- **Filtrar** entre todas las empresas, las que tienen elecciones (✅) y las empresas blancas (⚪).
- Ver el **recuento** dinámico según el filtro activo.

### Instalar en el móvil
1. Abre la aplicación en Chrome (Android) o Safari (iOS).
2. Pulsa *"Añadir a pantalla de inicio"* cuando el navegador lo sugiera, o desde el menú del navegador.
3. La app funcionará sin conexión gracias al Service Worker.

---

## 🔄 Actualizar los datos

Cuando haya cambios en el censo:

1. Abre `conversor.html` en el navegador.
2. Carga el nuevo archivo `.xlsx` (mismo formato que el original).
3. Copia el contenido generado.
4. Reemplaza el contenido del archivo `datos.js` con el nuevo.
5. Sube los cambios a GitHub.

### Formato esperado del Excel

| Columna | Campo       |
|---------|-------------|
| A       | Id          |
| B       | EMPRESA     |
| C       | DIRECCIÓN   |
| D       | MUNICIPIO   |
| E       | CP          |
| F       | SSOCIAL     |
| G       | CIF         |
| H       | TRABAJADORES|
| I       | CNAE        |
| J       | sector      |
| K       | blanca (`Si` = empresa blanca / `No` = con elecciones) |

---

## ⚙️ Lógica de tipos

- **`BLANCA`** (rojo): la columna K vale `Si` → empresa sin representación sindical / sin elecciones.
- **`SI`** (verde): la columna K vale `No` → empresa con elecciones sindicales.

---

## 🌐 Publicar en GitHub Pages

1. Sube todos los archivos a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En *"Branch"*, selecciona `main` y carpeta `/ (root)`.
4. Guarda. En unos minutos la app estará disponible en `https://tu-usuario.github.io/nombre-repo/`.

---

## 📊 Datos actuales

- **390 empresas** en la base de datos (febrero 2026)
- 199 con elecciones sindicales
- 191 empresas blancas
