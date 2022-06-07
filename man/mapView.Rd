% Auto-generated: do not edit by hand
\name{mapView}

\alias{mapView}

\title{MapView component}

\description{

}

\usage{
mapView(children=NULL, id=NULL, basemap=NULL, breakpoints=NULL,
center=NULL, constraints=NULL, extent=NULL,
heightBreakpoint=NULL, highlightOptions=NULL,
orientation=NULL, resizeAlign=NULL, style=NULL,
widthBreakpoint=NULL, zoom=NULL)
}

\arguments{
\item{children}{List of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number. Children of the map view, these are normally layers.}

\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{basemap}{Character. basemap (a value equal to: 'topo', 'streets', 'satelite', 'hybrid', 'dark-gray', 'gray', 'national-geographic', 'oceans', 'osm', 'terrain', 'dark-gray-vector', 'gray-vector', 'streets-vector', 'streets-night-vector', 'streets-navigation-vector', 'topo-vector' or 'streets-relief-vector'; default 'gray-vector'): The basemap type. Commonly 'gray-vector',. The ID used to identify this component in Dash callbacks.}

\item{breakpoints}{Named list. breakpoints (dict): The breakpoints for the view. Simple implementation of the below.
     https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#breakpoints}

\item{center}{Unnamed list. center (list; default [-168, 46]): Represents the view's center point; when setting the center, pass an array of numbers representing a longitude/latitude pair ([-100.4593, 36.9014]).}

\item{constraints}{Named list. Basic implementation of the below.
     https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constraints}

\item{extent}{Named list. extent (dict): dictionary of the form {xmin, ymin, xmax, ymax} that represents the extent of the map.
Spatial reference is assumed to be the same as the map view's spatial reference.
When extent is directly set, zoom and center will be overridden.
Based on https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#extent}

\item{heightBreakpoint}{Character. heightBreakpoint (string) : Possible Values:"xsmall"|"small"|"medium"|"large"|"xlarge"}

\item{highlightOptions}{Named list. highlightOptions (dict): Basic implementation of the below.
https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#highlightOptions}

\item{orientation}{Character. orientation (string): Either 'landscape' or 'portrait'.
READONLY: implementation of the below.
https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#loaded}

\item{resizeAlign}{Character. resizeAlign (string): implementation of https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#resizeAlign
Defines which anchor stays still while resizing the browser window. The default, center, ensures the view's center point remains constantly visible as the window size changes. The other options allow the respective portion of the view to remain visible when the window's size is changed.Possible Values:"center"|"left"|"right"|"top"|"bottom"|"top-left"|"top-right"|"bottom-left"|"bottom-right"}

\item{style}{Named list. }

\item{widthBreakpoint}{Character. widthBreakpoint (string) : Possible Values:"xsmall"|"small"|"medium"|"large"|"xlarge"}

\item{zoom}{Numeric. zoom (number; default 10): Represents the view's zoom level. Setting manually will override the extent.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

