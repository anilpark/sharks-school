<script lang="ts">
	const handshakeIcon = '/assets/747971f51fd5cb5902c6aa32c4d98ebc96a31241.svg';
	const systemIcon = '/assets/4c9494b4021fc290634fa2d8b1de3dbeb6193fec.svg';
	const bookIcon = '/assets/98cdfa68f69dc41e7aa07f6879a4bdc1ebcec81b.svg';
	const personIcon = '/assets/db09f8421b3d77ffc0ed104c14c85e8a79780a08.svg';
	const goalIcon = '/assets/fa868754196e5dd099f5c7ba6b2ef39a627ee39a.svg';
	const heartIcon = '/assets/d07d454d60525aace8d7a98b3e5cb7810cc7dc41.svg';
	const dividerLight = '/assets/8536ceb11d5ef7054f1822840859f8bb42c19dc2.svg';
	const dividerWhite = '/assets/b525f7323aa861d38a44218192c8e57a5ee615f1.svg';

	const values = [
		{
			icon: handshakeIcon,
			title: 'Методика + комфорт',
			desc: "Комунікативний та лексичний підходи на уроці поєднуються з дружньою атмосферою та сприятливою атмосферою, де помилки не лякають",
			blue: true
		},
		{
			icon: systemIcon,
			title: 'Системність',
			desc: "Особистий кабінет у CRM системі з активними посиланнями, домашніми завданнями, записами оплат і колесом прогресу",
			blue: false
		},
		{
			icon: bookIcon,
			title: 'Матеріали',
			desc: "Ми використовуємо багато автентичних ресурсів — статті, відео, подкасти, серіали, аніме — щоб навчання було максимально живим і корисним",
			blue: false
		},
		{
			icon: personIcon,
			title: 'Індивідуальний підхід',
			desc: "Програма занять створюється персонально — на основі вашого рівня, цілей і тем, які справді вас цікавлять",
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
			title: "Наше комʼюніті ❤️",
			desc: "Ми не просто школа, ми — середовище. Книжковий клуб, Розмовні зустрічі, Telegram-канал із англомовним контентом, тут легко знайти друзів, однодумців і мотивацію",
			blue: false
		}
	];
</script>

<section id="values" class="w-full py-20 px-6">
	<!-- Header -->
	<div class="flex flex-col items-center gap-5 mb-16">
		<h2 class="section-title text-gradient-dark text-center max-w-[1066px]">Наші цінності</h2>
		<p class="text-[#2a2a2a] text-[24px] text-center leading-[1.2]">
			Формують нашу взаємодію, рішення та спосіб, у який ми розвиваємо нашу школу
		</p>
	</div>

	<!-- Values grid -->
	<div class="max-w-[1277px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
		{#each values as value}
			<div
				class="rounded-[12px] shadow-[0_2.8px_2.8px_0_rgba(0,0,0,0.05)] p-5 h-[324px] flex flex-col justify-between overflow-hidden"
				style={value.blue
					? 'background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)'
					: 'background: white'}
			>
				<div class="w-14 h-14 flex items-center justify-center">
					<img src={value.icon} alt="" class="w-full h-full object-contain" />
				</div>

				<div class="flex flex-col gap-4">
					<p
						class="text-[16px] leading-[1.3] tracking-[-0.48px]"
						class:text-white={value.blue}
						class:text-black={!value.blue}
					>
						{value.desc}
					</p>
					<div class="border-t {value.blue ? 'border-white/30' : 'border-[#e0e0e0]'}"></div>
					<h3
						class="font-medium text-[24px] leading-[1.15] tracking-[-0.72px]"
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
