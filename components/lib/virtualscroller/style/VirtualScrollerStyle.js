import BaseStyle from '@coscom/coscom-ui/base/style';

const css = `
@layer coscomui {
    .v-virtualscroller {
        position: relative;
        overflow: auto;
        contain: strict;
        transform: translateZ(0);
        will-change: scroll-position;
        outline: 0 none;
    }

    .v-virtualscroller-content {
        position: absolute;
        top: 0;
        left: 0;
        /* contain: content; */
        min-height: 100%;
        min-width: 100%;
        will-change: transform;
    }

    .v-virtualscroller-spacer {
        position: absolute;
        top: 0;
        left: 0;
        height: 1px;
        width: 1px;
        transform-origin: 0 0;
        pointer-events: none;
    }

    .v-virtualscroller .v-virtualscroller-loader {
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .v-virtualscroller-loader.v-component-overlay {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .v-virtualscroller-loading-icon {
        font-size: 2rem;
    }

    .v-virtualscroller-loading-icon.v-icon {
        width: 2rem;
        height: 2rem;
    }

    .v-virtualscroller-horizontal > .v-virtualscroller-content {
        display: flex;
    }

    /* Inline */
    .v-virtualscroller-inline .v-virtualscroller-content {
        position: static;
    }
}
`;

export default BaseStyle.extend({
    name: 'virtualscroller',
    css
});
