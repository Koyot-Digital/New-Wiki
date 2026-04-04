<script>
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import CHITEM from '$lib/components/ChecklistItem.svelte'
	import CRIND from '$lib/components/ControlRoomIndicator.svelte'
	import '../../app.css'
	import { getPageMeta } from '$lib/data/pageMeta.js'

	const pageMeta = getPageMeta('/dev/')
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
</svelte:head>

<div class="p-16 gap-50">
	<!-- With Button -->
	<Header
		heroImg="/images/capybara.png"
		title="Example Title"
		catchphrase={pageMeta.tagline ?? 'Example Catchphrase'}
		button="https://example.org"
		buttontext="Example"
	/>
	<!-- Without Button-->
	<Header
		heroImg="/images/capybara.png"
		title="Example Title"
		catchphrase={pageMeta.tagline ?? 'Example Catchphrase'}
	/>
</div>

<div class="p-xl gap-50">
	<Footer />
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
