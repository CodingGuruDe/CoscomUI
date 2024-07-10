import { useStyle } from '@coscom/coscom-ui/usestyle';

const css = `
.v-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.v-hidden-accessible input,
.v-hidden-accessible select {
    transform: scale(0);
}

.v-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`;

const classes = {};

const inlineStyles = {};

export default {
    name: 'base',
    css,
    classes,
    inlineStyles,
    loadStyle(options = {}) {
        return this.css ? useStyle(this.css, { name: this.name, ...options }) : {};
    },
    getStyleSheet(extendedCSS = '', props = {}) {
        if (this.css) {
            const _props = Object.entries(props)
                .reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, [])
                .join(' ');

            return `<style type="text/css" data-coscom-style-id="${this.name}" ${_props}>${this.css}${extendedCSS}</style>`;
        }

        return '';
    },
    extend(style) {
        return { ...this, css: undefined, ...style };
    }
};
