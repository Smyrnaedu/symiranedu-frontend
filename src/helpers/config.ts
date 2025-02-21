import { Value } from "sass";

export const appConfig = {
	project: {
		name: "SmyrnaEDU",
		slogan: "Geleceğiniz için ilk adımı uluslararası standartlarda bir eğitime başlayarak atın.",
		description:
			"SmyrnaEDU sizi dünyanın kapılarını açmaya davet ediyor. Hayalinizdeki eğitimi bulmak ve uluslararası bir geleceğe adım atmak için bize katılın. Yurt dışı eğitim yolculuğunuz başlasın!",
	},
	contact: {
		info: {
			phone1: {
				value: "+90 (232) 935 81 44",
				icon: "pi pi-phone",
				link: "tel:+902329358144",
			},
			phone2: {
				value: "90 541 335 53 35",
				icon: "pi pi-headphones",
				link: "tel:+905413355335",
			},
            whatsapp:{
                value:"+90 (555) 152 12 22 (Whatsapp)",
                icon:"pi-whatsapp",
                link:"https://wa.me/905551521222"
            },
			email: {
				value: "info@symirnaedu.com",
				icon: "pi pi-envelope",
				link: "mailto:info@symirnaedu.com",
			},
			address: {
				value: "Folkart Towers, Adalet Mah. Manas Blv. No:47 K:34 D:6-7-8A Kule Bayraklı İZMİR",
				icon: "pi pi-address-book",
				link: "https://maps.app.goo.gl/qtpaSoB9X6tL49Y28",
			},
		},
		website: "https://smyrnaedu.com/",
		map: {
			embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.432440660259!2d27.174208276583524!3d38.454576671822004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd9967f699849%3A0x91903638a6455e45!2sSMYRNA%20EDU!5e0!3m2!1str!2str!4v1740147251682!5m2!1str!2str",
		},
		socialMedia: {
			facebook: {
				url: "https://www.facebook.com/smyrnaedu",
				icon: "pi pi-facebook",
			},
			instagram: {
				url: "https://www.instagram.com/smyrnaedu/",
				icon: "pi pi-instagram",
			},
			linkedin: {
				url: "https://www.linkedin.com/company/smyrna-edu/",
				icon: "pi pi-linkedin",
			},
			youtube: {
				url: "https://www.youtube.com/@Smyrna_EDU",
				icon: "pi pi-youtube",
			},
		},
	},
	apiURL: "",
	educationTerms: [
		{ label: "Fall", value: "FALL_SEMESTER" },
		{ label: "Spring", value: "SPRING_SEMESTER"},
	],
	genders: [
		{ label: "Female", value: "FEMALE" },
		{ label: "Male", value: "MALE" },
	],
	days: [
		{ value: "MONDAY", label: "Monday" },
		{ value: "TUESDAY", label: "Tuesday" },
		{ value: "WEDNESDAY", label: "Wednesday" },
		{ value: "THURSDAY", label: "Thursday" },
		{ value: "FRIDAY", label: "Friday" },
		{ value: "SATURDAY", label: "Saturday" },
		{ value: "SUNDAY", label: "Sunday" },
	],
	userRightsOnRoutes: [
		{
			urlRegex: /\/dashboard$/,
			roles: [
				"ADMIN",
				"MANAGER",
				"ASSISTANTMANAGER",
				"TEACHER",
				"STUDENT",
			],
		},
		{ urlRegex: /\/dashboard\/admin$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/admin\/new$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager\/new$/, roles: ["ADMIN"] },
		{ urlRegex: /\/dashboard\/manager\/\d+$/, roles: ["ADMIN"] },
		{
			urlRegex: /\/dashboard\/assistant-manager$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/assistant-manager\/new$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/assistant-manager\/\d+$/,
			roles: ["ADMIN", "MANAGER"],
		},
		{
			urlRegex: /\/dashboard\/teacher$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/teacher\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/teacher\/\d+$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/lesson$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/lesson\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/education-term$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/education-term\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/program$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/program\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/student$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/student\/new$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{
			urlRegex: /\/dashboard\/student\/\d+$/,
			roles: ["ADMIN", "ASSISTANTMANAGER"],
		},
		{ urlRegex: /\/dashboard\/student-info$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/student-info\/new$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/student-info\/\d+$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/meet$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/meet\/new$/, roles: ["TEACHER"] },
		{ urlRegex: /\/dashboard\/meet\/\d+$/, roles: ["TEACHER"] },
		{
			urlRegex: /\/dashboard\/contact-message$/,
			roles: ["ADMIN", "MANAGER", "ASSISTANTMANAGER"],
		},
		{ urlRegex: /\/dashboard\/choose-lesson$/, roles: ["STUDENT"] },
		{ urlRegex: /\/dashboard\/grades-meets$/, roles: ["STUDENT"] },
	],
};