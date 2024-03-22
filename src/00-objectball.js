function gameObject(home, away) {
    return {
        home: {
            teamName: "brooklynNets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15 
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Heywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }    
        }
    };
}

const game = gameObject();
const home = game.home.players;
const away = game.away.players;
function numPointsScored(playerName) {
    if (home(playerName)) {
        return home[playerName].points;
    }
    else if (away(playerName)) {
        return away[playerName].points;
    }
}
console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
    if (home(playerName)) {
        return home[playerName].shoe;
    }
    else if (away(playerName)) {
        return away[playerName].shoe;
    }
}
console.log(shoeSize("Alan Anderson"));

function teamColors(teamName) {
    if (home === teamName) {
        return home.colors;
    }
    else if (away === teamName) {
        return away.colors;
    }
}
console.log(teamColors("Brooklyn Nets")); 

const homeTeamName = game.home.teamName;
const awayTeamName = game.away.teamName;
function TeamNames() {
    return [homeTeamName, awayTeamName];
}
console.log(teamNames());

function playerNumbers(teamName) {
    let teamPlayers;
    if (game.home.teamName === teamName) {
        teamPlayers = game.home.players;
    } else if (game.away.teamName === teamName) {
        teamPlayers = game.away.players;
    } 
    return Object.values(teamPlayers).map(player => player.number);
}
console.log(playerNumbers("Brooklyn Nets")); 

function playerStats(playerName) {
    if (home(playerName)) {
        return home[playerName];
    }
    else if (away(playerName)) {
        return away[playerName];
    }
}
console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
    let largestShoeSize = -Infinity;
    let playerWithLargestShoeSize;
    for (const team in game) {
        for (const playerName in game[team].players) {
            const player = game[team].players[playerName];
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoeSize = player;
            }
        }
    }
    return playerWithLargestShoeSize.rebounds;
}
console.log(bigShoeRebounds());

function mostPointsScored() {
    let maxPoints = -Infinity;
    let playerWithMostPoints = null;
    for (const player in game.home.players) {
        if (game.home.players[player].points > maxPoints) {
            maxPoints = game.home.players[player].points;
            playerWithMostPoints = player;
        }
    }
    for (const player in game.away.players) {
        if (game.away.players[player].points > maxPoints) {
            maxPoints = game.away.players[player].points;
            playerWithMostPoints = player;
        }
    }
    return playerWithMostPoints;
}
console.log(mostPointsScored()); 

function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;
    for (const player in game.home.players) {
        homePoints += game.home.players[player].points;
    }
    for (const player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }
    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } 
}
console.log(winningTeam());

function playerWithLongestName() {
    let longestName = "";
    let playerWithLongestName = null;
    for (const player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    for (const player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    return playerWithLongestName;
}
console.log(playerWithLongestName());

function doesLongNameStealATon() {
    let longestNamePlayer = "";
    let mostStealsPlayer = "";
    let maxSteals = -Infinity;
    for (const player in game.home.players) {
        if (player.length > longestNamePlayer.length) {
            longestNamePlayer = player;
        }
    }
    for (const player in game.away.players) {
        if (player.length > longestNamePlayer.length) {
            longestNamePlayer = player;
        }
    }
    for (const player in game.home.players) {
        if (game.home.players[player].steals > maxSteals) {
            maxSteals = game.home.players[player].steals;
            mostStealsPlayer = player;
        }
    }
    for (const player in game.away.players) {
        if (game.away.players[player].steals > maxSteals) {
            maxSteals = game.away.players[player].steals;
            mostStealsPlayer = player;
        }
    }
    return longestNamePlayer === mostStealsPlayer;
}
console.log(doesLongNameStealATon());
