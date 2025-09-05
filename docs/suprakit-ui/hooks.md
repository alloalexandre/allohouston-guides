# Hooks

Suprakit UI provides a powerful set of hooks built on top of TanStack Query (formerly React Query) that seamlessly integrate with Meteor's Methods (RPC). These hooks simplify data fetching, caching, and state management while providing full TypeScript support.

## Available Hooks

### useQueryHook

For fetching data using Meteor methods:

```typescript
const { data, isLoading } = useQueryHook(
    "Collection.methods.getMyData",
    {
        /* args */
    },
    [], // query key
    {
        onSuccess: (data) => console.log(data),
        onError: handleError,
        enabled: true,
    },
);
```

### useMutationHook

For modifying data:

```typescript
const { mutate: updateMyData } = useMutationHook("Collection.methods.updateMyData", {
    onSuccess: async () => {
        alert.success("Success!");
        await queryClient.invalidateQueries(["Collection.methods.getMyData"]);
    },
    onError: handleError,
});
```

### useQueriesHook

For parallel data fetching:

```typescript
const results = useQueriesHook([
    { name: "Collection.methods.getData1", args: {} },
    { name: "Collection.methods.getData2", args: {} },
]);
```

### useInfiniteQueryHook

For pagination and infinite scrolling:

```typescript
const { data, fetchNextPage, hasNextPage } = useInfiniteQueryHook("Collection.methods.getPaginatedData", initialArgs, [], {
    /* config */
});
```

## Local Storage Integration

We also provide hooks for managing local storage with the same API:

### useLocalStorageQueryHook

For reading from localStorage with the same caching benefits as regular queries:

```typescript
const { data } = useLocalStorageQueryHook("my-storage-key");
```

### useLocalStorageMutationHook

For writing to localStorage with automatic cache invalidation:

```typescript
const { mutate } = useLocalStorageMutationHook("my-storage-key");
```

## Features

All hooks include:

- TypeScript support
- Automatic error handling
- Debug logging in development
- Configurable retry behavior
- Success/error callbacks
