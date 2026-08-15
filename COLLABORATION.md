# 🤝 KUZKA LAB — GUÍA DE TRABAJO COLABORATIVO EN GITHUB

Este proyecto está configurado para permitir el desarrollo distribuido en paralelo entre dos o más programadores que trabajan en equipos separados para el **UNESCO Youth Hackathon 2026**.

---

## 1. 🚀 PASOS INICIALES: CONFIGURAR EL REPOSITORIO EN GITHUB

Si eres la persona que crea el repositorio por primera vez:

```bash
# 1. Crear el repositorio en GitHub (desde la web de GitHub: nuevo repo "kuzka-lab-unesco")

# 2. Conectar tu carpeta local con GitHub (reemplaza la URL con la tuya)
git remote add origin https://github.com/TU_USUARIO/kuzka-lab-unesco.git

# 3. Subir la rama main inicial
git branch -M main
git push -u origin main

# 4. Crear y subir la rama madre de integración (dev)
git checkout -b dev
git push -u origin dev
```

---

## 2. 👥 CÓMO SE CONECTA TU COMPAÑERO (DESDE SU PROPIO EQUIPO)

Tu compañero debe seguir estos sencillos pasos en su computadora:

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/kuzka-lab-unesco.git
cd kuzka-lab-unesco

# 2. Posicionarse en la rama dev
git checkout dev

# 3. Crear su propia rama de trabajo asignada (ejemplo: Fase 2 - Botiquín Figital)
git checkout -b feature/fase2-kuzkakit
```

---

## 3. 🌿 REPARTICIÓN DE TRABAJO POR RAMAS DE FEATURES

Para trabajar sin pisarse el código entre equipos:

| Módulo / Fase | Rama Asignada | Desarrollador | Archivos Exclusivos |
| :--- | :--- | :--- | :--- |
| **Sistema de Diseño (Tokens)** | `feature/shared-design-system` | Compartido / Previo | `src/shared/` |
| **Fase 1: KUZKACHECK** | `feature/fase1-kuzkacheck` | Desarrollador A | `src/fase1-check/` |
| **Fase 2: KUZKAKIT** | `feature/fase2-kuzkakit` | Desarrollador B | `src/fase2-kit/`, `public/assets/` |
| **Fase 3: KUZK!PET** | `feature/fase3-kuzkipet` | Desarrollador A / B | `src/fase3-pet/` |

---

## 4. 🔄 FLUJO DIARIO Y EVITACIÓN DE CONFLICTOS (*MERGE CONFLICTS*)

### A. Antes de empezar a programar cada día:
```bash
git checkout dev
git pull origin dev
git checkout TU_RAMA_DE_FEATURE
git rebase dev
```

### B. Guardar y subir avances al finalizar la sesión:
```bash
git add .
git commit -m "feat(fase2): agregar componente Crypto-Grid vectorial"
git push origin TU_RAMA_DE_FEATURE
```

### C. Conectar las partes en `dev` (Pull Request):
1. Ve a GitHub y abre un **Pull Request (PR)** desde `TU_RAMA_DE_FEATURE` hacia `dev`.
2. Revisa los cambios con tu compañero y haz clic en **Merge Pull Request**.
3. Ambos hacen `git checkout dev && git pull origin dev` en sus equipos para tener la aplicación unificada.

---

## 5. 🎨 NORMAS INVIOLABLES DE CÓDIGO & BRANDING
* **Fondo obligatoria:** `#FBF9F5` (Blanco Hueso).
* **Texto obligatorio:** `#111111` (Negro Carbón Neutro). **NO USAR MARRÓN.**
* **Tipografías:** `Gill Sans MT Ext Condensed Bold` (Logos/Títulos) y `Montserrat` (Cuerpo/UI).
* Consultar [`design.md`](file:///c:/Users/BELEN/Documents/hackathon-unesco/design.md) para más detalles.
