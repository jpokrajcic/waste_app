# REMWaste

A React application for managing waste collection schedules and skip hire.

---

## 📝 Changes from Original Page

### 🔄 Enhanced Header Progress Indicator

- Clearly differentiates between **completed**, **current**, and **upcoming** steps.
- All steps are now **visible on mobile**, with step labels hidden for smaller screens instead of entire steps.

### ⚠️ Improved Disclaimer Visibility

- Moved the disclaimer **above the skip size selection grid** to ensure users read it before making a selection.
- Increased its **visual prominence** for better visibility.

### 🧹 Skip Size Image Cleanup

- Removed the **redundant skip size label** from the image to reduce visual clutter.

### 🚫 Improved “Not Allowed on the Road” Indicator

- Applied a **gradient background** behind the text to ensure it remains legible regardless of image background.

### 🎨 General Visual Enhancements

- Increased overall **contrast** for better accessibility.
- Updated styling for **non-selectable items**:
  - Disabled skip size buttons now **show a label or tooltip** explaining why selection is unavailable.

### 🧭 Consistent Navigation Behavior

- Made the **bottom navigation bar visible from the start**, ensuring consistency with other pages in the flow.

---

## 🚀 Features

- Step-by-step skip selection process with visual progress indicator
- Dynamic skip grid with interactive selection and contextual warnings
- Context-aware footer navigation
- Fully responsive UI components
- Real-time data from a remote API

---

## ⚙️ Tech Stack

- **React 19**
- **Vite**
- **React Icons**
- **ESLint** & **Prettier** (for code quality and formatting)
- **Vitest** & **Testing Library** (for unit testing)

---

## 🛠 Getting Started

### Prerequisites

- **Node.js v18+**
- **npm**

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Testing

```bash
npm run test
```

---

## 📁 Project Structure

```
src/
  components/
    App.jsx
    FooterNavigation.jsx
    PageTitle.jsx
    ProgressStepIndicator.jsx
    SkipGrid.jsx
  ...
```

---

## 🧹 Linting & Formatting

- **Lint:** `npm run lint`
- **Format:** `npm run format`

---

## 👤 Author

**Josip Pokrajcic**  
📧 wastelander2929@gmail.com
