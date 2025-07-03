# 📚 Merakelysi - Mi Universo Literario

Una aplicación web elegante y funcional para organizar tus lecturas, clubes de lectura y retos literarios. Diseñada con una estética vintage pastel y funcionalidades completas para lectores organizados.

## ✨ Características

### 📖 Gestión de Libros
- Agregar libros con información completa (título, autor, club, capítulos)
- Tracking de progreso por capítulos
- Fechas límite y encuentros con autores
- Celebraciones automáticas al completar lecturas

### 📚 Clubes de Lectura
- Crear y gestionar múltiples clubes
- Información detallada (horarios, miembros, descripción)
- Colores identificadores personalizados
- Editar y eliminar clubes

### 🎯 Retos y Progreso
- Reto anual de lectura estilo Goodreads
- Estadísticas visuales de progreso
- Tracking por club de lectura

### 💾 Persistencia de Datos
- Guardado automático en localStorage
- Los datos se mantienen entre sesiones
- No se pierden al cerrar el navegador

### 🎨 Diseño
- Estética vintage pastel inspirada en libros antiguos
- Tipografía elegante (Playfair Display + Poppins)
- Cursor personalizado de unicornio
- Animaciones suaves y efectos 3D
- Completamente responsive

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación Local

1. **Clonar el repositorio**
```bash
git clone [tu-repositorio]
cd merakelysi
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

### 🌐 Despliegue en Vercel (Recomendado)

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub

2. **Subir código a GitHub**
   - Crea un repositorio en GitHub
   - Sube todos los archivos del proyecto

3. **Conectar con Vercel**
   - En Vercel, haz clic en "New Project"
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite
   - Haz clic en "Deploy"

4. **Configurar dominio personalizado** (opcional)
   - En el dashboard de Vercel, ve a Settings > Domains
   - Agrega tu dominio personalizado

### 🌐 Otras opciones de despliegue

#### Netlify
1. Arrastra la carpeta `dist` (después de `npm run build`) a [netlify.com](https://netlify.com)
2. O conecta tu repositorio de GitHub

#### GitHub Pages
1. En tu repositorio, ve a Settings > Pages
2. Selecciona source: GitHub Actions
3. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📁 Estructura del Proyecto

```
merakelysi/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML principal
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
└── postcss.config.js    # Configuración de PostCSS
```

## 🎨 Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Lucide React** - Iconos
- **LocalStorage** - Persistencia de datos
- **Google Fonts** - Tipografías (Poppins & Playfair Display)

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run deploy` - Despliega a Vercel (requiere configuración)

## 📱 Características Responsive

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🎯 Funcionalidades Futuras

- [ ] Integración con APIs de libros (Google Books, Goodreads)
- [ ] Exportar datos a PDF
- [ ] Modo oscuro
- [ ] Compartir progreso en redes sociales
- [ ] Recordatorios y notificaciones
- [ ] Sinc entre dispositivos (con backend)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 💖 Agradecimientos

- Inspirado en la pasión por la lectura y los clubes de lectura
- Diseño inspirado en estética vintage y libros clásicos
- Iconos por [Lucide](https://lucide.dev/)
- Fuentes por [Google Fonts](https://fonts.google.com/)

---

**Hecho con 💖 para lectoras apasionadas**

¿Preguntas o sugerencias? Abre un issue en el repositorio.