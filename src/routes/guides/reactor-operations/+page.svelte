<script lang="ts">
import systemsData from '$lib/data/systemsData.yaml' with { type: 'yaml' }
const headerImg = '/images/hero-banners/control-room.avif'
import { getPageMeta } from '$lib/data/pageMeta.js'
import { headerConfig } from './../../../lib/stores/headerStore.ts'

const pageMeta = getPageMeta('/guides/reactor-operations/')

headerConfig.set({
	heroImg: headerImg,
	title: 'Oakridge Nuclear Power Station',
	catchphrase:
		pageMeta.tagline ??
		'Experience the challenges and responsibilities of managing a nuclear power plant in this immersive Roblox game.',
	button: 'https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station',
})
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
</svelte:head>

<div class="m-4 p-4 gap-4 mx-auto flex flex-wrap flex-row">
	{#each systemsData as card}
		<div class="card card-border bg-base-100 h-fit">
			<figure>
				<img src={card.image} alt={card.oneliner} class="card-img" />
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

<style>
.card-img {
	background-position: center;
	object-fit: cover;
	background-size: cover;
	height: 300px;
	width: 100%;
}
</style>
