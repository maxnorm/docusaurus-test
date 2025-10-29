# Compose Documentation Styling Guide

A comprehensive guide to the stunning visual design system built for Compose documentation.

## 🎨 Design Philosophy

The Compose documentation uses a modern, blockchain-inspired design with:

- **Gradient-heavy aesthetics** - Beautiful blue-to-purple gradients throughout
- **Glass morphism** - Frosted glass effects for depth and modernity
- **Smooth animations** - Subtle transitions and hover effects
- **High contrast** - Excellent readability in both light and dark modes
- **Component-based** - Reusable, composable visual elements

## 🎭 Color Palette

### Primary Colors
```css
--ifm-color-primary: #4a5fff;        /* Vibrant blue */
--ifm-color-primary-dark: #3548ff;
--ifm-color-primary-darker: #2a3eff;
--ifm-color-primary-darkest: #0d21ff;
--ifm-color-primary-light: #5f76ff;
--ifm-color-primary-lighter: #7489ff;
--ifm-color-primary-lightest: #a3b1ff;
```

### Accent Colors
```css
--ifm-color-accent: #7c3aed;         /* Rich purple */
--ifm-color-accent-light: #a78bfa;
```

### Gradients
```css
--hero-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--hero-gradient-alt: linear-gradient(135deg, #4a5fff 0%, #7c3aed 100%);
```

## 📦 Custom Components

### 1. AnimatedBackground
Particle network animation for hero sections.

```jsx
import AnimatedBackground from '@site/src/components/AnimatedBackground';

<AnimatedBackground />
```

**Features:**
- Canvas-based particle system
- Connecting lines between nearby particles
- Responsive to screen size
- Performance optimized

---

### 2. FeatureCard
Beautiful cards with hover effects and gradients.

```jsx
<FeatureCard
  icon="🎯"
  title="Feature Title"
  description="Feature description goes here"
  gradient="gradientBlue"
  link="/docs/path"
/>
```

**Props:**
- `icon` - Emoji or icon
- `title` - Card title
- `description` - Card content
- `gradient` - gradientBlue, gradientPurple, gradientPink, gradientGreen
- `link` - Optional link URL

---

### 3. CodeShowcase
Tabbed code examples with syntax highlighting.

```jsx
<CodeShowcase
  title="Example Title"
  description="Example description"
  examples={[
    {
      label: 'Tab 1',
      language: 'solidity',
      description: 'Example description',
      code: 'contract MyContract { ... }',
    },
  ]}
/>
```

**Features:**
- Multiple tabs for different examples
- Syntax highlighting via Prism
- Optional descriptions per tab
- Smooth transitions

---

### 4. GradientText
Text with gradient color effects.

```jsx
<GradientText variant="primary">Beautiful Text</GradientText>
```

**Variants:**
- `primary` - Blue to purple
- `secondary` - Different blue gradient
- `accent` - Pink gradient
- `success` - Blue to cyan

---

### 5. Badge
Small pill-shaped labels.

```jsx
<Badge variant="primary" size="medium">New</Badge>
```

**Variants:**
- primary, secondary, success, warning, danger, info, outline, glass

**Sizes:**
- small, medium, large

---

### 6. CalloutBox
Attention-grabbing information boxes.

```jsx
<CalloutBox type="info" title="Custom Title">
  Content goes here
</CalloutBox>
```

**Types:**
- info, tip, warning, danger, success, note

**Features:**
- Emoji icons
- Hover animation
- Color-coded by type
- Gradient backgrounds

---

### 7. MetricCard
Display statistics and metrics.

```jsx
<MetricCard
  value="1000+"
  label="Users"
  icon="👥"
  trend={{direction: 'up', value: '12%'}}
/>
```

**Features:**
- Gradient value text
- Optional trend indicators
- Hover effects
- Responsive design

---

### 8. GlassCard
Frosted glass effect cards.

```jsx
<GlassCard hover={true}>
  Your content
</GlassCard>
```

**Features:**
- Backdrop blur effect
- Semi-transparent background
- Optional hover animation
- Works in light/dark modes

---

### 9. Timeline
Vertical timeline for roadmaps or history.

```jsx
<Timeline
  items={[
    {
      icon: '🚀',
      date: 'Q1 2024',
      title: 'Milestone',
      description: 'Description',
    },
  ]}
/>
```

**Features:**
- Connecting lines between items
- Gradient dots
- Icons support
- Responsive layout

---

### 10. ComparisonTable
Feature comparison tables.

```jsx
<ComparisonTable
  columns={[
    { name: 'Option 1', highlight: true },
    { name: 'Option 2' },
  ]}
  features={[
    {
      name: 'Feature',
      description: 'Optional description',
      values: [true, false],
    },
  ]}
/>
```

**Features:**
- Gradient header
- Checkmarks for boolean values
- Responsive scrolling
- Highlight popular options

---

### 11. AnimatedCounter
Smooth counting animations.

