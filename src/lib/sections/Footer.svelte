<script lang="ts">
	import logoShark from '$lib/assets/bottomlogo.svg';
	import finShark from '$lib/assets/fin_shark.webp';
	import telegramIcon from '$lib/assets/footerTelegram.svg';
	import instagramIcon from '$lib/assets/footerInstagram.svg';
	import linkedinIcon from '$lib/assets/footerLinkedin.svg';
	import { resolve } from '$app/paths';

	const currentYear = new Date().getFullYear();
	const email = 'SharkSchool@gmail.com';

	const navLinks = [
		{ label: 'Головна', href: '#home' },
		{ label: 'Що на вас чекає', href: '#what-awaits' },
		{ label: 'Команда', href: '#team' },
		{ label: 'Відгуки', href: '#reviews' },
		{ label: 'Тарифи', href: '#pricing' },
		{ label: 'Чому обирають Sharks School', href: '#values' },
		{ label: 'Форма запису', href: '#contact' },
		{ label: 'FAQ', href: '#faq' }
	];

	const socials = [
		{ label: 'Telegram', href: 'https://t.me/sharksschool', icon: telegramIcon },
		{ label: 'Instagram', href: 'https://instagram.com/sharksschool', icon: instagramIcon },
		{ label: 'LinkedIn', href: 'https://linkedin.com', icon: linkedinIcon }
	];
</script>

<footer
	class="relative w-full overflow-visible bg-[#2f7df2] py-10 lg:bg-gradient-to-b lg:from-[#2b83ff] lg:to-[#0450fb] lg:py-16"
