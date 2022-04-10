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


html.Div([
    MapView(
       
        'main-map',
        style = {'width': '300px', 'height': '300px', 'backgroundColor': 'black'},
        
    ),
   
],

    ),
])


@app.callback(Output('output', 'children'), [Input('input-1', 'value')], [State('main-map', 'id')])
def display_output(value, map_id):
    return 'You have entered {}'.format(value)


if __name__ == "__main__":
    app.server.run(host="0.0.0.0", port=8080, debug=True)
