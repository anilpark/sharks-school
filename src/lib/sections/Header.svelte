<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import logoShark from '$lib/assets/logo.svg';

	type NavigationLink = {
		label: string;
		href: string;
		inDesktop: boolean;
		inMobile: boolean;
	};

	const navigationLinks: NavigationLink[] = [
		{ label: 'Головна', href: '#home', inDesktop: true, inMobile: true },
		{ label: 'Переваги', href: '#stats', inDesktop: false, inMobile: true },
		{ label: 'Що на вас чекає', href: '#what-awaits', inDesktop: true, inMobile: true },
		{ label: 'Команда', href: '#team', inDesktop: true, inMobile: true },
		{ label: 'Відгуки', href: '#reviews', inDesktop: true, inMobile: true },
		{ label: 'Тарифи', href: '#pricing', inDesktop: true, inMobile: true },
		{ label: 'Цінності', href: '#values', inDesktop: false, inMobile: true },
		{ label: 'FAQ', href: '#faq', inDesktop: true, inMobile: true },
		{ label: 'Контакти', href: '#contact', inDesktop: false, inMobile: true }
	];

	const desktopNavLinks = navigationLinks.filter((link) => link.inDesktop);
	const mobileNavLinks = navigationLinks.filter((link) => link.inMobile);
	const sectionHashes = Array.from(new Set(navigationLinks.map((link) => link.href)));

	let activeHash = '#home';
	let isMobileMenuOpen = false;
	let scrollRaf = 0;

	function updateActive(hash = window.location.hash) {
		activeHash = hash || '#home';
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function handleLinkClick(hash: string) {
		updateActive(hash);
		closeMobileMenu();
	}

	function updateActiveByScroll() {
		const markerY = window.innerWidth >= 1024 ? 132 : 102;
		let current = '#home';

		for (const hash of sectionHashes) {
			const section = document.querySelector<HTMLElement>(hash);
			if (!section) continue;

			const rect = section.getBoundingClientRect();
			if (rect.top <= markerY && rect.bottom > markerY) {
				current = hash;
				break;
			}

			if (rect.top <= markerY) {
				current = hash;
			}
		}

		updateActive(current);
	}

	function scheduleActiveByScroll() {
		if (scrollRaf) return;
		scrollRaf = window.requestAnimationFrame(() => {
			scrollRaf = 0;
			updateActiveByScroll();
		});
	}

	onMount(() => {
		updateActive();
		updateActiveByScroll();

		const handleHashChange = () => {
			updateActive();
			closeMobileMenu();
		};

		const handleScroll = () => {
			scheduleActiveByScroll();
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeMobileMenu();
			}
		};

		window.addEventListener('hashchange', handleHashChange);
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);
		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
			window.removeEventListener('keydown', handleEscape);
			if (scrollRaf) {
				window.cancelAnimationFrame(scrollRaf);
				scrollRaf = 0;
			}
		};
	});
</script>

