import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showErrorToast, showSuccessToast } from "../../modals/modals";
import {
  unsetIsErrorModalActionCreator,
  unsetIsSuccessModalActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { secondaryFont } from "../../styles/fonts";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message, isSuccess },
  } = useAppSelector(({ ui }) => ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      showErrorToast(message);
      dispatch(unsetIsErrorModalActionCreator());
    }
  }, [dispatch, isError, message]);

  useEffect(() => {
    if (isSuccess) {
      showSuccessToast(message);
      dispatch(unsetIsSuccessModalActionCreator());
    }
  }, [dispatch, isSuccess, message]);

  return (
    <ToastContainer className={secondaryFont.className} autoClose={2000} />
  );
};

export default Modal;
