# AUTO GENERATED FILE - DO NOT EDIT

#' @export
webMap <- function(children=NULL, id=NULL, basemap=NULL, breakpoints=NULL, center=NULL, constraints=NULL, extent=NULL, heightBreakpoint=NULL, portalItem=NULL, style=NULL, widthBreakpoint=NULL, zoom=NULL) {
    
    props <- list(children=children, id=id, basemap=basemap, breakpoints=breakpoints, center=center, constraints=constraints, extent=extent, heightBreakpoint=heightBreakpoint, portalItem=portalItem, style=style, widthBreakpoint=widthBreakpoint, zoom=zoom)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'WebMap',
        namespace = 'dash_arcgis_open',
        propNames = c('children', 'id', 'basemap', 'breakpoints', 'center', 'constraints', 'extent', 'heightBreakpoint', 'portalItem', 'style', 'widthBreakpoint', 'zoom'),
        package = 'dashArcgisOpen'
        )

    structure(component, class = c('dash_component', 'list'))
}
