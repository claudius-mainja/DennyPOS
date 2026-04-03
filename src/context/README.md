# DennyPOS Context Providers

**Version:** 1.0.0  
**Designed & Developed by:** Claudius Mainja - Blacklemur Innovations

## AccessibilityContext.jsx
Manages website accessibility settings:

- `fontSize` - Text size (small, medium, large, xlarge)
- `contrast` - Contrast mode (normal, high, low)
- `colorBlindMode` - Color blind filters (none, protanopia, deuteranopia, tritanopia)
- `darkMode` - Dark/Light theme toggle
- `panelOpen` - Accessibility panel visibility

### Usage
```jsx
import { useAccessibility } from '../context/AccessibilityContext'

const { fontSize, setFontSize } = useAccessibility()
```

## LanguageContext.jsx
Manages website language/i18n settings:

- `language` - Current language code
- `changeLanguage` - Function to change language
- `languages` - Available languages array

### Supported Languages
- English (en)
- Afrikaans (af)
- Zulu (zu)
- Xhosa (xh)
- Southern Sotho (st)
- Tswana (tn)
- Venda (ve)
- Tsonga (ts)
- Northern Sotho (nso)

### Usage
```jsx
import { useLanguage } from '../context/LanguageContext'

const { language, changeLanguage, languages } = useLanguage()
```

---

© 2026 DennyPOS. All rights reserved.  
Designed and developed by **Claudius Mainja** under **Blacklemur Innovations**.
