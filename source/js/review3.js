$("#datepicker").datepicker("setDate",$.datepicker.parseDate("yy/mm/dd", "2026/12/01"));
																													// ^ yy o (兩個 y)
																													// ^ yyyy x (四個 y )
$('#edit-send').click(function(){
	// OBJ EVENT 玩一次來熟習 ary & obj 的新增 v
	updateObj = {}

});

const index = Ary.findIndex(function(item){
	return item.key == val;
});

const index = Ary.findIndex(item=>item.key==val);


weekData[id].date_list[date].hours[hours].sort(function(n, p){
	if( n.done > p.done ){ return -1 }else{ return 1 };
})

// SORT v
ary.sort(function(next, current){
	if( next.id > current.id ){ return -1 }else{ return 1};
})

// >>**** return -1 前後對調, return 1 維持 ****<<
// 褫增(最新在第一個) v
if( next.id > current.id ){ return -1 }else{ return 1};
// 褫減(最舊在第一個) v
if( next.id < current.id ){ return -1 }else{ return 1};

// animation: ani-moving 2s linear 「infinite」 forwards

//- NEW STUDY ####################################
//- 在正則表達式中，使用變數 => /string/g 改以 「new RegExp('string', 'g')」定義之
//- ##############################################


// REPLACE GROUP TARGET v
$(function() {
	var $content = $("#content");
	var $count = $("#count");
	var html = $content.html();
	$("#search").keyup(function() {
			var $this = $(this);
			var value = $this.val().trim();
			var regexp = new RegExp("(?![^<]*>)(" + value + ")", "igm");
			var match = html.match(regexp);
			if (value && match) {
					$count.text(match.length);
					$content.html(html.replace(regexp, "<span>$1</span>"));
			} else {
					$count.text(0);
					$content.html(html);
			}
	});
});
