import { Request, Response } from 'express';
import { createLogger } from '@mosqueconnect/shared-utils';

const logger = createLogger('sse-controller');

// Store active connections
const clients: { id: string; res: Response }[] = [];

export const sseHandler = (req: Request, res: Response) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
  };
  res.writeHead(200, headers);

  const clientId = Date.now().toString();
  const newClient = { id: clientId, res };
  clients.push(newClient);

  logger.info({ clientId }, 'Client connected to SSE');

  req.on('close', () => {
    logger.info({ clientId }, 'Client disconnected from SSE');
    const index = clients.findIndex(c => c.id === clientId);
    if (index !== -1) clients.splice(index, 1);
  });
};

export const broadcastNotification = (data: any) => {
  clients.forEach(client => {
    client.res.write(`data: ${JSON.stringify(data)}\n\n`);
  });
  logger.info({ clientCount: clients.length }, 'Broadcasted SSE notification');
};
