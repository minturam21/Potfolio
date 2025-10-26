
# Shadcn-UI Template Usage Instructions

## ✅ Technology Stack
This project is built with:

- Vite  
- TypeScript  
- React  
- shadcn-ui  
- Tailwind CSS  

All **shadcn/ui components** have been downloaded under `@/components/ui`.

---

## 📂 File Structure

| File / Folder | Description |
|--------------|-------------|
| `index.html` | HTML entry point |
| `vite.config.ts` | Vite configuration file |
| `tailwind.config.js` | Tailwind CSS configuration file |
| `package.json` | NPM dependencies and scripts |
| `src/app.tsx` | Root component of the project |
| `src/main.tsx` | Project entry point |
| `src/index.css` | Existing CSS configuration |
| `src/pages/Index.tsx` | Home page logic |

---

## 🧩 Components
- All shadcn/ui components are **already included**
- Import components from:

```ts
import { Button } from "@/components/ui/button"
````

---

## 🎨 Styling

* Add global styles in: `src/index.css`
* You may create new CSS files if needed
* Use Tailwind utility classes for UI styling

---

## 📌 Notes

* The `@/` alias refers to the `src/` directory
* Avoid re-exporting types that are already imported in TypeScript

---

## 🛠 Development Commands

### 📌 Install Dependencies

```sh
pnpm i
```

### ➕ Add a New Dependency

```sh
pnpm add some_new_dependency
```

### ▶ Start Development Server

```sh
pnpm run dev
```

### 🏗 Build for Production

```sh
pnpm run build
```

---


