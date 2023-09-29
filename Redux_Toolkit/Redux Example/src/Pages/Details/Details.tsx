import { Login } from "../Login/Login";
import { useSelector } from "react-redux";
import { placeOrder} from "../globals";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import ShowOrder from "./ShowOrder/ShowOrder";

const Details = () => {
  const user = useSelector((state: any) => state.user);
  if (!user.loggedIn) {
    return <Login/>;
  } else if (user.tab === placeOrder) {
    return <PlaceOrder/>;
  } else{
    return <ShowOrder/>;
  }
};
export default Details;
