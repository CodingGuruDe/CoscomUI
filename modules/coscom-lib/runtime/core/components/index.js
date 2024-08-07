const form = [
    'AutoComplete',
    'Calendar',
    'CascadeSelect',
    'Checkbox',
    'Chips',
    'ColorPicker',
    'Dropdown',
    'Editor',
    'FloatLabel',
    'IconField',
    'InputGroup',
    'InputGroupAddon',
    'InputIcon',
    'InputMask',
    'InputNumber',
    'InputSwitch',
    'InputText',
    'Knob',
    'Listbox',
    'MultiSelect',
    'Password',
    'RadioButton',
    'Slider',
    'Textarea',
    'TreeSelect',
    'QrCode'
];

const button = ['Button', 'ButtonGroup', 'SpeedDial', 'SplitButton'];

const data = ['Column', 'Row', 'ColumnGroup', 'DataTable', 'DataView', 'DataViewLayoutOptions', 'OrderList', 'OrganizationChart', 'Paginator', 'PickList', 'Tree', 'TreeTable', 'Timeline', 'VirtualScroller'];

const panel = ['Accordion', 'AccordionTab', 'Card', 'Divider', 'Fieldset', 'Panel', 'ScrollPanel', 'Splitter', 'SplitterPanel', 'Stepper', 'StepperPanel', 'TabView', 'TabPanel', 'Toolbar'];

const overlay = [{ name: 'ConfirmDialog', use: { as: 'ConfirmationService' } }, { name: 'ConfirmPopup', use: { as: 'ConfirmationService' } }, 'Dialog', { name: 'DynamicDialog', use: { as: 'DialogService' } }, 'OverlayPanel', 'Sidebar'];

const file = ['FileUpload'];

const menu = ['Breadcrumb', 'ContextMenu', 'Menu', 'Menubar', 'MegaMenu', 'PanelMenu', 'Steps', 'TabMenu', 'TieredMenu'];

const messages = ['Message', 'InlineMessage', { name: 'Toast', use: { as: 'ToastService' } }];

const media = ['Carousel', 'Galleria', 'Image'];

const misc = ['Badge', 'Chip', 'Inplace', 'ScrollTop', 'Skeleton', 'ProgressBar', 'ProgressSpinner', 'Tag'];

export const components = [...form, ...button, ...data, ...panel, ...overlay, ...file, ...menu, ...messages, ...media, ...misc].map((c) => (typeof c === 'string' ? { name: c } : c));
