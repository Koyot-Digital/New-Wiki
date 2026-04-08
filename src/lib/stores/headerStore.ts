import { writable } from 'svelte/store'

export interface HeaderConfig {
	heroImg: string
	title: string
	catchphrase: string
	button?: string
	buttontext?: string
}

const defaultConfig: HeaderConfig = {
	heroImg: '/images/hero-banners/Reactor-Panel.avif',
	title: 'Oakridge Nuclear Power Station',
	catchphrase: 'Experience the challenges and responsibilities of managing a nuclear power plant in this immersive Roblox game.'
}

export const headerConfig = writable<HeaderConfig>(defaultConfig)

