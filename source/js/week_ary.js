const todoList = [
	{category: 1, index: 1, title: "文章"},
	{category: 1, index: 2, title: "影片"},
	{category: 1, index: 3, title: "專欄"},
	{category: 1, index: 4, title: "每週測驗"},
	{category: 1, index: 5, title: "音樂"},
	{category: 1, index: 6, title: "童話故事"},
	{category: 2, index: 7, title: "實力衝刺"},
	{category: 2, index: 8, title: "寫作練習"},
	{category: 2, index: 9, title: "會話練習"},
	{category: 2, index: 10, title: "朗讀練習"},
	{category: 2, index: 11, title: "研習營"},
];
// ["文章", "影片", "專欄", "每週測驗", "音樂", "童話故事"],
// ["實力衝刺", "寫作練習", "會話練習", "朗讀練習", "研習營"]
// todoList.index = weekAry['20201001'].m.list[n].sort

// done
// 0 = default
// 1 = false
// 2 = helf
// 3 = true
// 4 = ready to delete
const demoWeekAry40 = {
	20200928: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20200929: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20200930: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201001: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201002: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201003: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201004: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	}
};

const demoWeekAry = {
	20201005: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201006: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201007: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201008: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201009: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201010: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	},
	20201011: {
		m: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					category: 2,
					sort: 8,
					done: 0
				},
				{
					category: 1,
					sort: 1,
					done: 1
				},
				{
					category: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	}
};

console.log(demoWeekAry);


// morning: {},
// afternoon: {},
// evening: {}