```jsx
<AnimatedCounter 
  end={1000}
  duration={2000}
  prefix="$"
  suffix="+"
  separator=","
  decimals={2}
/>
```

**Features:**
- Easing animation
- Intersection observer (animates on scroll)
- Customizable formatting
- Gradient text

---

### 12. GradientButton
Beautiful gradient buttons with glow effects.

```jsx
<GradientButton 
  to="/docs/intro"
  variant="primary"
  size="large"
>
  Get Started
</GradientButton>
```

**Props:**
- `to` or `href` - Link destination
- `variant` - primary, secondary, success, outline
- `size` - small, medium, large
- `external` - Opens in new tab

**Features:**
- Glow effect on hover
- Smooth animations
- Support for internal/external links

## 🎨 Using Components in MDX

All components are available in MDX files through `MDXComponents.js`:

```mdx
---
title: My Page
---

import FeatureCard from '@site/src/components/FeatureCard';
import Badge from '@site/src/components/Badge';

# My Documentation

<Badge variant="success">New Feature</Badge>

<FeatureCard icon="🎯" title="Feature" description="Description" />
```

## 🎯 Styling Best Practices

### 1. Use Gradient Text for Headings
```jsx
<h2><GradientText>Important Heading</GradientText></h2>
```

### 2. Combine Components
```jsx
<CalloutBox type="tip">
  <GradientText>Pro Tip:</GradientText> Use components together!
</CalloutBox>
```

### 3. Feature Cards in Grid
```jsx
<div className="row">
  <div className="col col--4">
    <FeatureCard ... />
  </div>
  <div className="col col--4">
    <FeatureCard ... />
  </div>
  <div className="col col--4">
    <FeatureCard ... />
  </div>
</div>
```

### 4. Metrics with Animation
```jsx
<MetricCard
  value={<AnimatedCounter end={1000} />}
  label="Users"
/>
```

## 🎨 Custom CSS Classes

The `custom.css` file provides utility classes:

```css
.gradient-text          /* Gradient text effect */
.card-hover            /* Card hover animation */
.animate-fade-in       /* Fade in animation */
.feature-card          /* Styled feature card */
.feature-icon          /* Gradient icon */
```

### Usage:
```html
<div className="feature-card animate-fade-in">
  Content
</div>
```

## 🌓 Dark Mode Support

All components automatically adapt to dark mode:

- Color variables adjust automatically
- Glass effects work in both modes
- Gradients maintain vibrancy
- Contrast ratios optimized

## 📱 Responsive Design

All components are fully responsive:

- Mobile-first approach
- Breakpoint at 768px
- Touch-friendly interactions
- Optimized font sizes

## 🚀 Performance

- CSS modules for scoped styling
- Lazy-loaded components
- Optimized animations (GPU-accelerated)
- Minimal bundle size impact

## 🎭 Animation Guidelines

### Timing
- Fast: 200ms (micro-interactions)
- Normal: 300ms (hover effects)
- Slow: 600ms (page transitions)

### Easing
- `cubic-bezier(0.4, 0, 0.2, 1)` for most animations
- `ease-out` for entrances
- `ease-in-out` for reversible animations

## 🎨 Theming

To customize the theme, edit `/src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #your-color;
  /* ... other variables */
}
```

## 📚 Component Library Structure

```
src/
├── components/
│   ├── AnimatedBackground/
│   │   ├── index.js
│   │   └── styles.module.css
│   ├── FeatureCard/
│   │   ├── index.js
│   │   └── styles.module.css
│   └── ... (other components)
├── css/
│   └── custom.css
├── pages/
│   ├── index.js          (homepage)
│   ├── index.module.css
│   └── showcase.mdx      (component demos)
└── theme/
    └── MDXComponents.js  (component registration)
```

## 🎯 Examples Gallery

Visit `/showcase` in your local development server to see all components in action with live examples and code snippets.

## 💡 Tips

1. **Consistency**: Use the same variant names across components
2. **Spacing**: Use Docusaurus's responsive spacing utilities
3. **Accessibility**: All components maintain WCAG AA compliance
4. **Performance**: Components use CSS modules for optimal performance

## 🔧 Customization

### Adding New Gradient
```css
/* In custom.css */
.myCustomGradient {
  background: linear-gradient(135deg, #start 0%, #end 100%);
}
```

### Creating New Component
1. Create folder in `src/components/YourComponent/`
2. Add `index.js` and `styles.module.css`
3. Export from `index.js`
4. Add to `MDXComponents.js` for MDX usage

### Modifying Existing Component
Edit the component's `styles.module.css` file. Changes are scoped to that component only.

## 🎉 Conclusion

This styling system provides everything needed to create beautiful, modern documentation for Compose. All components work together harmoniously while maintaining excellent performance and accessibility.

For questions or suggestions, visit the [GitHub repository](https://github.com/Perfect-Abstractions/Compose).

---

**Made with 🩵 by the Compose Community**

