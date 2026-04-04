<script>
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import headerImg from '/images/hero-banners/banner5.avif'
import { page } from '$app/state'
import { getErrorMeta } from '$lib/data/pageMeta.js'

$: errorMeta = getErrorMeta(page.status, page.error?.message)
</script>

<svelte:head>
	<title>{errorMeta.title}</title>
</svelte:head>

<Header
	heroImg={headerImg}
	title="{page.status} - {page.error?.message || 'Page not found'}"
	catchphrase={errorMeta.tagline}
	button="/"
	buttontext="Home"
/>
<Footer />
