### 🧪 UI/UX Downgrade — Test Task Description

As part of the test assignment, I intentionally downgraded the login page UI/UX using browser DevTools while keeping the layout visually intact. Below is a summary of the changes I made and their impact on user experience and accessibility.

---

#### 🎨 1. Monochrome Design

- **What was changed:** The entire color scheme was converted to grayscale, including illustrations and UI elements.
- **Why:** Removing color eliminates visual hierarchy and reduces the ability to guide the user’s attention.
- **UX impact:** The interface feels flat, making it harder to identify key elements at a glance.

---

#### 🔀 2. Altered Tab Order

- **What was changed:** The tab navigation order was modified so that the focus first moves through third-party login buttons (Apple, Facebook, Google), and only afterwards reaches the email/password fields and the main Sign In button.
- **Why:** To break the expected and intuitive flow of interaction.
- **UX/Accessibility impact:** Keyboard users, especially those relying on assistive technologies, will find navigation more confusing and time-consuming.

---

#### 🌫 3. Reduced Visual Contrast

- **What was changed:** Text, buttons, and input fields were styled with lower contrast against the background.
- **Why:** Lower contrast decreases readability and visibility.
- **UX/Accessibility impact:** Users with visual impairments or in bright environments may struggle to read text or recognize interactive elements.

---

#### 💛 4. Distracting Accent on Third-Party Login

- **What was changed:** Third-party login buttons were styled in bright yellow, while the primary Sign In button was kept neutral.
- **Why:** To mislead user attention by giving disproportionate visual importance to secondary actions.
- **UX impact:** The user might mistakenly prioritize alternative login options over the main flow.

---

#### ⚠️ Overall Effect

These changes deliberately degrade the user experience and accessibility by violating key UI/UX principles (visual hierarchy, intuitive navigation, readability, and focus management). Despite the visual downgrades, the interface remains functional and appears "intact", which fulfills the requirement of breaking UX without breaking the layout.