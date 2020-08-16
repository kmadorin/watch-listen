<template>
	<div class="wl-donate">
		<span class="wl-donate__label">Donate</span>
		<div class="wl-donate__wrapper">
			<div class="wl-donate__buttons">
				<button type="button" class="wl-donate__button"><b>5</b> XRP</button>
				<button type="button" class="wl-donate__button"><b>10</b>XRP</button>
				<button type="button" class="wl-donate__button"><b>25</b>XRP</button>
				<button type="button" class="wl-donate__button"><b>50</b>XRP</button>
				<button type="button" class="wl-donate__button"><b>75</b>XRP</button>
				<button type="button" class="wl-donate__button"><b>100</b> XRP</button>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>
	.wl-donate{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 70%;
		z-index: 10;

		&__wrapper {
			padding: 25px 20px;
			background-color: #212022;
		}

		&__buttons {
			display: flex;
			justify-content: space-between;

		}

		&__label {
			text-transform: uppercase;
			border-radius: 0 4px 0 0;
			background-color: #212022;
			font-size: 14px;
			font-weight: 800;
			padding: 7px 10px;
			color: #fff;
			display: inline-block;
		}

		&__button {
			margin-left: 25px;
			outline: 0;
			border: 0;
			padding: 4px 37px 7px 37px;
			font-size: 18px;
			background-color: #3d3d3d;
			appearance: none;
			color: #fff;
			cursor: pointer;

			&:first-child {
				margin-left: 0;
			}
		}
	}
</style>