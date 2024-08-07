import { DomHandler } from '@coscom/coscom-ui/utils';
import BaseRipple from './BaseRipple';

const Ripple = BaseRipple.extend('ripple', {
    mounted(el) {
        const config = el?.$instance?.$config;

        if (config && config.ripple) {
            this.create(el);
            this.bindEvents(el);

            el.setAttribute('data-pd-ripple', true);
        }
    },
    unmounted(el) {
        this.remove(el);
    },
    timeout: undefined,
    methods: {
        bindEvents(el) {
            el.addEventListener('mousedown', this.onMouseDown.bind(this));
        },
        unbindEvents(el) {
            el.removeEventListener('mousedown', this.onMouseDown.bind(this));
        },
        create(el) {
            const ink = DomHandler.createElement('span', {
                role: 'presentation',
                'aria-hidden': true,
                'data-v-ink': true,
                'data-v-ink-active': false,
                class: !this.isUnstyled() && this.cx('root'),
                onAnimationEnd: this.onAnimationEnd.bind(this),
                'v-bind': this.ptm('root')
            });

            el.appendChild(ink);

            this.$el = ink;
        },
        remove(el) {
            let ink = this.getInk(el);

            if (ink) {
                this.unbindEvents(el);
                ink.removeEventListener('animationend', this.onAnimationEnd);
                ink.remove();
            }
        },
        onMouseDown(event) {
            let target = event.currentTarget;
            let ink = this.getInk(target);

            if (!ink || getComputedStyle(ink, null).display === 'none') {
                return;
            }

            !this.isUnstyled() && DomHandler.removeClass(ink, 'v-ink-active');
            ink.setAttribute('data-v-ink-active', 'false');

            if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
                let d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));

                ink.style.height = d + 'px';
                ink.style.width = d + 'px';
            }

            let offset = DomHandler.getOffset(target);
            let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
            let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;

            ink.style.top = y + 'px';
            ink.style.left = x + 'px';

            !this.isUnstyled() && DomHandler.addClass(ink, 'v-ink-active');
            ink.setAttribute('data-v-ink-active', 'true');

            this.timeout = setTimeout(() => {
                if (ink) {
                    !this.isUnstyled() && DomHandler.removeClass(ink, 'v-ink-active');
                    ink.setAttribute('data-v-ink-active', 'false');
                }
            }, 401);
        },
        onAnimationEnd(event) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            !this.isUnstyled() && DomHandler.removeClass(event.currentTarget, 'v-ink-active');
            event.currentTarget.setAttribute('data-v-ink-active', 'false');
        },
        getInk(el) {
            return el && el.children ? [...el.children].find((child) => DomHandler.getAttribute(child, 'data-pc-name') === 'ripple') : undefined;
        }
    }
});

export default Ripple;
