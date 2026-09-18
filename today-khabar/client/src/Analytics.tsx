import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!measurementId || document.querySelector(`script[data-ga="${measurementId}"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.ga = measurementId;
    document.head.appendChild(script);
    const inline = document.createElement('script');
    inline.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}', { anonymize_ip: true });`;
    document.head.appendChild(inline);
  }, []);
  return null;
}
