<script lang="ts">
	import telegramIcon from '$lib/assets/telegram.svg';
	import sharkLogo from '$lib/assets/uniqueShark.svg';

	type Language = 'english' | 'polish';
	type Format = 'individual' | 'pair' | 'group';

	type Plan = {
		title: string;
		price: string;
		perLesson: string | null;
		description: string;
		cta: string;
		popular?: boolean;
		highlight?: boolean;
	};

	type CustomRequest = {
		title: string;
		description: string;
		cta: string;
	};

	type PricingBlock = {
		plans: Plan[];
		customRequest: CustomRequest;
	};

	type PricingContent = Record<Language, Record<Format, PricingBlock>>;

	const languageOptions: { value: Language; label: string }[] = [
		{ value: 'english', label: 'Англійська' },
		{ value: 'polish', label: 'Польська' }
	];

	const formatOptions: { value: Format; label: string }[] = [
		{ value: 'individual', label: 'Індивідуальні' },
		{ value: 'pair', label: 'Парні' },
		{ value: 'group', label: 'Групові' }
	];

	let selectedLanguage = $state<Language>('english');
	let selectedFormat = $state<Format>('individual');

	const pricingContent: PricingContent = {
		english: {
			individual: {
				plans: [
					{
						title: 'Пробне заняття',
						price: '300',
						perLesson: null,
						description: 'Познайомтесь із викладачем і методом навчання перед стартом курсу',
						cta: 'Хочу пробне заняття'
					},
					{
						title: '4 заняття',
						price: '2200',
						perLesson: '550 грн за урок',
						description: 'Ідеальний варіант, щоб спробувати формат і побачити перші результати',
						cta: 'Хочу 4 заняття'
					},
					{
						title: '8 занять',
						price: '4240',
						perLesson: '530 грн за урок',
						description: 'План для тих, хто хоче стабільно вдосконалювати англійську щотижня',
						cta: 'Хочу 8 занять',
						popular: true,
						highlight: true
					},
					{
						title: '12 занять',
						price: '6000',
						perLesson: '500 грн за урок',
						description: 'Найвигідніший пакет для системного навчання та помітного прогресу',
						cta: 'Хочу 12 занять'
					}
				],
				customRequest: {
					title: 'Унікальний запит',
					description:
						'Особливі запити з англійської: бізнес, співбесіди, конференції, корпоративне навчання, професійна англійська.',
					cta: 'Написати менеджеру'
				}
			},
			pair: {
				plans: [
					{
						title: 'Пробне заняття',
						price: '250',
						perLesson: null,
						description: 'Спробуйте формат занять удвох та познайомтесь із викладачем',
						cta: 'Хочу пробне заняття'
					},
					{
						title: '4 заняття',
						price: '1600',
						perLesson: '400 грн за урок',
						description: 'Зручний старт для навчання разом із другом або партнером',
						cta: 'Хочу 4 заняття'
					},
					{
						title: '8 занять',
						price: '3040',
						perLesson: '380 грн за урок',
						description: 'Оптимальний пакет для регулярної практики англійської у парі',
						cta: 'Хочу 8 занять',
						popular: true,
						highlight: true
					},
					{
						title: '12 занять',
						price: '4320',
						perLesson: '360 грн за урок',
						description: 'Максимальна вигода для стабільного навчання та швидшого прогресу',
						cta: 'Хочу 12 занять'
					}
				],
				customRequest: {
					title: 'Унікальний запит',
					description:
						'Парні заняття з англійської для друзів, пар, колег або партнерів з адаптованою програмою.',
					cta: 'Написати менеджеру'
				}
			},
			group: {
				plans: [
					{
						title: 'Пробне заняття',
						price: '200',
						perLesson: null,
						description: 'Познайомтесь із групою, викладачем і форматом перед стартом',
						cta: 'Хочу пробне заняття'
					},
					{
						title: '4 заняття',
						price: '1200',
						perLesson: '300 грн за урок',
						description: 'Комфортний формат для старту в групі з підтримкою однодумців',
						cta: 'Хочу 4 заняття'
					},
					{
						title: '8 занять',
						price: '2240',
						perLesson: '280 грн за урок',
						description: 'Найкращий вибір для регулярної практики англійської в групі',
						cta: 'Хочу 8 занять',
						popular: true,
						highlight: true
					},
					{
						title: '12 занять',
						price: '3120',
						perLesson: '260 грн за урок',
						description: 'Вигідний пакет для системного розвитку мовних навичок',
						cta: 'Хочу 12 занять'
					}
				],
				customRequest: {
					title: 'Унікальний запит',
					description:
						'Групові програми з англійської для команд, компаній або тематичних напрямів.',
					cta: 'Написати менеджеру'
				}
			}
		},
		polish: {
			individual: {
				plans: [
					{
						title: 'Пробне заняття',
						price: '300',
						perLesson: null,
						description: 'Познайомтесь із викладачем і форматом навчання перед початком курсу',
						cta: 'Хочу пробне заняття'
					},
					{
						title: '4 заняття',
						price: '2100',
						perLesson: '525 грн за урок',
						description: 'Зручний пакет, щоб спробувати формат і зробити перші кроки в польській',
						cta: 'Хочу 4 заняття'
					},
					{
						title: '8 занять',
						price: '4000',
						perLesson: '500 грн за урок',
						description: 'Оптимальний варіант для стабільного прогресу в польській мові',
						cta: 'Хочу 8 занять',
						popular: true,
						highlight: true
					},
					{
						title: '12 занять',
						price: '5640',
						perLesson: '470 грн за урок',
						description: 'Найкращий пакет для системного навчання та впевненого результату',
						cta: 'Хочу 12 занять'
					}
				],
				customRequest: {
					title: 'Унікальний запит',
					description:
						'Індивідуальні програми з польської для вступу, переїзду, роботи, співбесіди або корпоративних потреб.',
					cta: 'Написати менеджеру'
				}
			},
			pair: {
				plans: [
					{
						title: 'Пробне заняття',
						price: '250',
						perLesson: null,
						description: 'Спробуйте парний формат і навчайтесь разом у комфортному темпі',
						cta: 'Хочу пробне заняття'
					},
					{
						title: '4 заняття',
						price: '1520',
						perLesson: '380 грн за урок',
						description: 'Зручне рішення для навчання удвох з фокусом на спільну мету',
						cta: 'Хочу 4 заняття'
					},
					{
						title: '8 занять',
						price: '2880',
						perLesson: '360 грн за урок',
						description: 'Оптимальний пакет для регулярної практики польської у парі',
						cta: 'Хочу 8 занять',
						popular: true,
						highlight: true
					},
					{
						title: '12 занять',
						price: '4080',
						perLesson: '340 грн за урок',
						description: 'Найвигідніше рішення для довшого спільного навчання',
						cta: 'Хочу 12 занять'
					}
				],
				customRequest: {
					title: 'Унікальний запит',
					description:
						'Парні заняття з польської для друзів, родини або колег з адаптованою програмою.',
					cta: 'Написати менеджеру'
				}
			},
			group: {
				plans: [
					{
						title: 'Пробне заняття',
						price: '200',
						perLesson: null,
						description: 'Познайомтесь із викладачем, групою та форматом навчання',
						cta: 'Хочу пробне заняття'
					},
					{
						title: '4 заняття',
						price: '1120',
						perLesson: '280 грн за урок',
						description: 'Комфортний старт для занять у групі та активної мовної практики',
						cta: 'Хочу 4 заняття'
					},
					{
						title: '8 занять',
						price: '2080',
						perLesson: '260 грн за урок',
						description: 'Найпопулярніший варіант для стабільного прогресу в польській',
						cta: 'Хочу 8 занять',
						popular: true,
						highlight: true
					},
					{
						title: '12 занять',
						price: '2880',
						perLesson: '240 грн за урок',
						description: 'Вигідний пакет для тривалого навчання в групі',
						cta: 'Хочу 12 занять'
					}
				],
				customRequest: {
					title: 'Унікальний запит',
					description:
						'Групові заняття з польської для компаній, освітніх проєктів або тематичних програм.',
					cta: 'Написати менеджеру'
				}
			}
		}
	};

	let currentBlock = $derived(pricingContent[selectedLanguage][selectedFormat]);
	let plans = $derived(currentBlock.plans);
	let customRequest = $derived(currentBlock.customRequest);
