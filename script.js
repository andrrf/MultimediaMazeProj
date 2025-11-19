// --- 1. Maze Definitions and Constants ---

const MAZE_ROWS = 10;
const MAZE_COLS = 20; 

// 1 = Wall, 0 = Path, 2 = Start, 3 = Finish
const MAZE_LEVELS = {
    'easy': {
        name: 'Easy',
        timeLimit: 60, 
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ] 
    },
    'medium': {
        name: 'Medium',
        timeLimit: 120, 
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        ]
    },
    'hard': {
        name: 'Hard',
        timeLimit: 180, 
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        ]
    },
    'extreme': {
        name: 'Extreme',
        timeLimit: 240, 
        data: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
            [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
        ]
    }
};

// Global game variables
let currentLevelKey;
let currentMazeData;
let playerPosition;
let gameRunning = true;
let timeLeft; // Seconds remaining for timer
let timerInterval;

// --- 2. DOM Elements ---
const mazeContainer = document.querySelector('.maze');
const levelDisplay = document.getElementById('level-display');
const timerDisplay = document.getElementById('timer');

// --- 3. Core Functions (Initialization, Start Finding) ---
function findStart(maze) {
    for (let r = 0; r < maze.length; r++) {
        for (let c = 0; c < maze[r].length; c++) {
            if (maze[r][c] === 2) {
                return { row: r, col: c };
            }
        }
    }
    return { row: 0, col: 0 };
}

function initializeGame() {
    const pathname = window.location.pathname;
    
    if (pathname.includes('easy.html')) {
        currentLevelKey = 'easy';
    } else if (pathname.includes('medium.html')) {
        currentLevelKey = 'medium';
    } else if (pathname.includes('hard.html')) {
        currentLevelKey = 'hard';
    } else if (pathname.includes('extreme.html')) {
        currentLevelKey = 'extreme';
    } else {
        console.error("Could not determine maze level. Game halted.");
        return; 
    }

    const levelData = MAZE_LEVELS[currentLevelKey];
    currentMazeData = levelData.data;
    
    levelDisplay.textContent = levelData.name;
    
    playerPosition = findStart(currentMazeData);
    renderMaze(); 
    startTimer(levelData.timeLimit);
}

// --- 4. Rendering Function ---


function renderMaze() {
    mazeContainer.innerHTML = '';
    
    mazeContainer.style.gridTemplateColumns = `repeat(${MAZE_COLS}, 1fr)`;
    mazeContainer.style.gridTemplateRows = `repeat(${MAZE_ROWS}, 1fr)`;

    for (let r = 0; r < MAZE_ROWS; r++) {
        for (let c = 0; c < MAZE_COLS; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;

            switch (currentMazeData[r][c]) { 
                case 1: 
                    cell.classList.add('wall');
                    break;
                case 2: 
                    cell.classList.add('start');
                    break;
                case 3: 
                    cell.classList.add('finish');
                    break;
                default:
                    // 0 = Path
                    break;
            }

            if (r === playerPosition.row && c === playerPosition.col) {
                cell.classList.add('player');
            }

            mazeContainer.appendChild(cell);
        }
    }
}

// --- 5. Movement and Win/Loss Logic ---
function isValidMove(newRow, newCol) {
    if (newRow < 0 || newRow >= MAZE_ROWS || newCol < 0 || newCol >= MAZE_COLS) {
        return false;
    }
    
    if (currentMazeData[newRow][newCol] === 1) { 
        return false;
    }

    return true;
}

function checkWin() {
    const cellValue = currentMazeData[playerPosition.row][playerPosition.col];
    
    if (cellValue === 3) { 
        gameOver('win');
    }
}

function movePlayer(direction) {
    if (!gameRunning) return;

    let newRow = playerPosition.row;
    let newCol = playerPosition.col;

    switch (direction) {
        case 'up':
            newRow--;
            break;
        case 'down':
            newRow++;
            break;
        case 'left':
            newCol--;
            break;
        case 'right':
            newCol++;
            break;
    }

    if (isValidMove(newRow, newCol)) {
        playerPosition.row = newRow;
        playerPosition.col = newCol;
        
        checkWin();
        renderMaze(); 
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            movePlayer('up');
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            movePlayer('down');
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            movePlayer('left');
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            movePlayer('right');
            break;
    }
});


// --- 6. Timer and Game Over Logic ---
function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    const paddedMinutes = String(m).padStart(2, '0');
    const paddedSeconds = String(s).padStart(2, '0');
    return `${paddedMinutes}:${paddedSeconds}`;
}

function gameOver(status) {
    gameRunning = false; 
    clearInterval(timerInterval); 

    let message = '';
    if (status === 'win') {
        message = `🎉 CONGRATULATIONS! You completed the ${MAZE_LEVELS[currentLevelKey].name} maze in time!`;
    } else if (status === 'outOfTime') {
        message = `⏰ GAME OVER! Time has run out on the ${MAZE_LEVELS[currentLevelKey].name} level.`;
    }
    
    setTimeout(() => {
        alert(message);
    }, 100); 
}

function startTimer(timeLimitSeconds) {
    timeLeft = timeLimitSeconds;
    timerDisplay.textContent = formatTime(timeLeft); 

    timerInterval = setInterval(() => {
        if (!gameRunning) {
            clearInterval(timerInterval);
            return;
        }
        
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver('outOfTime');
        }
    }, 1000); 
}

// --- 7. Execution Start ---
initializeGame();