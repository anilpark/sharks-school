<script lang="ts">
	const logoShark = '/assets/2ca775344e9d2aaa7b86bd6b808bef0482c86375.svg';
	const telegramIcon = '/assets/f9a679fa7018c52f9ba0b79036dfd85097f64152.svg';
	const instagramIcon = '/assets/9bb335fc3279540cdee8f6a312d49ba3b0d3417c.svg';
	const linkedinIcon = '/assets/e7e56c35286fc32a438162f1803877da5d5ab981.svg';

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
	class="w-full py-16 relative overflow-hidden"
	style="background: linear-gradient(180deg, #2b83ff 0%, #0450fb 100%)"
>
	<div class="max-w-[1278px] mx-auto px-6 flex items-start justify-between gap-12 flex-wrap">
		<!-- Left column: logo, copyright, email, legal -->
		<div class="flex flex-col justify-between h-full min-h-[419px] max-w-[260px]">
			<div class="flex flex-col gap-9">
				<!-- Logo -->
				<div class="flex items-center gap-2 h-[68px]">
					<img src={logoShark} alt="Sharks School" class="h-[68px] w-auto" />
					<div class="font-righteous leading-none ml-1">
						<div class="text-white" style="font-family: 'Righteous', sans-serif; font-size: 24px; line-height: 1.137">Sharks</div>
						<div class="text-white" style="font-family: 'Righteous', sans-serif; font-size: 24px; line-height: 0.917">School</div>
					</div>
				</div>

				<!-- Copyright -->
				<p class="text-white text-[18px] leading-[1.5]">
					© 2025 Sharks School<br />Всі права захищено
				</p>

				<!-- Email -->
				<div class="flex flex-col gap-1 text-white text-[18px] leading-[1.5]">
					<span class="font-medium">Email</span>
					<span>SharkSchool@gmail.com</span>
				</div>
			</div>

			<!-- Legal links -->
			<div class="flex flex-col gap-4 text-white text-[16px] underline mt-8">
				<a href="/terms" class="hover:opacity-80 transition-opacity">Умови використання</a>
				<a href="/privacy" class="hover:opacity-80 transition-opacity">Політика конфіденційності</a>
			</div>
		</div>

		<!-- Right column: navigation + social -->
		<div class="flex gap-[100px] flex-wrap">
			<!-- Navigation -->
			<div class="flex flex-col gap-[30px]">
				<p class="text-white font-medium text-[20px] leading-[1.5]">Навігація</p>
				<nav class="flex flex-col gap-[23px]">
					{#each navLinks as link}
						<a href={link.href} class="text-white text-[18px] leading-normal hover:opacity-80 transition-opacity">
							{link.label}
						</a>
					{/each}
				</nav>
			</div>

			<!-- Social links -->
			<div class="flex flex-col gap-[30px]">
				<p class="text-white font-medium text-[20px] leading-[1.5]">Соц мережі</p>
				<div class="flex flex-col gap-[18px]">
					{#each socials as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 text-white text-[18px] leading-[1.5] hover:opacity-80 transition-opacity"
						>
							<img src={social.icon} alt="" class="w-6 h-6" />
							{social.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>
