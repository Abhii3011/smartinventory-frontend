import React, { useEffect } from 'react';

const BotpressChatbot = () => {
  useEffect(() => {
    // Inject Botpress Webchat scripts
    const botpressInjectScript = document.createElement('script');
    botpressInjectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    botpressInjectScript.async = true;
    document.head.appendChild(botpressInjectScript);

    const botpressConfigScript = document.createElement('script');
    botpressConfigScript.src = 'https://mediafiles.botpress.cloud/a398e506-df09-4155-8df4-812275a71e80/webchat/config.js';
    botpressConfigScript.defer = true;
    document.head.appendChild(botpressConfigScript);

    return () => {
      // Cleanup when the component unmounts
      document.head.removeChild(botpressInjectScript);
      document.head.removeChild(botpressConfigScript);
    };
  }, []);

  return (
    <div>
        
    </div>
    
  );
};

export default BotpressChatbot;