</script>

<section id="pricing" class="w-full px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<div class="mx-auto max-w-[1440px]">
		<div class="mb-8 flex flex-col items-center gap-4 lg:mb-10">
			<h2 class="section-title text-gradient-dark max-w-[1066px] text-center">
				Тарифи для кожного — обери свій
			</h2>

			<p class="section-subtitle max-w-[760px] text-center">
				Оберіть нижче мову та тип занять з простим ціноутворенням для своїх цілей
			</p>

			<div class="mt-2 flex w-full items-center justify-center gap-3 lg:mt-4">
				<div class="flex flex-wrap justify-center gap-2 rounded-[24px] bg-[#e9e9e9] p-2">
					{#each languageOptions as option, i (i)}
						<button
							type="button"
							class="rounded-[68px] px-5 py-2 text-sm text-[#2a2a2a] transition-all sm:px-7 sm:text-base lg:px-10 lg:py-2.5 lg:text-[24px]"
							class:bg-white={selectedLanguage === option.value}
							class:font-medium={selectedLanguage === option.value}
							class:shadow-[0_3px_4px_0_rgba(0,0,0,0.15)]={selectedLanguage === option.value}
							onclick={() => (selectedLanguage = option.value)}
						>
							{option.label}
						</button>
					{/each}
				</div>

				<div class="flex flex-wrap justify-center gap-2 rounded-[24px] bg-[#e9e9e9] p-2">
					{#each formatOptions as option, i (i)}
						<button
							type="button"
							class="rounded-[68px] px-5 py-2 text-sm text-[#2a2a2a] transition-all sm:px-7 sm:text-base lg:px-10 lg:py-2.5 lg:text-[24px]"
							class:bg-white={selectedFormat === option.value}
							class:font-medium={selectedFormat === option.value}
							class:shadow-[0_3px_4px_0_rgba(0,0,0,0.15)]={selectedFormat === option.value}
							onclick={() => (selectedFormat = option.value)}
						>
							{option.label}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-6 lg:gap-7">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
				{#each plans as plan, i (i)}
					<div
						class="relative flex min-h-[320px] flex-col justify-between rounded-[24px] px-4 pt-6 pb-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] lg:min-h-[360px] lg:rounded-[36px] lg:px-5 lg:pt-[30px]"
						class:bg-white={!plan.highlight}
						style={plan.highlight
							? 'background: linear-gradient(to bottom, #fde1e4 0%, white 40%)'
							: ''}
					>
						{#if plan.popular}
							<div
								class="absolute top-2 right-4 z-10 lg:-top-3 lg:right-auto lg:left-1/2 lg:-translate-x-1/2"
							>
								<span
									class="block text-[34px] leading-none whitespace-nowrap text-[#ef6a78] lg:text-[62px]"
									style="font-family: 'Caveat', cursive; transform: rotate(5deg);"
								>
									Популярно
								</span>
							</div>
						{/if}

						<div class="flex flex-col gap-3">
							<h3 class="text-[22px] leading-[1.15] font-medium text-[#2a2a2a] lg:text-[24px]">
								{plan.title}
							</h3>

							<div class="flex items-end gap-2">
								<span class="text-[40px] leading-[1.1] font-medium text-[#2a2a2a] lg:text-[50px]">
									{plan.price}
								</span>
								<span class="mb-1 text-[18px] font-medium text-[#2a2a2a] lg:text-[22px]">грн</span>
							</div>

							{#if plan.perLesson}
								<p class="text-[15px] leading-[1.2] text-[#2a2a2a] italic lg:text-[18px]">
									{plan.perLesson}
								</p>
							{/if}

							<hr class="border-[#e0e0e0]" />

							<p
								class="text-[16px] leading-[1.3] text-[#2a2a2a] italic lg:text-[20px] lg:leading-[1.2]"
							>
								{plan.description}
							</p>
						</div>

						<button
							type="button"
							class="mt-6 h-[56px] w-full rounded-[18px] border-t-[3px] border-white/40 px-4 text-[16px] font-medium text-white transition-opacity hover:opacity-90 lg:h-[76px] lg:rounded-[20px] lg:text-[22px]"
							style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
						>
							{plan.cta}
						</button>
					</div>
				{/each}
			</div>

			<div
				class="flex w-full flex-col gap-6 rounded-[28px] p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] lg:rounded-[48px] lg:p-8 xl:flex-row xl:items-center xl:justify-between"
				style="background: linear-gradient(to right, white, #def0ff)"
			>
				<div class="flex flex-col gap-4 lg:gap-5">
					<div class="flex items-center gap-4">
						<div
							class="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-[12px] bg-[#d1e9ff] lg:h-[69px] lg:w-[69px]"
						>
							<img
								src={sharkLogo}
								alt=""
								class="absolute"
								style="width: 72px; height: 90px; top: -6px; left: -6px;"
							/>
						</div>

						<h3
							class="text-[30px] leading-[1.1] font-medium lg:text-[42px] 2xl:text-[56px]"
							style="background: linear-gradient(to bottom, #37a2ff 0%, #0450fb 60%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text"
						>
							{customRequest.title}
						</h3>
					</div>

					<p
						class="max-w-[760px] text-[16px] leading-[1.35] font-medium text-[#515151] lg:text-[18px]"
					>
						{customRequest.description}
					</p>
				</div>

				<a
					href="#contact"
					class="flex h-[58px] shrink-0 items-center justify-center gap-3 rounded-[18px] border-t-[3px] border-white/40 px-6 text-[16px] font-medium text-white transition-opacity hover:opacity-90 lg:h-[73px] lg:rounded-[20px] lg:px-9 lg:text-[22px]"
					style="background: linear-gradient(180deg, #2b83ff 0%, #176afd 50%, #0450fb 100%)"
				>
					<img src={telegramIcon} alt="" class="h-5 w-5 lg:h-7 lg:w-7" />
					{customRequest.cta}
				</a>
			</div>
		</div>
	</div>
</section>
