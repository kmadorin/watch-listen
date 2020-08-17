<template>
	<div>
		<div class="wl-merch">
			<button type="button" class="wl-merch__btn">Buy merch</button>
			<div class="wl-merch__content">
				<div class="wl-merch__items">
					<div class="wl-merch__col">
						<article class="wl-merch-item">
							<a href="#" class="wl-merch-item__wrapper">
								<div class="wl-merch-item__photo">
									<img src="/images/merch/4.png" alt="spaces">
								</div>
								<h3 class="wl-merch-item__title">
									Spaces – Double 12" vinyl in die-cut sleeve incl. 2 inserts
								</h3>
								<span class="wl-merch-item__price"><b>100</b> XRP</span>
							</a>
						</article>
					</div>
					<div class="wl-merch__col">
						<article class="wl-merch-item">
							<a href="#" class="wl-merch-item__wrapper">
								<div class="wl-merch-item__photo">
									<img src="/images/merch/3.png" alt="spaces">
								</div>
								<h3 class="wl-merch-item__title">
									Felt – LP incl. insert + download code
								</h3>
								<span class="wl-merch-item__price"><b>100</b> XRP</span>
							</a>
						</article>
					</div>
					<div class="wl-merch__col">
						<article class="wl-merch-item">
							<a href="#" class="wl-merch-item__wrapper">
								<div class="wl-merch-item__photo">
									<img src="/images/merch/2.png" alt="spaces">
								</div>
								<h3 class="wl-merch-item__title">
									7fingers – LP incl.
									Nils Frahm & Anne Müller
								</h3>
								<span class="wl-merch-item__price"><b>100</b> XRP</span>
							</a>
						</article>
					</div>
					<div class="wl-merch__col">
						<article class="wl-merch-item">
							<a href="#" class="wl-merch-item__wrapper">
								<div class="wl-merch-item__photo">
									<img src="/images/merch/1.png" alt="spaces">
								</div>
								<h3 class="wl-merch-item__title">
									Spaces – Double 12" vinyl in die-cut sleeve incl. 2 inserts
								</h3>
								<span class="wl-merch-item__price"><b>100</b> XRP</span>
							</a>
						</article>
					</div>
				</div>
			</div>
		</div>
		<div class="wl-merch-modal">
			<form action="" class="wl-merch-modal__form">
				<div class="wl-merch-modal__header">
					<h2 class="wl-merch-modal__title">Spaces – Double 12" vinyl in die-cut sleeve incl. 2 inserts</h2>
					<div class="wl-merch-card">
						<div class="wl-merch-card__photo">
							<img src="" alt="merch photo">
						</div>
						<div class="wl-merch-card__content">
							<div class="wl-merch-card__content_header">
								<div class="wl-merch-card__content_col">
									<h3 class="wl-merch-card__title">
										Digital Album
									</h3>
									<h4 class="wl-merch-card__subtitle">
										Streaming + Download
									</h4>
								</div>
								<div class="wl-merch-card__content_col">
									<button class="wl-merch-card__btn">-</button>
									<input type="number" class="wl-merch-card__number" value="1">
									<button class="wl-merch-card__btn">+</button>
									<b>60</b> XRP
								</div>
							</div>
							<p class="wl-merch-card__description">
								Includes unlimited streaming via the free Bandcamp app, plus high-quality download in
								MP3, FLAC
								and more.
							</p>
						</div>
					</div>
					<div class="wl-merch-modal__footer">
						<button type="button" class="wl-merch-modal__checkout">Checkout</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>
	.wl-merch {
		position: relative;
		z-index: 1;
		background-color: #f6f6f6;

		&__content {
			padding: 0 53px 81px 53px;
		}

		&__items {
			background-color: #f6f6f6;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;

			box-sizing: border-box;
			align-items: flex-start;
		}

		&__col {
			margin-top: 40px;
			padding: 0 40px;
			box-sizing: border-box;
			width: 25%;
		}

		&__btn {
			background-color: #f6f6f6;
			font-size: 14px;
			font-weight: 800;
			padding: 7px 10px;
			outline: 0;
			border: 0;
			appearance: none;
			text-transform: uppercase;
			border-radius: 0 4px 0 0;
		}

		&-modal {
			display: none;
		}

		&-item {
			&__wrapper {
				text-decoration: none;
				text-align: center;
				display: block;
			}

			&__photo {
				display: inline-block;
				max-width: 100%;
				height: auto;
			}

			&__title {
				text-align: left;
				color: #212022;
				margin: 8px 0 12px 0;
				font-weight: bold;
			}

			&__price {
				text-align: left;
				display: block;
				color: #ff3030;
				font-size: 16px;
				font-weight: 500;

				b {
					font-weight: 800;
				}
			}
		}
	}
</style>