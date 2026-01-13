type EventName =
  | 'cta_primary_click'
  | 'cta_whatsapp_click'
  | 'phone_click'
  | 'form_submit_success'
  | 'form_submit_error';

interface EventPayload {
  label: string;
  page: string;
  lang: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Dispatch analytics event to dataLayer (GTM) or fallback to console.debug
 */
export const trackEvent = (event: EventName, payload: EventPayload): void => {
  const eventData = {
    event,
    ...payload,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  } else {
    console.debug('[Analytics]', event, payload);
  }
};

/**
 * Get current page path for analytics
 */
export const getCurrentPage = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }
  return '/';
};
