/**
 *
 * When pressed, a floating action button can display multiple primary actions that can be performed on a page.
 *
 *
 * @module floatbutton
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { ButtonPassThroughOptions } from '../button';
import { MenuItem } from '../menuitem';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type FloatButtonPassThroughOptionType = FloatButtonPassThroughAttributes | ((options: FloatButtonThroughMethodOptions) => FloatButtonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface FloatButtonThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: FloatButtonProps;
    /**
     * Defines current inline state.
     */
    state: FloatButtonState;
    /**
     * Defines current options.
     */
    context: FloatButtonContext;
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
 * Custom shared passthrough(pt) option method.
 */
export interface FloatButtonSharedPassThroughMethodOptions {
    /**
     * Defines valid properties.
     */
    props: FloatButtonProps;
    /**
     * Defines current inline state.
     */
    state: FloatButtonState;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link FloatButtonProps.pt}
 */
export interface FloatButtonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: FloatButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the Button component.
     *  @see {@link ButtonPassThroughOptions}
     */
    button?: ButtonPassThroughOptions<FloatButtonSharedPassThroughMethodOptions>;
    /**
     * Used to pass attributes to the menu's DOM element.
     */
    menu?: FloatButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the menu item's DOM element.
     */
    menuitem?: FloatButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the action's DOM element.
     */
    action?: FloatButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the action icon's DOM element.
     */
    actionIcon?: FloatButtonPassThroughOptionType;
    /**
     * Used to pass attributes to the mask's DOM element.
     */
    mask?: FloatButtonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface FloatButtonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines current inline state in FloatButton component.
 */
export interface FloatButtonState {
    /**
     * List of items' id.
     */
    id: string;
    /**
     * Current visible state as a boolean.
     * @defaultValue false
     */
    visible: boolean;
    /**
     * Current click state of component as a boolean.
     * @defaultValue false
     */
    isItemClicked: boolean;
    /**
     * Current focus state as a boolean.
     * @defaultValue false
     */
    focused: boolean;
    /**
     * Current focused option index as a number.
     * @defaultValue -1
     */
    focusedOptionIndex: number;
}

/**
 * Defines current options in FloatButton component.
 */
export interface FloatButtonContext {
    /**
     * Current active state of menuitem as a boolean.
     * @defaultValue false
     */
    active: boolean;
    /**
     * Current hidden state of menuitem as a boolean.
     * @defaultValue false
     */
    hidden: boolean;
}

/**
 * Defines tooltip options.
 * @see {@link SpeedDialProps.tooltipOptions}
 */
export interface FloatButtonTooltipOptions {
    /**
     * Event to show the tooltip, valid values are hover and focus.
     */
    event: 'hover' | 'focus' | undefined;
    /**
     * Position of element.
     * @defaultValue bottom
     */
    position: 'bottom' | 'top' | 'left' | 'right' | undefined;
    /**
     * Optional options.
     */
    [key: string]: any;
}

/**
 * Defines valid properties in FloatButton component.
 */
export interface FloatButtonProps {
    /**
     * MenuModel instance to define the action items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Specifies the visibility of the overlay.
     * @defaultValue false
     */
    visible?: boolean | undefined;
    /**
     * Specifies the opening direction of actions.
     * @defaultValue up
     */
    direction?: 'up' | 'down' | 'left' | 'right' | '.v-left' | '.v-right' | 'down-left' | 'down-right' | undefined;
    /**
     * Transition delay step for each action item.
     * @defaultValue 30
     */
    transitionDelay?: number | undefined;
    /**
     * Specifies the opening type of actions.
     * @defaultValue linear
     */
    type?: 'linear' | 'circle' | 'semi-circle' | 'quarter-circle' | undefined;
    /**
     * Radius for *circle types.
     * @defaultValue 0
     */
    radius?: number | undefined;
    /**
     * Whether to show a mask element behind the floatbutton.
     * @defaultValue false
     */
    mask?: boolean | undefined;
    /**
     * Whether the component is disabled.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Whether the actions close when clicked outside.
     * @defaultValue true
     */
    hideOnClickOutside?: boolean | undefined;
    /**
     * Style class of the button element.
     */
    buttonClass?: any;
    /**
     * Inline style of the mask element.
     */
    maskStyle?: any;
    /**
     * Style class of the mask element.
     */
    maskClass?: string | undefined;
    /**
     * Show icon of the button element.
     * @deprecated since v3.27.0. Use 'showicon' slot.
     */
    showIcon?: string | undefined;
    /**
     * Hide icon of the button element.
     * @deprecated since v3.27.0. Use 'hideicon' slot.
     */
    hideIcon?: string | undefined;
    /**
     * Defined to rotate showIcon when hideIcon is not present.
     * @defaultValue true
     */
    rotateAnimation?: boolean | undefined;
    /**
     * Style class of the element.
     */
    class?: any;
    /**
     * Inline style of the element.
     */
    style?: any;
    /**
     * Whether to display the tooltip on items. The modifiers of Tooltip can be used like an object in it. Valid keys are 'event' and 'position'.
     * @type {FloatButtonTooltipOptions}
     */
    tooltipOptions?: FloatButtonTooltipOptions;
    /**
     * Defines a string value that labels an interactive list element.
     */
    ariaLabel?: string | undefined;
    /**
     * Identifier of the underlying list element.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {FloatButtonPassThroughOptions}
     */
    pt?: PassThrough<FloatButtonPassThroughOptions>;
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
 * Defines valid slots in FloatButton component.
 */
export interface FloatButtonSlots {
    /**
     * Custom content for each item.
     * @param {Object} scope - item slot's params.
     */
    item(scope: {
        /**
         * Menuitem instance
         * @type {MenuItem}
         */
        item: MenuItem;
        /**
         * Item click function
         * @param {Event} event - Browser event.
         */
        onClick: (event: Event) => void;
    }): VNode[];
    /**
     * Custom button template.
     * @param {Object} scope - button slot's params.
     */
    button(scope: {
        /**
         * Button click function
         * @param {Event} event - Browser event.
         * @deprecated since v3.39.0. Use 'toggleCallback' property instead.
         */
        onClick: (event: Event) => void;
        /**
         * Button click function
         * @param {Event} event - Browser event.
         */
        toggleCallback: (event: Event) => void;
    }): VNode[];
    /**
     * Custom icon template.
     * @param {Object} scope - icon slot's params.
     */
    icon(scope: {
        /**
         * Visible state of the item
         */
        visible: boolean;
    }): VNode[];
}

/**
 * Defines valid emits in FloatButton component.
 */
export interface FloatButtonEmits {
    /**
     * Fired when the button element clicked.
     * @param {Event} event - Browser event.
     */
    click(event: Event): void;
    /**
     * Fired when the actions are visible.
     */
    show(): void;
    /**
     * Fired when the actions are hidden.
     */
    hide(): void;
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     */
    focus(event: Event): void;
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     */
    blur(event: Event): void;
}

/**
 * **CoscomUI - FloatButton**
 *
 * _When pressed, a floating action button can display multiple primary actions that can be performed on a page._
 *
 *
 * @group Component
 *
 */
declare class FloatButton extends ClassComponent<FloatButtonProps, FloatButtonSlots, FloatButtonEmits> {}

declare module 'vue' {
    export interface GlobalComponents {
        FloatButton: GlobalComponentConstructor<FloatButton>;
    }
}

export default FloatButton;
