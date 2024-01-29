# Fast and scalable React Typescript Starter
This is an opinionated starter for react projects with typescript.

# important package.json scripts
- `start` starts the development server
- `build` compiles the application
- `lint` runs the linter
- `test` runs the tests
- `validate` runs type checking, linting and testing
- `cy:run` runs the cypress tests
- `generate` runs the code generator

# Features
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [i18next](https://www.i18next.com/)

# Additional Documentation
- [🚀 Getting Started](./docs/getting-started.md)
- [📦 Store](./docs/store.md)
- [⚖️ License](./LICENCE.md)

# Typescript Path Aliases
This project uses typescript path aliases to make the imports more readable and to avoid the use of relative paths.

| Alias                | Real Path                      | Description                            |
|----------------------|--------------------------------|----------------------------------------|
| `@feature/*`         | `./src/app/features/*`         | Path for feature modules               |
| `@components/*`      | `./src/app/components/*`      | Path for reusable components            |
| `@config/*`          | `./src/app/config/*`           | Path for configuration files           |
| `@hooks/*`           | `./src/app/hooks/*`            | Path for custom React hooks            |
| `@lib/*`             | `./src/lib/*`              | Path for shared utility libraries      |
| `@providers/*`       | `./src/app/providers/*`        | Path for provider modules              |
| `@store/*`           | `./src/app/store/*`            | Path for store                         |
| `@app/types/*`       | `./src/app/types/*`            | Path for TypeScript types/interfaces   |
| `@utils/*`           | `./src/app/utils/*`            | Path for utility functions             |
| `@assets/*`          | `./src/assets/*`               | Path for static assets                 |

# Code Generation
Just run the following command to generate a component or a feature:
```bash
yarn generate
```
### Component Code Structure

```bash
├── src
│   ├── components
│   │   ├── [type]
│   │   │   ├── [name]
│   │   │   │   ├── [name].tsx
│   │   │   │   ├── [name].spec.tsx
│   │   │   │   ├── [name].module.scss
│   │   │   │   ├── [name].types.ts
│   │   │   │   ├── [name].view-model.ts
│   │   │   │   └── index.ts
```
- `[type]` is the type of component, it can be `element`, `provider`, `pages` or `layout`.
- `[name]` is the name of the component.
- `[name].tsx` is the component file, or component view.
- `[name].spec.tsx` is the component test file.
- `[name].module.scss` is the component styles file.
- `[name].types.ts` is the component types file.
- `[name].view-model.ts` is the component view model file.
- `index.ts` is the component index file, the component is exported as default and the component types are exported as named export.

#### `@components/elements` purpose

The `components/elements` directory serves as a dedicated space within your project's source code to house fundamental and reusable UI elements.
These elements encompass components that are generic, presenting no specific business logic but rather providing essential building blocks for the user interface.

#### `@components/providers` purpose

The `components/providers` directory serves as a dedicated location for implementing data providers or context providers within your project.
Providers in this directory may include those responsible for managing data, state, or any context-related functionalities.
Unlike the components/elements directory, providers in components/providers are allowed to contain business logic,
making them a central hub for managing and supplying data throughout your application.

#### `@components/pages` purpose

The `components/pages` directory serves as the designated location for organizing components that represent individual pages or screens in your application.
Pages encapsulate the structure and behavior of specific views, often corresponding to distinct user interfaces or features.
Additionally, this directory may also house the routing logic associated with these pages.

#### About `components/[ComponentName]/components`

The `components/[ComponentName]/components` directory is designated for housing components that are exclusive to a particular parent component.
These subcomponents are tightly coupled with the parent entity and are not intended for broader reuse across the application.
Placing such components in a dedicated directory helps maintain a clear and organized structure within the codebase.

### Why us this structure ?

The provided structure is designed to offer several advantages that contribute to the overall efficiency, maintainability, and scalability of a project.
Here are key reasons to use this structure:
- Modularity and Organization
- Clear Separation of Concerns
- Reusability and Scalability
- Testability and Quality Assurance
- Flexibility and Technology Agnosticism
- Documentation through Structure
- Enhanced Maintenance and Readability

### Features Folder Structure
The @features directory is intended for organizing and structuring the different functionalities or main modules of your application. Each subdirectory within @features represents a specific feature, and the internal structure of these directories is designed to promote modularity and clarity.

The command `yarn generate feature` will create the feature folder structure automatically with the following structure:

```bash
├── src
│   ├── features
│   │   ├── [name]
│   │   │   ├── index.tsx
│   │   │   ├── components
│   │   │   │   ├── elements
│   │   │   │   ├── providers
│   │   │   │   ├── pages
│   │   │   │   └── layouts
│   │   │   ├── hooks
│   │   │   ├── types
│   │   │   ├── utils
│   │   │   ├── config
```
- `[name]` is the name of the feature.
- `index.tsx` is the feature route file.
- `components` is the folder that contains all the components of the feature.
  - `elements` is the folder that contains all the generic and simple components like buttons, inputs, etc.
  - `providers` is the folder that contains all the more complex ui related components.
  - `pages` is the folder that contains all the views or screens.
  - `layouts` is the folder that contains all the components used to organize the application's layout.
- `hooks` is the folder that contains all the hooks of the feature.
- `types` is the folder that contains all the types of the feature.
- `utils` is the folder that contains all the utilities of the feature.
- `config` is the folder that contains all the configuration files of the feature.
