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

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    hideProgressBar: true,
    closeOnClick: true,
    progress: undefined,
    transition: Slide,
    progressStyle: { backgroundColor: "#EE7078" },
  });
};
