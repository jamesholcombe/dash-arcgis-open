

function Bookmarks({id, position, visible, label, ...props}) {
    return <></>


}

Bookmarks.defaultProps = {
    position: 'top-right',
    editingEnabled: true,
}

Bookmarks.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     * */
    id: PropTypes.string,

    /**
     * position of the basemap gallery. Defaults to top-right.
     * Possible values: 'bottom-leading', 'bottom-left', 'bottom-right', 'bottom-trailing', 'top-leading', 'top-left', 'top-right', 'top-trailing'. Default: 'top-right'.
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

    /**
     * editingEnabled (boolean; optional): Indicates whether the bookmarks are able to be edited.
     * */
    editingEnabled: PropTypes.bool,


}

export {Bookmarks}

// id (string; optional): The ID used to identify this component in Dash callbacks.

// position (string; optional): Position relative to map. Possible values: 'bottom-leading', 'bottom-left', 'bottom-right', 'bottom-trailing', 'top-leading', 'top-left', 'top-right', 'top-trailing'. Default: 'top-right'.

// bookmarks (dict; optional): A collection ofBookmarks.

// container (dict; optional): The ID or node representing the DOM element containing the widget.

// declaredClass (string; optional): The name of the class.

// defaultCreateOptions (dict; optional): Specifies how new bookmarks will be created ifeditingEnabledis set toTrue.

// defaultEditOptions (dict; optional): Specifies how bookmarks will be edited, ifeditingEnabledis set toTrue.

// disabled (boolean; optional): When True, the widget is visually withdrawn and cannot be interacted with.

// editingEnabled (boolean; optional): Indicates whether the bookmarks are able to be edited.

// goToOverride (dict; optional): This function provides the ability to override either theMapView goTo()orSceneView goTo()methods.

// headingLevel (number; optional): Indicates the heading level to use for the message "No bookmarks" when no bookmarks are available in this widget.

// iconClass (string; optional): The widget's default CSS icon class.

// label (string; optional): The widget's default label.

// view (dict; optional): The view from which the widget will operate.

// viewModel (dict; optional): The view model for this widget.

// visible (boolean; optional): Indicates whether the widget is visible.

// visibleElements (dict; optional): The visible elements that are displayed within the widget.
