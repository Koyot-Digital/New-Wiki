<script lang="ts">
import neodis from '/images/people-and-npcs/mods/comunity-relations/Neodis.avif'
import { getPageMeta } from '$lib/data/pageMeta.js'
import { headerConfig } from '../../lib/stores/headerStore.ts'

const pageMeta = getPageMeta('/neodis/')

headerConfig.set({
	heroImg: '/images/hero-banners/banner5.avif',
	title: 'Neodis',
	catchphrase: pageMeta.tagline ?? 'Breaking lights since 2024'
})
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
</svelte:head>

<div class="flex items-center justify-center h-screen">
	<div class="flex items-center justify-center h-screen">
		<img
			src={neodis}
			alt="Neodis Avatar"
			width="max"
			height="max"
			class="inline-block fill-current ml-4"
			style="border-radius: 0.25rem;"
		/>
		<div class="text-overlay">
			Neodis is bad he broke my lights he also went to Bloxstine's island on the Bloxstina
			Express 🫪
		</div>
	</div>
</div>
