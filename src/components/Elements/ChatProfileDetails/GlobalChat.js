import { useEffect, useState } from "react";

const GlobalChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.$zoho?.salesiq?.floatwindow) {
        window.$zoho.salesiq.floatwindow.visible("hide");
      }
    }, 1500); // wait until Zoho fully loads

    return () => clearTimeout(timer);
  }, []);

  const waitForZoho = (callback) => {
    const interval = setInterval(() => {
      if (
        window.$zoho &&
        window.$zoho.salesiq &&
        window.$zoho.salesiq.floatwindow
      ) {
        clearInterval(interval);
        callback();
      }
    }, 300);
  };

  const toggleZohoChat = () => {
    waitForZoho(() => {
      if (!isOpen) {
        window.$zoho.salesiq.floatwindow.visible("show");
        window.$zoho.salesiq.floatwindow.open();
        setIsOpen(true);
      } else {
        window.$zoho.salesiq.floatwindow.visible("hide");
        setIsOpen(false);
      }
    });
  };

  return (
    <div
      className="dkwejkrhiwenrower position-fixed"
      onClick={toggleZohoChat}
    >
      <i
        className={`bi text-white position-absolute ${
          isOpen ? "bi-x-lg" : "bi-chat-dots-fill"
        }`}
      ></i>
    </div>
  );
};

export default GlobalChat;