const PANEL_SIZE = 800;
const MAX_CELLS_BY_SIDE = 100;
const DEFAULT_CELLS_BY_SIDE = 16;

let cellColorIndex = 0; //Points at what color to render on the cell out of the COLORS
const COLORS = [
  '#F60000',
  '#FF8C00',
  '#FFEE00',
  '#4DE94C',
  '#3783FF',
  '#4815AA',
];

renderSketchPanel();
const cellsBySide = getCellCountsOfSide();
renderCells(cellsBySide * cellsBySide, getCellSize(cellsBySide));

/**
 *
 * @returns {Number}
 */
function getCellCountsOfSide() {
  let numberOfCells;
  do {
    numberOfCells = +prompt(
      'Enter number of cells by side.\nThe number cannot be greater than 100.'
    );

    if (!numberOfCells) {
      numberOfCells = DEFAULT_CELLS_BY_SIDE;
    }
  } while (MAX_CELLS_BY_SIDE < numberOfCells);
  return numberOfCells;
}

/**
 * @returns {void}
 */
function renderSketchPanel() {
  const sketchPanelContainer = document.getElementById(
    'sketch-panel-container'
  );

  const sketchPanel = createSquareDiv(PANEL_SIZE);
  sketchPanel.setAttribute('id', 'sketchPanel');
  sketchPanelContainer.appendChild(sketchPanel);
}

/**
 *
 * @param {Number} numberOfCells
 * @param {Number} cellSize
 * @returns {void}
 */
function renderCells(numberOfCells, cellSize) {
  const sketchPanel = document.getElementById('sketch-panel');
  for (let i = 0; i < numberOfCells; i++) {
    const cell = createSquareDiv(cellSize);
    cell.addEventListener('mouseover', (e) => handleMouseOver(e.target));
    cell.classList.add('cell');
    sketchPanel.appendChild(cell);
  }
}

/**
 *
 * @param {Number} size
 * @returns {HTMLElement}
 */
function createSquareDiv(size) {
  const div = document.createElement('div');
  div.style.width = size;
  div.style.height = size;
  return div;
}

/**
 *
 * @param {Number} cellCount
 * @returns {String}
 */
function getCellSize(cellCount) {
  return PANEL_SIZE / cellCount + 'px';
}

/**
 *
 * @param {HTMLElement} cellElement
 * @returns {void}
 */
function handleMouseOver(cellElement) {
  if (COLORS.length === cellColorIndex) {
    cellColorIndex = 0;
  }
  cellElement.style.backgroundColor = COLORS[cellColorIndex++];
}
