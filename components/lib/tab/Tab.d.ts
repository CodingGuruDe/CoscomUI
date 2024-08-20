/**
 *
 * Tab is a container component to group content with tabs.
 *
 *
 * @module tab
 *
 */
import { ButtonHTMLAttributes, VNode } from 'vue';
import { ComponentHooks } from '../basecomponent/BaseComponent';
import { PassThroughOptions } from '../passthrough';
import { TabPanelPassThroughOptionType } from '../tabpanel/TabPanel';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type TabPassThroughOptionType = TabPassThroughAttributes | ((options: TabPassThroughMethodOptions) => TabPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TabProps;
    /**
     * Defines current inline state.
     */
    state: TabState;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom tab change event.
 * @see {@link TabEmits['tab-change']}
 */
export interface TabChangeEvent {
    /**
     * Browser event
     */
    originalEvent: Event;
    /**
     * Index of the selected tab
     */
    index: number;
}

/**
 * Custom tab change event.
 * @see {@link TabEmits['tab-click']}
 * @extends TabChangeEvent
 */
export interface TabClickEvent extends TabChangeEvent {}

/**
 * Custom passthrough(pt) options.
 * @see {@link TabProps.pt}
 */
export interface TabPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the nav container's DOM element.
     */
    navContainer?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the nav content's DOM element.
     */
    navContent?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    nav?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the inkbar's DOM element.
     */
    inkbar?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the previous button's DOM element.
     */
    previousButton?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the previous button icon's DOM element.
     */
    previousIcon?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the next button's DOM element.
     */
    nextButton?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the next button icon's DOM element.
     */
    nextIcon?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panelContainer?: TabPassThroughOptionType;
    /**
     * Used to pass attributes to TabPanel helper components.
     * @deprecated since v3.30.1. Use 'tabpanel' property instead.
     */
    tab?: TabPanelPassThroughOptionType;
    /**
     * Used to pass attributes to TabPanel helper components.
     */
    tabpanel?: TabPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface TabPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in Tab component.
 */
export interface TabState {
    /**
     * Current active index state.
     */
    d_activeIndex: number;
    /**
     * Unique id for the Tab component.
     */
    id: string;
    /**
     * Current state of previous button.
     * @defaultValue true
     */
    isPrevButtonDisabled: boolean;
    /**
     * Current state of the next button.
     * @defaultValue false
     */
    isNextButtonDisabled: boolean;
}

/**
 * Defines valid properties in Tab component.
 */
export interface TabProps {
    /**
     * Index of the active tab.
     * @defaultValue 0
     */
    activeIndex?: number | undefined;
    /**
     * When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.
     * @defaultValue false
     */
    lazy?: boolean | undefined;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @defaultValue false
     */
    scrollable?: boolean | undefined;
    /**
     * Index of the element in tabbing order.
     * @defaultValue 0
     */
    tabindex?: number | undefined;
    /**
     * When enabled, the focused tab is activated.
     * @defaultValue false
     */
    selectOnFocus?: boolean | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the previous button.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    previousButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Used to pass all properties of the HTMLButtonElement to the next button.
     * @deprecated since v3.26.0. Use 'pt' property instead.
     */
    nextButtonProps?: ButtonHTMLAttributes | undefined;
    /**
     * Previous icon of the scrollable tab.
     * @deprecated since v3.27.0. Use 'previousicon' slot.
     */
    prevIcon?: string | undefined;
    /**
     * Next icon of the scrollable tab.
     * @deprecated since v3.27.0. Use 'next' slot.
     */
    nextIcon?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TabPassThroughOptions}
     */
    pt?: PassThrough<TabPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in Tab slots.
 */
export interface TabSlots {
    /**
     * Default slot to detect TabPanel components.
     */
    default(): VNode[];
    /**
     * Previous button icon template for the scrollable component.
     */
    previousicon(): VNode[];
    /**
     * Next button icon template for the scrollable component.
     */
    nexticon(): VNode[];
}

/**
 * Defines valid emits in Tab component.
 */
export interface TabEmits {
    /**
     * Emitted when the activeIndex changes.
     * @param {number} index - Current activeIndex.
     */
    'update:activeIndex'(index: number): void;
    /**
     * Callback to invoke when an active tab is changed.
     * @param {TabChangeEvent} event - Custom tab change event.
     */
    'tab-change'(event: TabChangeEvent): void;
    /**
     * Callback to invoke when an active tab is clicked.
     * @param {TabClickEvent} event - Custom tab click event.
     */
    'tab-click'(event: TabClickEvent): void;
}

/**
 * **CoscomUI - Tab**
 *
 * _Tab is a container component to group content with tabs._
 *
 *
 * @group Component
 *
 */
declare class Tab extends ClassComponent<TabProps, TabSlots, TabEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        Tab: GlobalComponentConstructor<Tab>;
    }
}

export default Tab;
