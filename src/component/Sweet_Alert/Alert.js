import { toast } from "react-toastify";

export const ToastOnSuccess = (message) => {
  toast.success(message);
};

//Toaster for Failure Auth

export const ToastOnFailure = (message) => {
  toast.error(message);
};

//Toaster for warning Auth

export const ToastOnWarning = (message) => {
    toast.warn(message);
  };
  