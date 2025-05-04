import { toast } from "react-hot-toast";

export const showSucessToast = (message: string) => {
  toast.success(message);
};

export const showErrorToast = (message: string) => {
  toast.error(message);
};

export const showToast = (message: string) => {
    toast(message);
  };