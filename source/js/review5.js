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