from dash_arcgis_open import MapView, GeoJSONLayer
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash

import dash_arcgis_open as dago


dago.GeoJSONLayer

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
                            url="https://celh.blob.core.windows.net/germany/small_data.json?sp=r&st=2022-06-07T18:47:07Z&se=2022-07-09T02:47:07Z&sv=2020-08-04&sr=b&sig=5JskYj504vGm9tZAREPXxb5FdLbFhzchCm40ht1ef1E%3D",
                             
                        )
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
