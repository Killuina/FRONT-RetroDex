import "react-toastify/dist/ReactToastify.css";
import { toast, Slide } from "react-toastify";

export const showErrorToast = (message: string) => {
  toast.error(message, {
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    transition: Slide,
    progressStyle: { backgroundColor: "#EE7078" },
  });
};

export const showSucessToast = (message: string) => {
  toast.success(message, {
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    transition: Slide,
    progressStyle: { backgroundColor: "#C6F6D5" },
  });
};
