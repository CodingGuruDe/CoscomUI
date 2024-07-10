import BaseStyle from '@coscom/coscom-ui/base/style';

const classes = {
    root: 'v-terminal v-component',
    content: 'v-terminal-content',
    prompt: 'v-terminal-prompt',
    command: 'v-terminal-command',
    response: 'v-terminal-response',
    container: 'v-terminal-prompt-container',
    commandText: 'v-terminal-input'
};

export default BaseStyle.extend({
    name: 'terminal',
    classes
});
