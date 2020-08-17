<template>
	<v-container class="new-stream">
		<v-row justify="center">
			<v-col cols="12" sm="8" md="6">
				<NewStreamForm />
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
	.new-stream {
		height: 100%;
		display: flex;
		align-items: center;
	}
</style>

<script>
	import NewStreamForm from "../../components/dashboard/NewStreamForm";

	export default {
		layout: 'dashboard',
		components: {
			NewStreamForm,
		}
	}
</script>