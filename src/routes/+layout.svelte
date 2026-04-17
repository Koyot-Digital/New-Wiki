<script>
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import { headerConfig } from '../lib/stores/headerStore.ts'
</script>

<Header
	heroImg={$headerConfig.heroImg}
	title={$headerConfig.title}
	catchphrase={$headerConfig.catchphrase}
	button={$headerConfig.button || ''}
	buttontext={$headerConfig.buttontext || 'Play'}
/>

<slot />

<Footer />
