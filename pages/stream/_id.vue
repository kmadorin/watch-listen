<template>
	<div>
		<Header/>
		<section class="wl-stream" ref="stream">
			<main class="wl-stream__content">
				<Player v-if="isLoadingFinished" :stream_data="streamData"/>
				<MerchPanel class="wl-stream__merch"/>
				<DonationsPanel class="wl-stream__donations"/>
			</main>
			<aside :class="['wl-stream__sidebar', isSidebarFixed && 'wl-stream__sidebar--fixed']">
				<Chat/>
			</aside>
		</section>
	</div>
</template>

<script>
	import Header from "../../components/Header";
	import Player from "../../components/Player";
	import MerchPanel from "../../components/MerchPanel";
	import DonationsPanel from "../../components/DonationsPanel";
	import Chat from "../../components/Chat";
	import {PROD_API_BASE_URL, DEV_API_BASE_URL} from "../../constants";


	export default {
		layout: 'site',

		components: {
			Header,
			Player,
			MerchPanel,
			DonationsPanel,
			Chat
		},
		mounted() {
			this.makeSidebarFixed();
			document.addEventListener('scroll', this.onScroll);
		},
		destroyed() {
			document.removeEventListener('scroll', this.onScroll);
		},
		data: () => ({
			isSidebarFixed: false,
			headerHeight: 80,
			streamData: null,
			isLoadingFinished: false,
		}),
		async created() {
			await this.getStreamData();
			this.isLoadingFinished = true;
		},
		methods: {
			async getStreamData() {
				const API_BASE_URL = process.env.NODE_ENV === 'development' ? DEV_API_BASE_URL : PROD_API_BASE_URL;
				const stream_id = this.$route.params.id ? this.$route.params.id.slice(1) : '10615053-7555-4b3d-86f2-ce665070c2d8';
				const streamDataRef = await this.$fireStore.collection('streams').doc(stream_id).get();
				const livepeerURLsRes = await this.$axios.get(`${API_BASE_URL}livepeer/get_urls`);
				this.streamData = streamDataRef.data();
				this.streamData.playbackURL = livepeerURLsRes.data.playback_url + '/' + this.streamData.playbackId + '/index.m3u8';
				console.log(this.streamData.playbackURL);
			},
			onScroll() {
				this.makeSidebarFixed();
			},
			makeSidebarFixed() {
				if (window.scrollY > this.headerHeight) {
					!this.isSidebarFixed && (this.isSidebarFixed = true)
				} else {
					this.isSidebarFixed && (this.isSidebarFixed = false)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/defs.scss";

	.wl-stream {

		@include media-min('md') {
			display: flex;
			align-items: stretch;
			justify-content: stretch;
			flex-grow: 1;
		}

		&__content {

			@include media-min('md') {
				width: 70%;
				padding-bottom: 60px;
			}
		}

		&__merch, &__donations {
			display: none;

			@include media-min('md') {
				display: block;
			}
		}

		&__sidebar {
			display: none;
			@include media-min('md') {
				display: flex;
				justify-content: stretch;
				align-items: stretch;
				width: 30%;
				box-sizing: border-box;

				&--fixed {
					position: fixed;
					top: 0;
					right: 0;
				}
			}
		}
	}
</style>