>
	<!-- Fin_shark for mobile -->
	<div
		class="pointer-events-none absolute top-[-10px] left-[88%] z-0 -translate-x-1/2 -translate-y-[44%] sm:left-[74%] sm:-translate-y-[3%] lg:hidden"
		aria-hidden="true"
	>
		<img src={finShark} alt="" class="relative z-10 h-[30px] w-auto sm:h-[36px]" loading="lazy" decoding="async" />
		<span
			class="absolute -bottom-[2px] left-1/2 z-20 h-[9px] w-[52px] -translate-x-1/2 bg-[#2f7df2] sm:h-[10px] sm:w-[62px]"
		></span>
	</div>
	<!-- Fin_shark for desktop -->
	<img
		src={finShark}
		alt=""
		aria-hidden="true"
		class="pointer-events-none absolute top-[-15px] left-[90%] z-20 hidden h-[30px] w-auto -translate-x-1/2 -translate-y-[41%] xl:block"
		loading="lazy"
		decoding="async"
	/>
	<div class="relative z-10 mx-auto w-full max-w-[1278px] px-4 sm:px-5 lg:px-6">
		<!-- Modile -->
		<div class="grid grid-cols-2 gap-x-5 gap-y-8 max-[360px]:grid-cols-1 xl:hidden">
			<div class="flex min-h-full flex-col gap-6">
				<div class="flex flex-col gap-6">
					<div class="flex items-center gap-2">
						<img src={logoShark} alt="Sharks School" class="h-14 w-auto sm:h-[68px]" decoding="async" />
						<div class="ml-0.5 font-righteous leading-none">
							<div
								class="text-white"
								style="font-family: 'Righteous', sans-serif; font-size: 22px; line-height: 1.137"
							>
								Sharks
							</div>
							<div
								class="text-white"
								style="font-family: 'Righteous', sans-serif; font-size: 22px; line-height: 0.917"
							>
								School
							</div>
						</div>
					</div>

					<p class="text-[15px] leading-snug text-white">
						© {currentYear} Sharks School / Всі права захищено
					</p>

					<div class="flex flex-col gap-1 text-[15px] leading-snug text-white">
						<span class="font-semibold">Email</span>
						<a href={`mailto:${email}`} class="no-underline transition-opacity hover:opacity-80">
							{email}
						</a>
					</div>

					<div class="flex flex-col gap-3.5">
						{#each socials as social, i (i)}
							<a
								href={social.href}
								rel="external noopener noreferrer"
								target="_blank"
								class="flex items-center gap-2 text-[15px] leading-snug text-white transition-opacity hover:opacity-80"
							>
								<img src={social.icon} alt="" class="h-5 w-5 shrink-0" loading="lazy" decoding="async" />
								{social.label}
							</a>
						{/each}
					</div>
				</div>

				<div class="mt-auto flex flex-col gap-3 pt-2 text-[14px] text-white">
					<a href={resolve('/')} class="underline decoration-white underline-offset-2 transition-opacity hover:opacity-80">
						Умови використання
					</a>
					<a href={resolve('/')} class="underline decoration-white underline-offset-2 transition-opacity hover:opacity-80">
						Політика конфіденційності
					</a>
				</div>
			</div>

			<div class="flex flex-col gap-5 pl-1 max-[360px]:pl-0">
				<p class="text-[17px] font-semibold leading-tight text-white">Навігація</p>
				<nav class="flex flex-col gap-4">
					{#each navLinks as link, i (i)}
						<a
							href={link.href}
							class="text-[15px] leading-snug text-white transition-opacity hover:opacity-80"
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>
		</div>

		<!-- Dekstop -->
		<div class="hidden flex-wrap items-start justify-between gap-12 xl:flex">
			<div class="flex h-full min-h-[419px] max-w-[260px] flex-col justify-between">
				<div class="flex flex-col gap-9">
					<div class="flex h-[68px] items-center gap-2">
						<img src={logoShark} alt="Sharks School" class="h-[68px] w-auto" decoding="async" />
						<div class="ml-1 font-righteous leading-none">
							<div
								class="text-white"
								style="font-family: 'Righteous', sans-serif; font-size: 24px; line-height: 1.137"
							>
								Sharks
							</div>
							<div
								class="text-white"
								style="font-family: 'Righteous', sans-serif; font-size: 24px; line-height: 0.917"
							>
								School
							</div>
						</div>
					</div>

					<p class="text-[18px] leading-[1.5] text-white">
						© {currentYear} Sharks School<br />Всі права захищено
					</p>

					<div class="flex flex-col gap-1 text-[18px] leading-[1.5] text-white">
						<span class="font-medium">Email</span>
						<a href={`mailto:${email}`} class="underline transition-opacity hover:opacity-80">
							{email}
						</a>
					</div>
				</div>

				<div class="mt-8 flex flex-col gap-4 text-[16px] text-white underline">
					<a href={resolve('/')} class="transition-opacity hover:opacity-80">Умови використання</a>
					<a href={resolve('/')} class="transition-opacity hover:opacity-80">
						Політика конфіденційності
					</a>
				</div>
			</div>

			<div class="flex flex-wrap gap-[100px]">
				<div class="flex flex-col gap-[30px]">
					<p class="text-[20px] leading-[1.5] font-medium text-white">Навігація</p>
					<nav class="flex flex-col gap-[23px]">
						{#each navLinks as link, i (i + 100)}
							<a
								href={link.href}
								class="text-[18px] leading-normal text-white transition-opacity hover:opacity-80"
							>
								{link.label}
							</a>
						{/each}
					</nav>
				</div>

				<div class="flex flex-col gap-[30px]">
					<p class="text-[20px] leading-[1.5] font-medium text-white">Соц мережі</p>
					<div class="flex flex-col gap-[18px]">
						{#each socials as social, i (i + 200)}
							<a
								href={social.href}
								rel="external noopener noreferrer"
								target="_blank"
								class="flex items-center gap-2 text-[18px] leading-[1.5] text-white transition-opacity hover:opacity-80"
							>
								<img src={social.icon} alt="" class="h-6 w-6" loading="lazy" decoding="async" />
								{social.label}
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
