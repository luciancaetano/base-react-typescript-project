# Stores Organization and Structure

In our project, we organize our stores in a specific structure to maintain consistency and readability. Here's how we structure our stores:

- `src/`: This is the main folder where all the source code of the application lives.
  - `stores/`: This folder contains all the state management logic for the application.
    - `[storeName]/`: Each store has its own folder named after the store. For example, the `counter` store is in the `counter` folder.
      - `[storeName].store.ts`: This is the main file for the store. It contains the state and actions for the store.
      - `[storeName].types.ts`: This file contains the TypeScript types used in the store.
      - `index.ts`: This file exports everything from the store for use in other parts of the application.

In the `[storeName].store.ts` file, we define our state and actions. We use TypeScript to ensure type safety in our state and actions.

In the `[storeName].types.ts` file, we define all the types used in our store. This includes the state type and the action types.

The `index.ts` file is the entry point to the store. It exports everything from the store so that other parts of the application can use the state and actions from the store.

All stores are implemented using [zustand](https://github.com/pmndrs/zustand). This is a lightweight state management library that uses React hooks to manage state. It is very easy to use and has a very small API surface area.