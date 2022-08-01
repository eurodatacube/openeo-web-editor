<template>
    <div class="edc" @click="download()">
        <strong>EDC</strong><br />
        <small>Make results available on eurodatacube (EDC)</small>
    </div>
</template>

<script>
import ShareMixin from './ShareMixin';

export default {
    name: 'EDCShare',
    mixins: [
        ShareMixin
    ],
    methods: {
        async download() {
            const result = await this.job.getResultsAsStac();
            const formData = new FormData();
            formData.append("my-file.json", JSON.stringify(result));
            const res = await axios.post(
                '/api/upload',
                formData,
            );
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
