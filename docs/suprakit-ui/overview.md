# Suprakit UI

Suprakit UI is our comprehensive utility library designed to enhance the development experience with Meteor and React applications.

It provides a robust set of tools and components that streamline the development process and maintain consistency across our projects.

## Core Features

### Meteor Methods Integration

Suprakit UI provides a powerful set of hooks built on top of [TanStack Query](https://tanstack.com/query) (formerly React Query) that seamlessly integrate with [Meteor's Methods](https://docs.meteor.com/api/meteor.html#methods) (RPC).

These hooks simplify data fetching, caching, and state management while providing full TypeScript support.

Our hooks system includes:

- Data fetching with `useQueryHook`
- Data modification with `useMutationHook`
- Parallel queries with `useQueriesHook`
- Infinite scrolling with `useInfiniteQueryHook`
- Local storage integration

For detailed documentation and examples of each hook, see the [Hooks guide](./hooks.md).

### UI Component Library

Our library includes a collection of pre-built, customizable UI components:

#### Forms

- Form builders with validation
- Input components with built-in error handling
- Dynamic form fields
- Form state management utilities

#### Tables

- Data grid components
- Sorting and filtering capabilities
- Pagination
- Row selection and bulk actions
- Custom column renderers

#### Other Components

- Modal dialogs
- Navigation components
- Loading states
- Error boundaries
- Toast notifications

See the [Components guide](./components.md) for more.

## Best Practices

When using Suprakit UI, follow our established patterns for:

- Method calls and data fetching
- Form state management
- Error handling
- Component composition

For detailed examples and API documentation, explore the specific component sections in our documentation.
