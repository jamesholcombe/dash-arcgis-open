import {loadModules} from 'esri-loader';

function renderGeoJSONLayer(map, props) {
    console.log('it is rendering a GeoJSONLayer');

    console.log('rendering GeoJSONLayer');
    loadModules(['esri/layers/GeoJSONLayer'], {
        css: true,
    })
        .then(([Layer]) => {
            const myLayer = new Layer({
                url: props.url,
            });

            console.log('myLayer', myLayer);

            map.add(myLayer);
        })
        .catch((err) => console.error(err));
}

export {renderGeoJSONLayer};