<header class="relative z-50 h-[72px] w-full sm:h-[90px] lg:h-22">
	<!-- Desktop -->
	<nav
		class="fixed top-2.5 left-1/2 hidden h-[76px] w-[min(1280px,calc(100vw-40px))] -translate-x-1/2 items-center justify-between rounded-[40px] bg-white py-3 pr-1 pl-6 shadow-[0px_12px_20px_0px_rgba(6,20,45,0.04),0px_-40px_30px_0px_white,0px_0px_30px_0px_white] lg:flex"
	>
		<a href={`${resolve('/')}#home`} class="flex shrink-0 items-center gap-2">
			<img src={logoShark} alt="Sharks School logo" class="logo" />
			<div class="font-righteous text-sm leading-none">
				<div class="text-primary-dark" style="font-size: 16px; line-height: 1.137">Sharks</div>
				<div class="text-[#ee606f]" style="font-size: 16px; line-height: 0.917">School</div>
			</div>
		</a>

		<div class="flex items-center gap-5 xl:gap-7">
			{#each desktopNavLinks as link (link.href)}
				<a
					href={`${resolve('/')}${link.href}`}
					on:click={() => handleLinkClick(link.href)}
					class="flex flex-col items-center gap-1 text-[16px] font-medium transition-colors xl:text-[18px]"
					class:text-[#31302e]={activeHash === link.href}
					class:text-[#6e6b66]={activeHash !== link.href}
				>
					{link.label}
					{#if activeHash === link.href}
						<span class="h-2 w-2 rounded-full bg-[#1d1d1d]"></span>
					{/if}
				</a>
			{/each}
		</div>

		<a
			href={`${resolve('/')}#contact`}
			on:click={() => handleLinkClick('#contact')}
			class="btn-blue-pill flex h-[62px] shrink-0 items-center justify-center px-7 text-[16px] xl:h-[68px] xl:px-10 xl:text-[18px]"
		>
			Записатись
		</a>
	</nav>

	<!-- Mobile -->
	<nav
		class="fixed top-2 left-1/2 flex h-[56px] w-[min(480px,calc(100vw-48px))] max-[380px]:w-[calc(100vw-32px)] -translate-x-1/2 items-center justify-between rounded-[20px] bg-white px-3 py-1.5 shadow-[0px_12px_20px_0px_rgba(6,20,45,0.04),0px_-20px_30px_0px_white,0px_0px_30px_0px_white] sm:top-2.5 sm:h-[70px] sm:rounded-[28px] sm:px-5 sm:py-2.5 lg:hidden"
	>
		<a
			href={`${resolve('/')}#home`}
			on:click={() => handleLinkClick('#home')}
			class="flex min-w-0 items-center gap-2"
		>
			<img src={logoShark} alt="Sharks School logo" class="logo-mobile sm:logo" />
			<div class="font-righteous leading-none">
				<div class="text-[13px] text-primary-dark sm:text-[16px]" style="line-height: 1.137">
					Sharks
				</div>
				<div class="text-[13px] text-[#ee606f] sm:text-[16px]" style="line-height: 0.917">
					School
				</div>
			</div>
		</a>

		<button
			type="button"
			on:click={toggleMobileMenu}
			class="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white sm:h-12 sm:w-12"
			aria-expanded={isMobileMenuOpen}
			aria-controls="mobile-navigation-menu"
			aria-label={isMobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
		>
			<span
				class="absolute h-0.5 w-5 rounded bg-white transition-transform sm:w-6"
				class:rotate-45={isMobileMenuOpen}
				class:-translate-y-1.5={!isMobileMenuOpen}
			></span>
			<span
				class="absolute h-0.5 w-5 rounded bg-white transition-opacity sm:w-6"
				class:opacity-0={isMobileMenuOpen}
			></span>
			<span
				class="absolute h-0.5 w-5 rounded bg-white transition-transform sm:w-6"
				class:-rotate-45={isMobileMenuOpen}
				class:translate-y-1.5={!isMobileMenuOpen}
			></span>
		</button>
	</nav>

	{#if isMobileMenuOpen}
		<button
			type="button"
			class="fixed inset-0 z-40 bg-[#16244f]/20 lg:hidden"
			on:click={closeMobileMenu}
			aria-label="Закрити мобільне меню"
		></button>

		<div
			id="mobile-navigation-menu"
			class="fixed top-[66px] left-1/2 z-50 w-[min(480px,calc(100vw-48px))] max-[380px]:w-[calc(100vw-32px)] -translate-x-1/2 rounded-[24px] bg-[#e8eefb] px-5 pt-5 pb-6 shadow-[0px_18px_30px_0px_rgba(6,20,45,0.12)] sm:top-[82px] sm:rounded-[30px] sm:px-6 sm:pt-6 sm:pb-7"
		>
			<div class="flex flex-col gap-3 sm:gap-4">
        {#each mobileNavLinks as link (link.href)}
          <a
            href={`${resolve('/')}${link.href}`}
            on:click={() => handleLinkClick(link.href)}
            class="flex min-w-0 items-center justify-between gap-4 text-[clamp(20px,6vw,30px)] leading-none font-medium"
            class:text-primary={activeHash === link.href}
            class:text-[#5f8eea]={activeHash !== link.href}
          >
            <span class="min-w-0 break-words">{link.label}</span>
            
            <div class="flex h-3 w-3 shrink-0 items-center justify-center">
              <span
                class="rounded-full transition-all duration-300"
                class:h-3={activeHash === link.href}
                class:w-3={activeHash === link.href}
                class:bg-[#1d1d1d]={activeHash === link.href}
                class:h-2={activeHash !== link.href}
                class:w-2={activeHash !== link.href}
                class:bg-[#5f8eea]={activeHash !== link.href}
              ></span>
            </div>
          </a>
        {/each}
			</div>

			<a
				href={`${resolve('/')}#contact`}
				on:click={() => handleLinkClick('#contact')}
				class="btn-blue-pill mt-6 flex h-[56px] w-full items-center justify-center text-[16px] sm:mt-7 sm:h-[64px] sm:text-[18px]"
			>
				Записатись на урок
			</a>
		</div>
	{/if}
</header>

<style>
	.logo {
		height: 38px;
		width: 31px;
	}

	.logo-mobile {
		height: 28px;
		width: 22px;
	}

	@media (min-width: 640px) {
		.logo-mobile {
			height: 30px;
			width: 24px;
		}
	}
</style>
