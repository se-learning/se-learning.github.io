function getAssetsArrs(id, min, max, fileExtension='j', startAtRandom=false) {
	var arrs = []
	var randomStart = min
	if (startAtRandom) {
		randomStart = Math.floor(Math.random() * (max - min + 1)) + min
	}
	for (var i=randomStart; i<=max; i++) {
		arrs[arrs.length] = `data/${id}/1 (${i}).${fileExtension}`
	}
	for (var i=min; i<randomStart; i++) {
		arrs[arrs.length] = `data/${id}/1 (${i}).${fileExtension}`
	}
	return arrs
}

const MEDIA_COLLECTIONS = [	
	{
		id: '1',
		items: [
			...getAssetsArrs('1',1,2,'jpg',true),
			
		]
	},
	{
		id: '2',
		items: [
			...getAssetsArrs('2',1,2,'jpg',true),
			
		]
	},
]