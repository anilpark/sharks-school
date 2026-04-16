export type VideoCardContent = {
	id: number;
	nickname: string;
	videoUrl: string;
};

export type TextReviewContent = {
	id: number;
	avatarText: string;
	avatarBg: string;
	name: string;
	nameColor: string;
	text: string;
};

export const videoCardsContent: VideoCardContent[] = [
	{ id: 1, nickname: 'nickname', videoUrl: 'https://www.youtube.com' },
	{ id: 2, nickname: 'nickname', videoUrl: 'https://www.youtube.com' },
	{ id: 3, nickname: 'nickname', videoUrl: 'https://www.youtube.com' },
	{ id: 4, nickname: 'nickname', videoUrl: 'https://www.youtube.com' }
];

export const textReviewsContent: TextReviewContent[] = [
	{
		id: 1,
		avatarText: 'Н',
		avatarBg: 'bg-[#111827]',
		name: 'Настя',
		nameColor: 'text-[#d68953]',
		text: "I've been studying at English Sharks 🦈 with my teacher Ira, and I'm extremely happy with the results. I started with individual lessons and later joined group classes — both formats are engaging, motivating, and very effective. Ira explains everything clearly and creates a super comfortable atmosphere. My confidence and speaking skills have improved a lot. Highly recommend!"
	},
	{
		id: 2,
		avatarText: 'МК',
		avatarBg: 'bg-[#ff647d]',
		name: 'Марина Кузьменко',
		nameColor: 'text-[#bf6460]',
		text: `Доброго дня. Так все чудово.
    Заняття так як мені потрібно саме зараз.
    Викладач завжди готовий до уроку, цікаві теми, збалансований матеріал( граматика, спікінг, лексика, колокації).`
	},
	{
		id: 3,
		avatarText: 'Р',
		avatarBg: 'bg-[#8adf9e]',
		name: 'Ростислав',
		nameColor: 'text-[#52b36d]',
		text: 'Після двох місяців занять зник страх говорити. Подобається, що викладач пояснює просто і по суті, а домашні завдання реально допомагають закріпити матеріал.'
	},
	{
		id: 4,
		avatarText: 'A',
		avatarBg: 'bg-[#3f78ff]',
		name: 'Альона Максименко',
		nameColor: 'text-[#e67f2d]',
		text: `Добрий ранок
    Мені дуже подабвжиься піздід у навчанні у вашій школі .
    Все доступно , комфортно , зрозуміло та організовано .
    Дуже зручна платформа для навчання.
    Вчитель приємний, уважний і завжди доступно та зрозуміло пояснює
    Є бажання навчатись`
	},
	{
		id: 5,
		avatarText: 'Б',
		avatarBg: 'bg-[#8b7dff]',
		name: 'Богдан',
		nameColor: 'text-[#8b7dff]',
		text: `Доброго дня, Ірино!
    Хотів надати аптейд інформації щодо викладача :)
    Від Марічки Марина в захваті, все дуже подобається.
    Бажання займатися повернулося.
    Дуже Вам і Марічці дякую!`
	},
	{
		id: 6,
		avatarText: 'І',
		avatarBg: 'bg-[#7cb3ff]',
		name: 'Ірина',
		nameColor: 'text-[#6366f1]',
		text: `Добрий ранок,заняття сподобалось, підхід ,подача матеріалу від викладача ясна і зрозуміла.По першому заняттю важко сказати ,щось більше,але бачу ,що мені потрібно більше працювати да і після такої великої перерви.В голові ,щось там залишилося 😁думаю ,що з Богданою дійдемо до успіху 😃.
      `
	},
	{
		id: 7,
		avatarText: 'О',
		avatarBg: 'bg-[#8adf9e]',
		name: 'Оксана',
		nameColor: 'text-[#52b36d]',
		text: `Ірино, доброго дня! Я перепрошую, що вчора не відповіла( щось мене завалило роботою, я закрутилася і забула, про Ваше повідомлення 😔 В нас все добре, Катюша займається, їй подобається. Я, взагалі, в захваті від наших занять, дякую Вам і команді ❤️`
	},
	{
		id: 8,
		avatarText: 'Р',
		avatarBg: 'bg-[#60a5fa]',
		name: 'Ростислав',
		nameColor: 'text-[#2563eb]',
		text: 'У групі дуже підтримуюча атмосфера. Навіть складні теми проходять легко, бо багато практики та зворотного зв’язку від викладача.'
	}
];

export const reviewsInstagramUrl = 'https://instagram.com';
