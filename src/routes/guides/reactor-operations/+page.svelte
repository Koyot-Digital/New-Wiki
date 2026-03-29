<script lang="ts">
import '../../../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import systemsData from '$lib/data/systemsData.yaml' with { type: 'yaml' }
const headerImg = '/images/hero-banners/control-room.avif'
</script>

<Header
	heroImg={headerImg}
	title="Oakridge Nuclear Power Station"
	catchphrase="Experience the challenges and responsibilities of managing a nuclear power plant in this immersive Roblox game."
	button="https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station"
/>
<div class="grid grid-cols-2 gap-4 mx-4">
	<div class="m-4 gap-4 mx-auto grid grid-rows-4">
		{#each systemsData as card}
			<div class="card card-border bg-base-100 h-fit">
				<figure>
					<img src={card.image} alt="about" class="card-img" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{card.name}</h2>
					<p>
						{card.oneliner}
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
<Footer />

<style>
.card-img {
	background-position: center;
	object-fit: cover;
	background-size: cover;
	height: 300px;
	width: 100%;
}
</style>
