<script>
import CHITEM from '$lib/components/ChecklistItem.svelte'
import CRIND from '$lib/components/ControlRoomIndicator.svelte'
import { getPageMeta } from '$lib/data/pageMeta.js'
import { headerConfig } from './../../lib/stores/headerStore.ts'

const pageMeta = getPageMeta('/dev/')

// Set header for the page
headerConfig.set({
	heroImg: '/images/capybara.png',
	title: 'Dev Page',
	catchphrase: pageMeta.tagline ?? 'Example Catchphrase',
})
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
</svelte:head>

<div class="p-16 gap-50">
	<!-- Dev page content - Header components removed from here -->
</div>

<div class="p-xl gap-50">
	<!-- Footer removed - now in layout -->
</div>

<div class="p-xl gap-50">
	<CHITEM item="Example Item" action="Example Action" actionColor="1" indent />
	<CHITEM item="Example Item" action="Example Action" actionColor="2" indent />
	<CHITEM item="Example Item" action="Example Action" actionColor="3" indent />
	<CHITEM item="Example Item" action="Example Action" actionColor="4" indent />
	<CHITEM item="Example Item" action="Example Action" actionColor="1" />
	<CHITEM item="Example Item" action="Example Action" actionColor="2" />
	<CHITEM item="Example Item" action="Example Action" actionColor="3" />
	<CHITEM item="Example Item" action="Example Action" actionColor="4" />
</div>

<div class="p-xl gap-50">
	<CRIND name="Example Name" description="Example Name" color="white" />
	<CRIND name="Example Name" description="Example Name" color="yellow" />
	<CRIND name="Example Name" description="Example Name" color="red" />
</div>
