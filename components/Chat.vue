<template>
	<div class="wl-chat">
		<div class="wl-chat__header">
			Chat
		</div>
		<div class="wl-chat__messages">
			<div class="wl-chat__message">
			<span class="wl-chat__message_author">

			</span>
				<span class="wl-chat__message__text">Chat Disabled</span>
			</div>
		</div>
		<form action="" class="wl-chat-form">
			<input type="text" class="wl-chat-form__input" disabled>
			<button type="submit" disabled class="wl-btn wl-chat-form__send">Send</button>
		</form>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>
	@import "~/assets/styles/GUI.scss";

	.wl-chat {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: stretch;
		align-items: stretch;
		position: relative;
		padding-bottom: 101px;

		&__header {
			text-align: center;
			padding: 20px;
			text-transform: uppercase;
			font-size: 14px;
			font-weight: bold;
			border-bottom: 1px solid #ccc;
		}

		&__messages {
			flex-grow: 1;
			padding: 20px;
		}

		&-form {
			position:fixed;
			bottom: 0;
			right: 0;
			display: flex;
			width: 30%;
			justify-content: stretch;
			align-items: stretch;
			padding: 20px;
			box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.08);
			box-sizing: border-box;

			&__input {
				flex-grow: 1;
				border: 1px solid #651fff;
				border-right: 0;
				display: inline-block;
				height: 40px;
				line-height: 40px;
				padding: 0 15px;
				font-size: 14px;
				border-radius: 4px 0 0 4px;
				box-sizing: border-box;
				outline: 0;
			}
			&__send {
				border-radius: 0 4px 4px 0;
			}
		}
	}
</style>