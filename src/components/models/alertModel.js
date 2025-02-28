import { XCircle, CheckCircle, X } from "lucide-react";

const AlertModal = ({ type, message, onClose }) => {
    const isSuccess = type === "success";

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="relative w-full sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-2/5 min-w-[40%] max-w-xl bg-white rounded-lg shadow-xl border border-gray-200">
                {/* Header Section */}
                <div className={`flex items-center justify-between p-4 rounded-t-lg bg-primary`}>
                    <div className="flex items-center space-x-2">
                        {isSuccess ? (
                            <CheckCircle size={24} className="text-white" />
                        ) : (
                            <XCircle size={24} className="text-white" />
                        )}
                        <span className="text-white text-lg font-semibold">
                            {isSuccess ? "Success" : "Error"}
                        </span>
                    </div>
                    <button onClick={onClose} className="text-white hover:text-gray-200">
                        <X size={20} />
                    </button>
                </div>

                {/* Message Section */}
                <p className="p-5 text-gray-800 text-base break-words whitespace-normal">
                    {message}
                </p>

                {/* Footer Section */}
                <div className="flex justify-end p-4 bg-gray-100 rounded-b-lg">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;
