export type Language = 'english' | 'polish';
export type Format = 'individual' | 'pair' | 'group';

export type Plan = {
	title: string;
	price: string;
	perLesson: string | null;
	description: string;
	cta: string;
	popular?: boolean;
	highlight?: boolean;
};

export type CustomRequest = {
	title: string;
	description: string;
	cta: string;
};

export type PricingBlock = {
	plans: Plan[];
	customRequest: CustomRequest;
};

export type PricingContent = Record<Language, Record<Format, PricingBlock>>;

export const languageOptions: { value: Language; label: string }[] = [
	{ value: 'english', label: 'Англійська' },
	{ value: 'polish', label: 'Польська' }
];

export const formatOptions: { value: Format; label: string }[] = [
	{ value: 'individual', label: 'Індивідуальні' },
	{ value: 'pair', label: 'Парні' },
	{ value: 'group', label: 'Групові' }
];

export const pricingContent: PricingContent = {
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
					'Особливі запити по вивченню мови (Професійний, корпоративний, бізнес, підготовка до конференцій, для команд) розраховуються індивідуально',
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
				description: 'Групові програми з англійської для команд, компаній або тематичних напрямів.',
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
				description: 'Парні заняття з польської для друзів, родини або колег з адаптованою програмою.',
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
