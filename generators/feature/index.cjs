/**
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: 'Feature Structure Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'feature name',
      default: '',
      validate: (value) => {
        if (!value.trim()) {
          return 'feature name is required';
        }

        return true;
      },
      filter: (value) => {
        return value + '-feature';
      },
    },
  ],
  actions: () => {
    const basePath = 'src/app/features/{{kebabCase name}}';

    const actions = [
      {
        type: 'add',
        path: basePath + '/components/elements/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/components/layouts/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/components/providers/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/config/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/components/pages/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/types/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/hooks/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/utils/.gitkeep',
        templateFile: 'generators/feature/.gitkeep.hbs',
      },
      {
        type: 'add',
        path: basePath + '/index.tsx',
        templateFile: 'generators/feature/feature.routes.tsx.hbs',
      },
    ];

    return actions;
  },
};
