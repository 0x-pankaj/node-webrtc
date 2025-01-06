console.log("Hello via Bun!");

interface ConnectedClient {
  id: string;
  ws: WebSocket;
  roomId?: string;
}

interface SignalingMessage {
  type: "offer" | "answer" | "ice-candidate" | "join-room" | "leave-room";
  roomId?: string;
  senderId?: string;
  data?: any;
}

//type infer
const client = new Map<string, ConnectedClient>();
//type annotation
const rooms: Map<string, Set<string>> = new Map();

const handleMessage = ({
  message,
  sender,
}: {
  message: SignalingMessage;
  sender: ConnectedClient;
}) => {};

const handleClientDisconnect = (client: ConnectedClient) => {};

const handleJoinRoom = (
  message: SignalingMessage,
  client: ConnectedClient,
) => {};

const handleLeaveRoom = (roomId: string, client: ConnectedClient) => {};

const forwardMessage = (
  message: SignalingMessage,
  sender: ConnectedClient,
) => {};

const broadcastToRoom = (
  roomId: string,
  message: SignalingMessage,
  excludeClientId?: ConnectedClient,
) => {};

const server = Bun.serve({
  fetch(request, server) {
    // Health check endpoint
    if (request.url.endsWith("/health")) {
      return new Response("OK");
    }

    return new Response("Not found", { status: 404 });
  },
  websocket: {
    message(ws, message) {},
    open(ws) {
      ws.send("hello bun websocket");
    },
  },
});
