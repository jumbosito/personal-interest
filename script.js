function startPlayer() {
    document.querySelector(".container").innerHTML = `
        <h1>⚽ Create Your Player</h1>

        <input id="playerName" type="text" placeholder="Enter your name">

        <select id="position">
            <option value="">Choose your position</option>
            <option value="GK">GK</option>
            <option value="CB">CB</option>
            <option value="LB">LB</option>
            <option value="RB">RB</option>
            <option value="CM">CM</option>
            <option value="CAM">CAM</option>
            <option value="LW">LW</option>
            <option value="RW">RW</option>
            <option value="ST">ST</option>
        </select>

        <select id="foot">
            <option value="">Choose your strong foot</option>
            <option value="Right">Right</option>
            <option value="Left">Left</option>
        </select>

        <br>

        <button onclick="createPlayer()">Create Player</button>
    `;
}

function createPlayer() {
    let name = document.getElementById("playerName").value;
    let position = document.getElementById("position").value;
    let foot = document.getElementById("foot").value;

    if (name === "" || position === "" || foot === "") {
        alert("Please fill in everything!");
        return;
    }

    document.querySelector(".container").innerHTML = `
        <h1>⚽ ${name}</h1>
        <h2>${position}</h2>
        <p>Strong Foot: ${foot}</p>

        <h2>Level 1</h2>
        <p>XP: 0 / 100</p>

        <h3>Player Stats</h3>
        <p>⚡ Pace: 50</p>
        <p>🎯 Shooting: 50</p>
        <p>🧠 Passing: 50</p>
        <p>🕺 Dribbling: 50</p>
        <p>🛡️ Defending: 50</p>
        <p>💪 Physical: 50</p>
    `;
}
