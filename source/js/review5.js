//=========================================
// <31(G)> global component (& global in )
// <43> v-for & prop value use ( under pic )
// <30> :class mutiple
// <59> Vue.filter  
// <46> cpn $emit & connecter
//=========================================
//-----------------------------
// 1. VUE 可以加入 asp 變數 v
new Vue({
	data: {
		memberLevel: <%=asp_lv%>,  //<<***這是可以的!!
	},
	el: '#app',
});


const cpnFadeDot = {
	props: ['prop', 'reqIndex'],
	template: `
		<div 
			@mouseover='emitEvent(), emitEvent2()' <<****兩個函式一起作用
			@mouseout='emitEvent3'
		></div>
	`,
};

//** 組件，其
// 1.「行為事件」「應」寫在 cpn 中，並配合「$emit」作用
//    不可寫在 view 中直接引用函式
//    =>cpn 行為必走遠路
// 2.「:class」(不是在說沒「:」的「class」)則可以在 view 中
//    => :class 可超捷徑
// 3. 命名
//   js 接受 camel case & 底線連結 兩種命名
//   html 不接受 camel case , 但可用 底線連結
//   ==> 組件中統一使用「底線連結」(但其自用的 methods 仍使用 camel case 吧!)

//-----------------------------
// 2. Vue 響應式原理 (Reactivity system)  v
// 預先綁定、vm.$set、Object.assign()
new Vue({

	data: {
		mixin: [{},{},{},{},{},{},{},{}] // < 2-1預知 mixin 要加8個
	},
	create(){
		for(i=0;i<8;i++){
			vm.mixin[i]=ary[i] // 2-2在預知數個中一一給值
			if(i==7){
				vm.mixin.sort(function(next, current)){
					if( next.prop > current.prop ){reture 1}else{return -1} // 2-3褫減 
				}
			}
		}
	}
});

//-----------------------------
// 3. js 另開(指定)視窗 v
window.open(href, 'search')

//-----------------------------
// 4. 網址傳「中文」值的轉碼 V
// 中文網址在帶到該頁面時會被 browser 轉譯成碼，要轉
const chURI = decodeURI(urlValue)

//----------------------------
// 5. 正規式 + replace
const myRegExp = new RegExp('&quot;', 'g');
vm.title = vm.prop.class_cname.replace(myRegExp, '"');

//------------------------------
// 6. 
<div class="sidebar-under-dot"
	v-if='speech.length != 0'  //< 可以1. v-if 應寫這 // 可以2. ary.length == 0
>
	<cpn_homework
		v-for='(item, i ) in speech'
		:prop='item'
		:key='i'
	></cpm_homework>
</div>
<div class="sidebar-under-dot" v-else>
	<span>(未例入此次升級評量)</span>
</div>
//==== O ^v X ======
<div class="sidebar-under-dot">
	<cpn_homework
		v-for='(item, i ) in speech'
		:prop='item'
		:key='i'
		v-if='speech.length != 0' // < v-if 不行在這
	></cpm_homework>
	<span v-else>(未例入此次升級評量)</span>
</div>

// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// 7 **** 為逹到刷新畫面，除了改 data key, 有時也要有毫秒的空陣列來得到視覺變化 & 促進畫面真正刷新 *****
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^