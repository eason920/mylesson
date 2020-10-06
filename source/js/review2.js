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