<template>
    <Checkbox :modelValue="checked" :binary="true" :disabled="disabled" :aria-label="headerCheckboxAriaLabel" @change="onChange" :pt="getColumnPT('headerCheckbox')">
        <template #icon="slotProps">
            <component v-if="headerCheckboxIconTemplate" :is="headerCheckboxIconTemplate" :checked="slotProps.checked" :class="slotProps.class" />
            <CheckIcon v-else-if="!headerCheckboxIconTemplate && slotProps.checked" :class="slotProps.class" v-bind="getColumnPT('headerCheckbox.icon')" />
        </template>
    </Checkbox>
</template>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import Checkbox from '@coscom/coscom-ui/checkbox';
import CheckIcon from '@coscom/coscom-ui/icons/check';
import { mergeProps } from 'vue';

export default {
    name: 'HeaderCheckbox',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: ['change'],
    props: {
        checked: null,
        disabled: null,
        column: null,
        headerCheckboxIconTemplate: {
            type: Function,
            default: null
        }
    },
    methods: {
        getColumnPT(key) {
            const columnMetaData = {
                props: this.column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    checked: this.checked,
                    disabled: this.disabled
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo:
        },
        onChange(event) {
            this.$emit('change', {
                originalEvent: event,
                checked: !this.checked
            });
        }
    },
    computed: {
        headerCheckboxAriaLabel() {
            return this.$coscom.config.locale.aria ? (this.checked ? this.$coscom.config.locale.aria.selectAll : this.$coscom.config.locale.aria.unselectAll) : undefined;
        }
    },
    components: {
        CheckIcon,
        Checkbox
    }
};
</script>
