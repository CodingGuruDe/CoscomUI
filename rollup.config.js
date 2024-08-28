import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

import fs from 'fs-extra';
import path from 'path';

import pkg from './package.json';

let entries = [];

let core = {};

const CORE_ICON_DEPENDENCIES = {
    'coscom/baseicon': 'coscom.baseicon',
    'coscom/icons/angledoubledown': 'coscom.icons.angledoubledown',
    'coscom/icons/angledoubleleft': 'coscom.icons.angledoubleleft',
    'coscom/icons/angledoubleright': 'coscom.icons.angledoubleright',
    'coscom/icons/angledoubleup': 'coscom.icons.angledoubleup',
    'coscom/icons/angledown': 'coscom.icons.angledown',
    'coscom/icons/angleleft': 'coscom.icons.angleleft',
    'coscom/icons/angleright': 'coscom.icons.angleright',
    'coscom/icons/angleup': 'coscom.icons.angleup',
    'coscom/icons/arrowdown': 'coscom.icons.arrowdown',
    'coscom/icons/arrowup': 'coscom.icons.arrowup',
    'coscom/icons/ban': 'coscom.icons.ban',
    'coscom/icons/bars': 'coscom.icons.bars',
    'coscom/icons/blank': 'coscom.icons.blank',
    'coscom/icons/calendar': 'coscom.icons.calendar',
    'coscom/icons/check': 'coscom.icons.check',
    'coscom/icons/chevrondown': 'coscom.icons.chevrondown',
    'coscom/icons/chevronleft': 'coscom.icons.chevronleft',
    'coscom/icons/chevronright': 'coscom.icons.chevronright',
    'coscom/icons/chevronup': 'coscom.icons.chevronup',
    'coscom/icons/exclamationtriangle': 'coscom.icons.exclamationtriangle',
    'coscom/icons/eye': 'coscom.icons.eye',
    'coscom/icons/eyeslash': 'coscom.icons.eyeslash',
    'coscom/icons/filter': 'coscom.icons.filter',
    'coscom/icons/filterslash': 'coscom.icons.filterslash',
    'coscom/icons/infocircle': 'coscom.icons.infocircle',
    'coscom/icons/minus': 'coscom.icons.minus',
    'coscom/icons/pencil': 'coscom.icons.pencil',
    'coscom/icons/plus': 'coscom.icons.plus',
    'coscom/icons/refresh': 'coscom.icons.refresh',
    'coscom/icons/search': 'coscom.icons.search',
    'coscom/icons/searchminus': 'coscom.icons.searchminus',
    'coscom/icons/searchplus': 'coscom.icons.searchplus',
    'coscom/icons/sortalt': 'coscom.icons.sortalt',
    'coscom/icons/sortamountdown': 'coscom.icons.sortamountdown',
    'coscom/icons/sortamountupalt': 'coscom.icons.sortamountupalt',
    'coscom/icons/spinner': 'coscom.icons.spinner',
    'coscom/icons/star': 'coscom.icons.star',
    'coscom/icons/starfill': 'coscom.icons.starfill',
    'coscom/icons/thlarge': 'coscom.icons.thlarge',
    'coscom/icons/times': 'coscom.icons.times',
    'coscom/icons/timescircle': 'coscom.icons.timescircle',
    'coscom/icons/trash': 'coscom.icons.trash',
    'coscom/icons/undo': 'coscom.icons.undo',
    'coscom/icons/upload': 'coscom.icons.upload',
    'coscom/icons/windowmaximize': 'coscom.icons.windowmaximize',
    'coscom/icons/windowminimize': 'coscom.icons.windowminimize'
};

const CORE_PASSTHROUGH_DEPENDENCIES = {
    'coscom/passthrough': 'coscom.passthrough',
    'coscom/passthrough/tailwind': 'coscom.passthrough.tailwind'
};

