# Investec Design System Coding Challenge - Toggle Button

This project implements the "Toggle Button" component from the provided Figma design as part of an application for the Design System Engineer role at Investec.

## Project Overview

- **Figma Design:** [Link to Figma file](https://www.figma.com/design/b5NswTkSDEC3igrYkqfdf4/IDS---Assessment-(2024-11-13-Jaco-Kotzee)?node-id=1-9954&t=8AkGpGfa2JEYZbYv-1)
- **Live Demo:** [Link to Chromatic](https://673b9400d5550feb1975d271-swykolwanc.chromatic.com/?path=/story/ui-toggleswitch--default)

## Technical Decisions

- **Framework:** Next.js was chosen for its performance optimizations, server-side rendering capabilities, and strong typing support with TypeScript. These features are beneficial for building scalable and maintainable design systems.
- **Component Design:** The `ToggleSwitch` component is designed for reusability and theming. It accepts props to control its state and appearance, allowing for easy integration within a larger design system.
- **TypeScript:** TypeScript ensures type safety and improves code maintainability.
- **Accessibility:** The component adheres to accessibility best practices, including keyboard navigation and ARIA attributes, to ensure it is usable by everyone.

## ToggleSwitch Component

The ToggleSwitch component is a customizable UI element that provides a toggleable switch control with various styling and functionality options.

### Accessibility Features

#### ARIA Attributes
- `role="switch"`: Identifies the component as a toggle switch
- `aria-checked`: Reflects the current state
- `aria-label`: Provides accessible name
- `aria-describedby`: Links to description element
- `aria-controls`: Indicates what element this switch controls

#### Keyboard Navigation
- Added onKeyDown handler for Enter and Space keys
- Proper tabIndex management

#### Focus Management
- Disabled elements are removed from tab order (tabIndex={-1})
- Default tabIndex={0} for enabled elements

### Documentation
This component includes comprehensive documentation covering:
- Basic usage
- Available props
- Different variants and options

## Getting Started

### Running the Project

1. Clone the repository:
```bash
git clone [repository URL]
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. View the component in Storybook:
```bash
yarn storybook
```

### Code Example

```typescript
// Simplified example of the component
function ToggleSwitch(props: ToggleSwitchProps): React.ReactElement {
  return (
    <button 
      className={getToggleClasses(options, isChecked ?? false) + " " + toggleClasses.outerSize[options.size ?? "sm"]}
      onClick={handleClick}
      disabled={options.disabled}
    >
      {(options.iconOnly || options.leadingIcon) && renderIcon()} 
      {!options.iconOnly && (
        <span className={[
          toggleClasses.innerSize[options.size ?? "sm"],
          options.leadingIcon && "ml-2", 
          options.trailingIcon && "mr-2", 
        ].filter(Boolean).join(" ")}>
          {options.label} 
        </span>
      )}
      {options.trailingIcon && renderIcon()} 
    </button>
  );
}
```

### Usage Example
```typescript
<div className="flex flex-row gap-8 row-start-2 items-center sm:items-center">
  <ToggleSwitch iconOnly />
  <ToggleSwitch label="Create" trailingIcon isChevron size="sm" />
  <ToggleSwitch label="Filter" trailingIcon isChevron size="md" />
  <ToggleSwitch label="Export" trailingIcon isChevron size="lg" />
  <ToggleSwitch label="Sort" leadingIcon isChevron disabled={true} />
  <ToggleSwitch
    appearance="subtle"
    label="Subtle"
    trailingIcon
    isChevron
  />
</div>
```

## Development Scripts

### Run Solution Locally
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Run Storybook Instance
```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```



