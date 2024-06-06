<template>
    <button v-ripple :class="cx('previousPageButton')" type="button" v-bind="getPTOptions('previousPageButton')" data-pc-group-section="pagebutton">
        <component :is="template || 'AngleLeftIcon'" :class="cx('previousPageIcon')" v-bind="getPTOptions('previousPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import AngleLeftIcon from '@coscom/coscom-ui/icons/angleleft';
import Ripple from '@coscom/coscom-ui/ripple';

export default {
    name: 'PrevPageLink',
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
        AngleLeftIcon: AngleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
