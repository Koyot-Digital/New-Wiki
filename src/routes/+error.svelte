<script>
const headerImg = '/images/hero-banners/banner5.avif'
import { page } from '$app/state'
import { getErrorMeta } from '$lib/data/pageMeta.js'
import { headerConfig } from '../lib/stores/headerStore.ts'

$: errorMeta = getErrorMeta(page.status, page.error?.message)
$: headerConfig.set({
	heroImg: headerImg,
	title: `${page.status} - ${page.error?.message || 'Page not found'}`,
	catchphrase: errorMeta.tagline,
	button: '/',
	buttontext: 'Home',
})
</script>

<svelte:head>
	<title>{errorMeta.title}</title>
</svelte:head>
