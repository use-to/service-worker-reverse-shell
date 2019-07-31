const host = '127.0.0.1';
const port = 12345;

function startWebSocket() {
    const ws = new WebSocket('ws://' + host + ':' + port + '/');

    ws.onmessage = function(e) {
        try {
            const result = eval(e.data);
            ws.send(result);
        } catch(ex) {
            ws.send(null);
        }
    }

    ws.onclose = function() {
        setTimeout(function() {
            startWebSocket();
        }, 5000);
    }
}

startWebSocket();
