<script lang="ts">
	import handshakeIcon from '$lib/assets/handshake-icon.svg';
	import systemIcon from '$lib/assets/interval.svg';
	import bookIcon from '$lib/assets/materials.svg';
	import personIcon from '$lib/assets/individual.svg';
	import goalIcon from '$lib/assets/goal.svg';
	import heartIcon from '$lib/assets/community.svg';

	const values = [
		{
			icon: handshakeIcon,
			title: 'Методика + комфорт',
			desc: 'Комунікативний та лексичний підходи на уроці поєднуються з дружньою атмосферою та сприятливою атмосферою, де помилки не лякають',
			blue: true
		},
		{
			icon: systemIcon,
			title: 'Системність',
			desc: 'Особистий кабінет у CRM системі з активними посиланнями, домашніми завданнями, записами оплат і колесом прогресу',
			blue: false
		},
		{
			icon: bookIcon,
			title: 'Матеріали',
			desc: 'Ми використовуємо багато автентичних ресурсів — статті, відео, подкасти, серіали, аніме — щоб навчання було максимально живим і корисним',
			blue: false
		},
		{
			icon: personIcon,
			title: 'Індивідуальний підхід',
			desc: 'Програма занять створюється персонально — на основі вашого рівня, цілей і тем, які справді вас цікавлять',
			blue: false
		},
		{
			icon: goalIcon,
			title: 'Результати, а не обіцянки',
			desc: '500+ учнів досягли своїх цілей\n4 компанії довірили нам навчання своїх команд\nВипускники повертаються до нас із новими цілями й рекомендаціями друзям',
			blue: false
		},
		{
			icon: heartIcon,
			title: 'Наше комʼюніті ❤️',
			desc: 'Ми не просто школа, ми — середовище. Книжковий клуб, Розмовні зустрічі, Telegram-канал із англомовним контентом, тут легко знайти друзів, однодумців і мотивацію',
			blue: false
		}
	];
</script>

<section id="values" class="w-full px-6 section-pad">
	<!-- Header -->
	<div class="mb-16 flex flex-col items-center gap-5">
		<h2 class="section-title text-gradient-dark max-w-[1066px] text-center">Наші цінності</h2>
		<p class="text-center text-[24px] leading-[1.2] text-[#2a2a2a]">
			Формують нашу взаємодію, рішення та спосіб, у який ми розвиваємо нашу школу
		</p>
	</div>

	<!-- Values grid -->
	<div class="mx-auto grid max-w-[1277px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each values as value, i (i)}
			<div
				class="flex h-[324px] flex-col justify-between overflow-hidden rounded-[12px] p-5 shadow-[0_2.8px_2.8px_0_rgba(0,0,0,0.05)]"
				style={value.blue
					? 'background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)'
					: 'background: white'}
			>
				<div
					class="flex items-center justify-center"
					class:h-11={i === 0}
					class:w-11={i === 0}
					class:h-14={i !== 0}
					class:w-14={i !== 0}
					class:lg:h-14={i === 0}
					class:lg:w-14={i === 0}
				>
					<img src={value.icon} alt="" class="h-full w-full object-contain" loading="lazy" decoding="async" />
				</div>

				<div class="flex flex-col gap-4">
					<p
						class="text-[16px] leading-[1.3] tracking-[-0.48px]"
						class:text-white={value.blue}
						class:text-black={!value.blue}
					>
						{value.desc}
					</p>
					<div class="border-t {value.blue ? 'whiteBorder' : 'blueBorder'}"></div>
					<h3
						class="text-[24px] leading-[1.15] font-medium tracking-[-0.72px]"
						class:text-white={value.blue}
						class:text-[#045ca9]={!value.blue}
					>
						{value.title}
					</h3>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.blueBorder {
		border: 1px solid transparent;
		border-image: linear-gradient(
				90deg,
				rgba(4, 92, 169, 0) 0%,
				rgba(4, 92, 169, 0.8) 15.87%,
				rgba(4, 92, 169, 0.8) 87.02%,
				rgba(4, 92, 169, 0) 100%
			)
			1;
	}
	.whiteBorder {
		border: 1px solid transparent;
		border-image: linear-gradient(
				90deg,
				rgba(255, 255, 255, 0) 0%,
				rgba(255, 255, 255, 0.8) 15.87%,
				rgba(255, 255, 255, 0.8) 87.02%,
				rgba(255, 255, 255, 0) 100%
			)
			1;
	}
</style>
