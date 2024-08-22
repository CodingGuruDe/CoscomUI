import path from 'path';

/* @todo: Refactor alias: https://github.com/rollup/plugins/tree/master/packages/alias#regular-expression-aliases */

const STYLE_ALIAS = {
    '@coscom/coscom-ui/base/style': path.resolve(__dirname, './components/lib/base/style/BaseStyle.js'),
    '@coscom/coscom-ui/basecomponent/style': path.resolve(__dirname, './components/lib/basecomponent/style/BaseComponentStyle.js'),
    '@coscom/coscom-ui/accordion/style': path.resolve(__dirname, './components/lib/accordion/style/AccordionStyle.js'),
    '@coscom/coscom-ui/accordiontab/style': path.resolve(__dirname, './components/lib/accordiontab/style/AccordionTabStyle.js'),
    'coscom/animateonscroll/style': path.resolve(__dirname, './components/lib/animateonscroll/style/AnimateOnScrollStyle.js'),
    '@coscom/coscom-ui/autocomplete/style': path.resolve(__dirname, './components/lib/autocomplete/style/AutoCompleteStyle.js'),
    '@coscom/coscom-ui/badge/style': path.resolve(__dirname, './components/lib/badge/style/BadgeStyle.js'),
    '@coscom/coscom-ui/badgedirective/style': path.resolve(__dirname, './components/lib/badgedirective/style/BadgeDirectiveStyle.js'),
    '@coscom/coscom-ui/baseicon/style': path.resolve(__dirname, './components/lib/baseicon/style/BaseIconStyle.js'),
    '@coscom/coscom-ui/breadcrumb/style': path.resolve(__dirname, './components/lib/breadcrumb/style/BreadcrumbStyle.js'),
    '@coscom/coscom-ui/button/style': path.resolve(__dirname, './components/lib/button/style/ButtonStyle.js'),
    '@coscom/coscom-ui/buttongroup/style': path.resolve(__dirname, './components/lib/buttongroup/style/ButtonGroupStyle.js'),
    '@coscom/coscom-ui/calendar/style': path.resolve(__dirname, './components/lib/calendar/style/CalendarStyle.js'),
    '@coscom/coscom-ui/card/style': path.resolve(__dirname, './components/lib/card/style/CardStyle.js'),
    '@coscom/coscom-ui/carousel/style': path.resolve(__dirname, './components/lib/carousel/style/CarouselStyle.js'),
    '@coscom/coscom-ui/cascadeselect/style': path.resolve(__dirname, './components/lib/cascadeselect/style/CascadeSelectStyle.js'),
    '@coscom/coscom-ui/checkbox/style': path.resolve(__dirname, './components/lib/checkbox/style/CheckboxStyle.js'),
    '@coscom/coscom-ui/chip/style': path.resolve(__dirname, './components/lib/chip/style/ChipStyle.js'),
    '@coscom/coscom-ui/chips/style': path.resolve(__dirname, './components/lib/chips/style/ChipsStyle.js'),
    '@coscom/coscom-ui/colorpicker/style': path.resolve(__dirname, './components/lib/colorpicker/style/ColorPickerStyle.js'),
    '@coscom/coscom-ui/column/style': path.resolve(__dirname, './components/lib/column/style/ColumnStyle.js'),
    '@coscom/coscom-ui/columngroup/style': path.resolve(__dirname, './components/lib/columngroup/style/ColumnGroupStyle.js'),
    '@coscom/coscom-ui/confirmdialog/style': path.resolve(__dirname, './components/lib/confirmdialog/style/ConfirmDialogStyle.js'),
    '@coscom/coscom-ui/confirmpopup/style': path.resolve(__dirname, './components/lib/confirmpopup/style/ConfirmPopupStyle.js'),
    '@coscom/coscom-ui/contextmenu/style': path.resolve(__dirname, './components/lib/contextmenu/style/ContextMenuStyle.js'),
    '@coscom/coscom-ui/datatable/style': path.resolve(__dirname, './components/lib/datatable/style/DataTableStyle.js'),
    '@coscom/coscom-ui/dataview/style': path.resolve(__dirname, './components/lib/dataview/style/DataViewStyle.js'),
    '@coscom/coscom-ui/dataviewlayoutoptions/style': path.resolve(__dirname, './components/lib/dataviewlayoutoptions/style/DataViewLayoutOptionsStyle.js'),
    '@coscom/coscom-ui/dialog/style': path.resolve(__dirname, './components/lib/dialog/style/DialogStyle.js'),
    '@coscom/coscom-ui/divider/style': path.resolve(__dirname, './components/lib/divider/style/DividerStyle.js'),
    '@coscom/coscom-ui/dropdown/style': path.resolve(__dirname, './components/lib/dropdown/style/DropdownStyle.js'),
    '@coscom/coscom-ui/dynamicdialog/style': path.resolve(__dirname, './components/lib/dynamicdialog/style/DynamicDialogStyle.js'),
    '@coscom/coscom-ui/editor/style': path.resolve(__dirname, './components/lib/editor/style/EditorStyle.js'),
    '@coscom/coscom-ui/fieldset/style': path.resolve(__dirname, './components/lib/fieldset/style/FieldsetStyle.js'),
    '@coscom/coscom-ui/floatlabel/style': path.resolve(__dirname, './components/lib/floatlabel/style/FloatLabelStyle.js'),
    '@coscom/coscom-ui/fileupload/style': path.resolve(__dirname, './components/lib/fileupload/style/FileUploadStyle.js'),
    '@coscom/coscom-ui/focustrap/style': path.resolve(__dirname, './components/lib/focustrap/style/FocusTrapStyle.js'),
    '@coscom/coscom-ui/galleria/style': path.resolve(__dirname, './components/lib/galleria/style/GalleriaStyle.js'),
    '@coscom/coscom-ui/image/style': path.resolve(__dirname, './components/lib/image/style/ImageStyle.js'),
    '@coscom/coscom-ui/inplace/style': path.resolve(__dirname, './components/lib/inplace/style/InplaceStyle.js'),
    '@coscom/coscom-ui/inputgroup/style': path.resolve(__dirname, './components/lib/inputgroup/style/InputGroupStyle.js'),
    '@coscom/coscom-ui/inputgroupaddon/style': path.resolve(__dirname, './components/lib/inputgroupaddon/style/InputGroupAddonStyle.js'),
    '@coscom/coscom-ui/inputicon/style': path.resolve(__dirname, './components/lib/inputicon/style/InputIconStyle.js'),
    '@coscom/coscom-ui/inputmask/style': path.resolve(__dirname, './components/lib/inputmask/style/InputMaskStyle.js'),
    '@coscom/coscom-ui/inputnumber/style': path.resolve(__dirname, './components/lib/inputnumber/style/InputNumberStyle.js'),
    '@coscom/coscom-ui/inputswitch/style': path.resolve(__dirname, './components/lib/inputswitch/style/InputSwitchStyle.js'),
    '@coscom/coscom-ui/inputtext/style': path.resolve(__dirname, './components/lib/inputtext/style/InputTextStyle.js'),
    '@coscom/coscom-ui/knob/style': path.resolve(__dirname, './components/lib/knob/style/KnobStyle.js'),
    '@coscom/coscom-ui/megamenu/style': path.resolve(__dirname, './components/lib/megamenu/style/MegaMenuStyle.js'),
    '@coscom/coscom-ui/menu/style': path.resolve(__dirname, './components/lib/menu/style/MenuStyle.js'),
    '@coscom/coscom-ui/menubar/style': path.resolve(__dirname, './components/lib/menubar/style/MenubarStyle.js'),
    '@coscom/coscom-ui/message/style': path.resolve(__dirname, './components/lib/message/style/MessageStyle.js'),
    '@coscom/coscom-ui/multiselect/style': path.resolve(__dirname, './components/lib/multiselect/style/MultiSelectStyle.js'),
    '@coscom/coscom-ui/orderlist/style': path.resolve(__dirname, './components/lib/orderlist/style/OrderListStyle.js'),
    '@coscom/coscom-ui/overlaypanel/style': path.resolve(__dirname, './components/lib/overlaypanel/style/OverlayPanelStyle.js'),
    '@coscom/coscom-ui/paginator/style': path.resolve(__dirname, './components/lib/paginator/style/PaginatorStyle.js'),
    '@coscom/coscom-ui/panel/style': path.resolve(__dirname, './components/lib/panel/style/PanelStyle.js'),
    '@coscom/coscom-ui/panelmenu/style': path.resolve(__dirname, './components/lib/panelmenu/style/PanelMenuStyle.js'),
    '@coscom/coscom-ui/password/style': path.resolve(__dirname, './components/lib/password/style/PasswordStyle.js'),
    '@coscom/coscom-ui/picklist/style': path.resolve(__dirname, './components/lib/picklist/style/PickListStyle.js'),
    '@coscom/coscom-ui/portal/style': path.resolve(__dirname, './components/lib/portal/style/PortalStyle.js'),
    '@coscom/coscom-ui/progressbar/style': path.resolve(__dirname, './components/lib/progressbar/style/ProgressBarStyle.js'),
    '@coscom/coscom-ui/progressspinner/style': path.resolve(__dirname, './components/lib/progressspinner/style/ProgressSpinnerStyle.js'),
    '@coscom/coscom-ui/radiobutton/style': path.resolve(__dirname, './components/lib/radiobutton/style/RadioButtonStyle.js'),
    '@coscom/coscom-ui/ripple/style': path.resolve(__dirname, './components/lib/ripple/style/RippleStyle.js'),
    '@coscom/coscom-ui/row/style': path.resolve(__dirname, './components/lib/row/style/RowStyle.js'),
    '@coscom/coscom-ui/scrollpanel/style': path.resolve(__dirname, './components/lib/scrollpanel/style/ScrollPanelStyle.js'),
    '@coscom/coscom-ui/scrolltop/style': path.resolve(__dirname, './components/lib/scrolltop/style/ScrollTopStyle.js'),
    '@coscom/coscom-ui/sidebar/style': path.resolve(__dirname, './components/lib/sidebar/style/SidebarStyle.js'),
    '@coscom/coscom-ui/skeleton/style': path.resolve(__dirname, './components/lib/skeleton/style/SkeletonStyle.js'),
    '@coscom/coscom-ui/slider/style': path.resolve(__dirname, './components/lib/slider/style/SliderStyle.js'),
    '@coscom/coscom-ui/speeddial/style': path.resolve(__dirname, './components/lib/speeddial/style/SpeedDialStyle.js'),
    '@coscom/coscom-ui/splitbutton/style': path.resolve(__dirname, './components/lib/splitbutton/style/SplitButtonStyle.js'),
    '@coscom/coscom-ui/splitter/style': path.resolve(__dirname, './components/lib/splitter/style/SplitterStyle.js'),
    '@coscom/coscom-ui/splitterpanel/style': path.resolve(__dirname, './components/lib/splitterpanel/style/SplitterPanelStyle.js'),
    '@coscom/coscom-ui/steps/style': path.resolve(__dirname, './components/lib/steps/style/StepsStyle.js'),
    '@coscom/coscom-ui/stepper/style': path.resolve(__dirname, './components/lib/stepper/style/StepperStyle.js'),
    '@coscom/coscom-ui/stepperpanel/style': path.resolve(__dirname, './components/lib/stepperpanel/style/StepperPanelStyle.js'),
    '@coscom/coscom-ui/tabmenu/style': path.resolve(__dirname, './components/lib/tabmenu/style/TabMenuStyle.js'),
    '@coscom/coscom-ui/tabpanel/style': path.resolve(__dirname, './components/lib/tabpanel/style/TabPanelStyle.js'),
    '@coscom/coscom-ui/tab/style': path.resolve(__dirname, './components/lib/tab/style/TabStyle.js'),
    '@coscom/coscom-ui/textarea/style': path.resolve(__dirname, './components/lib/textarea/style/TextareaStyle.js'),
    '@coscom/coscom-ui/tieredmenu/style': path.resolve(__dirname, './components/lib/tieredmenu/style/TieredMenuStyle.js'),
    '@coscom/coscom-ui/timeline/style': path.resolve(__dirname, './components/lib/timeline/style/TimelineStyle.js'),
    '@coscom/coscom-ui/toast/style': path.resolve(__dirname, './components/lib/toast/style/ToastStyle.js'),
    '@coscom/coscom-ui/toolbar/style': path.resolve(__dirname, './components/lib/toolbar/style/ToolbarStyle.js'),
    '@coscom/coscom-ui/tooltip/style': path.resolve(__dirname, './components/lib/tooltip/style/TooltipStyle.js'),
    '@coscom/coscom-ui/tree/style': path.resolve(__dirname, './components/lib/tree/style/TreeStyle.js'),
    '@coscom/coscom-ui/treeselect/style': path.resolve(__dirname, './components/lib/treeselect/style/TreeSelectStyle.js'),
    '@coscom/coscom-ui/treetable/style': path.resolve(__dirname, './components/lib/treetable/style/TreeTableStyle.js'),
    '@coscom/coscom-ui/virtualscroller/style': path.resolve(__dirname, './components/lib/virtualscroller/style/VirtualScrollerStyle.js'),
    '@coscom/coscom-ui/qrcode/style': path.resolve(__dirname, './components/lib/qrcode/style/QrCodeStyle.js')
};

