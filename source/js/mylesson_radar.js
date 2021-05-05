const color1 = '#f74769';
const color2 = 'rgba(247, 71, 105, .4)';
const color3 = '#aaa';
const colorT = 'transparent';
const today = new Date().getTime();

const chartRadar = function (data, level, max) {
	new Chart($("#chartRadar"), {
		type: 'radar',
		data: {
			labels: level.title,
			datasets: [{
				data,
				backgroundColor: color2,
				borderColor: color1,
				pointBackgroundColor: colorT,
				pointBorderColor: colorT,
				// pointHoverBackgroundColor: color3,
				// pointHoverBorderColor: color1,
				borderWidth: .1
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: true,
			scale: {
				gridLines: { // AREA : x & y 軸(axis)導引線
					display: true,
					color: color3,
					lineWidth: .2
				},
				angleLines: { // 放射導引線
					display: true,
					lineWidth: .2,
					color: color3
				},
				ticks: { // AREA : 同心導引圈的「數字」
					beginAtZero: true,
					stepSize: 1, // 限定每圈彼此的間隔數字
					min: 0,
					max,
					backdropColor: 'transparent',// 文字背景清空
					display: false, // 導引圈數字隱藏
					borderColor: color3,
				},
				pointLabels: { // AREA : 各軸代表意義文字
					display: true,
					fontSize: 13, // 字級
					fontColor: "#f74769",
					fontFamily: "PingFangTC-Regular, Microsoft JhengHei, sans-serif"
				}
			},
			legend: { // AREA : 上方導引色塊
				display: false
			},
			tooltips: { // AREA : 在點上 mouseover 出的報告小視窗
				enabled: false, // 是否要運作
				caretPadding: 10, // 與 point 的距離
				displayColors: false, // 小色塊顯示
			}
		}
	});
};
	
const renderRadar = function(levelDATA, DATA){
	// ------------------------------------
	// -- RADAR : MSG WRITE
	// ------------------------------------
	const math = function (num, pos) {
		const size = Math.pow(10, pos);
		return Math.round(num * size) / size;
	}

	let memAry = [];
	const cutEnd = DATA.level.indexOf('-');
	const level = DATA.level.slice(0, cutEnd);

	const stepMax = levelDATA.step;
	$('.canvars-box1').addClass(level);
	let index = 0;
	for( let a in levelDATA.group ){
		const unit = levelDATA.group[a];

		let ary;
		
		const memNum = DATA.data[index];
		
		let now = '', miss = '', next = '';
		switch(true){
			case memNum < unit[0]:
				now = level + '-1';
				miss = unit[0] - memNum;
				next = level + '-1';
				ary = math(memNum / (unit[0]), 1);
				break;
			case memNum >= unit[0] && memNum < unit[1] :
				// console.log(a + ' is -1');
				now = level + '-1';
				miss = unit[1] - memNum;
				next = level + '-2';
				ary = math((memNum - unit[0]) / (unit[1] - unit[0]), 1) + 1;
				break;				
			case memNum >= unit[1] && memNum < unit[2] :
				// console.log(a + ' is -2');
				now = level + '-2';
				miss = unit[2] - memNum;
				next = level + '-3';
				ary = math((memNum - unit[1]) / (unit[2] - unit[1]), 1) + 2;
				break;						
			case stepMax >= 4 &&memNum >= unit[2] && memNum < unit[3] :
				// console.log(a + ' is -3');
				now = level + '-3';
				miss = unit[3] - memNum;
				next = level + '-4';
				ary = math((memNum - unit[2]) / (unit[3] - unit[2]), 1) + 3;
				break;				
			case stepMax >= 5 && memNum >= unit[3] && memNum < unit[4] :
				// console.log(a + ' is -4');
				now = level + '-4';
				miss = unit[4] - memNum;
				next = level + '-5';
				ary = math((memNum - unit[3]) / (unit[4] - unit[3]), 1) + 4;
				break;
			case stepMax >= 6 && memNum >= unit[4] && memNum < unit[5] :
				// console.log(a + ' is -5');
				next = level + '-6';
				now = level + '-5';
				miss = unit[5] - memNum;
				ary = math((memNum - unit[4]) / (unit[5] - unit[4]), 1) + 5;
				break;
			default:
				// console.log(a + 'is -' + stepMax);
				now = level + '-' + stepMax;
				ary = stepMax;
				$('.ritem' + index).addClass('is-top');
		};
		
		memAry.push(ary);

		$('.ritem' + index + ' .radar-now').text(memNum + ' ( ' + now + ' )');
		$('.ritem' + index + ' .radar-step').text('+' + miss + ' ➜ ' + next);
		index += 1
	};

	// ------------------------------------
	// -- RADAR : MAIN ACTION
	// ------------------------------------
	chartRadar(memAry, levelDATA, stepMax);
};