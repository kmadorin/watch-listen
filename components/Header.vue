<template>
	<header class="wl-header">
		<div class="wl-header__left">
			<a href="" class="wl-header__logo">
				<img src="/images/logo.svg" width="273" height="26" alt="logo">
			</a>
			<div class="wl-header__search">
				<Search />
			</div>
		</div>
		<div class="wl-header__right">
			<button type="button" class="wl-header__button">New Stream</button>
			<div class="wl-header__notifications">

			</div>
			<div class="wl-header__user-menu">

			</div>
		</div>
	</header>

</template>

<script>
	import Search from './Search';

	export default {
		components: {
			Search,
		}
	}
</script>

<style lang='scss' scoped>
	.wl-header {
		display: flex;
		padding: 20px 40px;
		align-items: center;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.05);
		background-color: #ffffff;

		&__left {
			flex-grow: 1;
			display: flex;
			align-items: center;
		}
		&__logo {
			display: inline-block;
			width: 273px;
			height: 26px;
		}
		&__search {
			margin-left: 34px;
			max-width: 290px;
		}
		&__right {
			display: flex;
			align-items: center;
		}
		&__button {
			background-color: #651fff;
			border: 0;
			outline: 0;
			appearance: none;
			border-radius: 4px;
			color: #fff;
			height: 40px;
			line-height: 40px;
			padding: 0 18px;
			font-weight: bold;

			&:before {
				content: '';
				display: inline-block;
				margin-right: 12px;
				border-radius: 50%;
				vertical-align: middle;
				position: relative;
				top: -1px;
				background-color: #fff;
				width: 10px;
				height: 10px;
				border: 3px solid #e70202;
			}

			&:hover {
				cursor: pointer;
			}
		}
		&__notifications {
			margin-left: 50px;
			margin-right: 34px;
			display: none;
		}
		&__user-menu {
			display: none;
		}
	}
</style>