const ICON_ALIAS = {
    '@coscom/coscom-ui/baseicon': path.resolve(__dirname, './components/lib/baseicon/BaseIcon.vue'),
    '@coscom/coscom-ui/icons/angledoubledown': path.resolve(__dirname, './components/lib/icons/angledoubledown/index.vue'),
    '@coscom/coscom-ui/icons/angledoubleleft': path.resolve(__dirname, './components/lib/icons/angledoubleleft/index.vue'),
    '@coscom/coscom-ui/icons/angledoubleright': path.resolve(__dirname, './components/lib/icons/angledoubleright/index.vue'),
    '@coscom/coscom-ui/icons/angledoubleup': path.resolve(__dirname, './components/lib/icons/angledoubleup/index.vue'),
    '@coscom/coscom-ui/icons/angledown': path.resolve(__dirname, './components/lib/icons/angledown/index.vue'),
    '@coscom/coscom-ui/icons/angleleft': path.resolve(__dirname, './components/lib/icons/angleleft/index.vue'),
    '@coscom/coscom-ui/icons/angleright': path.resolve(__dirname, './components/lib/icons/angleright/index.vue'),
    '@coscom/coscom-ui/icons/angleup': path.resolve(__dirname, './components/lib/icons/angleup/index.vue'),
    '@coscom/coscom-ui/icons/arrowdown': path.resolve(__dirname, './components/lib/icons/arrowdown/index.vue'),
    '@coscom/coscom-ui/icons/arrowup': path.resolve(__dirname, './components/lib/icons/arrowup/index.vue'),
    '@coscom/coscom-ui/icons/ban': path.resolve(__dirname, './components/lib/icons/ban/index.vue'),
    '@coscom/coscom-ui/icons/bars': path.resolve(__dirname, './components/lib/icons/bars/index.vue'),
    '@coscom/coscom-ui/icons/blank': path.resolve(__dirname, './components/lib/icons/blank/index.vue'),
    '@coscom/coscom-ui/icons/calendar': path.resolve(__dirname, './components/lib/icons/calendar/index.vue'),
    '@coscom/coscom-ui/icons/check': path.resolve(__dirname, './components/lib/icons/check/index.vue'),
    '@coscom/coscom-ui/icons/chevrondown': path.resolve(__dirname, './components/lib/icons/chevrondown/index.vue'),
    '@coscom/coscom-ui/icons/chevronleft': path.resolve(__dirname, './components/lib/icons/chevronleft/index.vue'),
    '@coscom/coscom-ui/icons/chevronright': path.resolve(__dirname, './components/lib/icons/chevronright/index.vue'),
    '@coscom/coscom-ui/icons/chevronup': path.resolve(__dirname, './components/lib/icons/chevronup/index.vue'),
    '@coscom/coscom-ui/icons/exclamationtriangle': path.resolve(__dirname, './components/lib/icons/exclamationtriangle/index.vue'),
    '@coscom/coscom-ui/icons/eye': path.resolve(__dirname, './components/lib/icons/eye/index.vue'),
    '@coscom/coscom-ui/icons/eyeslash': path.resolve(__dirname, './components/lib/icons/eyeslash/index.vue'),
    '@coscom/coscom-ui/icons/filter': path.resolve(__dirname, './components/lib/icons/filter/index.vue'),
    '@coscom/coscom-ui/icons/filterslash': path.resolve(__dirname, './components/lib/icons/filterslash/index.vue'),
    '@coscom/coscom-ui/icons/infocircle': path.resolve(__dirname, './components/lib/icons/infocircle/index.vue'),
    '@coscom/coscom-ui/icons/minus': path.resolve(__dirname, './components/lib/icons/minus/index.vue'),
    '@coscom/coscom-ui/icons/pencil': path.resolve(__dirname, './components/lib/icons/pencil/index.vue'),
    '@coscom/coscom-ui/icons/plus': path.resolve(__dirname, './components/lib/icons/plus/index.vue'),
    '@coscom/coscom-ui/icons/refresh': path.resolve(__dirname, './components/lib/icons/refresh/index.vue'),
    '@coscom/coscom-ui/icons/search': path.resolve(__dirname, './components/lib/icons/search/index.vue'),
    '@coscom/coscom-ui/icons/searchminus': path.resolve(__dirname, './components/lib/icons/searchminus/index.vue'),
    '@coscom/coscom-ui/icons/searchplus': path.resolve(__dirname, './components/lib/icons/searchplus/index.vue'),
    '@coscom/coscom-ui/icons/sortalt': path.resolve(__dirname, './components/lib/icons/sortalt/index.vue'),
    '@coscom/coscom-ui/icons/sortamountdown': path.resolve(__dirname, './components/lib/icons/sortamountdown/index.vue'),
    '@coscom/coscom-ui/icons/sortamountupalt': path.resolve(__dirname, './components/lib/icons/sortamountupalt/index.vue'),
    '@coscom/coscom-ui/icons/spinner': path.resolve(__dirname, './components/lib/icons/spinner/index.vue'),
    '@coscom/coscom-ui/icons/star': path.resolve(__dirname, './components/lib/icons/star/index.vue'),
    '@coscom/coscom-ui/icons/starfill': path.resolve(__dirname, './components/lib/icons/starfill/index.vue'),
    '@coscom/coscom-ui/icons/thlarge': path.resolve(__dirname, './components/lib/icons/thlarge/index.vue'),
    '@coscom/coscom-ui/icons/times': path.resolve(__dirname, './components/lib/icons/times/index.vue'),
    '@coscom/coscom-ui/icons/timescircle': path.resolve(__dirname, './components/lib/icons/timescircle/index.vue'),
    '@coscom/coscom-ui/icons/trash': path.resolve(__dirname, './components/lib/icons/trash/index.vue'),
    '@coscom/coscom-ui/icons/undo': path.resolve(__dirname, './components/lib/icons/undo/index.vue'),
    '@coscom/coscom-ui/icons/upload': path.resolve(__dirname, './components/lib/icons/upload/index.vue'),
    '@coscom/coscom-ui/icons/windowmaximize': path.resolve(__dirname, './components/lib/icons/windowmaximize/index.vue'),
    '@coscom/coscom-ui/icons/windowminimize': path.resolve(__dirname, './components/lib/icons/windowminimize/index.vue')
};

