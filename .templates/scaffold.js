const {program} = require('commander');
const path = require('path');
const createComponent = require('./component/index');

const isWindows = process.platform === 'win32';

program
    .argument("<type>", "Type of component to create [element, partial, view, layout]")
    .argument("<name>", "Name of component to create")
    .description("Create a new component")
    .option('-d, --dir <dir>', 'Directory to create component in')
    .name(isWindows ? 'codegen' : './codegen')
    .action((location, name, options) => {
        const cwd = path.resolve(path.join(process.cwd(), '.templates', 'component'));
        const srcRoot = options.dir ? path.resolve(options.dir) : path.resolve(process.cwd(), 'src');

        createComponent(cwd, srcRoot, location, name);
    });

program.parse(process.argv);