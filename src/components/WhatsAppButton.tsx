import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/555532861274"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