const CORE_STYLE_DEPENDENCIES = {
    'coscom/base/style': 'coscom.base.style',
    'coscom/basecomponent/style': 'coscom.basecomponent.style',
    'coscom/accordion/style': 'coscom.accordion.style',
    'coscom/accordiontab/style': 'coscom.accordiontab.style',
    'coscom/autocomplete/style': 'coscom.autocomplete.style',
    'coscom/animateonscroll/style': 'coscom.animateonscroll.style',
    'coscom/badge/style': 'coscom.badge.style',
    'coscom/badgedirective/style': 'coscom.badgedirective.style',
    'coscom/baseicon/style': 'coscom.baseicon.style',
    'coscom/blockui/style': 'coscom.blockui.style',
    'coscom/breadcrumb/style': 'coscom.breadcrumb.style',
    'coscom/button/style': 'coscom.button.style',
    'coscom/buttongroup/style': 'coscom.buttongroup.style',
    'coscom/calendar/style': 'coscom.calendar.style',
    'coscom/card/style': 'coscom.card.style',
    'coscom/carousel/style': 'coscom.carousel.style',
    'coscom/cascadeselect/style': 'coscom.cascadeselect.style',
    'coscom/checkbox/style': 'coscom.checkbox.style',
    'coscom/chip/style': 'coscom.chip.style',
    'coscom/chips/style': 'coscom.chips.style',
    'coscom/colorpicker/style': 'coscom.colorpicker.style',
    'coscom/column/style': 'coscom.column.style',
    'coscom/columngroup/style': 'coscom.columngroup.style',
    'coscom/confirmdialog/style': 'coscom.confirmdialog.style',
    'coscom/confirmpopup/style': 'coscom.confirmpopup.style',
    'coscom/contextmenu/style': 'coscom.contextmenu.style',
    'coscom/datatable/style': 'coscom.datatable.style',
    'coscom/dataview/style': 'coscom.dataview.style',
    'coscom/dataviewlayoutoptions/style': 'coscom.dataviewlayoutoptions.style',
    'coscom/dialog/style': 'coscom.dialog.style',
    'coscom/divider/style': 'coscom.divider.style',
    'coscom/dropdown/style': 'coscom.dropdown.style',
    'coscom/dynamicdialog/style': 'coscom.dynamicdialog.style',
    'coscom/editor/style': 'coscom.editor.style',
    'coscom/fieldset/style': 'coscom.fieldset.style',
    'coscom/fileupload/style': 'coscom.fileupload.style',
    'coscom/floatbutton/style': 'coscom.floatbutton.style',
    'coscom/focustrap/style': 'coscom.focustrap.style',
    'coscom/image/style': 'coscom.image.style',
    'coscom/inplace/style': 'coscom.inplace.style',
    'coscom/inputgroup/style': 'coscom.inputgroup.style',
    'coscom/inputgroupaddon/style': 'coscom.inputgroupaddon.style',
    'coscom/inputmask/style': 'coscom.inputmask.style',
    'coscom/inputnumber/style': 'coscom.inputnumber.style',
    'coscom/inputswitch/style': 'coscom.inputswitch.style',
    'coscom/inputtext/style': 'coscom.inputtext.style',
    'coscom/knob/style': 'coscom.knob.style',
    'coscom/listbox/style': 'coscom.listbox.style',
    'coscom/megamenu/style': 'coscom.megamenu.style',
    'coscom/menu/style': 'coscom.menu.style',
    'coscom/menubar/style': 'coscom.menubar.style',
    'coscom/message/style': 'coscom.message.style',
    'coscom/metergroup/style': 'coscom.metergroup.style',
    'coscom/multiselect/style': 'coscom.multiselect.style',
    'coscom/orderlist/style': 'coscom.orderlist.style',
    'coscom/overlaypanel/style': 'coscom.overlaypanel.style',
    'coscom/paginator/style': 'coscom.paginator.style',
    'coscom/panel/style': 'coscom.panel.style',
    'coscom/panelmenu/style': 'coscom.panelmenu.style',
    'coscom/password/style': 'coscom.password.style',
    'coscom/picklist/style': 'coscom.picklist.style',
    'coscom/portal/style': 'coscom.portal.style',
    'coscom/progressbar/style': 'coscom.progressbar.style',
    'coscom/progressspinner/style': 'coscom.progressspinner.style',
    'coscom/radiobutton/style': 'coscom.radiobutton.style',
    'coscom/rating/style': 'coscom.rating.style',
    'coscom/ripple/style': 'coscom.ripple.style',
    'coscom/row/style': 'coscom.row.style',
    'coscom/scrollpanel/style': 'coscom.scrollpanel.style',
    'coscom/scrolltop/style': 'coscom.scrolltop.style',
    'coscom/sidebar/style': 'coscom.sidebar.style',
    'coscom/skeleton/style': 'coscom.skeleton.style',
    'coscom/slider/style': 'coscom.slider.style',
    'coscom/speeddial/style': 'coscom.speeddial.style',
    'coscom/splitbutton/style': 'coscom.splitbutton.style',
    'coscom/splitter/style': 'coscom.splitter.style',
    'coscom/splitterpanel/style': 'coscom.splitterpanel.style',
    'coscom/stepper/style': 'coscom.stepper.style',
    'coscom/stepperpanel/style': 'coscom.stepperpanel.style',
    'coscom/steps/style': 'coscom.steps.style',
    'coscom/tabmenu/style': 'coscom.tabmenu.style',
    'coscom/tabpanel/style': 'coscom.tabpanel.style',
    'coscom/tab/style': 'coscom.tab.style',
    'coscom/textarea/style': 'coscom.textarea.style',
    'coscom/tieredmenu/style': 'coscom.tieredmenu.style',
    'coscom/timeline/style': 'coscom.timeline.style',
    'coscom/toast/style': 'coscom.toast.style',
    'coscom/toolbar/style': 'coscom.toolbar.style',
    'coscom/tooltip/style': 'coscom.tooltip.style',
    'coscom/tree/style': 'coscom.tree.style',
    'coscom/treeselect/style': 'coscom.treeselect.style',
    'coscom/treetable/style': 'coscom.treetable.style',
    'coscom/tristatecheckbox/style': 'coscom.tristatecheckbox.style',
    'coscom/virtualscroller/style': 'coscom.virtualscroller.style'
};

