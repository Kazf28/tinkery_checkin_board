# Tinkery Check-In Design Guidelines

## Design Approach
**Custom Playful-Educational Design** inspired by the physical pegboard aesthetic, incorporating elements from educational platforms (Khan Academy, Duolingo) with a maker-space, hands-on learning feel.

**Core Principle**: Transform the tactile, playful nature of the physical pegboard into an engaging digital experience that celebrates curiosity and experimentation.

---

## Color Palette

### Primary Colors (Dark Mode)
- **Background**: 220 15% 12% (deep charcoal, like pegboard backing)
- **Surface**: 220 12% 18% (elevated card surfaces)
- **Primary Accent**: 200 95% 55% (vibrant cyan - represents "tinkering" energy)
- **Borders/Dividers**: 220 10% 25%

### Activity Box Colors (Inspired by colorful pegboard magnets)
Each of the 8 boxes gets a unique, vibrant color to reflect the playful nature:
- **LEARN ABOUT AI**: 280 75% 60% (purple)
- **LEARN WITH AI**: 200 90% 55% (cyan)
- **TEACH WITH AI**: 340 80% 58% (coral pink)
- **TEACH ABOUT AI**: 160 70% 50% (teal)
- **CRITIQUE AI**: 30 90% 55% (orange)
- **CREATE WITH AI**: 270 75% 62% (lavender)
- **SHAPE AI**: 140 70% 52% (green)
- **RESEARCH WITH AI**: 210 85% 58% (blue)

### Interactive States
- **Hover brightness**: Increase lightness by 8%
- **Active/Selected**: Add subtle glow with box-shadow

---

## Typography

### Font Stack
- **Primary (Headers)**: 'Fredoka', 'Nunito', sans-serif (playful, rounded, educational)
- **Secondary (Body)**: 'Inter', sans-serif (clean, readable)

### Scale
- **Main Title**: text-6xl md:text-7xl font-bold (Tinkery Check-In)
- **Subtitle**: text-xl md:text-2xl font-medium opacity-90
- **Activity Labels**: text-lg md:text-xl font-semibold uppercase tracking-wide
- **Body Text**: text-base leading-relaxed

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20** for consistent rhythm

### Homepage Layout
- **Container**: max-w-7xl mx-auto px-6 py-12
- **Title Section**: Centered, mb-16
- **Activity Grid**: 
  - Mobile: grid-cols-1 gap-4
  - Tablet: grid-cols-2 gap-6
  - Desktop: grid-cols-4 gap-8
- **RANDOM Button**: Fixed position bottom-6 right-6

### Individual Activity Pages
- **Container**: max-w-4xl mx-auto px-6 py-12
- **Back Navigation**: Top-left, subtle
- **Content Area**: Generous padding (p-8 md:p-12)

---

## Component Library

### Activity Boxes (Homepage)
- **Shape**: Rounded corners (rounded-2xl)
- **Size**: Aspect ratio 1:1 (square), min-height 180px on mobile, 220px on desktop
- **Border**: 3px solid with matching activity color
- **Background**: Semi-transparent gradient overlaying dark surface
- **Pegboard Pattern**: Subtle dot grid pattern (CSS background) suggesting pegboard holes
- **Hover Effect**: Scale up slightly (scale-105), glow shadow, brightness increase
- **Icon/Emoji**: Large centered icon or emoji above text (text-5xl)
- **Text**: Activity name in uppercase, centered, bold

### RANDOM! Button
- **Style**: Large pill-shaped button (rounded-full px-8 py-4)
- **Color**: Vibrant gradient (cyan to purple)
- **Animation**: Gentle pulse animation, rotates slightly on hover
- **Text**: Bold uppercase "RANDOM!" with sparkle emoji ✨
- **Shadow**: Strong drop-shadow for prominence

### Individual Activity Pages
- **Header**: Large title matching the activity's color theme
- **Card Container**: Rounded-3xl with subtle border in activity color
- **Content Areas**: 
  - Welcome message explaining the activity
  - Interactive elements placeholder (will be filled with activity-specific content)
  - Example prompts or starting points
  - Resources section
- **Back Button**: Subtle, top-left, with left arrow

### Navigation
- **Back to Check-In**: Persistent button/link on activity pages
- **Activity Color Coding**: Maintain activity's color theme throughout its page

---

## Interactive Elements & Micro-interactions

### Animations (Minimal but Playful)
- **Activity Boxes**: Gentle hover scale (transform duration-200)
- **RANDOM Button**: Continuous subtle pulse, excited spin on click (rotate-12)
- **Page Transitions**: Smooth fade-in (300ms)
- **Hover States**: All interactive elements have clear feedback

### Sound Design (Optional Enhancement)
- Light click sounds on box selection
- Playful chime for RANDOM button

---

## Images & Visual Assets

### Icons
Use **Heroicons** or **Lucide** icon library via CDN for:
- Arrow icons for navigation
- Activity-specific icons (brain, lightbulb, tools, etc.)

### Background Elements
- **Pegboard Texture**: CSS-generated dot pattern (radial-gradient) creating subtle pegboard hole effect on activity boxes
- **Decorative Elements**: Small circle shapes in activity colors scattered subtly as page decorations (position: absolute)

### No Hero Image
This design doesn't require a traditional hero image. The playful grid of activity boxes serves as the visual focal point.

---

## Accessibility & Responsiveness

- **Focus States**: High-contrast focus rings using activity colors
- **Touch Targets**: Minimum 44x44px for all interactive elements
- **Color Contrast**: All text maintains WCAG AA standards against backgrounds
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Readers**: Proper ARIA labels for all interactive elements

### Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grid)
- Desktop: > 1024px (4-column grid)

---

## Design Philosophy Summary

Create a **digital maker-space** that feels:
- **Playful**: Bright colors, rounded shapes, gentle animations
- **Educational**: Clear hierarchy, readable typography, purposeful organization
- **Interactive**: Responsive feedback, inviting exploration
- **Approachable**: Friendly tone, low barriers to entry

The design bridges physical and digital play, making AI learning feel like creative exploration rather than formal education.