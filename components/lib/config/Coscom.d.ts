import { Plugin } from 'vue';
import { AccordionPassThroughOptions } from '../accordion/Accordion';
import { AccordionTabPassThroughOptions } from '../accordiontab/AccordionTab';
import { AnimateOnScrollDirectivePassThroughOptions } from '../animateonscroll/AnimateOnScroll';
import { AutoCompletePassThroughOptions } from '../autocomplete/AutoComplete';
import { BadgePassThroughOptions } from '../badge/Badge';
import { BadgeDirectivePassThroughOptions } from '../badgedirective/BadgeDirective';
import { BreadcrumbPassThroughOptions } from '../breadcrumb/Breadcrumb';
import { ButtonPassThroughOptions } from '../button/Button';
import { CalendarPassThroughOptions } from '../calendar/Calendar';
import { CardPassThroughOptions } from '../card/Card';
import { CarouselPassThroughOptions } from '../carousel/Carousel';
import { CascadeSelectPassThroughOptions } from '../cascadeselect/CascadeSelect';
import { CheckboxPassThroughOptions } from '../checkbox/Checkbox';
import { ChipPassThroughOptions } from '../chip/Chip';
import { ChipsPassThroughOptions } from '../chips/Chips';
import { ColorPickerPassThroughOptions } from '../colorpicker/ColorPicker';
import { ColumnPassThroughOptions } from '../column/Column';
import { ColumnGroupPassThroughOptions } from '../columngroup/ColumnGroup';
import { ConfirmDialogPassThroughOptions } from '../confirmdialog/ConfirmDialog';
import { ConfirmPopupPassThroughOptions } from '../confirmpopup/ConfirmPopup';
import { ContextMenuPassThroughOptions } from '../contextmenu/ContextMenu';
import { DataTablePassThroughOptions } from '../datatable/DataTable';
import { DataViewPassThroughOptions } from '../dataview/DataView';
import { DataViewLayoutOptionsPassThroughOptions } from '../dataviewlayoutoptions/DataViewLayoutOptions';
import { DialogPassThroughOptions } from '../dialog/Dialog';
import { DividerPassThroughOptions } from '../divider/Divider';
import { DropdownPassThroughOptions } from '../dropdown/Dropdown';
import { EditorPassThroughOptions } from '../editor/Editor';
import { FloatButtonPassThroughOptions } from '../floatbutton/FloatButton';
import { FieldsetPassThroughOptions } from '../fieldset/Fieldset';
import { FileUploadPassThroughOptions } from '../fileupload/FileUpload';
import { FocusTrapDirectivePassThroughOptions } from '../focustrap/FocusTrap';
import { ImagePassThroughOptions } from '../image/Image';
import { InplacePassThroughOptions } from '../inplace/Inplace';
import { InputMaskPassThroughOptions } from '../inputmask/InputMask';
import { InputNumberPassThroughOptions } from '../inputnumber/InputNumber';
import { InputSwitchPassThroughOptions } from '../inputswitch/InputSwitch';
import { InputTextPassThroughOptions } from '../inputtext/InputText';
import { KnobPassThroughOptions } from '../knob/Knob';
import { MegaMenuPassThroughOptions } from '../megamenu/MegaMenu';
import { MenuPassThroughOptions } from '../menu/Menu';
import { MenubarPassThroughOptions } from '../menubar/Menubar';
import { MessagePassThroughOptions } from '../message/Message';
import { MultiSelectPassThroughOptions } from '../multiselect/MultiSelect';
import { OrderListPassThroughOptions } from '../orderlist/OrderList';
import { OverlayPanelPassThroughOptions } from '../overlaypanel/OverlayPanel';
import { PaginatorPassThroughOptions } from '../paginator/Paginator';
import { PanelPassThroughOptions } from '../panel/Panel';
import { PanelMenuPassThroughOptions } from '../panelmenu/PanelMenu';
import { PassThroughOptions } from '../passthrough';
import { PasswordPassThroughOptions } from '../password/Password';
import { PickListPassThroughOptions } from '../picklist/PickList';
import { ProgressBarPassThroughOptions } from '../progressbar/ProgressBar';
import { ProgressSpinnerPassThroughOptions } from '../progressspinner/ProgressSpinner';
import { RadioButtonPassThroughOptions } from '../radiobutton/RadioButton';
import { RippleDirectivePassThroughOptions } from '../ripple/Ripple';
import { RowPassThroughOptions } from '../row/Row';
import { ScrollPanelPassThroughOptions } from '../scrollpanel/ScrollPanel';
import { ScrollTopPassThroughOptions } from '../scrolltop/ScrollTop';
import { SidebarPassThroughOptions } from '../sidebar/Sidebar';
import { SkeletonPassThroughOptions } from '../skeleton/Skeleton';
import { SliderPassThroughOptions } from '../slider/Slider';
import { SplitButtonPassThroughOptions } from '../splitbutton/SplitButton';
import { SplitterPassThroughOptions } from '../splitter/Splitter';
import { SplitterPanelPassThroughOptions } from '../splitterpanel/SplitterPanel';
import { StepsPassThroughOptions } from '../steps/Steps';
import { StyleClassDirectivePassThroughOptions } from '../styleclass/StyleClass';
import { TabMenuPassThroughOptions } from '../tabmenu/TabMenu';
import { TabPanelPassThroughOptions } from '../tabpanel/TabPanel';
import { TabPassThroughOptions } from '../tab/Tab';
import { TextareaPassThroughOptions } from '../textarea/Textarea';
import { TieredMenuPassThroughOptions } from '../tieredmenu/TieredMenu';
import { TimelinePassThroughOptions } from '../timeline/Timeline';
import { ToastPassThroughOptions } from '../toast/Toast';
import { ToolbarPassThroughOptions } from '../toolbar/Toolbar';
import { TooltipDirectivePassThroughOptions } from '../tooltip/Tooltip';
import { TreePassThroughOptions } from '../tree/Tree';
import { TreeSelectPassThroughOptions } from '../treeselect/TreeSelect';
import { TreeTablePassThroughOptions } from '../treetable/TreeTable';
import { QrCodePassThroughOptions } from '../qrcode/QrCode';
import { DefaultPassThrough, PassThrough } from '../ts-helpers';
import { VirtualScrollerPassThroughOptions } from '../virtualscroller/VirtualScroller';

