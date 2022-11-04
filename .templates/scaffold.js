const {program} = require('commander');
const path = require('path');
const createComponent = require('./component/index');

program
    .argument("<type>", "Type of component to create [element, partial, view, layout]")
    .argument("<name>", "Name of component to create")
    .description("Create a new component")
    .option("-s, --simple", "Create a simple component without store")
    .action((location, name, options) => {
        const cwd = path.resolve(path.join(process.cwd(), '.templates', 'component'));
        const isSimple = options.simple;
        const srcRoot = path.resolve(process.cwd(), 'src');

        createComponent(cwd, srcRoot, isSimple, location, name);
    });

program.parse(process.argv);