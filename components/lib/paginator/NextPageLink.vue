<template>
    <button v-ripple :class="cx('nextPageButton')" type="button" v-bind="getPTOptions('nextPageButton')" data-pc-group-section="pagebutton">
        <component :is="template || 'AngleRightIcon'" :class="cx('nextPageIcon')" v-bind="getPTOptions('nextPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import AngleRightIcon from '@coscom/coscom-ui/icons/angleright';
import Ripple from '@coscom/coscom-ui/ripple';

export default {
    name: 'NextPageLink',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
        }
    },
    components: {
        AngleRightIcon: AngleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
