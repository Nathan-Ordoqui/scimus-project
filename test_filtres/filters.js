filters={
	'none':no_effect,
	'Church':add_reverb,
	'Submarine':add_lowPass,
	'Italy':add_revtrem,
	'Perry':add_dubEffect,
	'Mountain':add_revdelay,
	'Church_hard':add_reverb_hard,
	'Submarine_hard':add_lowPass_hard,
	'Italy_hard':add_revtrem_hard,
	'Perry_hard':add_dubEffect_hard,
	'Mountain_hard':add_revdelay_hard,
	'Church_soft':add_reverb_soft,
	'Submarine_soft':add_lowPass_soft,
	'Italy_soft':add_revtrem_soft,
	'Perry_soft':add_dubEffect_soft,
	'Mountain_soft':add_revdelay_soft,
	// 'tremolo':add_tremolo,
	//  'delay':add_delay,
	// 'compressor':add_compressor,
	// 'highPass':add_highPass,
	// 'dubDelay':add_dubDelay,
	// 'filter1':add_filter1

}

//#######################################################""

function no_effect(sound){
	return sound;
}

// ################## Filters ###########################""

function add_reverb(sound){
	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.6
	});
	sound.addEffect(reverb);
	return sound;
}

function add_lowPass(sound){
	let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
	    frequency: 2500,
	    peak: 1
	});
	sound.addEffect(lowPassFilter);

	return sound;
}

function add_revtrem(sound){
	let tremolo = new Pizzicato.Effects.Tremolo({
	    speed: 0.12,
	    depth: 0.7,
	    mix: 0.75
	});
	sound.addEffect(tremolo);

	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.6
	});
	sound.addEffect(reverb);

	return sound;
}

function add_dubEffect(sound){
	let dubDelay = new Pizzicato.Effects.DubDelay({
		feedback: 0.5,
		time: 0.5,
		mix: 0.5,
		cutoff: 2200
	});
	sound.addEffect(dubDelay);

	let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
	    frequency: 2500,
	    peak: 1
	});
	sound.addEffect(lowPassFilter);

	return sound;
}

function add_revdelay(sound){
	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.3
	});
	sound.addEffect(reverb);

	let delay = new Pizzicato.Effects.Delay({
		feedback: 0.23,
	    time: 0.8,
	    mix: 0.2
	    });
	sound.addEffect(delay);

	return sound;
}

// ################## Filters_Hard ###########################""

function add_reverb_hard(sound){
	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.9
	});
	sound.addEffect(reverb);
	return sound;
}

function add_lowPass_hard(sound){
	let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
	    frequency: 1200,
	    peak: 1
	});
	sound.addEffect(lowPassFilter);

	return sound;
}

function add_revtrem_hard(sound){
	let tremolo = new Pizzicato.Effects.Tremolo({
	    speed: 0.12,
	    depth: 0.8,
	    mix: 0.9
	});
	sound.addEffect(tremolo);

	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.6
	});
	sound.addEffect(reverb);

	return sound;
}

function add_dubEffect_hard(sound){
	let dubDelay = new Pizzicato.Effects.DubDelay({
		feedback: 0.5,
		time: 0.5,
		mix: 0.8,
		cutoff: 500
	});
	sound.addEffect(dubDelay);

	let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
	    frequency: 1200,
	    peak: 1
	});
	sound.addEffect(lowPassFilter);

	return sound;
}

function add_revdelay_hard(sound){
	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.5
	});
	sound.addEffect(reverb);

	let delay = new Pizzicato.Effects.Delay({
		feedback: 0.4,
	    time: 0.8,
	    mix: 0.3
	    });
	sound.addEffect(delay);

	return sound;
}

// ################## Filters Soft ###########################""

function add_reverb_soft(sound){
	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.35
	});
	sound.addEffect(reverb);
	return sound;
}

function add_lowPass_soft(sound){
	let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
	    frequency: 3500,
	    peak: 1
	});
	sound.addEffect(lowPassFilter);

	return sound;
}

function add_revtrem_soft(sound){
	let tremolo = new Pizzicato.Effects.Tremolo({
	    speed: 0.08,
	    depth: 0.6,
	    mix: 0.6
	});
	sound.addEffect(tremolo);

	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.6
	});
	sound.addEffect(reverb);

	return sound;
}

function add_dubEffect_soft(sound){
	let dubDelay = new Pizzicato.Effects.DubDelay({
		feedback: 0.5,
		time: 0.5,
		mix: 0.35,
		cutoff: 3800
	});
	sound.addEffect(dubDelay);

	let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
	    frequency: 3500,
	    peak: 1
	});
	sound.addEffect(lowPassFilter);

	return sound;
}

function add_revdelay_soft(sound){
	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: false,
	    mix: 0.1
	});
	sound.addEffect(reverb);

	let delay = new Pizzicato.Effects.Delay({
		feedback: 0.15,
	    time: 0.8,
	    mix: 0.1
	    });
	sound.addEffect(delay);

	return sound;
}

// ############# Unused filters ###########################

function add_delay(sound){
	let delay = new Pizzicato.Effects.Delay({
		feedback: 0.5,
	    time: 0.22,
	    mix: 0.75
	    });
	sound.addEffect(delay);
	return sound;
}

function add_compressor(sound){
	let compressor = new Pizzicato.Effects.Compressor({
	    threshold: -24,
	    knee: 30,
	    attack: 0.003,
	    release: 0.025,
	    ratio: 12,
	    mix: 1
	});
	sound.addEffect(compressor);
	return sound;
}

function add_filter1(sound){
	let reverb = new Pizzicato.Effects.Reverb({
	    time: 1,
	    decay: 0.8,
	    reverse: true,
	    mix: 0.5
	});
	sound.addEffect(reverb);

	let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
	    frequency: 400,
	    peak: 10
	});
	sound.addEffect(lowPassFilter);

	return sound;
}

function add_highPass(sound){
	let highPassFilter = new Pizzicato.Effects.HighPassFilter({
	    frequency: 1000,
	    peak: 1
	});
	sound.addEffect(highPassFilter);

	return sound;
}

function add_tremolo(sound){
	let tremolo = new Pizzicato.Effects.Tremolo({
	    speed: 0.1,
	    depth: 0.7,
	    mix: 0.75
	});
	sound.addEffect(tremolo);

	return sound;
}

function add_dubDelay(sound){
	let dubDelay = new Pizzicato.Effects.DubDelay({
		feedback: 0.5,
		time: 0.5,
		mix: 0.5,
		cutoff: 2000
	});
	sound.addEffect(dubDelay);

	return sound 
}

// ################# END #################################""