<template>
	<div>
		<Header/>
		<section class="wl-stream" ref="stream">
			<main class="wl-stream__content">
				<Player v-if="isLoadingFinished" :stream_playback_url="streamPlaybackURL"/>
				<MerchPanel/>
				<DonationsPanel/>
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
			streamPlaybackURL: '',
			isLoadingFinished: false,
		}),
		async created() {
			await this.getStreamPlaybackURL();
			this.isLoadingFinished = true;
		},
		methods: {
			async getStreamPlaybackURL() {
				const stream_id = this.$route.params.id.slice(1);
				this.streamPlaybackURL = (await this.$axios.get(`api/streams/get_stream_playback_url?id=${stream_id}`)).data;
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
		display: flex;
		align-items: stretch;
		justify-content: stretch;
		flex-grow: 1;

		&__content {
			width: 70%;
			padding-bottom: 60px;
		}

		&__sidebar {
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
</style>