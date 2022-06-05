import { useCallback, useEffect } from 'react';
import {eventProps} from './Base';

export const MapViewController = ({view,center,zoom}) => {
    if (view === null) {
        return null;
    }
    

    console.log('map controller rendering');
    // view.on(eventProps, function (evt) {
        
    // });

    
    
    useEffect( () => {
        view.goTo({center,zoom});
    }, [center, zoom])

    

    



    console.log(view.center);
    return null;
};
