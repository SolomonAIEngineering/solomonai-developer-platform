# Core Package

## Overview

The Core package is the foundation of our application, providing essential functionality and utilities used across the entire project. It contains fundamental components, hooks, and helper functions that are crucial for maintaining consistency and efficiency in our codebase.

## Features

- Reusable React components
- Custom hooks for common functionalities
- Utility functions for data manipulation and validation
- TypeScript interfaces and types for improved type safety
- Integration with Shadcn UI and Radix UI components
- Tailwind CSS utility classes for consistent styling

## Installation

To install the Core package in your project, run:

```bash
bash
npm install @your-org/core
```

## Usage

Here's a basic example of how to use a component from the Core package:

```tsx
import { Button } from '@your-org/core'

function MyComponent() {
  return (
    <Button variant='primary' onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  )
}
```

## API Reference

### Components

- `Button`: A customizable button component
- `Input`: A reusable input field component
- `Card`: A versatile card component for displaying content

### Hooks

- `useQueryState`: A hook for managing URL query parameters
- `useSafeAction`: A hook for executing type-safe server actions

### Utilities

- `formatDate`: A function for formatting dates consistently
- `validateEmail`: A function for validating email addresses

## Development

To contribute to the Core package:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## License

[MIT License](LICENSE)
