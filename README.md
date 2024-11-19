# Investec Design System Coding Challenge - Toggle Button

This project implements the "Toggle Button" component from the provided Figma design as part of an application for the Design System Engineer role at Investec.

**Project Overview**

* **Figma Design:** [Link to Figma file](https://www.figma.com/design/b5NswTkSDEC3igrYkqfdf4/IDS---Assessment-(2024-11-13-Jaco-Kotzee)?node-id=1-9954&t=8AkGpGfa2JEYZbYv-1)
* **Live Demo:** [Link to Chromatic](https://673b9400d5550feb1975d271-swykolwanc.chromatic.com/?path=/story/ui-toggleswitch--default)

**Technical Decisions**

* **Framework:** Next.js was chosen for its performance optimizations, server-side rendering capabilities, and strong typing support with TypeScript. These features are beneficial for building scalable and maintainable design systems.
* **Component Design:** The `ToggleSwitch` component is designed for reusability and theming. It accepts props to control its state and appearance, allowing for easy integration within a larger design system.
* **Accessibility:** The component adheres to accessibility best practices, including keyboard navigation and ARIA attributes, to ensure it is usable by everyone.
* **TypeScript:** TypeScript ensures type safety and improves code maintainability.

**Running the Project**

1. **Clone the repository:** `git clone [repository URL]`
2. **Install dependencies:** `yarn install`
3. **Start the development server:** `yarn dev`
4. **View the component in Storybook:** `yarn storybook`

**Code Example**

```typescript
// Simplified example the component in this project
function ToggleSwitch(props: ToggleSwitchProps): React.ReactElement {
  // ... (rest of your component code) ...

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

// Usage in app:
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

## Run Solution locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Run Storybook instance locally:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
# or
bun storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More
