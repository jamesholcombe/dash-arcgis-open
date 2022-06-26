# AUTO GENERATED FILE - DO NOT EDIT

#' @export
editor <- function(id=NULL, label=NULL, position=NULL, visible=NULL) {
    
    props <- list(id=id, label=label, position=position, visible=visible)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Editor',
        namespace = 'dash_arcgis_open',
        propNames = c('id', 'label', 'position', 'visible'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
