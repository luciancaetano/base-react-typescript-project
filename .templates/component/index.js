const fs = require('fs');
const path = require('path');
const { kebab, camel, pascal } = require('case');
const ejs = require('ejs');

// interface TemplateParams {
//     componentClassName: string;
//     componentClassNamePropName: string;
//     componentName: string;
//     componentPropsName: string;
//     componentUseViewModelHookName: string;
// }

const locationTypeMap = {
    element: 'elements',
    partial: 'partials',
    view: 'views',
    layout: 'layouts',
};

async function runEslintFixOnPaths(paths) {
    const { ESLint } = require('eslint');

    const eslint = new ESLint({
        fix: true,
    });

    const results = await eslint.lintFiles(paths);

    await ESLint.outputFixes(results);

    const formatter = await eslint.loadFormatter('stylish');

    const resultText = formatter.format(results);

    console.log(resultText);
}

async function runStylelintFixOnPaths(paths) {
    const confFileName = '.stylelintrc.json';
    const stylelint = require('stylelint');

    const config = fs.readFileSync(path.resolve(`${process.cwd()}/${confFileName}`), 'utf-8');
    const configObject = JSON.parse(config);

    stylelint.lint({config: configObject, files: paths, fix: true}).then((data) => {
        if (data.errored) {
            console.log(data.output);
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

/**
 * @param {string} baseDir - current working directory
 * @param {element | partial | view | layout | custom} location - location of component to create
 * @param {string} name - name of component to create
 * @returns {void}
 */
function createComponent(baseDir, rootDirOrPath, location, _name) {
    const name = location === 'element' || location === 'partial' ? _name : _name + '-' + location; // add suffix to view and layout names

    const alowedTypes = ['element', 'partial', 'view', 'layout'];

    if (!alowedTypes.includes(location)) {
        console.error(`Invalid component type: ${location}`);
        console.error(`Allowed types: ${alowedTypes.join(', ')}`);
        return;
    }



    const Templates = {
        scss: fs.readFileSync(path.resolve(`${baseDir}/templates/Component.module.scss.ejs`), 'utf-8'),
        component: fs.readFileSync(path.resolve(`${baseDir}/templates/Component.tsx.ejs`), 'utf-8'),
        componentSpec: fs.readFileSync(path.resolve(`${baseDir}/templates/Component.spec.tsx.ejs`), 'utf-8'),
        types: fs.readFileSync(path.resolve(`${baseDir}/templates/Component.Types.ts.ejs`), 'utf-8'),
        viewModel: fs.readFileSync(path.resolve(`${baseDir}/templates/Component.view-model.ts.ejs`), 'utf-8'),
        viewModelSpec: fs.readFileSync(path.resolve(`${baseDir}/templates/Component.view-model.spec.ts.ejs`), 'utf-8'),
        index: fs.readFileSync(path.resolve(`${baseDir}/templates/index.ts.ejs`), 'utf-8'),
    };

    const pascalName = pascal(name);
    const kebabName = kebab(name);
    const camelName = camel(name);

    const basePath = location === 'custom' ? path.resolve(`${rootDirOrPath}/${pascalName}`) : path.resolve(`${rootDirOrPath}/app/components/${locationTypeMap[location]}/${pascalName}`);

    const params = {
        componentClassName: kebabName,
        componentClassNamePropName: camelName,
        componentName: pascalName,
        componentPropsName: `${pascalName}Props`,
        componentUseViewModelHookName: `use${pascalName}ViewModel`,
    };

    const filesToLint = [
        `${basePath}/index.ts`,
        `${basePath}/${pascalName}.tsx`,
        `${basePath}/${pascalName}.view-model.ts`,
        `${basePath}/${pascalName}.Types.ts`,
    ].filter(Boolean);

    // throw error if component already exists

    if (fs.existsSync(basePath)) {
        console.error(`Component ${pascalName} already exists`);
        return;
    }

    fs.mkdirSync(basePath, { recursive: true });
    console.log(`Created directory: ${basePath}`);
    fs.writeFileSync(`${basePath}/${pascalName}.module.scss`, ejs.render(Templates.scss, params));
    console.log(`Created file: ${pascalName}.module.scss`);
    fs.writeFileSync(`${basePath}/${pascalName}.types.ts`, ejs.render(Templates.types, params));
    console.log(`Created file: ${pascalName}.types.ts`);
    fs.writeFileSync(`${basePath}/${pascalName}.tsx`, ejs.render(Templates.component, params));
    console.log(`Created file: ${pascalName}.tsx`);
    fs.writeFileSync(`${basePath}/index.ts`, ejs.render(Templates.index, params));
    console.log(`Created file: index.ts`);
    fs.writeFileSync(`${basePath}/${pascalName}.view-model.ts`, ejs.render(Templates.viewModel, params));
    console.log(`Created file: ${pascalName}.view-model.ts`);

    // write spec files
    fs.writeFileSync(`${basePath}/${pascalName}.spec.tsx`, ejs.render(Templates.componentSpec, params));
    console.log(`Created file: ${pascalName}.spec.tsx`);
    // fs.writeFileSync(`${basePath}/${pascalName}.view-model.spec.ts`, ejs.render(Templates.viewModelSpec, params));
    // console.log(`Created file: ${pascalName}.view-model.spec.ts`);

    console.log(`\n\nComponent ${pascalName} created in ${basePath}`);

    console.log(`\n\nLinting files...`);
    runEslintFixOnPaths(filesToLint).then(() => {
        runStylelintFixOnPaths(`${basePath}/${pascalName}.module.scss`);
    });
}

module.exports = createComponent;