var memory_array=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
var mem_values=[];
var memory_ids=[];
var flipped=0;
function back(){
for(var i=0; i<memory_array.length;i++){
var tile=document.getElementById("tile_"+i);
tile.style.background='url(http://www.grayflannelsuit.net/blog/wp-content/uploads/2012/03/atlanta-braves-cap-logo_2003-present.gif) no-repeat';
tile.style.backgroundSize = "100% 100%";
tile.innerHTML="";
}

}
function flip(){
	var des=document.getElementById("seconds").value;

	
	for(var i=0; i<memory_array.length;i++){
		var tile=document.getElementById("tile_"+i);
		tile.style.background= '#FFF';
		tile.innerHTML=memory_array[i];
		var tim=des+"000";
		var sec=parseInt(tim);
		setTimeout(back, sec);
		
	
}
}
function board(){
	flipped=0;
	var output='';
	memory_array.shuffle();
	for(var i=0; i<memory_array.length; i++){
		output+='<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>'; 
	}
			document.getElementById("whole").innerHTML = output;
}
Array.prototype.shuffle=function(){

	var x= this.length, j, temp;
	while(--x>0){
		j=Math.floor(Math.random()*(x+1));
		temp=this[j];
		this[j]=this[x];
		this[x]=temp;
	}
}
function memoryFlipTile(tile, val){

	if(tile.innerHTML=="" && mem_values.length<2){
		tile.style.background= '#FFF';
		tile.innerHTML=val;
		if(mem_values.length==0){
			mem_values.push(val);
			memory_ids.push(tile.id);
		}else if(mem_values.length==1){
			mem_values.push(val);
			memory_ids.push(tile.id);
			if (mem_values[0]==mem_values[1]){
				flipped+=2;
				mem_values=[];
				memory_ids=[];
				if(flipped==memory_array.length){
					alert("Board cleared");
					document.getElementById('whole').innerHTML="";
					board();
				}
			}else{
				function flipBack(){
					var tile_1=document.getElementById(memory_ids[0]);
					var tile_2=document.getElementById(memory_ids[1]);
					tile_1.style.background='url(http://www.grayflannelsuit.net/blog/wp-content/uploads/2012/03/atlanta-braves-cap-logo_2003-present.gif) no-repeat';
					document.getElementById(memory_ids[0]).style.backgroundSize = "100% 100%";
					tile_1.innerHTML="";
					tile_2.style.background='url(http://www.grayflannelsuit.net/blog/wp-content/uploads/2012/03/atlanta-braves-cap-logo_2003-present.gif) no-repeat';
					document.getElementById(memory_ids[1]).style.backgroundSize = "100% 100%";
					tile_2.innerHTML="";
					mem_values=[];
					memory_ids=[];
				}
				setTimeout(flipBack, 700);
			}
		}
	}
}


