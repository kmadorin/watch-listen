<template>
	<div class="details">
		<v-container>
			<v-row>
				<v-col>
					<h1 class="details__title">New Stream Details:</h1>
				</v-col>
			</v-row>
		</v-container>
		<v-container class="details__block">
			<v-row align="center">
				<v-col sm="4">
					<v-subheader class="details__label">Stream key:</v-subheader>
				</v-col>
				<v-col sm="8">
					{{stream_key}}
				</v-col>
			</v-row>
			<v-row align="center">
				<v-col sm="4">
					<v-subheader class="details__label">RTMP ingest URL:</v-subheader>
				</v-col>
				<v-col sm="8">
					{{rtmp_ingest_url}}
				</v-col>
			</v-row>
		</v-container>
		<v-container class="details__footer">
			<v-row>
				<v-col class="details__footer_buttons">
					<v-btn href="/dashboard/streams" color="primary">My Streams</v-btn>
					<v-btn :href="`/stream/_${stream_id}`" target="_blank" color="primary">Go to Stream Page</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>

	import { LIVEPEER_INGEST_URL } from '../../constants'

	export default {
		props: {
			stream_key: {
				type: String,
				required: true,
			},
			stream_id: {
				type: String,
				required: true,
			}
		},

		computed: {
			rtmp_ingest_url() {
				return `${LIVEPEER_INGEST_URL}${this.stream_key}`
			},
		},

		data: () => ({

		}),

		methods: {

		}
	}
</script>

<style lang='scss' scoped>
	.details {
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
			&_buttons {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>