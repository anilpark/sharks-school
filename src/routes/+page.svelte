<script lang="ts">
	import Header from '$lib/sections/Header.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Stats from '$lib/sections/Stats.svelte';
	import WhatAwaits from '$lib/sections/WhatAwaits.svelte';
	import Team from '$lib/sections/Team.svelte';
	import Reviews from '$lib/sections/Reviews.svelte';
	import Pricing from '$lib/sections/Pricing.svelte';
	import Values from '$lib/sections/Values.svelte';
	import FAQ from '$lib/sections/FAQ.svelte';
	import Footer from '$lib/sections/Footer.svelte';
</script>

<svelte:head>
	<title>Sharks School — Мовна школа для дорослих та підлітків</title>
	<meta
		name="description"
		content="Вивчайте англійську та польську мову з досвідченими викладачами. Живі уроки, сучасні методики, тепла атмосфера."
	/>
</svelte:head>

<<<<<<< HEAD
<div class="min-h-screenф">
=======
<div class="min-h-screen">
>>>>>>> 6b4a1fa9bee81e8018551a6f17df78f91975f254
	<Header />
	<main>
		<Hero />
		<Stats />
		<WhatAwaits />
		<Team />
		<div class="blue-pattern">
			<Reviews />
		</div>
		<Pricing />
		<Values />
		<FAQ />
	</main>
	<Footer />
</div>
