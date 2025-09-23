// Ethical Dilemma Game JavaScript
class EthicalDilemmaGame {
    constructor() {
        this.teams = [];
        this.scenarios = [];
        this.currentRound = 0;
        this.gameState = 'setup'; // setup, playing, results
        this.timer = null;
        this.roundTime = 300; // 5 minutes in seconds
        this.timeLeft = this.roundTime;
        this.roundRevealed = false; // track whether current round results were revealed
        
        this.initializeDefaultScenarios();
        this.initializeEventListeners();
        this.renderScenarios();
    }

    initializeDefaultScenarios() {
        this.scenarios = [
            {
                id: 1,
                title: "🏛️ Interior Design (Fire Hazard Panels)",
                description: "Client insists on cheaper cladding panels that look great but don't fully meet fire standards.",
                choices: [
                    {
                        id: "ethical",
                        type: "ethical",
                        title: "Ethical: Fire-Safe Panels",
                        description: "Use certified fire-safe panels.",
                        immediateCost: -3,
                        bonusTokens: 0,
                        hiddenPenalty: -1,
                        finalOutcome: 2,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -3 tokens",
                            hidden: "Hidden: Angry client (-1), Reputation (+2)"
                        }
                    },
                    {
                        id: "grey-zone",
                        type: "grey-zone", 
                        title: "Grey-Zone: Compromise Solution",
                        description: "Use cheaper panels + extra fire exits/alarms + legal disclaimers.",
                        immediateCost: -1,
                        bonusTokens: 1,
                        hiddenPenalty: -4,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -1 token, Client happy (+1)",
                            hidden: "Hidden: Fire risk (-4 tokens)"
                        }
                    },
                    {
                        id: "shortcut",
                        type: "shortcut",
                        title: "Shortcut: Cheapest Panels", 
                        description: "Cheapest unsafe panels.",
                        immediateCost: 0,
                        bonusTokens: 0,
                        hiddenPenalty: -6,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: 0 tokens",
                            hidden: "Hidden: Fire disaster (-6 tokens)"
                        }
                    }
                ]
            },
            {
                id: 2,
                title: "⚙️ Mechanical / Mechatronics (Delivery Robot Gears)",
                description: "Supplier offers cheap gears that wear out faster but help you launch on time.",
                choices: [
                    {
                        id: "ethical",
                        type: "ethical",
                        title: "Ethical: Durable Gears",
                        description: "Durable gears with redesign.",
                        immediateCost: -2,
                        bonusTokens: 0,
                        hiddenPenalty: -2,
                        finalOutcome: 3,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -2 tokens + delay",
                            hidden: "Hidden: Competitor advantage (-2), Brand trust (+3)"
                        }
                    },
                    {
                        id: "grey-zone",
                        type: "grey-zone",
                        title: "Grey-Zone: Selective Quality",
                        description: "Use cheap gears in non-critical joints + promise later replacements.",
                        immediateCost: -1,
                        bonusTokens: 1,
                        hiddenPenalty: -4,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -1 token, On-time launch (+1)",
                            hidden: "Hidden: Recall (-4 tokens)"
                        }
                    },
                    {
                        id: "shortcut",
                        type: "shortcut",
                        title: "Shortcut: All Cheap Gears",
                        description: "Use all cheap gears.",
                        immediateCost: 0,
                        bonusTokens: 0,
                        hiddenPenalty: -6,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: 0 tokens",
                            hidden: "Hidden: Major recall (-6 tokens)"
                        }
                    }
                ]
            },
            {
                id: 3,
                title: "⚡ Electrical / Electronic (Grounding Wires)",
                description: "Budget pressure to skip protective grounding.",
                choices: [
                    {
                        id: "ethical",
                        type: "ethical",
                        title: "Ethical: Full Grounding",
                        description: "Full grounding everywhere.",
                        immediateCost: -3,
                        bonusTokens: 0,
                        hiddenPenalty: -1,
                        finalOutcome: 2,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -3 tokens",
                            hidden: "Hidden: Budget overrun (-1), Safety trust (+2)"
                        }
                    },
                    {
                        id: "grey-zone",
                        type: "grey-zone",
                        title: "Grey-Zone: Partial Grounding",
                        description: "Ground only high-voltage sections, label the rest.",
                        immediateCost: -1,
                        bonusTokens: 1,
                        hiddenPenalty: -5,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -1 token, Praised efficiency (+1)",
                            hidden: "Hidden: Minor accident (-5 tokens)"
                        }
                    },
                    {
                        id: "shortcut",
                        type: "shortcut",
                        title: "Shortcut: No Grounding",
                        description: "Skip grounding completely.",
                        immediateCost: 0,
                        bonusTokens: 0,
                        hiddenPenalty: -10,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: 0 tokens",
                            hidden: "Hidden: Major accident (-10 tokens)"
                        }
                    }
                ]
            },
            {
                id: 4,
                title: "💻 Computer Science (Student Data Collection)",
                description: "Marketing asks to collect microphone data from students' devices.",
                choices: [
                    {
                        id: "ethical",
                        type: "ethical",
                        title: "Ethical: Transparent Consent",
                        description: "Update consent forms, limit collection.",
                        immediateCost: -2,
                        bonusTokens: 0,
                        hiddenPenalty: -1,
                        finalOutcome: 3,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -2 tokens",
                            hidden: "Hidden: Launch delayed (-1), Trust bonus (+3)"
                        }
                    },
                    {
                        id: "grey-zone",
                        type: "grey-zone",
                        title: "Grey-Zone: Buried Consent",
                        description: "Collect anonymized snippets, bury in Terms & Conditions.",
                        immediateCost: -1,
                        bonusTokens: 1,
                        hiddenPenalty: -5,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -1 token, Smarter features (+1)",
                            hidden: "Hidden: Leak exposes kids' voices (-5 tokens)"
                        }
                    },
                    {
                        id: "shortcut",
                        type: "shortcut",
                        title: "Shortcut: Secret Collection",
                        description: "Collect all data secretly.",
                        immediateCost: 0,
                        bonusTokens: 0,
                        hiddenPenalty: -8,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: 0 tokens",
                            hidden: "Hidden: Major scandal (-8 tokens)"
                        }
                    }
                ]
            },
            {
                id: 5,
                title: "🌍 Cross-Disciplinary Grand Dilemma (Green Innovation Center)",
                description: "Budget cuts hit your green innovation center project.",
                choices: [
                    {
                        id: "ethical",
                        type: "ethical",
                        title: "Ethical: Full Sustainability",
                        description: "Stick to sustainable, safe, transparent choices in every discipline.",
                        immediateCost: -5,
                        bonusTokens: 0,
                        hiddenPenalty: -2,
                        finalOutcome: 6,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -5 tokens",
                            hidden: "Hidden: 6-month delay (-2), Global recognition (+6)"
                        }
                    },
                    {
                        id: "grey-zone",
                        type: "grey-zone",
                        title: "Grey-Zone: Selective Compromises",
                        description: "Selective compromises (eco-certified but weak paints, smaller cooling, reduced solar, hidden software settings).",
                        immediateCost: -2,
                        bonusTokens: 2,
                        hiddenPenalty: -6,
                        finalOutcome: 0,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: -2 tokens, On-time delivery (+2)",
                            hidden: "Hidden: Medium issues (-6 tokens)"
                        }
                    },
                    {
                        id: "shortcut",
                        type: "shortcut",
                        title: "Shortcut: All Cheap Choices",
                        description: "Go all cheap, unsafe choices.",
                        immediateCost: 0,
                        bonusTokens: 0,
                        hiddenPenalty: -12,
                        finalOutcome: -3,
                        hiddenCostVisible: false,
                        effects: {
                            immediate: "Immediate: 0 tokens",
                            hidden: "Hidden: Catastrophic failures (-12), Media exposé (-3)"
                        }
                    }
                ]
            }
        ];
    }

    initializeEventListeners() {
        document.getElementById('start-game').addEventListener('click', () => this.startGame());
        document.getElementById('reveal-choices').addEventListener('click', () => this.revealChoices());
        document.getElementById('next-round').addEventListener('click', () => this.nextRound());
        document.getElementById('restart-game').addEventListener('click', () => this.restartGame());
        document.getElementById('close-modal').addEventListener('click', () => this.closeModal());
    }

    renderScenarios() {
        const scenariosList = document.getElementById('scenarios-list');
        scenariosList.innerHTML = '';

        this.scenarios.forEach(scenario => {
            const scenarioDiv = document.createElement('div');
            scenarioDiv.className = 'scenario-item';
            scenarioDiv.innerHTML = `
                <h4>${scenario.title}</h4>
                <p>${scenario.description}</p>
                <div class="choices-config">
                    ${scenario.choices.map(choice => `
                        <div class="choice-config">
                            <h5>${choice.title}</h5>
                            <input type="text" value="${choice.description}" readonly>
                            <label>Immediate Cost:</label>
                            <input type="number" value="${choice.immediateCost}" onchange="this.updateChoiceCost(${scenario.id}, '${choice.id}', 'immediateCost', this.value)">
                            <label>Bonus Tokens:</label>
                            <input type="number" value="${choice.bonusTokens}" onchange="this.updateChoiceCost(${scenario.id}, '${choice.id}', 'bonusTokens', this.value)">
                            <label>Hidden Penalty:</label>
                            <input type="number" value="${choice.hiddenPenalty}" onchange="this.updateChoiceCost(${scenario.id}, '${choice.id}', 'hiddenPenalty', this.value)">
                            <label>Final Outcome:</label>
                            <input type="number" value="${choice.finalOutcome}" onchange="this.updateChoiceCost(${scenario.id}, '${choice.id}', 'finalOutcome', this.value)">
                            <label>
                                <input type="checkbox" ${choice.hiddenCostVisible ? 'checked' : ''} onchange="this.updateChoiceCost(${scenario.id}, '${choice.id}', 'hiddenCostVisible', this.checked)"> 
                                Show hidden costs immediately
                            </label>
                        </div>
                    `).join('')}
                </div>
            `;
            scenariosList.appendChild(scenarioDiv);
        });
    }

    updateChoiceCost(scenarioId, choiceId, property, value) {
        const scenario = this.scenarios.find(s => s.id === scenarioId);
        const choice = scenario.choices.find(c => c.id === choiceId);
        if (property === 'hiddenCostVisible') {
            choice[property] = value;
        } else {
            choice[property] = parseInt(value) || 0;
        }
    }

    startGame() {
        const numTeams = parseInt(document.getElementById('num-teams').value);
        const startingTokens = parseInt(document.getElementById('starting-tokens').value);

        // Initialize teams
        this.teams = [];
        for (let i = 1; i <= numTeams; i++) {
            this.teams.push({
                id: i,
                name: `Team ${i}`,
                tokens: startingTokens,
                choices: [],
                totalHiddenPenalties: 0,
                totalFinalOutcomes: 0
            });
        }

        this.currentRound = 0;
        this.gameState = 'playing';
        this.showScreen('game-screen');
        this.loadNextRound();
        this.updateTeamDashboard();
    }

    loadNextRound() {
        this.currentRound++;
        
        if (this.currentRound > this.scenarios.length) {
            this.endGame();
            return;
        }

        const scenario = this.scenarios[this.currentRound - 1];
        
        // Update UI
        document.getElementById('current-round').textContent = `Round ${this.currentRound} of ${this.scenarios.length}`;
        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-description').innerHTML = `
            <h3>${scenario.title}</h3>
            <p>${scenario.description}</p>
        `;

        // Render choices
        this.renderChoices(scenario);
        
        // Reset team selections for this round
        this.teams.forEach(team => {
            team.currentChoice = null;
        });
        
        // Render moderator selectors per team for this scenario
        this.renderTeamChoiceSelectors(scenario);
        this.updateTeamSelections();
        
        // Reset buttons
        document.getElementById('reveal-choices').disabled = true;
        document.getElementById('next-round').disabled = true;
        this.roundRevealed = false;
        
        // Start timer
        this.startTimer();
    }

    renderChoices(scenario) {
        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';

        scenario.choices.forEach(choice => {
            const choiceDiv = document.createElement('div');
            choiceDiv.className = `choice-card ${choice.type}`;
            choiceDiv.dataset.choiceId = choice.id;
            
            const costDisplay = choice.hiddenCostVisible ? 
                `${choice.immediateCost + choice.bonusTokens + choice.hiddenPenalty + choice.finalOutcome}` :
                `${choice.immediateCost + choice.bonusTokens}`;
            
            choiceDiv.innerHTML = `
                <div class="choice-header">
                    <div class="choice-title">${choice.title}</div>
                    <div class="choice-cost ${choice.hiddenCostVisible ? '' : 'hidden'}">${costDisplay} tokens</div>
                </div>
                <div class="choice-description">${choice.description}</div>
                <div class="choice-effects">
                    <div class="immediate">${choice.effects.immediate}</div>
                    ${choice.hiddenCostVisible ? `<div class="hidden-cost">${choice.effects.hidden}</div>` : ''}
                </div>
            `;

            // In moderator mode, choices are selected per-team via selectors
            choicesContainer.appendChild(choiceDiv);
        });
    }

    // Render per-team selection controls for the moderator
    renderTeamChoiceSelectors(scenario) {
        const teamSelectionsDiv = document.getElementById('team-selections');
        teamSelectionsDiv.innerHTML = `
            <h3>Team Selections (Moderator)</h3>
            <div class="team-selection-grid">
                ${this.teams.map(team => {
                    const selectId = `team-select-${team.id}`;
                    return `
                        <div class="team-status ${team.currentChoice ? 'selected' : ''}">
                            <span class="team-name">${team.name}</span>
                            <select id="${selectId}" data-team-id="${team.id}">
                                <option value="">Select a choice...</option>
                                ${scenario.choices.map(c => `
                                    <option value="${c.id}" ${team.currentChoice === c.id ? 'selected' : ''}>${c.title}</option>
                                `).join('')}
                            </select>
                            <span class="tokens">${team.tokens} tokens</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        // Attach change listeners
        this.teams.forEach(team => {
            const select = document.getElementById(`team-select-${team.id}`);
            if (select) {
                select.addEventListener('change', (e) => {
                    const value = e.target.value;
                    team.currentChoice = value || null;
                    this.updateTeamSelections();
                });
            }
        });
    }

    updateTeamSelections() {
        const allSelected = this.teams.every(team => team.currentChoice);

        // Update selected styling on rows
        this.teams.forEach(team => {
            const row = document.querySelector(`#team-select-${team.id}`)?.closest('.team-status');
            if (row) {
                if (team.currentChoice) row.classList.add('selected');
                else row.classList.remove('selected');
            }
        });

        if (allSelected) {
            this.stopTimer();
            // Enable reveal button and auto-reveal if not already done
            document.getElementById('reveal-choices').disabled = false;
            if (!this.roundRevealed) {
                this.revealChoices();
            }
        } else {
            document.getElementById('reveal-choices').disabled = true;
        }
    }

    startTimer() {
        this.timeLeft = this.roundTime;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        document.getElementById('timer').textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    timeUp() {
        this.stopTimer();
        
        // When time is up, keep current selections. Moderator can still complete selections.
        this.updateTeamSelections();
    }

    revealChoices() {
        const scenario = this.scenarios[this.currentRound - 1];
        let roundResults = `<h4>Round ${this.currentRound} Results</h4>`;
        this.roundRevealed = true;
        
        // Apply immediate costs and track choices
        this.teams.forEach(team => {
            const choice = scenario.choices.find(c => c.id === team.currentChoice);
            const oldTokens = team.tokens;
            
            // Apply immediate cost and bonus
            team.tokens += choice.immediateCost + choice.bonusTokens;
            
            // Store choice for final scoring
            team.choices.push({
                round: this.currentRound,
                choiceId: choice.id,
                choiceTitle: choice.title,
                immediateCost: choice.immediateCost,
                bonusTokens: choice.bonusTokens,
                hiddenPenalty: choice.hiddenPenalty,
                finalOutcome: choice.finalOutcome
            });

            // Accumulate hidden penalties for final round
            team.totalHiddenPenalties += choice.hiddenPenalty;
            team.totalFinalOutcomes += choice.finalOutcome;

            roundResults += `
                <div class="round-choice">
                    <span><strong>${team.name}:</strong> ${choice.title}</span>
                    <span>${oldTokens} → ${team.tokens} tokens</span>
                </div>
            `;
        });

        // Show results modal
        document.getElementById('round-results-content').innerHTML = roundResults;
        document.getElementById('round-results-modal').classList.add('active');
        
        // Update dashboard
        this.updateTeamDashboard();
        
        // Enable next round button
        document.getElementById('next-round').disabled = false;
    }

    closeModal() {
        document.getElementById('round-results-modal').classList.remove('active');
    }

    nextRound() {
        this.closeModal();
        this.loadNextRound();
    }

    endGame() {
        // Apply final hidden penalties and outcomes
        this.teams.forEach(team => {
            team.finalTokens = team.tokens + team.totalHiddenPenalties + team.totalFinalOutcomes;
        });

        // Sort teams by final score
        this.teams.sort((a, b) => b.finalTokens - a.finalTokens);

        this.gameState = 'results';
        this.showScreen('results-screen');
        this.renderResults();
    }

    renderResults() {
        // Final scores
        const finalScoresDiv = document.getElementById('final-scores');
        finalScoresDiv.innerHTML = `
            <h3>🏆 Final Rankings</h3>
            ${this.teams.map((team, index) => `
                <div class="final-score-item ${index === 0 ? 'winner' : ''}">
                    <span class="rank">#${index + 1}</span>
                    <span class="team-name">${team.name}</span>
                    <span class="final-tokens">${team.finalTokens} tokens</span>
                </div>
            `).join('')}
        `;

        // Round breakdown
        const roundBreakdownDiv = document.getElementById('round-breakdown');
        let breakdownHTML = '<h3>📊 Round-by-Round Breakdown</h3>';
        
        for (let round = 1; round <= this.scenarios.length; round++) {
            const scenario = this.scenarios[round - 1];
            breakdownHTML += `
                <div class="round-summary">
                    <h4>Round ${round}: ${scenario.title}</h4>
                    <div class="round-choices">
                        ${this.teams.map(team => {
                            const choice = team.choices.find(c => c.round === round);
                            return `
                                <div class="round-choice">
                                    <span><strong>${team.name}:</strong> ${choice.choiceTitle}</span>
                                    <span>Immediate: ${choice.immediateCost + choice.bonusTokens}, Hidden: ${choice.hiddenPenalty + choice.finalOutcome}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
        
        roundBreakdownDiv.innerHTML = breakdownHTML;
    }

    updateTeamDashboard() {
        const teamScoresDiv = document.getElementById('team-scores');
        const sortedTeams = [...this.teams].sort((a, b) => b.tokens - a.tokens);
        
        teamScoresDiv.innerHTML = sortedTeams.map(team => `
            <div class="team-score-item">
                <span class="team-score-name">${team.name}</span>
                <span class="team-score-tokens">${team.tokens}</span>
            </div>
        `).join('');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    restartGame() {
        this.stopTimer();
        this.teams = [];
        this.currentRound = 0;
        this.gameState = 'setup';
        this.showScreen('setup-screen');
        
        // Reset scenarios to default values
        this.initializeDefaultScenarios();
        this.renderScenarios();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.game = new EthicalDilemmaGame();
});

// Global functions for inline event handlers in scenario configuration
window.updateChoiceCost = function(scenarioId, choiceId, property, value) {
    window.game.updateChoiceCost(scenarioId, choiceId, property, value);
};
