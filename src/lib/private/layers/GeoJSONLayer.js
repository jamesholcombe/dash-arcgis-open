import {loadModules} from 'esri-loader';

function renderGeoJSONLayer({map, ...props}) {
    loadModules(['esri/layers/GeoJSONLayer'], {
        css: true,
    })
        .then(([Layer]) => {
            console.log('props', props);
            const myLayer = new Layer({
                ...props,
            });

            console.log('myLayer', myLayer);

            map.add(myLayer);
        })
        .catch((err) => console.error(err));
}

export {renderGeoJSONLayer};
