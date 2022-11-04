# React Basic Typescript Starter

# important package.json scripts
- `start` starts the development server
- `build` compiles the application
- `lint` runs the linter
- `stylelint` runs the style linter
- `test` runs the tests

## Presentation
This project is a collection of all the experience practiced with react and other frameworks like angular, vue, etc.

## Paths and alias

| Path |  Alias | Description  |
|---|---|---|
| `src/app`  | -  | Application entry point  |
| `src/locale`  | - | Internationalization files  |
| `src/styles`  | `@styles/*`  | Global styles  |
| `src/components/elements`  | `@components/elements/*`  | Generic and simple components like buttons, inputs, etc.  |
| `src/components/partials`  | `@components/partials/*`  | More Complex ui related components  |
| `src/components/views`  | `@components/views/*`  | View or Screens  |
| `src/components/layouts`  | `@components/layouts/*`  | Components used to organize the application's layout  |
| `src/hooks`  | `@hooks/*`  | Custom hooks  |
| `src/utils`  | `@utils/*`  | Custom utilities  |
| `src/config`  | `@config/*`  | Configuration files for the application  |
| `src/media`  | `@media/*`  | Media files such as images, videos, etc.  |

# Codegen
Just run the command for more information
```bash
./codegen -h # for *nix
codegen -h # for windows
```

### Generated Component Code Structure

```bash
├── src
│   ├── components
│   │   ├── [type]
│   │   │   ├── [name]
│   │   │   │   ├── [name].tsx
│   │   │   │   ├── [name].Module.scss
│   │   │   │   ├── [name].Store.ts
│   │   │   │   ├── [name].Types.ts
│   │   │   │   ├── [name].ViewModel.ts
│   │   │   │   └── index.ts
```
- `[type]` is the type of component, it can be `element`, `partial`, `view` or `layout`.
- `[name]` is the name of the component.
- `[name].tsx` is the component file, or component view.
- `[name].Module.scss` is the component styles file.
- `[name].Store.ts` is the component store file (*NOTE: when paramter --simple is present or the component is a element the component does not have an store*).
- `[name].Types.ts` is the component types file.
- `[name].ViewModel.ts` is the component view model file.
- `index.ts` is the component index file, the component is exported as default and the component types are exported as named export.