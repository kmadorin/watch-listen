<template>
	<div class="wl-player">
		<div class="wl-player__video">
			<video
				class="video-js vjs-fluid vjs-big-play-centered " :poster="stream_data.coverImageURL" ref="videoPlayer"
				preload="auto" crossorigin="true"
				controls
			></video>
		</div>
		<div class="wl-player-overlay">
			<div class="wl-player-overlay__top">
				<div class="wl-player-overlay__top_left">
					<a href="#" class="wl-player-overlay__back">Back</a>
					<span class="wl-player-overlay__status">
					LIVE
				</span>
					<h2 class="wl-player-overlay__title">
						<a href="#">Nils Frahm Online Stream COVID StayHome 2020</a>
					</h2>
					<div class="wl-player-overlay__tags">
						<a href="#" class="wl-player-overlay__tag">
							Live Stream
						</a>
						<a href="#" class="wl-player-overlay__tag">
							Performance
						</a>
						<a href="#" class="wl-player-overlay__tag">
							Piano
						</a>
						<a href="#" class="wl-player-overlay__tag">
							Electronic
						</a>
					</div>
				</div>
				<div class="wl-player-overlay__top_right">
				<span class="wl-player-overlay__counter wl-player-overlay__counter--live">
					<i class="wl-player-overlay__counter_icon"></i>
					12,235
				</span>
					<span class="wl-player-overlay__counter">
					<i class="wl-player-overlay__counter_icon"></i>
					30:12:21
				</span>
				</div>
			</div>
			<div class="wl-player-overlay__center">
				<button class="wl-player__play">
					Play
				</button>
			</div>
			<div class="wl-player-overlay__bottom">
				<div class="wl-player-socials">
					<button class="wl-player-social">
						Like
					</button>
					<button class="wl-player-social">
						Follow
					</button>
					<button class="wl-player-social">
						Share
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import videojs from 'video.js';

	export default {
		name: "Player",
		props: {
			stream_data: {
				type: Object,
				required: true,
			},
		},
		data() {
			return {
				player: null,
			}
		},
		mounted() {
			const playerOptions = {
				fluid: true,
				sources: [{
					src: this.stream_data.playbackURL,
					type: 'application/x-mpegURL'
				}]
			};
			this.player = videojs(this.$refs.videoPlayer, playerOptions, function onPlayerReady() {
				console.log(this);
			});
		},
		beforeDestroy() {
			if (this.player) {
				this.player.dispose()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wl-player {
		width: 100%;
		position: relative;

		&__video {
			width: 100%;
			height: auto;

			.video-js {
				width: 100%;
			}
		}

		&-overlay {
			display: none;
		}
	}
</style>