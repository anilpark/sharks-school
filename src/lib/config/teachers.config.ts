import circleTeacher1 from '$lib/assets/teachers/circle-teacher-1.webp';
import circleTeacher2 from '$lib/assets/teachers/circle-teacher-2.webp';
import circleTeacher3 from '$lib/assets/teachers/circle-teacher-3.webp';
import teacher1 from '$lib/assets/teachers/teacher-1.webp';
import teacher2 from '$lib/assets/teachers/teacher-2.webp';
import teacher3 from '$lib/assets/teachers/teacher-3.webp';
import teacher4 from '$lib/assets/teachers/teacher-4.webp';
import teacher5 from '$lib/assets/teachers/teacher-5.webp';
import teacher6 from '$lib/assets/teachers/teacher-6.webp';
import teacher7 from '$lib/assets/teachers/teacher-7.webp';
import teacher8 from '$lib/assets/teachers/teacher-8.webp';
import teacher9 from '$lib/assets/teachers/teacher-9.webp';
import teacher10 from '$lib/assets/teachers/teacher-10.webp';

export type TeacherProfile = {
	name: string;
	role: string;
	lessons: string;
	quote: string;
	photo: string;
};

export const teachersHeaderAvatars = [circleTeacher1, circleTeacher2, circleTeacher3] as const;

export const teachers: TeacherProfile[] = [
	{
		name: 'Олена',
		role: 'Філологиня, викладач англійської та польської з сертифікатом CELTA',
		lessons: '4000+',
		quote:
			'Я вибудовую партнерські стосунки з учнями, інтегрую їхні інтереси в уроки й поєдную структурованість із дружньою атмосферою. Мій принцип — Guide, not intimidate. Поза уроками я творча й захоплююся фотографією.',
		photo: teacher3
	},
	{
		name: 'Катерина',
		role: 'Філологиня, викладачка англійської та організаторка книжкового клубу в Sharks School',
		lessons: '4000+',
		quote:
			'Маю досвід роботи зі студентами від 5 до 55 років. Я емпатична й організована, у вільний час вивчаю мови, читаю трилери та доглядаю свого песика Річі. Найбільше ціную студентів і взаємний обмін знаннями та досвідом',
		photo: teacher4
	},
	{
		name: 'Марго',
		role: 'Філологиня та перекладачка з освітою двох університетів у Польщі та Україні, викладачка польської та англійської',
		lessons: '3500+',
		quote:
			'Я працюю з гумором - якщо на уроці без сміху, значить щось пішло не так. Вірю, що жарт допомагає вчити граматику. Люблю щире спілкування й заохочую говорити багато. Обожнюю тварин і мрію про рудого песика для компанії на уроках з матчою',
		photo: teacher5
	},
	{
		name: 'Марічка',
		role: 'Викладач англійської мови з профільною педагогічною освітою та підтвердженим рівнем C1',
		lessons: '3500+',
		quote:
			'У своїй роботі я найбільше цінує щирі, вдячні посмішки студентів. Я вважаю себе "вічним студентом" і переконана, що саме завдяки цьому можна залишатися натхненним викладачем і передавати учням якісні знання разом із мотивацією вчитися',
		photo: teacher10
	},
	{
		name: 'Ірина',
		role: 'Засновниця школи, філологиня, учасниця програм обміну в США та Південній Кореї',
		lessons: '6000+',
		quote:
			'Sharks School — мій особистий проєкт, у якому я втілюю ідеї, що визрівали роками. Завдяки філологічній освіті та досвіду життя в США я добре розумію тих, хто наполегливо вчить іноземну мову, особливо опинившись за кордоном',
		photo: teacher1
	},
	{
		name: 'Маргарита',
		role: 'Філологиня, тім-лідерка команди',
		lessons: '5000+',
		quote:
			'Я люблю змістовні розмови, цікавлюся досвідом студентів і відкрито ділюся своїм. Слідкую за методичною якістю уроків усієї команди. Фанатка мемів, гумору, гір і активного відпочинку — від хайкінгу до параглайдингу',
		photo: teacher2
	},
	{
		name: 'Юлія',
		role: 'Філологиня англійської та іпанської мов, викладачка англійської',
		lessons: '4000+',
		quote:
			'Я дуже комунікабельна людина і легко знаходжу підхід до людей. Люблю тварин, маю песика Бусю та кішку Емку (обоє вони з притулку). Обожнюю свою роботу та англійську мову загалом. Постійно розвиваюсь та покращую свій рівень',
		photo: teacher6
	},
	{
		name: 'Марія',
		role: 'Викладачка англійської мови з досвідом навчання закордоном',
		lessons: '3500+',
		quote:
			'Мій стиль викладання - це поєднання стендапу, терапії та навчання. Я люблю настільні ігри та час від часу інтегрую їх у заняття, адже вивчення мови через гру - це і цікаво, і ефективно',
		photo: teacher7
	},
	{
		name: 'Анастасія',
		role: 'Філологиня, викладачка англійської мови',
		lessons: '4500+',
		quote:
			'Мої уроки - це поєднання граматики, гумору та реального живого спілкування. Обожнюю меми, жарти, TikTok-відео з англійською лексикою та креативні завдання. Прагну, щоб англійська стала для учнів не страшною, а цікавою',
		photo: teacher8
	},
	{
		name: 'Анастасія',
		role: 'Філологиня та перекладачка з освітою двох університетів у Польщі та Україні, викладачка польської та англійської',
		lessons: '5000+',
		quote: '---',
		photo: teacher9
	}
];

