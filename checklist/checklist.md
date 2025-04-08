## ✅ UI Testing Checklist

This checklist covers UI, accessibility, functional, and backend validations for any button on the web application.

---

### 1. 🎨 Visual & UI Checks

- [ ] **Default State**
    - Matches design specs (colors, sizes, text).
    - No pixelation or blurry icons.
- [ ] **Hover State**
    - Provides visual feedback (e.g., color change, shadow, animation).
- [ ] **Active/Pressed State**
    - Shows temporary change (e.g., scale down).
- [ ] **Disabled State**
    - Grayed out, cursor: `not-allowed`, non-interactive.
- [ ] **Focus State**
    - Visible outline/glow when navigating via keyboard (Tab).

---

### 2. ♿ Accessibility (A11y)

- [ ] **ARIA Attributes**
    - Elements have `aria-label` where text is unclear.
    - `aria-disabled` is used for disabled interactive elements.
- [ ] **Keyboard Navigation**
    - Components are focusable and triggerable via Enter/Space.
    - Focus order follows a logical sequence.
- [ ] **Contrast Ratio**
    - Minimum 4.5:1 contrast between text and background (WCAG AA).

---

### 3. ⚙️ Functional Checks

- [ ] **Basic Interaction**
    - Click triggers correct behavior (e.g., submit form, open modal).
- [ ] **Asynchronous Behavior**
    - Shows loading indicators during async actions.
    - Buttons are disabled during requests.
- [ ] **Error Handling**
    - Displays clear error messages (e.g., “Invalid email”).
    - Application remains responsive after errors.

---

### 4. 🔐 Security & Compliance

- [ ] **CSRF Protection**
    - Token present in unsafe requests (POST/PUT/DELETE).
    - Invalid token → `403 Forbidden`.
- [ ] **Input Sanitization**
    - Escapes XSS payloads like `<script>`.
    - SQL injection attempts are blocked at backend/API.
- [ ] **GDPR Compliance**
    - Analytics scripts are disabled unless consent is given.

---

### 5. 🌐 API & Backend Integration

- [ ] **Request Validation**
    - Correct HTTP method is used.
    - Required headers are present (`Authorization`, `X-CSRF-Token`).
    - Payload matches user input (check via DevTools → Network).
- [ ] **Response Handling**
    - `200 OK` → UI updates correctly.
    - `4xx/5xx` → Friendly error message shown, no stack traces.
    - Timeout (e.g., 30s) → “Request timed out” message appears.
- [ ] **Idempotency**
    - Duplicate actions (e.g., double click on "Pay") result in only one request.

---

### 6. 🚀 Performance

- [ ] **Client-Side**
    - Interactions respond within 300ms (per Lighthouse).
    - No memory leaks after 50+ interactions (DevTools → Memory).
- [ ] **Network**
    - 95% of API responses return in ≤2 seconds.
    - App handles 100+ concurrent requests without crashes.

---

### 7. 🧪 Edge Cases

- [ ] **User Roles**
    - Restricted features are hidden/disabled for unauthorized users.
    - Admin-only actions → `403 Forbidden` for non-admins.
- [ ] **Network Conditions**
    - Offline → "No internet connection" message is shown.
    - Slow 3G → Loaders persist until data is loaded.
- [ ] **Localization**
    - RTL languages → layout mirrors correctly.
    - Long translations do not break UI or get truncated.

---

### 8. 📱 Device & Browser Coverage

- [ ] **Desktop Browsers**
    - Chrome, Firefox, Safari, Edge (latest ±2 versions).
- [ ] **Mobile**
    - Tap targets ≥48×48px (WCAG standard).
    - No hover-only interactions (fallbacks for touch devices).
- [ ] **Screen Readers**
    - VoiceOver/NVDA announces button states and status changes.

---

### 9. 🔒 Permissions

- [ ] **Camera/Location Access**
    - Requests permissions when needed (e.g., QR scanning).  