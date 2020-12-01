$(()=>{
	// =============================
	// == SELECT WITH :eq
	// =============================
	const eq = $('#datepicker tbody tr:eq(1) td:eq(2) > *').text();
	console.log('光華每月第二個星期二休市，本月為 '+eq+' 號');

	// =============================
	// == EACH FOREACH v
	// =============================
	console.log('1=============================');
	$.each( $('#datepicker tr:eq(1) td > *'), function(){
		console.log($(this).text() );
	} );
	console.log('2=============================');
	$('#datepicker tr:eq(1) td > *').each(function(){
		console.log( $(this).text() );
	});
	console.log('3============================');
	console.log('forEach for ary, not ele');
	console.log('each for ele, not ary');
	const ary = ['aa','bb','cc','dd','ee'];
	// $('#datepicker tbody tr').forEach(function(item){
	ary.forEach(function (item, i) {
		console.log(i, item, $(this));
	});
	console.log('4===========================');
	console.log(`%c
forEach(fn(item, i))
each(fn(i, item))，雖 item 有ele，但無法使用 => 「<a class="ui...">31</a>」
但 $(this) 是「n.fn.init [a.ui..., context: a.ui...]，則可使用
`, 'color:yellow');
	// ary.each(()=>{ << ERROR
	// 	console.log($(this));
	// })
	$.each( $('#datepicker tbody tr:eq(0) td > *'), function( i, item ){
		let target;
		console.log( $(this), $(this).text());
		console.log( i, item , String(item));
		// console.log(item.find('ui-datepicker-week-col'));
		// typeof( item ) => object
		// item.find('ui-datepicker-week-col').text() => err
		// JSON.stringify(item) object => {}
	});
	// v ERR , each should use $(this)
	// $.each( $('.ui-datepicker-week-col'), function(i, item){
	// 	console.log( item.attr('class') );
	// } )
console.log(`%c
陣列.forEach(fn(item, i){ 用 item 取值 })
元素.each(fn(){ 用 $(this) 取值})
`, 'color:greenyellow;font-size: 20px');
});

// =============================
// == SPLIT v
// =============================
const ary_slice = [0,1,2,3,4,5,6]
const slice_cuter = ary_slice.slice(2, 5);
console.log(slice_cuter, ary_slice);

const ary_splice = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
const splice_cuter = ary_splice.splice(2,2, 'newAdd');
console.log(splice_cuter, ary_splice);

// .SLICE (起始序, 結尾序) , 結果不包含結尾者
//          same   diff
// .SPLICE(起始序, 取得個數)
// .SLICE & .SPLICE 都不會破壞原 ARY

// =============================
// == SPLIT v
// =============================
const str = 'string in review';
console.log(str.split(''));

// ==========================================
// == TEST: cookie 
// ==========================================
Cookies.set('myCookie', true)
Cookies.set('eason', '170');

console.log( Cookies.get('myCookie') );
console.log( '%c'+(Cookies.get('eason')), 'color:yellow');