from turtle import position
from dash_arcgis_open import MapView, GeoJSONLayer, BasemapGallery, Editor, Bookmarks, Expand
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash



SHEETS = ["https://js.arcgis.com/4.23/esri/themes/light/main.css"]

app = dash.Dash(__name__, external_stylesheets=SHEETS)

app.layout = html.Div(
    [
        html.H1("Dash ArcGIS Open"),
        html.Div(id="output-1"),
        dcc.Input(id="input-x", value=0, type="number"),
        dcc.Input(id="input-y", value=0, type="number"),
        html.Button(id="button", children="Submit"),
        html.Div(
            [
                MapView(
                    children=[
                        GeoJSONLayer(
                            id="geojson-layer",
                            url="https://raw.githubusercontent.com/martinjc/UK-GeoJSON/master/json/electoral/eng/wards_by_lad/E06000001.json",
                            
                        ),
                     
                    
                    Expand( children = BasemapGallery(id = "basemap-gallery",  visible = True, position = "top-right"),

                     
                        id = "expand", position = "top-left", visible = True, ),
             
                    ],
                    id="main-map",
                    style={"width": "900px", "height": "900px"},
                    center=[0.13, 51.51],
                    zoom=10,
                ),
            ],
        ),
    ]
)


@app.callback(
    Output("main-map", "center"),
    Input("button", "n_clicks"),
    State("input-x", "value"),
    State("input-y", "value"),
)
def move_center(clicks, x, y):
    print("updating center")
    print(x, y)

    return [x, y]


if __name__ == "__main__":
    app.server.run(host="0.0.0.0", port=8080, debug=True)
