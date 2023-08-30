let playername = "Asif ali";

fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/players/search?plrN=${playername}`,
    {
        method: "GET",
        headers: {
            "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
            "x-rapidapi-key": "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
        },
    }
)
    .then((response) => response.json())
    .then((data) => {
        let players = data.player;
        // console.log(players);

        if (players && players.length > 0) {
            for (let i = 0; i < players.length; i++) {
                if (players[i].name.toLowerCase() === playername.toLowerCase()) {
                    // console.log(players[i]);
                    let playerId = players[i].id;
                    // console.log(playerId);

                    fetch(
                        `https://unofficial-cricbuzz.p.rapidapi.com/players/get-info?playerId=${playerId}`,
                        {
                            method: "GET",
                            headers: {
                                "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
                                "x-rapidapi-key": "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
                            },
                        }
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                            // Your code to update DOM elements with player data
                        })
                        .catch((error) => {
                            console.error("Error fetching player info:", error);
                        });
                }
            }
        } else {
            console.log("No players found with the given name.");
        }
    })
    .catch((error) => {
        console.error("Error fetching player data:", error);
    });