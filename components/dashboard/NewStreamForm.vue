<template>
	<v-form v-model="valid" class="new-stream-form" @submit.prevent="onSubmit">
		<v-container>
			<v-row>
				<v-col>
					<h1 class="new-stream-form__title">Tell us about your stream</h1>
				</v-col>
			</v-row>
		</v-container>
		<v-container class="new-stream-form__block">
			<v-row>
				<v-col sm="4">
					<v-subheader class="new-stream-form__label">Stream title</v-subheader>
				</v-col>
				<v-col sm="8">
					<v-text-field
						v-model="title"
						placeholder=""
						:rules="titleRules"
						outlined
						required
					></v-text-field>
				</v-col>
			</v-row>
		</v-container>
		<v-container class="new-stream-form__footer">
			<v-row>
				<v-col>
					<v-btn type="submit" color="primary">Create Stream</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>

	export default {
		data: () => ({
			valid: false,
			name: '',
			title: '',
			titleRules: [
				v => !!v || 'title is required',
			],
		}),
		methods: {
			createStream() {

			},
			onSubmit() {
				if (this.title.trim() === '') {
					return false
				}

				const streamParams = {
					name: this.title.trim().toLowerCase().replace(/ /gi,'_'),
					profiles: [
						{
							"name": "720p",
							"bitrate": 2000000,
							"fps": 30,
							"width": 1280,
							"height": 720
						},
						{
							"name": "480p",
							"bitrate": 1000000,
							"fps": 30,
							"width": 854,
							"height": 480
						},
						{
							"name": "360p",
							"bitrate": 500000,
							"fps": 30,
							"width": 640,
							"height": 360
						}
					]
				};

				this.$axios.post(`api/streams/create`, streamParams,).then(res => console.log(res.data))
					.catch(err => console.log(err));
			}
		}
	}
</script>

<style lang='scss' scoped>
	.new-stream-form {
		&__title {
			text-align: center;
		}

		&__label {
			color: #212022;
			font-size: 16px;
			font-weight: 500;
		}

		&__block {
			border-radius: 4px;
			box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.08), 0 4px 16px 0 rgba(0, 0, 0, 0.05);
			background-color: #ffffff;
		}

		&__footer {
			text-align: center;
		}
	}
</style>