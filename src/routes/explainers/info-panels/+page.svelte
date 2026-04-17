<script lang="ts">
import Indicator from '$lib/components/ControlRoomIndicator.svelte'
import annunciatorData from '$lib/data/annunciatorData.json' with { type: 'json' }
interface LightData {
	name: string
	description: string
	fix: boolean | string[]
	color?: string
}

function normalizeAnnunciators(annunciators: any): LightData[] {
	if (!Array.isArray(annunciators)) {
		return [annunciators]
	}
	if (annunciators.length === 0) {
		return []
	}
	// If first element is an array, flatten; otherwise return as-is
	if (Array.isArray(annunciators[0])) {
		return annunciators.flat()
	}
	return annunciators
}

function fixDescription(lightData: LightData): string {
	if (Array.isArray(lightData?.fix)) {
		return lightData.fix.join(',\n')
	} else if (lightData?.fix) {
		return String(lightData.fix)
	} else {
		return 'No Fix Available, contact wiki staff if you want a fix for this annunciator to be added to the wiki at #wiki-suggestions on our discord server, or make an issue on our GitHub repository.'
	}
}

import { getPageMeta } from '$lib/data/pageMeta.js'
import { headerConfig } from './../../../lib/stores/headerStore.ts'

const pageMeta = getPageMeta('/explainers/info-panels/')

headerConfig.set({
	heroImg: '/images/hero-banners/info-panels.avif',
	title: 'Information Panels',
	catchphrase: pageMeta.tagline ?? 'Fun Fact: Reactor Power High is kinda bad ngl',
})
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
</svelte:head>

<div class="mx-auto my-4 max-w-[95vw]">
	<div class="flex flex-wrap gap-4">
		{#each annunciatorData as data}
			<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
				<div class="card card-border bg-base-100 w-full">
					<div class="card-body">
						<h2 class="card-title">{data.name}</h2>
						{#each normalizeAnnunciators(data.annunciators) as lightData}
							<Indicator
								name={lightData.name}
								color={lightData.color}
								description={fixDescription(lightData)}
							/>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
