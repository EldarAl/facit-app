import dayjs from 'dayjs';

const data: {
	id: number;
	name: string;
	type: string;
	price: number;
	count: number;
	date: dayjs.Dayjs;
}[] = [
	{
		id: 1,
		name: 'React Admin Template',
		type: 'Sales',
		price: 36,
		count: 982,
		date: dayjs(),
	},
	{
		id: 2,
		name: 'Omtanke Mobile UI Kit',
		type: 'Sales',
		price: 32,
		count: 423,
		date: dayjs().add(-1, 'day'),
	},
	{
		id: 3,
		name: 'Presentation Slides',
		type: 'Sales',
		price: 24,
		count: 678,
		date: dayjs().add(-1, 'day'),
	},
	{
		id: 4,
		name: '3D Animation',
		type: 'Sales',
		price: 24,
		count: 532,
		date: dayjs().add(-2, 'day'),
	},
	{
		id: 5,
		name: 'Travel Shopping UI Kit',
		type: 'Sales',
		price: 74,
		count: 235,
		date: dayjs().add(-3, 'day'),
	},
	{
		id: 6,
		name: 'Crypto 3D Icon Set',
		type: 'Sales',
		price: 58,
		count: 547,
		date: dayjs().add(-3, 'day'),
	},
	{
		id: 7,
		name: 'E-Learning App UI Kit',
		type: 'Sales',
		price: 39,
		count: 149,
		date: dayjs().add(-4, 'day'),
	},
	
];
export default data;
