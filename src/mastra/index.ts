import { Mastra } from '@mastra/core';
import { agent } from '../../simple_agent.ts';
import ChatPage from '../pages/ChatPage';

export const mastra = new Mastra({
  agents: {
    simpleAgent: agent,
  },
  pages: {
    index: ChatPage,
  },
});