<template>
    <div v-focustrap :class="cx('root')" aria-live="polite" v-bind="ptmi('root')">
        <div v-if="!d_active" ref="display" :class="cx('display')" :tabindex="$attrs.tabindex || '0'" role="button" @click="open" @keydown.enter="open" v-bind="{ ...displayProps, ...ptm('display') }">
            <slot name="display"></slot>
        </div>
        <div v-else :class="cx('content')" v-bind="ptm('content')">
            <slot name="content"></slot>
            <IPButton v-if="closable" :aria-label="closeAriaLabel" @click="close" :unstyled="unstyled" :pt="ptm('closeButton')" v-bind="closeButtonProps">
                <template #icon>
                    <slot name="closeicon">
                        <component :is="closeIcon ? 'span' : 'TimesIcon'" :class="closeIcon" v-bind="ptm('closeButton')['icon']" data-pc-section="closebuttonicon"></component>
                    </slot>
                </template>
            </IPButton>
        </div>
    </div>
</template>

<script>
import Button from '@coscom/coscom-ui/button';
import FocusTrap from '@coscom/coscom-ui/focustrap';
import TimesIcon from '@coscom/coscom-ui/icons/times';
import BaseInplace from './BaseInplace.vue';

export default {
    name: 'Inplace',
    extends: BaseInplace,
    inheritAttrs: false,
    emits: ['open', 'close', 'update:active'],
    data() {
        return {
            d_active: this.active
        };
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    methods: {
        open(event) {
            if (this.disabled) {
                return;
            }

            this.$emit('open', event);
            this.d_active = true;
            this.$emit('update:active', true);
        },
        close(event) {
            this.$emit('close', event);
            this.d_active = false;
            this.$emit('update:active', false);
            setTimeout(() => {
                this.$refs.display.focus();
            }, 0);
        }
    },
    computed: {
        closeAriaLabel() {
            return this.$coscom.config.locale.aria ? this.$coscom.config.locale.aria.close : undefined;
        }
    },
    components: {
        IPButton: Button,
        TimesIcon
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>
