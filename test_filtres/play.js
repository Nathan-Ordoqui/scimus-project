files_loaded = {};
sound_playing = false;

function load_sound(file){
	if(!files_loaded[file]){
		let sound = new Pizzicato.Sound(file, 
			function(){
				console.log(file+' loaded');
				files_loaded[file] = sound;
			});
	}
}

function play_file(file){
	if(!files_loaded[file]){
		setTimeout(function(){
		    play_file(file);
		}, 100);
	}
	else{
		for(i=0;i<files_loaded[file].effects.length;i++){
			effect = files_loaded[file].effects[i];
			files_loaded[file].removeEffect(effect);
		}
		play_sound(files_loaded[file], selected_filter);
	}
}

function play_sound(sound, filter){
	add_filter = filters[filter]
	filtered_sound = add_filter(sound);

	sound.volume = 0.1;

	stop_playing();
	sound.play();
	console.log("playing "+filter);
	sound_playing = sound;

};

function stop_playing(){
	if(sound_playing){
		sound_playing.stop();
		while(sound_playing.playing){
			setTimeout(100);
		}
		sound_playing = false;
		console.log("sound stopped");	
	};
}

function main(){
	file = 'sounds/'+selected_file;
	load_sound(file);
	play_file(file)
};