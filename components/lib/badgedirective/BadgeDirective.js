import { DomHandler, UniqueComponentId } from '@coscom/coscom-ui/utils';
import BaseBadgeDirective from './BaseBadgeDirective';

const BadgeDirective = BaseBadgeDirective.extend('badge', {
    mounted(el, binding) {
        const id = UniqueComponentId() + '_badge';

        const badge = DomHandler.createElement('span', {
            id,
            class: !this.isUnstyled() && this.cx('root'),
            'v-bind': this.ptm('root', {
                context: {
                    ...binding.modifiers,
                    nogutter: String(binding.value).length === 1,
                    dot: binding.value == null
                }
            })
        });

        el.$_pbadgeId = badge.getAttribute('id');

        for (let modifier in binding.modifiers) {
            !this.isUnstyled() && DomHandler.addClass(badge, 'v-badge-' + modifier);
        }

        if (binding.value != null) {
            if (typeof binding.value === 'object') el.$_badgeValue = binding.value.value;
            else el.$_badgeValue = binding.value;
            badge.appendChild(document.createTextNode(el.$_badgeValue));

            if (String(el.$_badgeValue).length === 1 && !this.isUnstyled()) {
                !this.isUnstyled() && DomHandler.addClass(badge, 'v-badge-no-gutter');
            }
        } else {
            !this.isUnstyled() && DomHandler.addClass(badge, 'v-badge-dot');
        }

        el.setAttribute('data-pd-badge', true);
        !this.isUnstyled() && DomHandler.addClass(el, 'v-overlay-badge');
        el.setAttribute('data-p-overlay-badge', 'true');
        el.appendChild(badge);

        this.$el = badge;
    },
    updated(el, binding) {
        !this.isUnstyled() && DomHandler.addClass(el, 'v-overlay-badge');
        el.setAttribute('data-p-overlay-badge', 'true');

        if (binding.oldValue !== binding.value) {
            let badge = document.getElementById(el.$_pbadgeId);

            if (typeof binding.value === 'object') el.$_badgeValue = binding.value.value;
            else el.$_badgeValue = binding.value;

            if (!this.isUnstyled()) {
                if (el.$_badgeValue) {
                    if (DomHandler.hasClass(badge, 'v-badge-dot')) DomHandler.removeClass(badge, 'v-badge-dot');

                    if (el.$_badgeValue.length === 1) DomHandler.addClass(badge, 'v-badge-no-gutter');
                    else DomHandler.removeClass(badge, 'v-badge-no-gutter');
                } else if (!el.$_badgeValue && !DomHandler.hasClass(badge, 'v-badge-dot')) {
                    DomHandler.addClass(badge, 'v-badge-dot');
                }
            }

            badge.innerHTML = '';
            badge.appendChild(document.createTextNode(el.$_badgeValue));
        }
    }
});

export default BadgeDirective;
