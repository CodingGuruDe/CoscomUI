<template>
    <DocSectionText v-bind="$attrs">
        <p>FloatButton sample with an outlined button, custom icons and <i>transitionDelay</i>.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex align-items-end justify-content-center" :style="{ position: 'relative', height: '350px' }">
            <FloatButton :model="items" direction="up" :transitionDelay="80" showIcon="cs el-bars" hideIcon="cs el-times" buttonClass="v-button-outlined" />
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'cs el-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'cs el-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'cs el-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'cs el-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'cs el-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ],
            code: {
                basic: `
<Toast />
<FloatButton :model="items" direction="up" :transitionDelay="80" showIcon="cs el-bars" hideIcon="cs el-times" buttonClass="v-button-outlined" />
`,
                options: `
<template>
    <div class="card">
        <div class="flex align-items-end justify-content-center" :style="{ position: 'relative', height: '350px' }">
            <Toast />
            <FloatButton :model="items" direction="up" :transitionDelay="80" showIcon="cs el-bars" hideIcon="cs el-times" buttonClass="v-button-outlined" />
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          items: [
              {
                  label: 'Add',
                  icon: 'cs el-pencil',
                  command: () => {
                      this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                  }
              },
              {
                  label: 'Update',
                  icon: 'cs el-refresh',
                  command: () => {
                      this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                  }
              },
              {
                  label: 'Delete',
                  icon: 'cs el-trash',
                  command: () => {
                      this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                  }
              },
              {
                  label: 'Upload',
                  icon: 'cs el-upload',
                  command: () => {
                      this.$router.push('/fileupload');
                  }
              },
              {
                  label: 'Vue Website',
                  icon: 'cs el-external-link',
                  command: () => {
                      window.location.href = 'https://vuejs.org/';
                  }
              }
          ]
      }
  }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex align-items-end justify-content-center" :style="{ position: 'relative', height: '350px' }">
            <Toast />
            <FloatButton :model="items" direction="up" :transitionDelay="80" showIcon="cs el-bars" hideIcon="cs el-times" buttonClass="v-button-outlined" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from '@coscom/coscom-ui/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
  {
      label: 'Add',
      icon: 'cs el-pencil',
      command: () => {
          toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      }
  },
  {
      label: 'Update',
      icon: 'cs el-refresh',
      command: () => {
          toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
      }
  },
  {
      label: 'Delete',
      icon: 'cs el-trash',
      command: () => {
          toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
      }
  },
  {
      label: 'Upload',
      icon: 'cs el-upload',
      command: () => {
          router.push('/fileupload');
      }
  },
  {
      label: 'Vue Website',
      icon: 'cs el-external-link',
      command: () => {
          window.location.href = 'https://vuejs.org/'
      }
  }
])
<\/script>
`
            }
        };
    }
};
</script>
