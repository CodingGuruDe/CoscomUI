<template>
    <div class="template-hero">
        <img v-if="!!templateHeroData.pattern" class="template-hero-pattern" :src="templateHeroData.pattern" alt="Template Hero Pattern" />
        <TemplateHeroLight v-if="!!templateHeroData.light" />
        <TemplateHeroRectangle v-if="!!templateHeroData.rectangle" />
        <div class="template-hero-card">
            <div class="template-hero-card-logo">
                <slot name="logo" />
            </div>
            <p>{{ templateHeroData.description }}</p>
            <div class="template-hero-card-buttons">
                <a :href="templateHeroData.liveHref" target="_blank" class="template-hero-card-buttons-btn1 p-button"> Live Demo </a>
                <a :href="templateHeroData.storeHref ?? 0" target="_blank" class="template-hero-card-buttons-btn2 p-button">
                    {{ templateHeroData.free ? 'Source Code' : 'Buy Now' }}
                </a>
            </div>
            <div class="template-hero-card-links">
                <a :href="templateHeroData.supportHref ?? 0" target="_blank">
                    <i class="cs el-github" />
                    <span>{{ templateHeroData.free ? 'Open Issues' : 'Get Support' }}</span>
                </a>
                <a :href="templateHeroData.docHref" target="_blank">
                    <i class="cs el-book" />
                    <span>Read Doc</span>
                </a>
            </div>
        </div>
        <img v-if="!!templateHeroData.dashboard1" class="template-hero-dashboard1" :src="templateHeroData.dashboard1" alt="Template Dashboard Image 1" />
        <img v-if="!!templateHeroData.dashboard2" class="template-hero-dashboard2" :src="templateHeroData.dashboard2" alt="Template Dashboard Image 2" />
    </div>
</template>

<script>
export default {
    props: {
        templateHeroData: {
            type: null,
            templateHeroData: null
        }
    }
};
</script>
