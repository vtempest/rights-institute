[Documentation](../modules.md) / InteractiveApps/QuantumGeometry

## default()

```ts
function default(props: object): Element;
```

Defined in: InteractiveApps/QuantumGeometry.jsx:52

QuantumGeometry - Interactive quantum-inspired 3D visualization

Creates a dynamic 3D sphere with animated orbital lines that represent
quantum superposition states. The component generates parabolic spherical
orbitals with configurable parameters and multiple color schemes. Users
can interact with the visualization through hover effects and clicks,
triggering wave function collapse-like animations.

### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`props`

</td>
<td>

\{ `autoRandomize?`: `boolean`; `className?`: `string`; `config?`: \{ `maxLines?`: `number`; `maxSphereSize?`: `number`; `minLines?`: `number`; `minSphereSize?`: `number`; \}; `onSphereClick?`: `Function`; \}

</td>
<td>

The component props

</td>
</tr>
<tr>
<td>

`props.autoRandomize?`

</td>
<td>

`boolean`

</td>
<td>

Whether to auto-randomize the sphere

</td>
</tr>
<tr>
<td>

`props.className?`

</td>
<td>

`string`

</td>
<td>

Additional CSS classes

</td>
</tr>
<tr>
<td>

`props.config?`

</td>
<td>

\{ `maxLines?`: `number`; `maxSphereSize?`: `number`; `minLines?`: `number`; `minSphereSize?`: `number`; \}

</td>
<td>

Configuration object for sphere generation

</td>
</tr>
<tr>
<td>

`props.config.maxLines?`

</td>
<td>

`number`

</td>
<td>

Maximum number of orbital lines

</td>
</tr>
<tr>
<td>

`props.config.maxSphereSize?`

</td>
<td>

`number`

</td>
<td>

Maximum sphere size in pixels

</td>
</tr>
<tr>
<td>

`props.config.minLines?`

</td>
<td>

`number`

</td>
<td>

Minimum number of orbital lines

</td>
</tr>
<tr>
<td>

`props.config.minSphereSize?`

</td>
<td>

`number`

</td>
<td>

Minimum sphere size in pixels

</td>
</tr>
<tr>
<td>

`props.onSphereClick?`

</td>
<td>

`Function`

</td>
<td>

Callback function for sphere clicks

</td>
</tr>
</tbody>
</table>

### Returns

`Element`

The quantum geometry visualization

### Component

### Example

```tsx
<QuantumGeometry 
  config={{ minLines: 8, maxLines: 15 }}
  autoRandomize={true}
  onSphereClick={(event) => console.log('Sphere clicked')}
/>
```
