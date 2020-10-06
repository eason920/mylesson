const todoList_1 = ["文章", "影片", "專欄", "每週測驗", "音樂", "童話故事", "實力衝刺", "寫作練習", "會話練習", "朗讀練習", "研習營"];

const todoList_4 = [
	["文章", "影片", "專欄", "每週測驗", "音樂", "童話故事"],
	["實力衝刺", "寫作練習", "會話練習", "朗讀練習", "研習營"]
]

const todoList_3 = [
	[
		{index: 0, title: "文章"},
		{index: 1, title: "影片"},
		{index: 2, title: "專欄"},
		{index: 3, title: "每週測驗"},
		{index: 4, title: "音樂"},
		{index: 5, title: "童話故事"},
	], 
	[
		{index: 6, title: "實力衝刺"},
		{index: 7, title: "寫作練習"},
		{index: 8, title: "會話練習"},
		{index: 9, title: "朗讀練習"},
		{index: 10, title: "研習營"},
	],

	
];

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
// 1 = false
// 2 = helf
// 3 = true
// 4 = ready to delete

// skin 
// 1 & 2 => for skin
const demoWeekAry = {
	202038: [],
	202039: [],
	202040: [
		{
			date: 28,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 29,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 30,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 1,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 2,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 3,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 4,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 5,
							done: 2
						},
						{
							sort: 6,
							done: 2
						},
						{
							sort: 7,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
	],
	202041: [
		{
			date: 5,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 6,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 7,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 8,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 9,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 10,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
		{
			date: 11,
			daily_done: true,
			hours: {
				m: {
					list: [
						{
							sort: 0,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 5,
							done: 2
						},
						{
							sort: 6,
							done: 2
						},
						{
							sort: 7,
							done: 2
						}
					],
					hours_done: true
				},
				a: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				},
				e: {
					list: [
						{
							sort: 8,
							done: 0
						},
						{
							sort: 1,
							done: 1
						},
						{
							sort: 6,
							done: 2
						}
					],
					hours_done: false
				}
			}
		},
	],
	// 202042: [],
	// 202043: []
};
const demoWeekAry40 = {
	20200928: {
		m: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	}
};

const demoWeekAry_20201006_obj = {
	20201005: {
		m: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
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
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: true
		},
		a: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		},
		e: {
			list: [
				{
					skin: 2,
					sort: 8,
					done: 0
				},
				{
					skin: 1,
					sort: 1,
					done: 1
				},
				{
					skin: 1,
					sort: 6,
					done: 2
				}
			],
			hours_done: false
		}
	}
};

// console.log(demoWeekAry);


// morning: {},
// afternoon: {},
// evening: {}