# Fast and scalable React Typescript Starter
## Features
- [x] React
- [x] Typescript
- [x] scalable

# important package.json scripts
- `dev` starts the development server
- `build` compiles the application
- `lint` runs the linter
- `stylelint` runs the style linter
- `test` runs the tests

## Presentation
This project is a collection of all the experience practiced with react and other frameworks like angular, vue, etc.

## Paths and alias
The paths and alias are configured in the `tsconfig.json` file.

| Path |  Alias | Description  |
|---|---|---|
| `src/app`  | -  | Application entry point  |
| `src/locale`  | - | Internationalization files  |
| `src/styles`  | `@styles/*`  | Global styles  |
| `src/app/components/elements`  | `@components/elements/*`  | Generic and simple components like buttons, inputs, etc.  |
| `src/app/components/partials`  | `@components/partials/*`  | More Complex ui related components  |
| `src/app/components/views`  | `@components/views/*`  | View or Screens  |
| `src/app/components/layouts`  | `@components/layouts/*`  | Components used to organize the application's layout  |
| `src/app/types`  | `@app/types/*`  | Global types  |
| `src/app/hooks`  | `@hooks/*`  | Custom hooks  |
| `src/app/utils`  | `@utils/*`  | Custom utilities  |
| `src/app/config`  | `@config/*`  | Configuration files for the application  |
| `src/media`  | `@media/*`  | Media files such as images, videos, etc.  |

# Codegen
Just run the command for more information
```bash
./codegen -h # for *nix
codegen -h # for windows
```
```sh
Usage: codegen [options] <type> <name>

Create a new component

Arguments:
  type             Type of component to create [element, partial, view, layout]
  name             Name of component to create

Options:
  -d, --dir <dir>  Directory to create component in
  -h, --help       display help for command
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
- `[type]` is the type of component, it can be `element`, `partial`, `view` or `layout`.
- `[name]` is the name of the component.
- `[name].tsx` is the component file, or component view.
- `[name].spec.tsx` is the component test file.
- `[name].module.scss` is the component styles file.
- `[name].types.ts` is the component types file.
- `[name].view-model.ts` is the component view model file.
- `index.ts` is the component index file, the component is exported as default and the component types are exported as named export.
