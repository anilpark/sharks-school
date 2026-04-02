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

	let activeHash = '#home';
	let isMobileMenuOpen = false;

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

	onMount(() => {
		updateActive();

		const handleHashChange = () => {
			updateActive();
			closeMobileMenu();
		};
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeMobileMenu();
			}
		};

		window.addEventListener('hashchange', handleHashChange);
		window.addEventListener('keydown', handleEscape);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
			window.removeEventListener('keydown', handleEscape);
		};
	});
</script>

<header class="w-full h-22 relative z-50">
	<nav
		class="fixed top-2.5 left-1/2 -translate-x-1/2 w-[min(1280px,calc(100vw-40px))] bg-white rounded-[40px] shadow-[0px_12px_20px_0px_rgba(6,20,45,0.04),0px_-40px_30px_0px_white,0px_0px_30px_0px_white] hidden lg:flex items-center justify-between pl-6 pr-1 py-3 h-[76px]"
	>
		<a href={`${resolve('/')}#home`} class="flex items-center gap-2 shrink-0">
			<img src={logoShark} alt="Sharks School logo" class="logo" />
			<div class="font-righteous leading-none text-sm">
				<div class="text-primary-dark" style="font-size: 16px; line-height: 1.137">Sharks</div>
				<div class="text-[#ee606f]" style="font-size: 16px; line-height: 0.917">School</div>
			</div>
		</a>

		<div class="flex items-center gap-7">
			{#each desktopNavLinks as link (link.href)}
				<a
					href={`${resolve('/')}${link.href}`}
					on:click={() => handleLinkClick(link.href)}
					class="flex flex-col items-center gap-1 font-medium text-[18px] transition-colors"
					class:text-[#31302e]={activeHash === link.href}
					class:text-[#6e6b66]={activeHash !== link.href}
				>
					{link.label}
					{#if activeHash === link.href}
						<span class="w-2 h-2 rounded-full bg-primary"></span>
					{/if}
				</a>
			{/each}
		</div>

		<a
			href={`${resolve('/')}#contact`}
			on:click={() => handleLinkClick('#contact')}
			class="btn-blue-pill text-[18px] h-[68px] px-10 shrink-0"
		>
			Записатись
		</a>
	</nav>

	<nav
		class="fixed top-2.5 left-1/2 -translate-x-1/2 w-[min(100vw-20px,480px)] bg-white rounded-[32px] shadow-[0px_12px_20px_0px_rgba(6,20,45,0.04),0px_-20px_30px_0px_white,0px_0px_30px_0px_white] flex lg:hidden items-center justify-between px-5 py-3 h-[76px]"
	>
		<a href={`${resolve('/')}#home`} on:click={() => handleLinkClick('#home')} class="flex items-center gap-2">
			<img src={logoShark} alt="Sharks School logo" class="logo" />
			<div class="font-righteous leading-none text-sm">
				<div class="text-primary-dark" style="font-size: 16px; line-height: 1.137">Sharks</div>
				<div class="text-[#ee606f]" style="font-size: 16px; line-height: 0.917">School</div>
			</div>
		</a>

		<button
			type="button"
			on:click={toggleMobileMenu}
			class="relative grid place-items-center size-18 rounded-full bg-primary text-white"
			aria-expanded={isMobileMenuOpen}
			aria-controls="mobile-navigation-menu"
			aria-label={isMobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
		>
			<span
				class="absolute h-0.5 w-7 rounded bg-white transition-transform"
				class:rotate-45={isMobileMenuOpen}
				class:-translate-y-2={!isMobileMenuOpen}
			></span>
			<span
				class="absolute h-0.5 w-7 rounded bg-white transition-opacity"
				class:opacity-0={isMobileMenuOpen}
			></span>
			<span
				class="absolute h-0.5 w-7 rounded bg-white transition-transform"
				class:-rotate-45={isMobileMenuOpen}
				class:translate-y-2={!isMobileMenuOpen}
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
			class="fixed top-22.5 left-1/2 -translate-x-1/2 z-50 w-[min(100vw-20px,480px)] rounded-[36px] bg-[#e8eefb] px-8 pb-8 pt-6 shadow-[0px_18px_30px_0px_rgba(6,20,45,0.12)] lg:hidden"
		>
			<div class="flex flex-col gap-5">
				{#each mobileNavLinks as link (link.href)}
					<a
						href={`${resolve('/')}${link.href}`}
						on:click={() => handleLinkClick(link.href)}
						class="flex items-center justify-between text-[38px] leading-none font-medium"
						class:text-primary={activeHash === link.href}
						class:text-[#5f8eea]={activeHash !== link.href}
					>
						<span>{link.label}</span>
						<span
							class="size-2 rounded-full transition-colors"
							class:bg-primary={activeHash === link.href}
							class:bg-[#5f8eea]={activeHash !== link.href}
						></span>
					</a>
				{/each}
			</div>

			<a
				href={`${resolve('/')}#contact`}
				on:click={() => handleLinkClick('#contact')}
				class="btn-blue-pill mt-8 h-[72px] w-full text-[22px]"
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
</style>
