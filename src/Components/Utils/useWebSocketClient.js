import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useWebSocketNotifications(refetch) {
  const clientId = useSelector((state) => state.user.email);
  const activeAccount = useSelector((state) => state.active.activeAccount);
  const [inQueue, setInQueue] = useState(new Set());

  useEffect(() => {
    if (!clientId) return;
    const socket = new WebSocket(`ws://localhost:5000?clientId=${clientId}`);

    socket.onopen = () => console.log("Connected to WebSocket server");

    socket.onmessage = (event) => {
      const finalCall = JSON.parse(event.data);
      const emailAccount = finalCall.data.emailAccount;

      setInQueue((prevQueue) => new Set(prevQueue).add(emailAccount));
    };

    socket.onclose = () => console.log("WebSocket disconnected");

    return () => {
      socket.close();
    };
  }, [clientId]);

  // Re-fetch emails when activeAccount changes OR when notification is for activeAccount
  useEffect(() => {
    if (!activeAccount || !inQueue.has(activeAccount)) return;

    setInQueue((prevQueue) => {
      const updatedQueue = new Set(prevQueue);
      updatedQueue.delete(activeAccount);
      return updatedQueue;
    });

    debounce(refetch);
  }, [activeAccount, inQueue]);

  return null;
}

export default useWebSocketNotifications;

// Debounce function to prevent excessive API calls
async function debounce(fetch) {
  setTimeout(() => {
    fetch();
  }, 5000);
}
