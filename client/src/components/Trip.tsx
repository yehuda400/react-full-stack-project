import { TripInterface } from "../providers/DataProvider";
type Props = { trip: TripInterface };

const Trip = (props: Props) => {
    return <>{props.trip.name}</>;
};

export default Trip;
