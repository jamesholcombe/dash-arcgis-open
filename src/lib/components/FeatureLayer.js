const FeatureLayer = ({map, url}) => {
    const [FeatureLayer, setFeatureLayer] = useState(null);

    useEffect(() => {
        loadModules(['esri/layers/FeatureLayer'])
            .then(([FeatureLayer]) => {
                const myFeatureLayer = new FeatureLayer({
                    url: url,
                });

                setFeatureLayer(myFeatureLayer);
                map.add(myFeatureLayer);
            })
            .catch((err) => console.error(err));

        return function cleanup() {
            props.map.remove(FeatureLayer);
        };
    }, [url]);

    return null;
};

export {FeatureLayer};
