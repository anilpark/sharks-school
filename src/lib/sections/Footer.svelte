<script lang="ts">
	import logoShark from '$lib/assets/bottomlogo.svg';
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
	class="relative w-full overflow-hidden py-16"
	style="background: linear-gradient(180deg, #2b83ff 0%, #0450fb 100%)"
>
	<div class="mx-auto flex max-w-[1278px] flex-wrap items-start justify-between gap-12 px-6">
		<div class="flex h-full min-h-[419px] max-w-[260px] flex-col justify-between">
			<div class="flex flex-col gap-9">
				<div class="flex h-[68px] items-center gap-2">
					<img src={logoShark} alt="Sharks School" class="h-[68px] w-auto" />
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
					{#each socials as social, i (i)}
						<a
							href={social.href}
							rel="external noopener noreferrer"
							target="_blank"
							class="flex items-center gap-2 text-[18px] leading-[1.5] text-white transition-opacity hover:opacity-80"
						>
							<img src={social.icon} alt="" class="h-6 w-6" />
							{social.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>
