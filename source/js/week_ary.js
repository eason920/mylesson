const todoList = [
	{skin: 1, "sort": 0, title: "文章"},
	{skin: 1, "sort": 1, title: "影片"},
	{skin: 1, "sort": 2, title: "專欄"},
	{skin: 1, "sort": 3, title: "每週測驗"},
	{skin: 1, "sort": 4, title: "音樂"},
	{skin: 1, "sort": 5, title: "童話故事"},

	{skin: 2, "sort": 6, title: "實力衝刺"},
	{skin: 2, "sort": 7, title: "寫作練習"},
	{skin: 2, "sort": 8, title: "會話練習"},
	{skin: 2, "sort": 9, title: "朗讀練習"},
	{skin: 2, "sort": 10, title: "研習營"},
];


// date_list[0].hors.m[0].done v
// 0 = 時間未到
// 1 = 完成
// 2 = 完成一半
// 3 = 未完成    
// 4 = 編輯模式下待刪項目

// date_list[0].daily_done v
// 0 = 時間未到 / 非本週數字
// 1 = 完成
// 3 = 未完成
const levelAry = ['無', '輕', '中', '重', '極重']

const demoWeekObj_202034 = {
	"dt_id": '202034',
	"dt_year": 2020,
	"dt_week": 31,
	"dt_month": 8,
	"weekly_todos": 34,
	"weekly_truth": 34,
	"weekly_rate": 23,
	"weekly_bar1": 30,
	"weekly_bar2": 25,
	"weekly_level": 0,
	"weekly_msg": 'msg202034',
	"date_list": [
		{
			"date": '17',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 1, "done": 0},
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}			
		},
		{
			"date": '18',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '19',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '20',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '21',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '22',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '23',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 6, "done": 2}
				]
			}				
		},
	]
}

const demoWeekObj_202038 = {
	"dt_id": '202038',
	"dt_year": 2020,
	"dt_week": 38,
	"dt_month": 9,
	"weekly_todos": 38,
	"weekly_truth": 18,
	"weekly_rate": 13,
	"weekly_bar1": 33,
	"weekly_bar2": 15,
	"weekly_level": 1,
	"weekly_msg": 'msg202038',
	"date_list": [
		{
			"date": '14',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 1, "done": 0},
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '15',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
				]
			}				
		},
		{
			"date": '16',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '17',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '18',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '19',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
				],
				"a": [
					{"sort": 8, "done": 0},
				],
				"e": [
					{"sort": 8, "done": 0},
				]
			}				
		},
		{
			"date": '20',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [

				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
	]
}

const demoWeekObj_202039 = {
	"dt_id": '202039',
	"dt_year": 2020,
	"dt_week": 39,
	"dt_month": 9,
	"weekly_todos": 39,
	"weekly_truth": 29,
	"weekly_rate": 75,
	"weekly_bar1": 33,
	"weekly_bar2": 12,
	"weekly_level": 2,
	"weekly_msg": 'msg202039',
	"date_list": [
		{
			"date": '21',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 1, "done": 0},
					{"sort": 2, "done": 0},
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '22',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '23',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '24',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '25',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '26',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '27',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
	]
}

const demoWeekObj_202040 = {
	"dt_id": '202040',
	"dt_year": 2020,
	"dt_week": 40,
	"dt_month": 10,
	"weekly_todos": 40,
	"weekly_truth": 30,
	"weekly_rate": 30,
	"weekly_bar1": 5,
	"weekly_bar2": 2,
	"weekly_level": 3,
	"weekly_msg": 'msg202040',
	"date_list": [
		{
			"date": '28',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 1, "done": 0},
					{"sort": 2, "done": 0},
					{"sort": 3, "done": 0},
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '29',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '30',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '1',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '2',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '3',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '4',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
	]
}

const demoWeekObj_202041 = {
	"dt_id": '202041',
	"dt_year": 2020,
	"dt_week": 41,
	"dt_month": 10,
	"weekly_todos": 41,
	"weekly_truth": 11,
	"weekly_rate": 44,
	"weekly_bar1": 33,
	"weekly_bar2": 28,
	"weekly_level": 4,
	"weekly_msg": 'msg 202041',
	"date_list": [
		{
			"date": '5',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 1, "done": 0},
					{"sort": 2, "done": 0},
					{"sort": 3, "done": 0},
					{"sort": 4, "done": 0},
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '6',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '7',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '8',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '9',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '10',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '11',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
	]
}

