# MoneyKit-Style Documentation Design

## Overview
Your Docusaurus documentation site has been transformed to match the MoneyKit API documentation design style with professional light and dark themes, clean aesthetics, and modern UI patterns. Users can seamlessly toggle between both themes.

## Key Changes Implemented

### 1. **Dual Theme Support**
- **Default Mode**: Light mode by default, respects system preferences
- **Theme Toggle**: Users can switch between light and dark modes
- **Background Colors**: 
  - Primary background: `#0a0a0a` (near black)
  - Surface background: `#141414` (dark gray)
  - Navbar background: `#000000` (pure black)
- **Text Colors**:
  - Headings: `#ffffff` (white)
  - Body text: `#e0e0e0` (light gray)
  - Secondary text: `#a0a0a0` (gray)
  - Links: `#60a5fa` (light blue)

### 2. **Hero Section - MoneyKit Style**
- **Background Image**: Space-themed background image with dark overlay
- **Gradient Overlay**: Dark gradient (`rgba(10, 10, 10, 0.95)`) over background image
- **Typography**:
  - Large, bold headlines in white
  - Subtle secondary text in light gray
  - Professional spacing and layout
- **Buttons**:
  - Primary: White background with dark text
  - Secondary: Transparent with border and backdrop blur
  - Hover effects with smooth transitions

### 3. **Navigation (Navbar)**
- **Style**: Clean, minimal design with subtle border
- **Background**: Pure black (`#000000`) with border-bottom
- **Links**: Light gray text (`#909090`) with hover states
- **Active State**: Blue accent color (`#60a5fa`)
- **Dropdowns**: Dark background with subtle borders

### 4. **Sidebar Navigation**
- **Background**: Dark (`#0a0a0a`)
- **Border**: Subtle right border (`#2a2a2a`)
- **Links**: 
  - Default: Gray text (`#a0a0a0`)
  - Hover: Light background overlay
  - Active: Blue accent with subtle background
- **Collapsible Items**: Smooth transitions and hover effects

### 5. **Content Sections**

#### Feature Cards
- **Background**: `#141414` (dark card)
- **Borders**: `#2a2a2a` (subtle gray)
- **Hover Effects**:
  - Slight lift animation
  - Border color change
  - Glow effect with blue accent
- **Top Accent**: Blue gradient line on hover

#### Code Blocks
- **Background**: `#0f0f0f` (slightly lighter than cards)
- **Header**: Terminal-style with colored dots
- **Syntax**: Light text on dark background
- **Border**: `#2a2a2a` with hover effects

#### Stats Cards
- **Background**: Dark (`#0f0f0f`)
- **Layout**: Grid layout (4 columns on desktop, responsive on mobile)
- **Hover**: Lift effect with blue glow
- **Numbers**: Gradient text effect (blue gradient)
- **Icons**: Large emoji with subtle pulse animation

### 6. **Typography**
- **Headings**: White (`#ffffff`) for maximum contrast
- **Body**: Light gray (`#e0e0e0`) for readability
- **Secondary**: Medium gray (`#a0a0a0`) for less important text
- **Code**: Light gray (`#d0d0d0`) on dark background
- **Font Smoothing**: Antialiased for crisp rendering

### 7. **Component Styling**

#### Tables
- Dark borders and alternating row colors
- Header with darker background

#### Admonitions/Alerts
- Dark background (`#0f0f0f`)
- Color-coded left borders
- Light text

#### Breadcrumbs
- Gray text with blue hover
- Subtle separators

#### Pagination
- Dark card style
- Hover effects matching overall theme

#### Tabs
- Borderless with bottom indicator
- Blue accent for active tab

### 8. **Footer**
- **Background**: Pure black (`#000000`)
- **Border**: Top border for separation
- **Links**: Gray text with blue hover
- **Layout**: Multi-column with proper spacing

### 9. **Responsive Design**
All sections are fully responsive with:
- **Mobile**: Single column layout
- **Tablet**: 2 column layout where appropriate
- **Desktop**: Full multi-column layout

### 10. **Animations & Transitions**
- **Fade In**: Content fades in on load
- **Hover States**: Smooth transitions (0.3s ease)
- **Lift Effects**: Cards lift on hover
- **Color Transitions**: Smooth border and background changes

## Color Palette

### Primary Colors
```css
--primary-blue: #3b82f6 (light) / #60a5fa (dark)
--primary-blue-dark: #2563eb
--primary-blue-darker: #1d4ed8
```

### Light Mode
```css
/* Backgrounds */
--bg-primary: #ffffff
--bg-surface: #f8fafc
--bg-elevated: #f1f5f9

/* Text */
--text-primary: #0f172a
--text-secondary: #1e293b
--text-tertiary: #475569
--text-muted: #64748b

/* Borders */
--border-subtle: #e2e8f0
--border-hover: #cbd5e1
```

### Dark Mode
```css
/* Backgrounds */
--bg-primary: #0a0a0a
--bg-surface: #141414
--bg-elevated: #0f0f0f
--bg-navbar: #000000

/* Text */
--text-primary: #ffffff
--text-secondary: #e0e0e0
--text-tertiary: #a0a0a0
--text-muted: #909090

/* Borders */
--border-subtle: #2a2a2a
--border-hover: #3a3a3a
```

## File Changes Summary

### Modified Files:
1. **`docusaurus.config.js`** - Set default dark theme
2. **`src/css/custom.css`** - Comprehensive dark theme styling
3. **`src/pages/index.js`** - Updated hero and sections structure
4. **`src/pages/index.module.css`** - MoneyKit-style component styling
5. **`src/components/HomepageFeatures/index.js`** - Updated text colors
6. **`src/components/HomepageFeatures/styles.module.css`** - Dark background

## How to Use

### Running the Site
```bash
cd my-website
npm start
```

### Building for Production
```bash
npm run build
```

### Toggling Theme
Users can toggle between light and dark themes using the theme switcher in the navbar. The site respects system preferences by default and maintains the user's choice.

## Design Principles

### 1. **Professional & Clean**
- Minimal distractions
- Focus on content
- Consistent spacing

### 2. **High Contrast**
- White text on dark backgrounds
- Easy to read
- Accessibility-focused

### 3. **Subtle Interactions**
- Smooth animations
- Hover feedback
- Visual hierarchy

### 4. **Card-Based Layout**
- Similar to MoneyKit's "AUTHENTICATION" and "LINK SESSION" cards
- Dark backgrounds with subtle borders
- Hover effects for interactivity

### 5. **API Documentation Style**
- Technical and professional
- Clear navigation
- Easy to scan

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized CSS
- Minimal animations for better performance
- Lazy-loaded images
- Fast page loads

## Future Enhancements
Consider adding:
- API endpoint cards (similar to MoneyKit)
- Interactive code examples
- Syntax highlighting themes optimized for dark mode
- Search integration with dark theme
- More hover effects and micro-interactions

## Notes
- The hero section uses an Unsplash space image for the background
- All colors use CSS custom properties for easy customization
- Responsive breakpoints: 480px, 768px, 996px, 1200px
- Smooth scroll behavior enabled globally

---

**Last Updated**: October 2025  
**Design Inspiration**: MoneyKit API Documentation  
**Framework**: Docusaurus v3

