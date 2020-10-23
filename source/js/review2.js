$(()=>{
	const ary=[1,2,3,4,5,6,11,12,13,14,15,16];
				
	ary.findIndex(function(item){
		console.log(item)
	});

	// $('#datepicker tbody tr').findIndex(function(item){
	// 	console.log(item);
	// });
console.log(`%c
target.findIndex(function(item){});
target 只可為 ary, 不可為 element
`, 'font-size:19px;color:yellow')
});


const check = confirm('確定要將此週的學習排程\n複製到未來一週嗎?\n*己安排的排程將會被覆蓋');
if( check ){console.log('do something');}