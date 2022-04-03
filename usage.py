import dash_arcgis_open
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
    dash_arcgis_open.DashArcgisOpen(
        "asdf",
        'main-map',
        "asdff"
       
    ),
   
],
style = {
        'width': '500px',
        'height': '500px'
    }),
    html.Div(id='output'),
    dcc.Input(id = 'input-1', value = 'initial value'),
])


@app.callback(Output('output', 'children'), [Input('input-1', 'value'), State('asdf', 'id')])
def display_output(value, map_id):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
