<template>
	<form class="wl-search">
		<button type="submit" class="wl-search__submit wl-btn wl-btn--inline"><SearchIcon class="search__icon"/></button>
		<input type="search" class="wl-search__input" placeholder="Mozart - Piano Sonata No. 16 in C Major, K.545 (1st Mvt)" />
	</form>
</template>

<script>
	import SearchIcon from './svg/search_icon';

	export default {
		components: {
			SearchIcon,
		}
	}
</script>

<style lang='scss' scoped>
	@import "~/assets/styles/defs.scss";

	.wl-search {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;

		&__icon {
			width: 20px;
			height: 20px;
			display: inline-block;
		}

		&__input {
			display: inline-block;
			border: 0;
			box-shadow: none;
			appearance: none;
			font-size: 16px;
			outline: 0;

			@include placeholder {
				color: #9b9b9b;
			}

			@include media-min('sm') {
				min-width: 400px;
				margin-left: 10px;
			}

			&:focus {
				@include placeholder {
					color: transparent;
				}
			}
		}
	}

</style>