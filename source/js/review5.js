  //=========================================
  // <31(G)> global component (& global in )
  // <43> v-for & prop value use ( under pic )
  // <30> :class mutiple
  // <59> Vue.filter  
  // <46> cpn $emit & connecter
  //=========================================

new Vue({
	data: {
		memberLevel: <%=asp_lv%>,  <<***這是可以的!!
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


預先綁定 v
data: {
	mixin: [{},{},{},{},{},{},{},{}] < 預知 mixin 要加8個
},
create(){
	for(i=0;i<8;i++){
		vm.mixin[i]=ary[i] // 在預知數個中一一給值
		if(i==7){
			vm.mixin.sort(function(next, current)){
				if( next.prop > current.prop ){reture 1}else{return -1} //褫減 
			}
		}
	}
}