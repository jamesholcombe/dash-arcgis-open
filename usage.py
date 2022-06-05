from dash_arcgis_open import MapView
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

SHEETS = [
    "https://js.arcgis.com/4.23/esri/themes/light/main.css"
]

app = dash.Dash(__name__, external_stylesheets=SHEETS)

app.layout = html.Div([

    html.H1("Dash ArcGIS Open"),
    html.Div(id = "output-1"),
    dcc.Input(id = "input-1", value = "", type = "text"),


html.Div([
    MapView(
       
        id = 'main-map',
        style = {'width': '900px', 'height': '900px'},
        # center = [ 0.13, 51.51 ],
        # zoom = 10,
        
    ),
   
],

    ),
])


@app.callback(Output('output-1', 'children'), [Input('input-1', 'value')], [State('main-map', 'id')])
def display_output(value, map_id):
    return 'You have entered {}'.format(value)


if __name__ == "__main__":
    app.server.run(host="0.0.0.0", port=8080, debug=True)
