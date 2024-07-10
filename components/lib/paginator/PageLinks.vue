<template>
    <span :class="cx('pages')" v-bind="ptm('pages')">
        <button
            v-for="pageLink of value"
            :key="pageLink"
            v-ripple
            :class="cx('pageButton', { pageLink })"
            type="button"
            :aria-label="ariaPageLabel(pageLink)"
            :aria-current="pageLink - 1 === page ? 'page' : undefined"
            @click="onPageLinkClick($event, pageLink)"
            v-bind="getPTOptions(pageLink - 1, 'pageButton')"
            :data-v-highlight="pageLink - 1 === page"
        >
            {{ pageLink }}
        </button>
    </span>
</template>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import Ripple from '@coscom/coscom-ui/ripple';

export default {
    name: 'PageLinks',
    hostName: 'Paginator',
    extends: BaseComponent,
    inheritAttrs: false,
    emits: ['click'],
    props: {
        value: Array,
        page: Number
    },
    methods: {
        getPTOptions(pageLink, key) {
            return this.ptm(key, {
                context: {
                    active: pageLink === this.page
                }
            });
        },
        onPageLinkClick(event, pageLink) {
            this.$emit('click', {
                originalEvent: event,
                value: pageLink
            });
        },
        ariaPageLabel(value) {
            return this.$coscom.config.locale.aria ? this.$coscom.config.locale.aria.pageLabel.replace(/{page}/g, value) : undefined;
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
