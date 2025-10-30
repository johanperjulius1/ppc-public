import { useEffect, useState } from 'react';
import { analyzeUserAgent } from '../middleware';

/**
 * Förenklad hook som bara returnerar om besökaren är en bot
 * Användbar för konditionell rendering utan redirect
 */
export function useIsBot(): boolean {
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    const userAgentInfo = analyzeUserAgent();
    setIsBot(userAgentInfo.isBot);
  }, []);

  return isBot;
}
