import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showErrorToast } from "../../modals/modals";
import { unsetIsErrorModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message },
  } = useAppSelector(({ ui }) => ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      showErrorToast(message);
      dispatch(unsetIsErrorModalActionCreator());
    }
  }, [dispatch, isError, message]);

  return <ToastContainer autoClose={5000} />;
};

export default Modal;
