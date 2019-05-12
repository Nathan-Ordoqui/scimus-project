
// Repeat the 8 samples in scene order : Roman, Fairy, Provence, China
let scene_order = [
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152', // real start
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152',
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152',
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152', // 16
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152',
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152',
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152',
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152', // 32
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152',
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152',
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152',
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152', // 48
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152',
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152',
	'RomanForum_151',
	'FairyForest_151',
	'ProvenceWalk_151',
	'ChinaTeahouse_151',
	'RomanForum_152',
	'FairyForest_152',
	'ProvenceWalk_152',
	'ChinaTeahouse_152', // 64
]

// Define filters list
const filter_list = [
	'Church',
	'Submarine',
	'Italy',
	'Perry',
	'Mountain',
	'Church_hard',
	'Submarine_hard',
	'Italy_hard',
	'Perry_hard',
	'Mountain_hard',
	'Church_soft',
	'Submarine_soft',
	'Italy_soft',
	'Perry_soft',
	'Mountain_soft'
	]

function shuffle(l) {
	const n = l.length;
	let a = Array(n);
	let k = n;
	while(k--) a[k] = l[k];
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

let filter_order = [];
if(parseInt(sample_id) == 1){
	// Randomize order for each scene
	let filter_roman = shuffle(filter_list);
	let filter_fairy = shuffle(filter_list);
	let filter_provence = shuffle(filter_list);
	let filter_china = shuffle(filter_list);

	// Concatenate filter lists in scene order, preceded by 4 blank filters for subject training

	let filter_order_tmp = ['none', 'none', 'none', 'none'];
	for (var i = 0; i<=filter_list.length - 1; i++) {
		filter_order_tmp.push(filter_roman[i]);
		filter_order_tmp.push(filter_fairy[i]);
		filter_order_tmp.push(filter_provence[i]);
		filter_order_tmp.push(filter_china[i]);
	}
	filter_order = filter_order_tmp;
}
else{
	let urlParams = new URLSearchParams(window.location.search);
	filter_order = urlParams.get('filter_order').split(',');
}
