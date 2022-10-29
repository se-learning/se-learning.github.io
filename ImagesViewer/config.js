function getAssetsArrs(id, min, max, fileExtension='j') {
	var arrs = []
	for (var i=min; i<=max; i++) {
		arrs[arrs.length] = `data/${id}/1 (${i}).${fileExtension}`
	}
	return arrs
}

const MEDIA_COLLECTIONS = [	
	{
		id: '1',
		items: [
			...getAssetsArrs('1',1,2,'jpg'),
			
		]
	},
	{
		id: '2',
		items: [
			...getAssetsArrs('2',1,2,'jpg'),
			
		]
	},
]