import React from 'react';
import { X } from 'lucide-react';

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  wechatId: string;
  qrCodeUrl: string;
}

const WeChatModal: React.FC<WeChatModalProps> = ({ isOpen, onClose, wechatId, qrCodeUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">WeChat</h3>
          
          <div className="space-y-2">
            <p className="text-gray-600">ID: <span className="font-medium text-gray-900">{wechatId}</span></p>
            <div className="flex justify-center">
              <img
                src={qrCodeUrl}
                alt="WeChat QR Code"
                className="w-64 h-64 object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              扫描二维码添加好友
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeChatModal;
