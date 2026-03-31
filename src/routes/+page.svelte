<script lang="ts">
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import PageData from '$lib/data/pageData.json' with { type: 'json' }
const headerImg = '/images/hero-banners/banner5.avif'
const locations = '/images/hero-banners/emergency.avif'
const updates = '/images/hero-banners/updates.avif'
const teamImg = '/images/hero-banners/npcs.avif'
</script>

<Header
	heroImg={headerImg}
	title="Oakridge Nuclear Power Station"
	catchphrase="Experience the challenges and responsibilities of managing a nuclear power plant in this immersive Roblox game."
	button="https://www.roblox.com/games/15684145480/Oakridge-Nuclear-Power-Station"
/>
<div class="grid grid-cols-2 gap-4 mx-4">
	<div class="m-4 grid grid-cols-1 grid-rows-1 gap-4 mx-auto">
		<div class="card card-border bg-base-100 h-fit">
			<figure>
				<img src={updates} alt="welcome" class="card-img" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Update Version 0.26.6 Beta</h2>
				<h2 class="font-bold text-base">Additions/Changes:</h2>
				<!-- Use ml-5 when indenting lists please.-->
				<ul class="list-disc ml-5">
					<li>
						Added a chat icon above players heads to indicate when you cannot chat with
						that player
					</li>
					<li>SCRAM restricted to Jr. Op unless in an emergency situation</li>
					<li>Additional information added to SCRAM report</li>
					<li>Master mute restricted to Jr. Op+ -Added master mute logging</li>
					<li>Added turbine/bypass valve logging</li>
					<li>Added diesel generator logging</li>
					<li>Log recorder now logs days</li>
				</ul>
				<h2 class="font-bold text-base">Notable Changes:</h2>
				<ul class="list-disc ml-5">
					<li>Patched absurdly high efficiency on paycheck</li>
					<li>Renamed incorrect units Updated in new servers</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="m-4 p-4 mx-auto border-4 border-base-200 w-full h-fit rounded-md">
		<h2 class="text-2xl font-bold">Guides</h2>
		<div
			class="flex flex-wrap flex-row justify-center items-center h-auto bg-base-200 gap-4 rounded-md p-4 my-4"
		>
			{#each PageData.Guides as page}
				<a
					class="h-fit w-fit p-2 px-4 bg-blue-500 align-middle rounded-full"
					href={page.href}
				>
					{page.name}
				</a>
			{/each}
		</div>
		<h2 class="text-2xl font-bold">Explainers</h2>
		<div
			class="flex flex-wrap flex-row justify-center items-center h-auto bg-base-200 gap-4 rounded-md p-4 my-4"
		>
			{#each PageData.Explainers as page}
				<div class="h-fit w-fit p-2 px-4 bg-emerald-500 align-middle rounded-full">
					<a href={page.href}>{page.name}</a>
				</div>
			{/each}
		</div>
		<h2 class="text-2xl font-bold">Miscellaneous</h2>
		<div
			class="flex flex-wrap flex-row justify-center items-center h-auto bg-base-200 gap-4 rounded-md p-4 my-4"
		>
			{#each PageData.Misc as page}
				<div class="h-fit w-fit p-2 px-4 bg-fuchsia-500 align-middle rounded-full">
					<a href={page.href}>{page.name}</a>
				</div>
			{/each}
		</div>
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
