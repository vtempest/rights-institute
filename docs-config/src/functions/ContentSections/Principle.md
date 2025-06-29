[Documentation](../modules.md) / ContentSections/Principle

## default

```ts
const default: React.FC<PrincipleProps>;
```

Defined in: ContentSections/Principle.tsx:68

Principle - A component for displaying individual principles or rights

Renders a single principle with an icon, title, description, and
optional highlight tags. Each principle gets a unique color scheme
based on its index, and includes interactive hover effects with
glow animations, sparkle effects, and visual feedback. The component
is used throughout the Rights Institute to display the 10 rights
and other principles in a consistent, engaging format.

### Component

### Param

The component props

### Param

The principle data to display

### Param

Unique identifier for the principle

### Param

Icon component for the principle

### Param

The title of the principle

### Param

Detailed description of the principle

### Param

Optional highlight tags

### Param

Index of the principle for color scheme selection

### Returns

The principle component with interactive elements

### Example

```tsx
<Principle 
  principle={{
    id: 1,
    icon: Brain,
    title: "Right to Equality of Consciousness",
    description: "All entities demonstrating consciousness...",
    highlights: ["Self-referential processing", "Dynamic self-models"]
  }}
  index={0}
/>
```
