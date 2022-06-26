# AUTO GENERATED FILE - DO NOT EDIT

#' @export
expand <- function(children=NULL, id=NULL, label=NULL, position=NULL, visible=NULL) {
    
    props <- list(children=children, id=id, label=label, position=position, visible=visible)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Expand',
        namespace = 'dash_arcgis_open',
        propNames = c('children', 'id', 'label', 'position', 'visible'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
