let grid = makeSquareGrid();
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', event => makeSquareGrid(resetGrid(grid)));

/* ***************************************************************** */

function makeSquareGrid(gridSize = 16) {
	const cellCount = gridSize ** 2;
	for (let i = 0; i < cellCount; i++) {
		makeCell(cellCount, gridSize, i + 1);
	}

	const gridCell = document.querySelectorAll('.grid-item');
	gridCell.forEach(
		function (cellValue) {
			cellValue.addEventListener('mouseenter', event => changeCellColor(cellValue.id));
		}
	);

	return gridCell;
}

function makeCell(cellCount, gridSize, id) {
	const gridContainer = document.querySelector('.grid-container');
	const gridItem = document.createElement('div');
	gridItem.className = 'grid-item';
	gridItem.id = `${id}`;
	gridItem.style.backgroundColor = 'hsl(0, 0%, 100%)';
	gridContainer.style.gridTemplateColumns = '1fr';
	if (gridSize > 1) {
		for (let i = 0; i < gridSize - 1; i++) {
			gridContainer.style.gridTemplateColumns += ' 1fr';
		}
	}
	gridContainer.appendChild(gridItem);
}

function changeCellColor(cellId) {
	let currentCell = document.getElementById(`${cellId}`);
	switch (currentCell.style.backgroundColor) {
		case 'rgb(255, 255, 255)':
			currentCell.style.backgroundColor = 'rgb(230, 230, 230)';
			break;
		case 'rgb(230, 230, 230)':
			currentCell.style.backgroundColor = 'rgb(204, 204, 204)';
			break;
		case 'rgb(204, 204, 204)':
			currentCell.style.backgroundColor = 'rgb(179, 179, 179)';
			break;
		case 'rgb(179, 179, 179)':
			currentCell.style.backgroundColor = 'rgb(153, 153, 153)';
			break;
		case 'rgb(153, 153, 153)':
			currentCell.style.backgroundColor = 'rgb(128, 128, 128)';
			break;
		case 'rgb(128, 128, 128)':
			currentCell.style.backgroundColor = 'rgb(102, 102, 102)';
			break;
		case 'rgb(102, 102, 102)':
			currentCell.style.backgroundColor = 'rgb(77, 77, 77)';
			break;
		case 'rgb(77, 77, 77)':
			currentCell.style.backgroundColor = 'rgb(51, 51, 51)';
			break;
		case 'rgb(51, 51, 51)':
			currentCell.style.backgroundColor = 'rgb(26, 26, 26)';
			break;
		case 'rgb(26, 26, 26)':
			currentCell.style.backgroundColor = 'rgb(0, 0 ,0)';
			break;
	}}

function resetGrid() {
	let oldGrid = document.querySelector('.grid-container');
	while (oldGrid.firstChild) {
		oldGrid.removeChild(oldGrid.firstChild)
	}

	oldGrid.style.gridTemplateColumns = null;

	let newGridSize = prompt('Enter a grid size.', 16);
	while (newGridSize === NaN || newGridSize < 1) {
		newGridSize = prompt('Invalid Entry. Enter a grid size.', 16);
	}
	return newGridSize;
}
