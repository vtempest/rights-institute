[Documentation](../modules.md) / Effects/GlowWrapper

## default

```ts
const default: React.FC<GlowWrapperProps>;
```

Defined in: Effects/GlowWrapper.tsx:50

GlowWrapper - A component that adds animated glowing border effects

Wraps any content with a rotating conic gradient that creates a
dynamic glowing effect. The glow color, size, and additional styling
can be customized through props. Useful for highlighting important
UI elements and creating visual interest.

### Component

### Param

The component props

### Param

The content to wrap with glow effect

### Param

Additional CSS classes

### Param

The color of the glow effect

### Param

The size of the glow wrapper

### Returns

The wrapped content with glow effect

### Example

```tsx
<GlowWrapper glowColor="#3b82f6" size="lg">
  <button>Click me</button>
</GlowWrapper>
```
