import { XCircle, CheckCircle, X } from "lucide-react";

const AlertModal = ({ type, message, onClose }) => {
  const isSuccess = type === "success";
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`relative p-5 rounded-lg shadow-lg w-96 text-white flex items-center space-x-4 ${
          isSuccess ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isSuccess ? (
          <CheckCircle size={30} className="text-white" />
        ) : (
          <XCircle size={30} className="text-white" />
        )}
        <span className="flex-1 text-lg font-medium">{message}</span>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default AlertModal;