let sample_finished = false;
let form_modified = false;

let file = "sounds/"+scene_order[sample_id-1]+".mp3";

function play_sample(){
	if(!$("#play_button").hasClass("locked")){
		let sound = new Pizzicato.Sound(file, 
			function(){
				sound.volume = 0.1;
				add_filter = filters[filter_order[sample_id-1]];
				sound = add_filter(sound);
				sound.play();
				unlock_next(sound);
			});
		$("#play_button").addClass("locked");
	}
}

function unlock_next(sound){
	// console.log('sample finished : '+sample_finished);
	// console.log('form modified : '+form_modified);
	if($("#submit").hasClass("locked") && sample_finished && form_modified){
		$("#submit").removeClass("locked");
		$("#submit").addClass("unlocked");
	}
	else{
		if(sound.playing){
			setTimeout(function(){
				    unlock_next(sound);
				}, 100);
		}
		else{
			if(!sample_finished){
				sample_finished = true;
			}
			sound.play();
			setTimeout(function(){
				    unlock_next(sound);
				}, 100);
		}
	}
}