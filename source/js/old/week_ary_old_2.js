const todoList = [
	{skin: 1, sort: 0, title: "文章"},
	{skin: 1, sort: 1, title: "影片"},
	{skin: 1, sort: 2, title: "專欄"},
	{skin: 1, sort: 3, title: "每週測驗"},
	{skin: 1, sort: 4, title: "音樂"},
	{skin: 1, sort: 5, title: "童話故事"},

	{skin: 2, sort: 6, title: "實力衝刺"},
	{skin: 2, sort: 7, title: "寫作練習"},
	{skin: 2, sort: 8, title: "會話練習"},
	{skin: 2, sort: 9, title: "朗讀練習"},
	{skin: 2, sort: 10, title: "研習營"},
];

// date_list[0].hors.m[0].done v
// 0 = 時間未到
// 1 = 完成
// 2 = 完成一半
// 3 = 未完成    
// 4 = 編輯模式下待刪項目

// date_list[0].hors.m[0].skin v
// 1 = 自主學習(紅)
// 2 = 互動學習(綠)


const lastUpdate = "202031"
// hadFile 只要來過就會改作 true (def false)
// 只要 hadFile 為 true 者，api 需要能自動補出過去未上線數週的「空缺週」資料

const demoWeekObj_201952 = {
	dt_id: '202038',
	dt_year: 2020,
	dt_month: 9,
	dt_week: 38,
	date_list: [
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

const demoWeekObj_202038 = {
	dt_id: '202038',
	dt_year: 2020,
	dt_month: 9,
	dt_week: 38,
	date_list: [
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
	dt_id: '202039',
	dt_year: 2020,
	dt_week: 39,
	dt_month: 9,
	date_list: [
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
	dt_id: '202040',
	dt_year: 2020,
	dt_week: 40,
	dt_month: 10,
	date_list: [
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
	dt_id: '202041',
	dt_year: 2020,
	dt_week: 41,
	dt_month: 10,
	date_list: [
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
	dt_id: '202042',
	dt_year: 2020,
	dt_week: 42,
	dt_month: 10,
	date_list: [
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
	last_update_id: '202038',
	dt_id: '202043',
	dt_year: 2020,
	dt_week: 43,
	dt_month: 10,
	date_list: [
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
	201952: demoWeekObj_201952,
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