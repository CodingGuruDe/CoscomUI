<script>
import BaseComponent from '@coscom/coscom-ui/basecomponent';
import EditorStyle from '@coscom/coscom-ui/editor/style';

export default {
    name: 'BaseEditor',
    extends: BaseComponent,
    props: {
        modelValue: String,
        placeholder: String,
        readonly: Boolean,
        formats: Array,
        editorStyle: null,
        modules: null
    },
    style: EditorStyle,
    provide() {
        return {
            $parentInstance: this
        };
    },
    beforeMount() {
        EditorStyle.loadStyle({ nonce: this.$coscom?.config?.csp?.nonce });
    }
};
</script>
