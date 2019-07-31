import asyncio
import websockets

host = '0.0.0.0'
port = 12345


async def handle(websocket, path):
    while True:
        await websocket.send(input('js > '))

        result = await websocket.recv()
        print(result)


start_server = websockets.serve(handle, host, port)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
