const serverColumn1 = document.getElementById('column1');
const serverColumn2 = document.getElementById('column2');
const serverColumn3 = document.getElementById('column3');

async function loadServers() {
    try {
        const response = await fetch('../servers.json');
        if (!response.ok) {
            throw new Error('Failed to load server data');
        }

        const data = await response.json();
        function addServerToColumn(server, column) {
            const serverDiv = document.createElement('div');
            serverDiv.classList.add('server');
            serverDiv.innerHTML = `
    <h2>${server.serverName}</h2>
    <p>${server.guild_description}</p>
    <button onclick="redirectToServerPage('${server.serverId}')">Afficher</button>
`;
            column.appendChild(serverDiv);
        }

        data.forEach((server, index) => {
            if (index % 3 === 0) {
                console.log('Adding server to column 1:', server);
                addServerToColumn(server, serverColumn1);
            } else if (index % 3 === 1) {
                console.log('Adding server to column 2:', server);
                addServerToColumn(server, serverColumn2);
            } else {
                console.log('Adding server to column 3:', server);
                addServerToColumn(server, serverColumn3);
            }
        });
    } catch (error) {
        console.error('Error loading server data:', error);
    }
}

function redirectToServerPage(serverId) {
    window.location.href = `/server.html/${serverId}`;
}

loadServers();
