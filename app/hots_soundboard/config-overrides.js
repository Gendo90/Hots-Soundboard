const { injectBabelPlugin} = require('react-app-rewired')

const rootImportConfig = [
    "root-import",
    {
        rootPathPrefix: "~",
        rootPathSuffix: "."
    }
];

module.export = config => injectBabelPlugin(rootImportConfig, config);