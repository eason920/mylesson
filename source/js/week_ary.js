const todoList = [
	{skin: 1, index: 0, title: "文章"},
	{skin: 1, index: 1, title: "影片"},
	{skin: 1, index: 2, title: "專欄"},
	{skin: 1, index: 3, title: "每週測驗"},
	{skin: 1, index: 4, title: "音樂"},
	{skin: 1, index: 5, title: "童話故事"},

	{skin: 2, index: 6, title: "實力衝刺"},
	{skin: 2, index: 7, title: "寫作練習"},
	{skin: 2, index: 8, title: "會話練習"},
	{skin: 2, index: 9, title: "朗讀練習"},
	{skin: 2, index: 10, title: "研習營"},
];

// ["文章", "影片", "專欄", "每週測驗", "音樂", "童話故事"],
// ["實力衝刺", "寫作練習", "會話練習", "朗讀練習", "研習營"]

// done
// 0 = default
// 1 = true
// 2 = helf
// 3 = false
// 4 = ready to delete

// skin 
// 1 = red
// 2 = green
const hadFile = true;
const lastUpdate = "202031"
// hadFile 只要來過就會改作 true (def false)
// 只要 hadFile 為 true 者，api 需要能自動補出過去未上線數週的「空缺週」資料

const demoWeekObj_202038 = {
	id: '202038',
	year: 2020,
	month: 9,
	week: [
		{
			date: '14',
			daily_done: true,
			hours: {
				m: [
					{sort: 1, done: 0},
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '15',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '16',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '17',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '18',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '19',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '20',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
	],
	prev: false,
	next: '202039'
}

const demoWeekObj_202039 = {
	id: '202039',
	year: 2020,
	week_id: 39,
	month: 9,
	week: [
		{
			date: '21',
			daily_done: true,
			hours: {
				m: [
					{sort: 1, done: 0},
					{sort: 2, done: 0},
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '22',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '23',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '24',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '25',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '26',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '27',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
	],
	prev: '202038',
	next: '202040'
}

const demoWeekObj_202040 = {
	id: '202040',
	year: 2020,
	week_id: 40,
	month: 10,
	week: [
		{
			date: '28',
			daily_done: true,
			hours: {
				m: [
					{sort: 1, done: 0},
					{sort: 2, done: 0},
					{sort: 3, done: 0},
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '29',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '30',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '1',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '2',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '3',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '4',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
	],
	prev: '202039',
	next: '202041'
}

const demoWeekObj_202041 = {
	id: '202041',
	year: 2020,
	week_id: 41,
	month: 10,
	week: [
		{
			date: '5',
			daily_done: true,
			hours: {
				m: [
					{sort: 1, done: 0},
					{sort: 2, done: 0},
					{sort: 3, done: 0},
					{sort: 4, done: 0},
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '6',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '7',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '8',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '9',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '10',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '11',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
	],
	prev: '202040',
	next: '202042'
	// next: false
}

const demoWeekObj_202042 = {
	id: '202042',
	year: 2020,
	week_id: 42,
	month: 10,
	week: [
		{
			date: '12',
			daily_done: true,
			hours: {
				m: [
					{sort: 1, done: 0},
					{sort: 2, done: 1},
					{sort: 3, done: 2},
					{sort: 4, done: 3},
					{sort: 5, done: 4},
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '13',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '14',
			daily_done: true,
			hours: {
				m: [
					
				],
				a: [
					
				],
				e: [
					
				]
			}				
		},
		{
			date: '15',
			daily_done: true,
			hours: {
				m: [
					
				],
				a: [
					
				],
				e: [
					
				]
			}				
		},
		{
			date: '16',
			daily_done: true,
			hours: {
				m: [
					
				],
				a: [
					
				],
				e: [
					
				]
			}				
		},
		{
			date: '17',
			daily_done: true,
			hours: {
				m: [
					
				],
				a: [
					
				],
				e: [
					
				]
			}				
		},
		{
			date: '18',
			daily_done: true,
			hours: {
				m: [
					
				],
				a: [
					
				],
				e: [
					
				]
			}				
		},
	],
	prev: '202041',
	next: false
	// next: '202043'
}

const demoWeekObj_202043 = {
	id: '202043',
	year: 2020,
	week_id: 43,
	month: 10,
	week: [
		{
			date: '19',
			daily_done: true,
			hours: {
				m: [
					{sort: 1, done: 0},
					{sort: 2, done: 0},
					{sort: 3, done: 0},
					{sort: 4, done: 0},
					{sort: 5, done: 0},
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '20',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '21',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '22',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '23',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '24',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
		{
			date: '25',
			daily_done: true,
			hours: {
				m: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				a: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				],
				e: [
					{sort: 8, done: 0},
					{sort: 1, done: 1},
					{sort: 6, done: 2}
				]
			}				
		},
	],
	prev: '202042',
	next: false
}

const apiWeek = {
	202038: demoWeekObj_202038,
	202039: demoWeekObj_202039,
	202040: demoWeekObj_202040,
	202041: demoWeekObj_202041,
	202042: demoWeekObj_202042,
	// 202043: demoWeekObj_202043
}

let lastUpdateId = '202038';
// let lastUpdateId;

// console.log(demoWeekAry);