export default {
    resolve: {
        alias: {
            '@coscom/coscom-ui/utils': path.resolve(__dirname, './components/lib/utils/Utils.js'),
            '@coscom/coscom-ui/api': path.resolve(__dirname, './components/lib/api/Api.js'),
            ...STYLE_ALIAS,
            '@coscom/coscom-ui/base': path.resolve(__dirname, './components/lib/base/Base.js'),
            '@coscom/coscom-ui/basedirective': path.resolve(__dirname, './components/lib/basedirective/BaseDirective.js'),
            '@coscom/coscom-ui/ripple': path.resolve(__dirname, './components/lib/ripple/Ripple.js'),
            '@coscom/coscom-ui/tooltip': path.resolve(__dirname, './components/lib/tooltip/Tooltip.js'),
            '@coscom/coscom-ui/focustrap': path.resolve(__dirname, './components/lib/focustrap/FocusTrap.js'),
            '@coscom/coscom-ui/useconfirm': path.resolve(__dirname, './components/lib/useconfirm/UseConfirm.js'),
            '@coscom/coscom-ui/usetoast': path.resolve(__dirname, './components/lib/usetoast/UseToast.js'),
            '@coscom/coscom-ui/usedialog': path.resolve(__dirname, './components/lib/usedialog/UseDialog.js'),
            '@coscom/coscom-ui/usestyle': path.resolve(__dirname, './components/lib/usestyle/UseStyle.js'),
            '@coscom/coscom-ui/portal': path.resolve(__dirname, './components/lib/portal/Portal.vue'),
            '@coscom/coscom-ui/basecomponent': path.resolve(__dirname, './components/lib/basecomponent/BaseComponent.vue'),
            ...ICON_ALIAS,
            '@coscom/coscom-ui/button': path.resolve(__dirname, './components/lib/button/Button.vue'),
            '@coscom/coscom-ui/inputtext': path.resolve(__dirname, './components/lib/inputtext/InputText.vue'),
            '@coscom/coscom-ui/checkbox': path.resolve(__dirname, './components/lib/checkbox/Checkbox.vue'),
            '@coscom/coscom-ui/radiobutton': path.resolve(__dirname, './components/lib/radiobutton/RadioButton.vue'),
            '@coscom/coscom-ui/dialog': path.resolve(__dirname, './components/lib/dialog/Dialog.vue'),
            '@coscom/coscom-ui/menu': path.resolve(__dirname, './components/lib/menu/Menu.vue'),
            '@coscom/coscom-ui/tieredmenu': path.resolve(__dirname, './components/lib/tieredmenu/TieredMenu.vue'),
            '@coscom/coscom-ui/dropdown': path.resolve(__dirname, './components/lib/dropdown/Dropdown.vue'),
            '@coscom/coscom-ui/inputnumber': path.resolve(__dirname, './components/lib/inputnumber/InputNumber.vue'),
            '@coscom/coscom-ui/paginator': path.resolve(__dirname, './components/lib/paginator/Paginator.vue'),
            '@coscom/coscom-ui/progressbar': path.resolve(__dirname, './components/lib/progressbar/ProgressBar.vue'),
            '@coscom/coscom-ui/message': path.resolve(__dirname, './components/lib/message/Message.vue'),
            '@coscom/coscom-ui/tree': path.resolve(__dirname, './components/lib/tree/Tree.vue'),
            '@coscom/coscom-ui/badge': path.resolve(__dirname, './components/lib/badge/Badge.vue'),
            '@coscom/coscom-ui/confirmationeventbus': path.resolve(__dirname, './components/lib/confirmationeventbus/ConfirmationEventBus.js'),
            '@coscom/coscom-ui/toasteventbus': path.resolve(__dirname, './components/lib/toasteventbus/ToastEventBus.js'),
            '@coscom/coscom-ui/overlayeventbus': path.resolve(__dirname, './components/lib/overlayeventbus/OverlayEventBus.js'),
            '@coscom/coscom-ui/terminalservice': path.resolve(__dirname, './components/lib/terminalservice/TerminalService.js'),
            '@coscom/coscom-ui/dynamicdialogeventbus': path.resolve(__dirname, './components/lib/dynamicdialogeventbus/DynamicDialogEventBus.js'),
            '@coscom/coscom-ui/virtualscroller': path.resolve(__dirname, './components/lib/virtualscroller/VirtualScroller.vue'),
            '@coscom/coscom-ui/passthrough': path.resolve(__dirname, './components/lib/passthrough/index.js'),
            '@coscom/coscom-ui/passthrough/tailwind': path.resolve(__dirname, './components/lib/passthrough/tailwind/index.js')
        }
    }
};
