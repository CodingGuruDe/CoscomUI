<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import BaseIconStyle from '@coscom/coscom-ui/baseicon/style';
import { ObjectUtils } from '@coscom/coscom-ui/utils';

export default {
    name: 'BaseIcon',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: undefined
        },
        spin: {
            type: Boolean,
            default: false
        }
    },
    style: BaseIconStyle,
    methods: {
        pti() {
            const isLabelEmpty = ObjectUtils.isEmpty(this.label);

            return {
                ...(!this.isUnstyled && {
                    class: [
                        'v-icon',
                        {
                            'v-icon-spin': this.spin
                        }
                    ]
                }),
                role: !isLabelEmpty ? 'img' : undefined,
                'aria-label': !isLabelEmpty ? this.label : undefined,
                'aria-hidden': isLabelEmpty
            };
        }
    }
};
</script>
