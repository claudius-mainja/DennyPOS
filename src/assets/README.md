# DennyPOS Assets

**Version:** 1.0.0  
**Designed & Developed by:** Claudius Mainja - Blacklemur Innovations

## Contents

### Images
- `logo.jpg` - DennyPOS logo image (used in navbar, footer, favicon)

### Graphics
- `Illustrations.jsx` - SVG illustrations for:
  - POS Terminal display
  - Dashboard analytics
  - Feature icons
  - Industry icons

### Logo Component
- `Logo.jsx` - React component version of the DennyPOS logo

## Usage

### Logo Image
```jsx
import LogoImg from '../assets/logo.jpg'

<img src={LogoImg} alt="DennyPOS Logo" className="h-12 w-auto" />
```

### SVG Illustrations
```jsx
import { POSIllustration, DashboardIllustration, FeatureIcon } from '../assets/Illustrations'

<POSIllustration />
<DashboardIllustration />
<FeatureIcon icon="cart" />
```

---

© 2026 DennyPOS. All rights reserved.  
Designed and developed by **Claudius Mainja** under **Blacklemur Innovations**.
