from turtle import position
from dash_arcgis_open import MapView, GeoJSONLayer, BasemapGallery, Editor, Bookmarks, Expand, WebMap
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash
import dash_bootstrap_components as dbc


SHEETS = ["https://js.arcgis.com/4.23/esri/themes/light/main.css"]

app = dash.Dash(__name__, external_stylesheets=SHEETS)

app.layout = html.Div(
    [
        html.H1("Dash ArcGIS Open"),
        html.Div(id="output-1"),
        dbc.Switch(id = "switch"),
        html.Button(id="button", children="Submit"),
        html.Div(
            [
                WebMap(
                    [Expand(BasemapGallery())],
                    portalItem = "41281c51f9de45edaf1c8ed44bb10e30",
                    id="main-map",
                    style={"width": "900px", "height": "900px"},
                    # center=[0.13, 51.51],
                    zoom=25,
                ),
            ],
        ),
    ]
)




@app.callback(
    Output("basemap-gallery", "disabled"),
    Input("switch", "value")
)
def toggle_disabled(value):
    return value





if __name__ == "__main__":
    app.server.run(host="0.0.0.0", port=8080, debug=True)
