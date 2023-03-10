import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const showErrorToast = (message: string) => {
  toast.error(message, {
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
    progressStyle: { backgroundColor: "#EE7078" },
  });
};