export interface CoscomConfiguration {
    ripple?: boolean;
    inputStyle?: 'filled' | 'outlined' | undefined;
    locale?: CoscomLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: CoscomZIndexOptions;
    pt?: PassThrough<CoscomPTOptions>;
    ptOptions?: PassThroughOptions;
    unstyled?: boolean;
    csp?: CoscomCSPOptions;
}

export declare const defaultOptions: CoscomConfiguration;

export interface CoscomZIndexOptions {
    modal?: number;
    overlay?: number;
    menu?: number;
    tooltip?: number;
}

export interface CoscomCSPOptions {
    nonce?: string;
}

export interface CoscomPTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    dataviewlayoutoptions?: DefaultPassThrough<DataViewLayoutOptionsPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    floatbutton?: DefaultPassThrough<FloatButtonPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    qrcode?: DefaultPassThrough<QrCodePassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        badge?: BadgeDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        animate?: AnimateOnScrollDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}

export interface CoscomLocaleAriaOptions {
    trueLabel?: string;
    falseLabel?: string;
    nullLabel?: string;
    star?: string;
    stars?: string;
    selectAll?: string;
    unselectAll?: string;
    close?: string;
    previous?: string;
    next?: string;
    navigation?: string;
    scrollTop?: string;
    moveUp?: string;
    moveTop?: string;
    moveDown?: string;
    moveBottom?: string;
    moveToTarget?: string;
    moveToSource?: string;
    moveAllToTarget?: string;
    moveAllToSource?: string;
    pageLabel?: string;
    firstPageLabel?: string;
    lastPageLabel?: string;
    nextPageLabel?: string;
    prevPageLabel?: string;
    rowsPerPageLabel?: string;
    jumpToPageDropdownLabel?: string;
    jumpToPageInputLabel?: string;
    selectRow?: string;
    unselectRow?: string;
    expandRow?: string;
    collapseRow?: string;
    showFilterMenu?: string;
    hideFilterMenu?: string;
    filterOperator?: string;
    filterConstraint?: string;
    editRow?: string;
    saveEdit?: string;
    cancelEdit?: string;
    listView?: string;
    gridView?: string;
    slide?: string;
    slideNumber?: string;
    zoomImage?: string;
    zoomIn?: string;
    zoomOut?: string;
    rotateRight?: string;
    rotateLeft?: string;
    listLabel?: string;
}

export interface CoscomLocaleOptions {
    startsWith?: string;
    contains?: string;
    notContains?: string;
    endsWith?: string;
    equals?: string;
    notEquals?: string;
    noFilter?: string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    dateIs?: string;
    dateIsNot?: string;
    dateBefore?: string;
    dateAfter?: string;
    clear?: string;
    apply?: string;
    matchAll?: string;
    matchAny?: string;
    addRule?: string;
    removeRule?: string;
    accept?: string;
    reject?: string;
    choose?: string;
    upload?: string;
    cancel?: string;
    completed?: string;
    pending?: string;
    fileSizeTypes: string[];
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    chooseYear?: string;
    chooseMonth?: string;
    chooseDate?: string;
    prevDecade?: string;
    nextDecade?: string;
    prevYear?: string;
    nextYear?: string;
    prevMonth?: string;
    nextMonth?: string;
    prevHour?: string;
    nextHour?: string;
    prevMinute?: string;
    nextMinute?: string;
    prevSecond?: string;
    nextSecond?: string;
    am?: string;
    pm?: string;
    today?: string;
    weekHeader?: string;
    firstDayOfWeek?: number;
    showMonthAfterYear?: boolean;
    dateFormat?: string;
    weak?: string;
    medium?: string;
    strong?: string;
    passwordPrompt?: string;
    emptyFilterMessage?: string;
    searchMessage?: string;
    selectionMessage?: string;
    emptySelectionMessage?: string;
    emptySearchMessage?: string;
    emptyMessage?: string;
    aria?: CoscomLocaleAriaOptions;
}

export type CoscomChangeTheme = (currentTheme: string, newTheme: string, linkElementId: string, callback?: Function) => void;

export declare function useCoscomUI(): {
    config: CoscomConfiguration;
    changeTheme: CoscomChangeTheme;
};

declare const plugin: Plugin;
export default plugin;

declare module 'vue/types/vue' {
    interface Vue {
        $coscom: {
            config: CoscomConfiguration;
            changeTheme: CoscomChangeTheme;
        };
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $coscom: {
            config: CoscomConfiguration;
            changeTheme: CoscomChangeTheme;
        };
    }
}
