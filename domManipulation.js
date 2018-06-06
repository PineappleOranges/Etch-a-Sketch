const gridSize = 5;
let cellCount = gridSize ** 2;
for (let i = 0; i < cellCount; i++) {
	makeCell(cellCount, gridSize);
}
function makeCell(cellCount, gridSize) {
	const gridContainer = document.querySelector('.grid-container');
	const gridItem = document.createElement('div');
	gridItem.className = 'grid-item';
	gridContainer.style.gridTemplateColumns = 'auto';
	if (gridSize > 1) {
		for (let i = 0; i < gridSize - 1; i++) {
			gridContainer.style.gridTemplateColumns += ' auto';
		}
	}
	gridContainer.appendChild(gridItem);
}