const CORE_DEPENDENCIES = {
    'coscom/utils': 'coscom.utils',
    'coscom/api': 'coscom.api',
    'coscom/config': 'coscom.config',
    'coscom/base': 'coscom.base',
    'coscom/usestyle': 'coscom.usestyle',
    ...CORE_STYLE_DEPENDENCIES,
    'coscom/basedirective': 'coscom.basedirective',
    'coscom/ripple': 'coscom.ripple',
    'coscom/portal': 'coscom.portal',
    'coscom/basecomponent': 'coscom.basecomponent',
    ...CORE_ICON_DEPENDENCIES,
    'coscom/tooltip': 'coscom.tooltip',
    'coscom/focustrap': 'coscom.focustrap',
    'coscom/virtualscroller': 'coscom.virtualscroller',
    'coscom/confirmationeventbus': 'coscom.confirmationeventbus',
    'coscom/toasteventbus': 'coscom.toasteventbus',
    'coscom/overlayeventbus': 'coscom.overlayeventbus',
    'coscom/dynamicdialogeventbus': 'coscom.dynamicdialogeventbus',
    'coscom/terminalservice': 'coscom.terminalservice',
    'coscom/useconfirm': 'coscom.useconfirm',
    'coscom/usetoast': 'coscom.usetoast',
    'coscom/usedialog': 'coscom.usedialog',
    'coscom/button': 'coscom.button',
    'coscom/inputtext': 'coscom.inputtext',
    'coscom/inputnumber': 'coscom.inputnumber',
    'coscom/checkbox': 'coscom.checkbox',
    'coscom/radiobutton': 'coscom.radiobutton',
    'coscom/message': 'coscom.message',
    'coscom/progressbar': 'coscom.progressbar',
    'coscom/dropdown': 'coscom.dropdown',
    'coscom/dialog': 'coscom.dialog',
    'coscom/paginator': 'coscom.paginator',
    'coscom/tree': 'coscom.tree',
    'coscom/menu': 'coscom.menu',
    'coscom/tieredmenu': 'coscom.tieredmenu',
    'coscom/badge': 'coscom.badge',
    ...CORE_PASSTHROUGH_DEPENDENCIES
};

