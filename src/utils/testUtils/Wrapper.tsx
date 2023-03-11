import { Provider } from "react-redux";
import { store } from "../../store/store";

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default wrapper;
