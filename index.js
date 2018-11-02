var leftBox = document.getElementById('leftBox');
var rightBox = document.getElementById('rightBox');

Sortable.create(leftBox, {
	group : {
		name : 'leftBox',
		put : 'rightBox'		
	},
	animation : 100,
	onUpdate : function(evt){
		refreshLike();
	},
	onAdd : function(evt){
		refreshLike();
	
	}
});

Sortable.create(rightBox, {
	group : {
		name : 'rightBox',
		put : 'leftBox'		
	},
	animation : 100,
	onUpdate : function(evt){
		refreshLike();
	},
	onAdd : function(evt){
		refreshLike();
	}
});


function refreshLike() {
	document.getElementById('like').innerHTML = document.getElementById('leftBox').getElementsByTagName('img').length;
	document.getElementById('dont').innerHTML = document.getElementById('rightBox').getElementsByTagName('img').length;

}

document.onload = refreshLike();