// dependencies
const GLOBAL_DEPENDENCIES = {
    vue: 'Vue'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES,
    ...CORE_DEPENDENCIES
};

// externals
const EXTERNAL = ['vue', 'quill'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...Object.keys(CORE_DEPENDENCIES)];

// plugins
const BABEL_PLUGIN_OPTIONS = {
    extensions: ['.js', '.vue'],
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env'],
    plugins: [],
    skipPreflightCheck: true,
    babelHelpers: 'runtime',
    babelrc: false
};

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: false
    }
};

const PLUGINS = [vue(), postcss(POSTCSS_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS)];

function addEntry(folder, inFile, outFile) {
    const exports = inFile === 'Coscom.js' || folder === 'passthrough/tailwind' ? 'named' : 'auto';
    const useCorePlugin = Object.keys(GLOBAL_COMPONENT_DEPENDENCIES).some((d) => d.replace('coscom/', '') === folder);
    const plugins = PLUGINS;
    const external = EXTERNAL_COMPONENT;
    const inlineDynamicImports = true;

    const input = `components/lib/${folder}/${inFile}`;
    const output = `dist/${folder}/${outFile}`;

    const getEntry = (isMinify) => {
        return {
            input,
            plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS), useCorePlugin && corePlugin()],
            external,
            inlineDynamicImports
        };
    };

    const get_CJS_ESM = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'cjs',
                    file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
                    exports
                },
                {
                    format: 'esm',
                    file: `${output}.esm${isMinify ? '.min' : ''}.js`,
                    exports
                }
            ]
        };
    };

    const get_IIFE = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'iife',
                    name: 'coscom.' + folder.replaceAll('/', '.'),
                    file: `${output}${isMinify ? '.min' : ''}.js`,
                    globals: GLOBAL_COMPONENT_DEPENDENCIES,
                    exports
                }
            ]
        };
    };

    entries.push(get_CJS_ESM());
    entries.push(get_IIFE());

    // Minify
    entries.push(get_CJS_ESM(true));
    entries.push(get_IIFE(true));
}

function corePlugin() {
    return {
        name: 'corePlugin',
        generateBundle(outputOptions, bundle) {
            const { name, format } = outputOptions;

            if (format === 'iife') {
                Object.keys(bundle).forEach((id) => {
                    const chunk = bundle[id];
                    const folderName = name.replace('coscom.', '').replaceAll('.', '/');
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js' : '.js'}`;

                    core[filePath] ? (core[filePath][folderName] = chunk.code) : (core[filePath] = { [`${folderName}`]: chunk.code });
                });
            }
        }
    };
}

function addCore() {
    const lastEntry = entries[entries.length - 1];

    lastEntry.plugins = [
        ...lastEntry.plugins,
        {
            name: 'coreMergePlugin',
            generateBundle() {
                Object.entries(core).forEach(([filePath, value]) => {
                    const code = Object.keys(CORE_DEPENDENCIES).reduce((val, d) => {
                        const name = d.replace('coscom/', '');

                        val += value[name] + '\n';

                        return val;
                    }, '');

                    fs.outputFile(path.resolve(__dirname, filePath), code, {}, function (err) {
                        if (err) {
                            // eslint-disable-next-line no-console
                            return console.error(err);
                        }
                    });
                });
            }
        }
    ];
}

function addSFC() {
    fs.readdirSync(path.resolve(__dirname, './components/lib'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './components/lib/' + folderName)).forEach((file) => {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();

                if (/\.vue$/.test(file) && name === folderName) {
                    addEntry(folderName, file, name);
                }
            });
        });
}

