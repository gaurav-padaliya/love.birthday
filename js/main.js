// ==================== GAME CONTROLLER ====================
const game = {
    currentGame: 0,
    totalGames: 8,
    gamesCompleted: 0,

    // Romantic messages for hearts
    heartMessages: [
        "In a world of billions, my heart chose only you ❤️",
        "You are not just my love, you are my entire universe 🌟",
        "Every moment with you feels like a beautiful dream 💭",
        "I don't need paradise because I found it in your arms 🤗",
        "You are my today and all of my tomorrows 💕",
        "Loving you is the easiest thing I've ever done 😊",
        "You complete me in ways I never knew I needed ✨",
        "My soul found its home in you 🏡",
        "You are my peace, my happiness, my everything 🌈",
        "I fall in love with you more every single day 💖"
    ],

    // Word scramble words
    wordScrambleWords: [
        { word: "BEAUTIFUL", scrambled: "UFLITABEU" },
        { word: "FOREVER", scrambled: "REFOERV" },
        { word: "PRECIOUS", scrambled: "IPUECROS" },
        { word: "BIRTHDAY", scrambled: "DTHBYAIR" }
    ],

    // Quiz questions with photos
    quizQuestions: [
        {
            question: "Who is more stupid in this relationship?",
            options: ["You", "Me", "Both equally", "Me, obviously!"],
            correct: 1,
            image: 'assets/photos/quiz1.jpeg',
            emoji: '😅',
            caption: "Yes, I'm the stupid one... but stupidly in love with you! 😅💕"
        },
        {
            question: "Who loves you more than anything in this world?",
            options: ["Everyone", "Your family", "Me, forever", "Your friends"],
            correct: 2,
            image: 'assets/photos/quiz2.jpeg',
            emoji: '❤️',
            caption: "Forever and always, it's me! ❤️"
        },
        {
            question: "Who is the most beautiful girl in the universe?",
            options: ["You, my love", "Some celebrity", "Everyone", "Models"],
            correct: 0,
            image: 'assets/photos/quiz3.jpeg',
            emoji: '😍',
            caption: "You are breathtakingly beautiful! 😍✨"
        },
        {
            question: "Who is the luckiest person to have you?",
            options: ["Nobody", "Everyone", "Me, always me", "Anyone"],
            correct: 2,
            image: 'assets/photos/quiz4.jpeg',
            emoji: '🍀',
            caption: "I'm the luckiest person alive! 🍀💖"
        },
        {
            question: "Whose birthday is the most special day of the year?",
            options: ["Mine", "Random person", "Yours, my queen", "Nobody's"],
            correct: 2,
            image: 'assets/photos/quiz5.jpeg',
            emoji: '🎂',
            caption: "Happy Birthday to my queen! 🎂👑💕"
        }
    ],

    // Complete the line questions
    completeLineQuestions: [
        {
            line: "In a room full of art, I'd still stare at ____",
            options: ["the paintings", "you", "the ceiling", "my phone"],
            correct: 1
        },
        {
            line: "You are not just my girlfriend, you are my ____",
            options: ["friend", "everything", "buddy", "companion"],
            correct: 1
        },
        {
            line: "I don't need the whole world when I have ____",
            options: ["money", "fame", "you", "friends"],
            correct: 2
        }
    ],

    // State variables
    heartsTapped: 0,
    currentWord: 0,
    currentAnswer: "",
    quizIndex: 0,
    memoryCards: [],
    flippedCards: [],
    matchedPairs: 0,
    timelineOrder: [],
    currentLineQuestion: 0,

    // Initialize game
    init() {
        this.createBackgroundElements();
        this.setupEventListeners();
        console.log("Birthday Game Initialized! 🎉");
    },

    // Create animated background elements
    createBackgroundElements() {
        const lilyContainer = document.getElementById('lilyContainer');

        // Create lilies
        const lilies = ['🌸', '🌺', '🌼', '🌻', '🌷'];
        for (let i = 0; i < 8; i++) {
            const lily = document.createElement('div');
            lily.className = 'lily';
            lily.textContent = lilies[Math.floor(Math.random() * lilies.length)];
            lily.style.left = Math.random() * 100 + '%';
            lily.style.top = Math.random() * 100 + '%';
            lily.style.animationDelay = Math.random() * 5 + 's';
            lilyContainer.appendChild(lily);
        }

        // Create bubbles
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.width = (20 + Math.random() * 40) + 'px';
            bubble.style.height = bubble.style.width;
            bubble.style.animationDelay = Math.random() * 8 + 's';
            bubble.style.animationDuration = (8 + Math.random() * 4) + 's';
            lilyContainer.appendChild(bubble);
        }

        // Create butterflies
        const butterflies = ['🦋', '🦋'];
        for (let i = 0; i < 3; i++) {
            const butterfly = document.createElement('div');
            butterfly.className = 'butterfly';
            butterfly.textContent = butterflies[i % butterflies.length];
            butterfly.style.animationDelay = (i * 7) + 's';
            butterfly.style.animationDuration = (15 + Math.random() * 10) + 's';
            lilyContainer.appendChild(butterfly);
        }

        // Create floating hearts
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-bg';
            heart.textContent = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 10 + 's';
            lilyContainer.appendChild(heart);
        }
    },

    setupEventListeners() {
        // Music control
        const bgMusic = document.getElementById('bgMusic');
        document.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(e => console.log('Audio play failed:', e));
            }
        }, { once: true });
    },

    startGame() {
        document.getElementById('welcomeScreen').classList.remove('active');
        document.getElementById('progressContainer').style.display = 'block';

        // Show gift preview with initial heavy blur
        const giftPreview = document.getElementById('giftPreview');
        const giftImage = document.getElementById('giftImage');
        giftPreview.classList.add('active');
        giftImage.style.filter = 'blur(30px)';

        // After 5 seconds, reduce to normal starting blur
        setTimeout(() => {
            giftImage.style.transition = 'filter 2s ease';
            giftImage.style.filter = 'blur(20px)';
        }, 5000);

        this.currentGame = 1;
        this.updateProgress();
        this.loadGame(1);
    },

    updateProgress() {
        const progress = (this.gamesCompleted / this.totalGames) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('currentGame').textContent = this.currentGame;

        // Update gift preview blur (progressive unblur)
        const blurAmount = 20 - (this.gamesCompleted * 2.5);
        const giftImage = document.getElementById('giftImage');
        giftImage.style.transition = 'filter 1s ease';
        giftImage.style.filter = `blur(${Math.max(0, blurAmount)}px)`;
    },

    loadGame(gameNum) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show current game
        document.getElementById('game' + gameNum).classList.add('active');

        // Initialize specific game
        switch(gameNum) {
            case 1: this.initGame1(); break;
            case 2: this.initGame2(); break;
            case 3: this.initGame3(); break;
            case 4: this.initGame4(); break;
            case 5: this.initGame5(); break;
            case 6: this.initGame6(); break;
            case 7: this.initGame7(); break;
            case 8: this.initGame8(); break;
        }
    },

    completeGame() {
        this.gamesCompleted++;
        this.updateProgress();

        // Play success sound
        const successSound = document.getElementById('successSound');
        successSound.play().catch(e => console.log('Sound play failed'));

        if (this.currentGame < this.totalGames) {
            setTimeout(() => {
                this.currentGame++;
                this.loadGame(this.currentGame);
            }, 1500);
        }
    },

    // ==================== GAME 1: TAP HEARTS ====================
    initGame1() {
        this.heartsTapped = 0;
        const container = document.getElementById('heartsContainer');
        container.innerHTML = '';

        // Create 10 hearts at random positions
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-item';
            heart.textContent = '💖';
            heart.style.left = (10 + Math.random() * 70) + '%';
            heart.style.top = (10 + Math.random() * 70) + '%';
            heart.style.animationDelay = (Math.random() * 2) + 's';
            heart.onclick = () => this.tapHeart(i, heart);
            container.appendChild(heart);
        }
    },

    tapHeart(index, heartElement) {
        heartElement.style.display = 'none';
        this.heartsTapped++;
        document.getElementById('heartCount').textContent = this.heartsTapped;

        // Show message
        const messageDiv = document.createElement('div');
        messageDiv.className = 'heart-message';
        messageDiv.innerHTML = `<p style="color: #ff69b4; font-size: 1.2em;">${this.heartMessages[index]}</p>`;
        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
            if (this.heartsTapped === 10) {
                this.completeGame();
            }
        }, 2000);
    },

    // ==================== GAME 2: WORD SCRAMBLE ====================
    initGame2() {
        this.currentWord = Math.floor(Math.random() * this.wordScrambleWords.length);
        this.currentAnswer = "";
        const wordData = this.wordScrambleWords[this.currentWord];

        document.getElementById('scrambledWord').textContent = wordData.scrambled;
        document.getElementById('answerDisplay').textContent = "";

        const buttonsContainer = document.getElementById('letterButtons');
        buttonsContainer.innerHTML = '';

        // Create letter buttons
        for (let letter of wordData.scrambled) {
            const btn = document.createElement('button');
            btn.className = 'letter-btn';
            btn.textContent = letter;
            btn.onclick = () => this.selectLetter(letter, btn);
            buttonsContainer.appendChild(btn);
        }
    },

    selectLetter(letter, btn) {
        if (btn.classList.contains('used')) return;

        this.currentAnswer += letter;
        document.getElementById('answerDisplay').textContent = this.currentAnswer;
        btn.classList.add('used');

        // Check if complete
        const correctWord = this.wordScrambleWords[this.currentWord].word;
        if (this.currentAnswer.length === correctWord.length) {
            if (this.currentAnswer === correctWord) {
                setTimeout(() => this.completeGame(), 1000);
            } else {
                document.getElementById('answerDisplay').classList.add('shake');
                setTimeout(() => {
                    document.getElementById('answerDisplay').classList.remove('shake');
                    this.resetWord();
                }, 500);
            }
        }
    },

    resetWord() {
        this.currentAnswer = "";
        document.getElementById('answerDisplay').textContent = "";
        document.querySelectorAll('.letter-btn').forEach(btn => {
            btn.classList.remove('used');
        });
    },

    // ==================== GAME 3: LOVE QUIZ ====================
    initGame3() {
        this.quizIndex = 0;
        this.showQuizQuestion();
    },

    showQuizQuestion() {
        if (this.quizIndex >= this.quizQuestions.length) {
            this.completeGame();
            return;
        }

        const question = this.quizQuestions[this.quizIndex];
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('quizProgress').textContent = this.quizIndex + 1;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => this.selectQuizAnswer(index, btn);
            optionsContainer.appendChild(btn);
        });
    },

    selectQuizAnswer(index, btn) {
        const question = this.quizQuestions[this.quizIndex];

        if (index === question.correct) {
            btn.classList.add('correct');

            // Show romantic photo popup
            this.showQuizPhotoPopup(question);

            setTimeout(() => {
                this.quizIndex++;
                this.showQuizQuestion();
            }, 3500); // Extended time to see photo
        } else {
            btn.classList.add('shake');
            setTimeout(() => btn.classList.remove('shake'), 500);
        }
    },

    showQuizPhotoPopup(question) {
        // Create popup overlay
        const popup = document.createElement('div');
        popup.className = 'quiz-photo-popup';
        popup.innerHTML = `
            <div class="quiz-photo-content">
                <div class="quiz-photo-image">
                    <img src="${question.image}" alt="Memory">
                    <div class="quiz-photo-emoji">${question.emoji}</div>
                </div>
                <p class="quiz-photo-caption">${question.caption}</p>
            </div>
        `;
        document.body.appendChild(popup);

        // Animate in
        setTimeout(() => popup.classList.add('show'), 10);

        // Remove after 3 seconds
        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }, 3000);
    },

    // ==================== GAME 4: MEMORY MATCH ====================
    initGame4() {
        this.matchedPairs = 0;
        this.flippedCards = [];

        // Create cards (3 pairs = 6 cards)
        // Each pair has two different photos that go together
        const cardPairs = [
            { pair1: 'assets/photos/photo11.jpeg', pair2: 'assets/photos/photo12.jpeg', pairId: 1 },
            { pair1: 'assets/photos/photo21.jpeg', pair2: 'assets/photos/photo22.jpeg', pairId: 2 },
            { pair1: 'assets/photos/photo31.jpeg', pair2: 'assets/photos/photo32.jpeg', pairId: 3 }
        ];

        // Create array with all 6 cards (each pair's two photos)
        const allCards = [];
        cardPairs.forEach(pair => {
            allCards.push({ img: pair.pair1, pairId: pair.pairId });
            allCards.push({ img: pair.pair2, pairId: pair.pairId });
        });

        // Shuffle the cards
        this.memoryCards = allCards
            .sort(() => Math.random() - 0.5)
            .map((card, index) => ({ ...card, id: index, matched: false }));

        const grid = document.getElementById('memoryGrid');
        grid.innerHTML = '';

        this.memoryCards.forEach((card, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'memory-card';
            cardDiv.innerHTML = `
                <div class="card-back">💕</div>
                <img src="${card.img}" alt="Memory">
            `;
            cardDiv.onclick = () => this.flipCard(index, cardDiv);
            grid.appendChild(cardDiv);
        });

        document.getElementById('matchCount').textContent = '0';
    },

    flipCard(index, cardDiv) {
        if (this.flippedCards.length === 2 || cardDiv.classList.contains('flipped')) return;

        cardDiv.classList.add('flipped');
        this.flippedCards.push({
            index,
            cardDiv,
            pairId: this.memoryCards[index].pairId
        });

        if (this.flippedCards.length === 2) {
            setTimeout(() => this.checkMatch(), 800);
        }
    },

    checkMatch() {
        const [card1, card2] = this.flippedCards;

        // Match if they have the same pairId (photo11 matches photo12, etc.)
        if (card1.pairId === card2.pairId) {
            card1.cardDiv.classList.add('matched');
            card2.cardDiv.classList.add('matched');
            this.matchedPairs++;
            document.getElementById('matchCount').textContent = this.matchedPairs;

            if (this.matchedPairs === 3) {
                setTimeout(() => this.completeGame(), 1000);
            }
        } else {
            card1.cardDiv.classList.remove('flipped');
            card2.cardDiv.classList.remove('flipped');
        }

        this.flippedCards = [];
    },

    // ==================== GAME 5: TIMELINE SORT ====================
    initGame5() {
        const timeline = [
            { img: 'assets/photos/photo1.jpeg', date: 'my cutiee pie', order: 1 },
            { img: 'assets/photos/photo2.jpeg', date: 'Awww, how cute', order: 2 },
            { img: 'assets/photos/photo3.jpeg', date: 'Ufff..!!!', order: 3 },
            { img: 'assets/photos/photo4.jpeg', date: 'mai hu sonpari', order: 4 }
        ];

        this.timelineOrder = timeline.sort(() => Math.random() - 0.5);
        this.selectedTimelineIndex = null;

        this.renderTimeline();
    },

    renderTimeline() {
        const container = document.getElementById('timelineContainer');
        container.innerHTML = '';

        this.timelineOrder.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'timeline-item';
            itemDiv.dataset.order = item.order;
            itemDiv.dataset.index = index;
            itemDiv.innerHTML = `
                <div class="timeline-number">${index + 1}</div>
                <img src="${item.img}" alt="${item.date}">
                <p>${item.date}</p>
            `;

            // Simple tap/click to select and swap
            itemDiv.onclick = () => this.selectTimelineItem(index, itemDiv);

            container.appendChild(itemDiv);
        });
    },

    selectTimelineItem(index, itemDiv) {
        // If nothing selected yet, select this item
        if (this.selectedTimelineIndex === null) {
            this.selectedTimelineIndex = index;
            itemDiv.classList.add('timeline-selected');
        }
        // If same item clicked, deselect
        else if (this.selectedTimelineIndex === index) {
            this.selectedTimelineIndex = null;
            itemDiv.classList.remove('timeline-selected');
        }
        // If different item clicked, swap them
        else {
            const firstIndex = this.selectedTimelineIndex;
            const secondIndex = index;

            // Swap the items
            [this.timelineOrder[firstIndex], this.timelineOrder[secondIndex]] =
            [this.timelineOrder[secondIndex], this.timelineOrder[firstIndex]];

            this.selectedTimelineIndex = null;
            this.renderTimeline();
        }
    },

    checkTimeline() {
        const isCorrect = this.timelineOrder.every((item, index) => item.order === index + 1);

        if (isCorrect) {
            this.completeGame();
        } else {
            const container = document.getElementById('timelineContainer');
            container.classList.add('shake');
            setTimeout(() => container.classList.remove('shake'), 500);
        }
    },

    // ==================== GAME 6: COMPLETE THE LINE ====================
    initGame6() {
        this.currentLineQuestion = Math.floor(Math.random() * this.completeLineQuestions.length);
        const question = this.completeLineQuestions[this.currentLineQuestion];

        document.getElementById('incompleteLine').innerHTML =
            question.line.replace('____', '<span class="blank">____</span>');

        const choicesContainer = document.getElementById('wordChoices');
        choicesContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'word-choice-btn';
            btn.textContent = option;
            btn.onclick = () => this.selectLineAnswer(index, option);
            choicesContainer.appendChild(btn);
        });
    },

    selectLineAnswer(index, word) {
        const question = this.completeLineQuestions[this.currentLineQuestion];

        if (index === question.correct) {
            document.getElementById('incompleteLine').innerHTML =
                question.line.replace('____', `<span class="blank" style="color: #90EE90;">${word}</span>`);
            setTimeout(() => this.completeGame(), 1500);
        } else {
            document.getElementById('incompleteLine').classList.add('shake');
            setTimeout(() => document.getElementById('incompleteLine').classList.remove('shake'), 500);
        }
    },

    // ==================== GAME 7: SLIDING PUZZLE ====================
    initGame7() {
        this.puzzleState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.emptyIndex = 8;
        this.puzzleShuffleCount = 0;
        this.createPuzzle();
        setTimeout(() => this.shufflePuzzle(), 100);
        this.updateSkipButton();
    },

    createPuzzle() {
        const container = document.getElementById('puzzleContainer');
        container.innerHTML = '';

        const validMoves = this.getValidMoves();

        this.puzzleState.forEach((value, index) => {
            const tile = document.createElement('div');
            tile.className = 'puzzle-tile';

            if (value === 8) {
                tile.classList.add('empty');
            } else {
                const row = Math.floor(value / 3);
                const col = value % 3;
                tile.style.backgroundImage = 'url(assets/photos/puzzle.svg)';
                tile.style.backgroundPosition = `${-col * 100}% ${-row * 100}%`;

                // Add number overlay to help solve
                const numberLabel = document.createElement('div');
                numberLabel.className = 'puzzle-number';
                numberLabel.textContent = value + 1;
                tile.appendChild(numberLabel);

                // Add directional hint if this tile can move
                if (validMoves.includes(index)) {
                    const direction = this.getSlideDirection(index);
                    const directionHint = document.createElement('div');
                    directionHint.className = 'slide-hint';
                    directionHint.innerHTML = this.getDirectionArrow(direction);
                    tile.appendChild(directionHint);
                    tile.classList.add('can-move');
                }
            }

            tile.onclick = () => this.moveTile(index);
            container.appendChild(tile);
        });
    },

    getSlideDirection(tileIndex) {
        const tileRow = Math.floor(tileIndex / 3);
        const tileCol = tileIndex % 3;
        const emptyRow = Math.floor(this.emptyIndex / 3);
        const emptyCol = this.emptyIndex % 3;

        if (emptyRow < tileRow) return 'up';
        if (emptyRow > tileRow) return 'down';
        if (emptyCol < tileCol) return 'left';
        if (emptyCol > tileCol) return 'right';
    },

    getDirectionArrow(direction) {
        const arrows = {
            'up': '⬆️<br><small>Slide Up</small>',
            'down': '⬇️<br><small>Slide Down</small>',
            'left': '⬅️<br><small>Slide Left</small>',
            'right': '➡️<br><small>Slide Right</small>'
        };
        return arrows[direction] || '';
    },

    moveTile(index) {
        const validMoves = this.getValidMoves();

        if (validMoves.includes(index)) {
            [this.puzzleState[index], this.puzzleState[this.emptyIndex]] =
            [this.puzzleState[this.emptyIndex], this.puzzleState[index]];
            this.emptyIndex = index;
            this.createPuzzle();

            if (this.isPuzzleSolved()) {
                setTimeout(() => this.completeGame(), 500);
            }
        }
    },

    getValidMoves() {
        const moves = [];
        const row = Math.floor(this.emptyIndex / 3);
        const col = this.emptyIndex % 3;

        if (row > 0) moves.push(this.emptyIndex - 3); // Up
        if (row < 2) moves.push(this.emptyIndex + 3); // Down
        if (col > 0) moves.push(this.emptyIndex - 1); // Left
        if (col < 2) moves.push(this.emptyIndex + 1); // Right

        return moves;
    },

    isPuzzleSolved() {
        return this.puzzleState.every((val, idx) => val === idx);
    },

    shufflePuzzle() {
        this.puzzleShuffleCount++;

        for (let i = 0; i < 100; i++) {
            const validMoves = this.getValidMoves();
            const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
            [this.puzzleState[randomMove], this.puzzleState[this.emptyIndex]] =
            [this.puzzleState[this.emptyIndex], this.puzzleState[randomMove]];
            this.emptyIndex = randomMove;
        }
        this.createPuzzle();
        this.updateSkipButton();
    },

    updateSkipButton() {
        const skipBtn = document.getElementById('puzzleSkipBtn');
        const shuffleCount = document.getElementById('shuffleCount');

        if (this.puzzleShuffleCount >= 5) {
            skipBtn.style.display = 'inline-block';
            shuffleCount.textContent = `Shuffled ${this.puzzleShuffleCount} times - Skip available!`;
        } else {
            skipBtn.style.display = 'none';
            shuffleCount.textContent = `Shuffled ${this.puzzleShuffleCount} time${this.puzzleShuffleCount !== 1 ? 's' : ''}`;
        }
    },

    skipPuzzle() {
        if (this.puzzleShuffleCount >= 5) {
            this.completeGame();
        }
    },

    // ==================== GAME 8: FINAL REVEAL ====================
    initGame8() {
        document.getElementById('progressContainer').style.display = 'none';
        document.getElementById('giftPreview').style.display = 'none';
    },

    celebrateFinal() {
        document.getElementById('game8').classList.remove('active');
        document.getElementById('celebrationScreen').classList.add('active');

        // Create massive heart explosion
        const container = document.getElementById('floatingHeartsFinal');
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = ['❤️', '💕', '💖', '💗', '💓'][Math.floor(Math.random() * 5)];
                heart.style.position = 'absolute';
                heart.style.fontSize = (20 + Math.random() * 40) + 'px';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '100%';
                heart.style.animation = 'floatUp 3s ease-out forwards';
                container.appendChild(heart);

                setTimeout(() => heart.remove(), 3000);
            }, i * 100);
        }
    }
};

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    game.init();
});
