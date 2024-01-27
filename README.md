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

# Typescript Path Aliases
This project uses typescript path aliases to make the imports more readable and to avoid the use of relative paths.

| Alias                | Real Path                      | Description                            |
|----------------------|--------------------------------|----------------------------------------|
| `@feature/*`         | `./src/app/features/*`         | Path for feature modules               |
| `@components/*`      | `./src/app/components/*`      | Path for reusable components            |
| `@config/*`          | `./src/app/config/*`           | Path for configuration files           |
| `@hooks/*`           | `./src/app/hooks/*`            | Path for custom React hooks            |
| `@lib/*`             | `./src/app/lib/*`              | Path for shared utility libraries      |
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
### Generated Component Code Structure

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


### Generated Features Folder Structure
We can organize the features as we want, but the recommended structure is the following:
The command `yarn generate` will create the feature folder structure automatically with the following structure:

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