function addIcon() {
    fs.readdirSync(path.resolve(__dirname, './components/lib/icons'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './components/lib/icons/' + folderName)).forEach((file) => {
                if (/\.vue$/.test(file)) {
                    addEntry('icons/' + folderName, 'index.vue', 'index');
                }
            });
        });
}

function addStyle() {
    fs.readdirSync(path.resolve(__dirname, './components/lib'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            try {
                fs.readdirSync(path.resolve(__dirname, './components/lib/' + folderName + '/style')).forEach((file) => {
                    if (/\.js$/.test(file)) {
                        let name = file.split(/(.js)$/)[0].toLowerCase();

                        addEntry(folderName + '/style', file, name);
                    }
                });
            } catch {}
        });
}

function addDirectives() {
    addEntry('basedirective', 'BaseDirective.js', 'basedirective');
    addEntry('badgedirective', 'BadgeDirective.js', 'badgedirective');
    addEntry('ripple', 'Ripple.js', 'ripple');
    addEntry('tooltip', 'Tooltip.js', 'tooltip');
    addEntry('focustrap', 'FocusTrap.js', 'focustrap');
    addEntry('styleclass', 'StyleClass.js', 'styleclass');
    addEntry('animateonscroll', 'AnimateOnScroll.js', 'animateonscroll');
}

function addConfig() {
    addEntry('config', 'Coscom.js', 'config');
}

function addPassThrough() {
    addEntry('passthrough', 'index.js', 'index');
    addEntry('passthrough/tailwind', 'index.js', 'index');
}

function addUtils() {
    addEntry('utils', 'Utils.js', 'utils');
}

function addApi() {
    addEntry('api', 'Api.js', 'api');
}

function addBase() {
    addEntry('base', 'Base.js', 'base');
}

function addServices() {
    addEntry('confirmationservice', 'ConfirmationService.js', 'confirmationservice');
    addEntry('confirmationeventbus', 'ConfirmationEventBus.js', 'confirmationeventbus');
    addEntry('useconfirm', 'UseConfirm.js', 'useconfirm');
    addEntry('toastservice', 'ToastService.js', 'toastservice');
    addEntry('toasteventbus', 'ToastEventBus.js', 'toasteventbus');
    addEntry('overlayeventbus', 'OverlayEventBus.js', 'overlayeventbus');
    addEntry('usetoast', 'UseToast.js', 'usetoast');
    addEntry('usestyle', 'UseStyle.js', 'usestyle');
    addEntry('terminalservice', 'TerminalService.js', 'terminalservice');
    addEntry('usedialog', 'UseDialog.js', 'usedialog');
    addEntry('dialogservice', 'DialogService.js', 'dialogservice');
    addEntry('dynamicdialogeventbus', 'DynamicDialogEventBus.js', 'dynamicdialogeventbus');
}

function addPackageJson() {
    const outputDir = 'dist';
    const packageJson = `{
    "name": "@coscom/coscom-ui",
    "version": "${pkg.version}",
    "private": false,
    "author": "Sinisa Botic",
    "description": "Coscom UI is a lightweight UI components library made for internal usage. It offers a set of easily customisable components and doesnt depend on any specific style or CSS framework.",
    "homepage": "https://coscom.org/",
    "repository": {
        "type": "git",
        "url": "https://github.com/CodingGuruDe/CoscomUI.git"
    },
    "license": "MIT",
    "keywords": [
        "coscom-ui",
        "coscom",
        "vue",
        "vue.js",
        "vue2",
        "vue3",
        "ui library",
        "component library",
        "material",
        "bootstrap",
        "fluent",
        "tailwind",
        "unstyled",
        "passthrough"
    ],
    "web-types": "./web-types.json",
    "vetur": {
        "tags": "./vetur-tags.json",
        "attributes": "./vetur-attributes.json"
    },
    "peerDependencies": {
        "vue": "^3.0.0"
    }
}`;

    !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
    fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson);
}

addUtils();
addStyle();
addBase();
addApi();
addConfig();
addDirectives();
addServices();
addSFC();
addIcon();
addPassThrough();
addCore();
addPackageJson();

export default entries;
