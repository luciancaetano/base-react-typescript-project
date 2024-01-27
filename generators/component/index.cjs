const fs = require('node:fs');
const path = require('node:path');

const featuresDir = path.join(process.cwd(), 'src/app/features');
const features = fs.readdirSync(featuresDir);

function applySuffix(name = '', type = '') {
  if (type.toLowerCase().trim().endsWith('layout')) {
    return name + '-layout';
  }

  if (type.toLowerCase().trim().endsWith('page')) {
    return name + '-page';
  }

  return name;
}

const componentTypePathsMap = {
  element: 'elements',
  layout: 'layouts',
  page: 'pages',
};

/**
 * 
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'list',
      name: 'componentType',
      message: 'Select Component Type',
      choices: ['element', 'layout', 'page'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name',
      validate: (value) => {
        if (!value.trim()) {
          return 'component name is required';
        }

        return true;
      },
      filter: (value, answers) => {
        return applySuffix(value, answers.componentType);
      },
    },
    {
      type: 'confirm',
      name: 'wantRoutes',
      message: 'Do you want routes?',
      default: true,
    },
    {
      type: 'list',
      name: 'feature',
      message: 'Select Feature',
      choices: ['APP', ...features].filter((f) => f !== '.gitkeep'),
      when: () => features.length > 0,
    },
  ],
  actions: (result) => {
    const basePath =
      !result.feature || result.feature === 'APP'
        ? `src/app/components/${componentTypePathsMap[result.componentType]}`
        : `'src/app/features/{{feature}}/components/${componentTypePathsMap[result.componentType]}`;

    const useStyles = result.componentType === 'element' || result.componentType === 'layout' || result.componentType === 'page';

    const actions = [
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/index.ts',
        templateFile: 'generators/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'generators/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.types.ts',
        templateFile: 'generators/component/Component.types.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.view-model.ts',
        templateFile: 'generators/component/Component.view-model.ts.hbs',
      },
      {
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'generators/component/Component.spec.tsx.hbs',
      },
    ];

    if (result.wantRoutes) {
      actions.push({
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.routes.tsx',
        templateFile: 'generators/component/Component.routes.tsx.hbs',
      });
    }

    if (useStyles) {
      actions.push({
        type: 'add',
        path: basePath + '/{{kebabCase name}}/{{kebabCase name}}.module.scss',
        templateFile: 'generators/component/Component.module.scss.hbs',
      });
    }

    return actions;
  },
};