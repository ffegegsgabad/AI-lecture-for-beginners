

## Plan: Add Image to PracticeSlide (Slide 12)

The uploaded image shows a ChatGPT custom agent interface ("Frederico - Vendedor"). It will be added to the PracticeSlide in a visually appealing, proportional layout.

### Changes

1. **Copy uploaded image** to `src/assets/frederico-agent.png`

2. **Update `PracticeSlide.tsx`**:
   - Import the image from `@/assets/frederico-agent.png`
   - Restructure layout: text content on the left, image on the right (side-by-side on larger screens)
   - Display image inside a rounded container with subtle border/shadow to look like a device mockup
   - Keep the badge, title, and subtitle but align them left
   - Image will have `max-h` constraint and `object-contain` to stay proportional

