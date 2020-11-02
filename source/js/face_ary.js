const demoFaceObj_201912 = { id: '201912', list: [
		0,0,0,0,0,0,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,
		// {date: 15, done: 0}
	]
};

const demoFaceObj_202001 = { id: '202001', list: [
		0,0,0,0,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1
	]
}

const demoFaceObj_202002 = { id: '202002', list: [
		0,0,0,0,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1
	]
};

const demoFaceObj_202003 = { id: '202003', list: [
		0,0,0,0,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1
	]
};

const demoFaceObj_202004 = { id: '202004', list: [
		0,0,0,0,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1,
		1,1,1,1,1,1,1
	]
};

const demoFaceObj_202005 = { id: '202005', list: [
			0,0,0,0,1,1,1,
			1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,
			1,1,1,1,1,1,1
		]
	};

	const demoFaceObj_202006 = { id: '202006', list: [
			1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,
			1,1
		]
	};

	const demoFaceObj_202007 = { id: '202007', list: [
			0,0,1,
			1,2,2,1,2,1,1,
			2,2,1,2,1,1,1,
			2,1,2,2,2,2,2,
			1,1,1,1,2,1,2,
			2,2
		]
	};

const demoFaceObj_202008 = { id: '202008', list: [
	0,0,0,0,0,1,2,2,1,1,2,2,
	2,1,2,2,2,2,2,
	2,2,2,2,2,2,2,
	1,1,1,1,1,1,1,
	2,1,2
]};

const demoFaceObj_202009 = { id: '202009', list: [
	0,1,2,1,1,2,1,
	2,2,2,2,1,1,2,
	1,1,1,1,1,1,1,
	2,2,2,1,1,1,2,
	2
]};

const demoFaceObj_202010 = { id: '202010', list: [
	0,0,0,1,2,1,1,
	1,1,1
]};

const demoFaceObj_202011 = {
	id: '202011', list: [
		0, 1, 2, 1, 1, 2, 1,
		2, 2, 2, 2, 1, 1, 2,
		1, 1, 1, 1, 1, 1, 1,
		2, 2, 2, 1, 1, 1, 2,
		2
	]
};

const demoFaceObj_202012 = {
	id: '202012', list: [
		0, 1, 2, 1, 1, 2, 1,
		2, 2, 2, 2, 1, 1, 2,
		1, 1, 1, 1, 1, 1, 1,
		2, 2, 2, 1, 1, 1, 2,
		2
	]
};

const demoFaceObj_202101 = {
	id: '202101', list: [
		0, 1, 2, 1, 1, 2, 1,
		2, 2, 2, 2, 1, 1, 2,
		1, 1, 1, 1, 1, 1, 1,
		2, 2, 2, 1, 1, 1, 2,
		2
	]
};

const demo = {
	id: 202010,
	week: {
		40: { 28: 1, 29: 1, 30: 1, 1: 1, 2: 1, 3: 1, 4: 1},
		41: { 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1},
		42: {	12: 3, 13: 1, 14: 1, 15: 1, 16: 0, 17: 0, 18: 0	}
	}
}

const demo2 = {
	202010: {
		week_list: {
			40: {
				weekly_complete: 25,
				date: [28, 29, 30, 31, 1, 2, 3],
				daily_done: [ 1, 1, 1, 1, 0, 0, 0],
				todos: 75,
				truth: 23
			},
			41: {
				weekly_complete: 25,
				date: [28, 29, 30, 31, 1, 2, 3],
				daily_done: [ 1, 1, 1, 1, 0, 0, 0],
				todos: 75,
				truth: 23
			},
			42: {
				weekly_complete: 25,
				date: [28, 29, 30, 31, 1, 2, 3],
				daily_done: [ 1, 1, 1, 1, 0, 0, 0],
				todos: 75,
				truth: 23
			}
		},
		monthly_truth: 88,
		monthly_todos: 104
	}
}

const demo3 = {
	202010: {
		week_length: 6,
		week_list: [
			{
				week: 40,
				// weekly_percent: 25,
				date: [28, 29, 30, 31, 1, 2, 3],
				daily_done: [1, 1, 1, 1, 0, 0, 0],
				todos: 75,
				truth: 23
			},
			{
				week: 40,
				weekly_complete: 25,
				date: [28, 29, 30, 31, 1, 2, 3],
				daily_done: [1, 1, 1, 1, 0, 0, 0],
				todos: 75,
				truth: 23
			},
			{
				week: 40,
				weekly_complete: 25,
				date: [28, 29, 30, 31, 1, 2, 3],
				daily_done: [1, 1, 1, 1, 0, 0, 0],
				todos: 75,
				truth: 23
			}
		],
		monthly_truth: 88,
		monthly_todos: 104
	}
}

const demoOnline = `
202010:
week_length: 4
week_list: Array(5)
0:
daily_done: (7) [0, 0, 0, 3, 3, 3, 3]
date: (7) ["28", "29", "30", "1", "2", "3", "4"]
week: "40"
__proto__: Object
1:
daily_done: (7) [3, 3, 3, 3, 3, 3, 3]
date: (7) ["5", "6", "7", "8", "9", "10", "11"]
week: "41"
__proto__: Object
2:
daily_done: (7) [3, 3, 3, 3, 3, 3, 3]
date: (7) ["12", "13", "14", "15", "16", "17", "18"]
week: "42"
__proto__: Object
3:
daily_done: (7) [3, 3, 3, 3, 3, 3, 3]
date: (7) ["19", "20", "21", "22", "23", "24", "25"]
week: "43"
__proto__: Object
4:
daily_done: (7) [3, 3, 3, 3, 3, 3, 0]
date: (7) ["26", "27", "28", "29", "30", "31", "1"]
week: "44"
__proto__: Object
length: 5
__proto__: Array(0)
__proto__: Object
`

// 0 = 時間未到 / 非本週數字
// 1 = 完成
// 2 = 完成一半
// 3 = 未完成

// const apiFace = {
	// 201912: demoFaceObj_201912,
	// 202001: demoFaceObj_202001,
	// 202002: demoFaceObj_202002,
	// 202003: demoFaceObj_202003,
	// 202004: demoFaceObj_202004,
	// 202005: demoFaceObj_202005,
	// 202006: demoFaceObj_202006,
	// 202007: demoFaceObj_202007,
	// 202008: demoFaceObj_202008,
	// 202009: demoFaceObj_202009,
	// 202010: demoFaceObj_202010,
	// 202011: demoFaceObj_202011,
	// 202012: demoFaceObj_202012,
	// 202101: demoFaceObj_202101,
// };

// Cookies.set('faceAry', JSON.stringify(demoFaceAry));
// by setting //