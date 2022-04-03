# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashArcgisOpen <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashArcgisOpen',
        namespace = 'dash_arcgis_open',
        propNames = c('id', 'label', 'value'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
