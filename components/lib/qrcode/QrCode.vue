<template>
    <div></div>
</template>

<script>
import QRCode from './QrcodeLib.js';
import BaseQrCode from './BaseQrCode.vue';
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: false,
            default: 256
        },
        color: {
            type: String,
            required: false,
            default: '#000'
        },
        bgColor: {
            type: String,
            required: false,
            default: '#FFF'
        },
        errorLevel: {
            type: String,
            validator(value) {
                return value === 'L' || value === 'M' || value === 'Q' || value === 'H';
            },
            required: false,
            default: 'H'
        }
    },

    data() {
        return {
            qrCode: {}
        };
    },

    watch: {
        text() {
            this.clear();
            this.makeCode(this.text);
        }
    },

    mounted() {
        this.qrCode = new QRCode(this.$el, {
            text: this.text,
            width: this.size,
            height: this.size,
            colorDark: this.color,
            colorLight: this.bgColor,
            correctLevel: QRCode.CorrectLevel[this.errorLevel]
        });
    },

    methods: {
        clear() {
            this.qrCode.clear();
        },
        makeCode(text) {
            this.qrCode.makeCode(text);
        }
    }
};
</script>
