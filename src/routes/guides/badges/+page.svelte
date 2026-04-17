<script lang="ts">
const hero = '/images/hero-banners/badges.avif'
import badgeData from '$lib/data/badgesData.yaml' with { type: 'yaml' }
import { getPageMeta } from '$lib/data/pageMeta.js'
import { headerConfig } from './../../../lib/stores/headerStore.ts'
const pageMeta = getPageMeta('/guides/badges/')

headerConfig.set({
	heroImg: hero,
	title: 'Badges',
	catchphrase: pageMeta.tagline ?? 'Gotta get them all!',
})
// plays a boop or a *EXPLOSION* SFX when clicked.
async function BOOP(){
	let rand = Math.floor(Math.random() * 4)
	let rand2 = Math.floor(Math.random() * 4)
	if
	(rand === rand2)
	{await new Audio('/audio/explosion.mp3').play()}
	else
	{await new Audio('/audio/boop.mp3').play().catch(console.error).then()}
}
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
</svelte:head>
<div class="mx-auto my-4 max-w-[95vw]">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
		{#each badgeData as data}
			<div class="card card-border bg-base-100 w-full">
				<div class="hover-3d">
					<figure class="w-fit rounded-full m-4 mx-auto">
						{#if (data.name != 'BOOP!')}
							<img
								src={data.image}
								alt={data.name}
								width="175"
								height="175"
							/>
						{:else}
							<button
								onclick={() => {BOOP()}}
							>
								<img
									src={data.image}
									alt={data.name}
									width="175"
									height="175"
									style="cursor:pointer"
								/>
							</button>
						{/if}
					</figure>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div class="card-body">
					{#if data.name != "GET ME FEEDWATER!"}
					<h2 class="card-title">{data.name}</h2>
					{:else}
					<h2 class="card-title link"><a href="https://www.youtube.com/watch?v=nemYBeT4aQY" target="_blank">{data.name}</a></h2>
					{/if}
					<p class="text-sm">{data.description}</p>
					<div class="divider my-2"></div>
					<details class="collapse collapse-arrow bg-base-200">
						<summary class="collapse-title">How to Get</summary>
						<div class="collapse-content text-sm">
							{#if data.guideType === 'num'}
								<ol class="list-decimal list-inside">
									{#each data.guide as guideData}
										<li>{guideData}</li>
									{/each}
								</ol>
							{/if}
							{#if data.guideType === 'bullet'}
								<ul class="list-disc list-inside">
									{#each data.guide as guideData}
										<li>{guideData}</li>
									{/each}
								</ul>
							{/if}
						</div>
					</details>
				</div>
			</div>
		{/each}
	</div>
</div>
