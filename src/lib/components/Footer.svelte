<script>
const KDLogo = '/images/icons&logos/Koyot-Digital-Emblem.avif'
const GitHub = `/images/icons&logos/github.svg`
const Discord = '/images/icons&logos/Discord.svg'
const Youtube = '/images/icons&logos/youtube.svg'
const TikTok = '/images/icons&logos/tiktoc.svg'
</script>

<footer
	class="footer footer-horizontal footer-center base-400 border-2 border-base-200 text-neutral-content p-10"
>
	<aside>
		<img
			alt="Koyot Digital Logo"
			width="70"
			height="70"
			class="inline-block fill-current"
			style="border-radius: 0.40rem;"
			src={KDLogo}
		/>
		<p class="font-bold">
			Koyot Digital
			<br />
			"we do things, perchance"
		</p>
		<p>
			Copyright © {new Date().getFullYear()} - CC BY-SA 4.0, see LICENSE.md for details.
		</p>
	</aside>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<!-- GitHub -->
			<a href="https://github.com/koyot-digital/Wiki/" aria-label="GitHub Link">
				<img
					src={GitHub}
					width="24"
					height="24"
					class="dark:fill-white fill-stone-400"
					alt="GitHub Link"
				/>
			</a>
			<!-- YouTube -->
			<a href="https://www.youtube.com/@KoyotDigital" aria-label="YouTube Link">
				<img src={Youtube} alt="YouTube Link" width="24" height="24" />
			</a>
			<a
				href="https://discord.gg/C4JRMA3gB7"
				aria-label="Discord Server link"
				class="align-middle pt-1"
			>
				<img src={Discord} width="24" height="18.2" class="fill-[#5539CC]" alt="" />
			</a>
		</div>
	</nav>
</footer>
