
import { Mastra } from '@mastra/core';
import { agent } from '../../simple_agent';

export const mastra = new Mastra({
  agents: {
    simpleAgent: agent,
  },
});