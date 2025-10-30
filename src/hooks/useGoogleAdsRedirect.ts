import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { analyzeUserAgent } from '../middleware';

// Redirects to targetPath if Google Ads query parameters detected AND NOT a bot
export function useGoogleAdsRedirect(targetPath: string) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const isGoogleAds = (
      (params.get('utm_source') === 'google' && params.get('utm_medium') === 'cpc') ||
      params.has('gclid')
    );

    const isBot = analyzeUserAgent().isBot;

    if (isGoogleAds && !isBot) {
      navigate(targetPath, { replace: true });
    }
  }, [location.search, navigate, targetPath]);
}
