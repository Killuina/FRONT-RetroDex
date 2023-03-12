import { ToastContainer } from "react-toastify";
import { showErrorToast } from "../../modals/modals";
import { unsetIsErrorModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message },
  } = useAppSelector(({ ui }) => ui);

  const dispatch = useAppDispatch();

  if (isError) {
    showErrorToast(message);
    dispatch(unsetIsErrorModalActionCreator());
  }

  return <ToastContainer autoClose={5000} />;
};

export default Modal;
