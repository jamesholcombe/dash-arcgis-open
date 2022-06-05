import { eventProps } from "./Base";

export const MapViewController = ({view}) => {
    if (view === null) {
        return null;
    }

    view.on(eventProps, function (evt) {
        console.log("clicked")
       console.log(view.center);
      });



    console.log("map should have rendered")
    console.log(view.center);
    return null;

}