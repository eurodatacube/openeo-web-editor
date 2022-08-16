<template>
	<ShareInterface
		id="share-edc" title="EDC" :description="description" :action="upload"
		actionDefaultIcon="https://avatars.githubusercontent.com/u/53830971?s=200&v=4" @stateChanged="state => this.state = state">
	</ShareInterface>
</template>

<script>
import ShareMixin from './ShareMixin';
import ShareInterface from './ShareInterface.vue';

export default {
    name: 'EDCShare',
	components: {
		ShareInterface
	},
	mixins: [
		ShareMixin
	],
	data() {
		return {
			state: 'default',
            message: null,
		};
	},
	computed: {
		description() {
            if (this.message) {
                return this.message;
            } else if (this.state === 'error') {
				return 'Publishing to eurodatacube failed';
			}
			else if (this.state === 'success') {
				return 'Published on eurodatacube';
			}
			else {
				return 'Publish results on eurodatacube (EDC)';
			}
		}
	},
    methods: {
        async upload () {
            const formData = new FormData();
            const filename = this.title.replace(" ", "-") + "_" + this.extra['id'] + ".json";
            formData.append(filename, JSON.stringify(this.extra));
            try {
                const result = await axios.post(
                    '/api/upload',
                    formData,
                );
                this.message = null;
            } catch (error) {
                this.message = error.response.data.detail;
                throw error;
            }
        }
    }
}
</script>

<style lang="scss">
#share-edc {
	&.shareable > .entry {
		color: #004170;
	}
}
</style>


