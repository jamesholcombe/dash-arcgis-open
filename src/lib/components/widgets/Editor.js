




function Editor({id, position, visible, label, ...props}) {
    return <></>


}

Editor.defaultProps = {
    position: 'top-right',
}

Editor.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     * */
    id: PropTypes.string,

    /**
     * position of the basemap gallery. Defaults to top-right.
     * */
    position: PropTypes.string,

    /**
     * Indicates whether the widget is visible.
     * */
    visible: PropTypes.bool,

    /**
     * The widget's default label.
     * */
    label: PropTypes.string,
}

export {Editor}

   