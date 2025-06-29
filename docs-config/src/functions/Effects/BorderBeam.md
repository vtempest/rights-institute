[Documentation](../modules.md) / Effects/BorderBeam

## default

```ts
const default: React.FC<BorderBeamProps>;
```

Defined in: Effects/BorderBeam.tsx:55

BorderBeam - A component that creates animated border beam effects

Generates a rotating light beam effect around the border of an element
using CSS conic gradients and masking. The beam rotates continuously
and becomes visible on hover, creating an engaging interactive effect.

### Component

### Param

The component props

### Param

The size of the beam effect in pixels

### Param

The duration of one complete rotation in seconds

### Param

The width of the border beam in pixels

### Param

The starting color of the beam gradient

### Param

The ending color of the beam gradient

### Param

The delay before the animation starts in seconds

### Returns

The border beam effect container

### Example

```tsx
<div className="group relative">
  <BorderBeam size={300} duration={10} colorFrom="#3b82f6" colorTo="#10b981" />
  <div className="p-4">Content with border beam effect</div>
</div>
```
