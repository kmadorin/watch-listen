<template>

</template>

<script>
	export default {
		data: () => ({
			streams: [],
		}),

		async created() {
			const snapshot = await this.$fireStore.collection('streams').get();
			this.streams = snapshot.docs.map(doc => doc.data());
			console.log(this.streams);
		}
	}
</script>

<style lang="scss" scoped>

</style>