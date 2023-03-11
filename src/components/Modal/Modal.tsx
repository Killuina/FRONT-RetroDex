import { ToastContainer } from "react-toastify";
import { showErrorToast } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message },
  } = useAppSelector(({ ui }) => ui);

  if (isError) {
    showErrorToast(message);
  }

  return <ToastContainer autoClose={2000} />;
};

export default Modal;
