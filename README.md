# Next.js SEO and Rendering Test Project

This project explores how **Next.js** handles **SEO**, **Server-Side Rendering (SSR)**, and **Client-Side Rendering (CSR)**. 

As a Flutter developer, I aim to convert existing Next.js components into Flutter widgets for ease of access. Additionally, I plan to implement all Flutter widgets in Next.js to enable seamless integration without requiring knowledge of HTML and CSS basics.

---

## Use Cases

### Case 1: User Navigation
- When a user navigates to a page directly from the homepage using a link:
  - A `loading.js` component is displayed until the products are fully loaded.
  - This behavior mimics Flutter's `go_router` in Single Page Web Apps.

### Case 2: Bot Crawling
- When a bot accesses a URL directly (e.g., `https://nextjs-three-rouge-16.vercel.app/products`):
  - In the browser, users will see a loading shimmer skeleton.
  - However, bots will read the fully rendered page, including all products.
  - The "Loading Circular Progress Indicator" in the favicon area simulates a native `.html` page loading experience.

---

## Testing Fully Rendered Pages

To verify that the page is fully rendered before being shown to bots:

1. Use the [Google Rich Results Test](https://search.google.com/test/rich-results):
   - Paste the URL (e.g., `https://nextjs-three-rouge-16.vercel.app/products` or `https://nextjs-three-rouge-16.vercel.app/products/1`).
   - Click **"View Tested Page"**.
   - Navigate to the **SCREENSHOT** tab to see the fully rendered page with all products.

2. Use [PageSpeed Insights](https://pagespeed.web.dev):
   - Analyze the page and review the screenshot to confirm full rendering.

---

## Commands

### Create a New Next.js App
```bash
npx create-next-app@latest
```

### Take a Release Build
```bash
npm run build
npm run export
```

### Run the App
```bash
npm run dev
```