const demoWeekObj_202042 = {
	"dt_id": '202042',
	"dt_year": 2020,
	"dt_week": 42,
	"dt_month": 10,
	"weekly_todos": 42,
	"weekly_truth": 12,
	"weekly_rate": 66,
	"weekly_bar1": 31,
	"weekly_bar2": 24,
	"weekly_level": 2,
	"weekly_msg": 'msg202042',
	"date_list": [
		{
			"date": '12',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					{"sort": 1, "done": 0},
					{"sort": 2, "done": 1},
					{"sort": 3, "done": 2},
					{"sort": 4, "done": 3},
					{"sort": 5, "done": 4},
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '13',
			"daily_done": 1,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
				],
				"a": [
					{"sort": 7, "done": 0},
					{"sort": 7, "done": 1},
					{"sort": 7, "done": 2}
				],
				"e": [
					{"sort": 6, "done": 0},
					{"sort": 6, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '14',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					
				],
				"a": [
					
				],
				"e": [
					
				]
			}				
		},
		{
			"date": '15',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					
				],
				"a": [
					
				],
				"e": [
					
				]
			}				
		},
		{
			"date": '16',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					
				],
				"a": [
					
				],
				"e": [
					
				]
			}				
		},
		{
			"date": '17',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					
				],
				"a": [
					
				],
				"e": [
					
				]
			}				
		},
		{
			"date": '18',
			"daily_done": 3,
			"daily_todos": 75,
			"daily_truth": 23,
			"hours": {
				"m": [
					
				],
				"a": [
					
				],
				"e": [
					
				]
			}				
		},
	]
}

const demoWeekObj_202043 = {
	"dt_id": '202043',
	"dt_year": 2020,
	"dt_week": 43,
	"dt_month": 10,
	"weekly_todos": 21,
	"weekly_truth": 2,
	"weekly_rate": 89,
	"weekly_bar1": 0,
	"weekly_bar2": 100,
	"weekly_level": 4,
	"weekly_msg": '建議您多安排幾篇文章，或上互動課程，讓學習更扎實喔!',
	"date_list": [
		{
			"date": '19',
			"daily_done": 3,
			"daily_todos": 11,
			"daily_truth": 2,
			"hours": {
				"m": [
					{"sort": 1, "done": 2},
					{"sort": 2, "done": 2},
					{"sort": 3, "done": 2},
					{"sort": 4, "done": 2},
					{"sort": 5, "done": 2},
				],
				"a": [
					{"sort": 8, "done": 2},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				],
				"e": [
					{"sort": 8, "done": 2},
					{"sort": 1, "done": 1},
					{"sort": 6, "done": 2}
				]
			}				
		},
		{
			"date": '20',
			"daily_done": 3,
			"daily_todos": 9,
			"daily_truth": 0,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 0},
					{"sort": 6, "done": 0}
				],
				"a": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 0},
					{"sort": 6, "done": 0}
				],
				"e": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 0},
					{"sort": 6, "done": 0}
				]
			}				
		},
		{
			"date": '21',
			"daily_done": 3,
			"daily_todos": 0,
			"daily_truth": 0,
			"hours": {
				"m": [],
				"a": [],
				"e": []
			}				
		},
		{
			"date": '22',
			"daily_done": 0,
			"daily_todos": 0,
			"daily_truth": 0,
			"hours": {
				"m": [],
				"a": [],
				"e": []
			}				
		},
		{
			"date": '23',
			"daily_done": 0,
			"daily_todos": 2,
			"daily_truth": 0,
			"hours": {
				"m": [
					{"sort": 8, "done": 0},
					{"sort": 1, "done": 0},
				],
				"a": [],
				"e": []
			}				
		},
		{
			"date": '24',
			"daily_done": 0,
			"daily_todos": 0,
			"daily_truth": 0,
			"hours": {
				"m": [],
				"a": [],
				"e": []
			}				
		},
		{
			"date": '25',
			"daily_done": 0,
			"daily_todos": 0,
			"daily_truth": 0,
			"hours": {
				"m": [],
				"a": [],
				"e": []
			}				
		},
	]
}

const apiWeek = {
	202034: demoWeekObj_202034,
	202038: demoWeekObj_202038,
	202039: demoWeekObj_202039,
	202040: demoWeekObj_202040,
	202041: demoWeekObj_202041,
	202042: demoWeekObj_202042,
	202043: demoWeekObj_202043
}
