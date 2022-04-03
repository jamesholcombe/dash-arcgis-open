import dash_arcgis_open
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

SHEETS = [
    "https://js.arcgis.com/4.23/esri/themes/light/main.css"
]

app = dash.Dash(__name__, external_stylesheets=SHEETS)

app.layout = html.Div([


html.Div([
    dash_arcgis_open.DashArcgisOpen(
        id='input',
        value='my-value',
        label='my-label'
    ),


   
    
],style = {
        'width': '500px',
        'height': '500px'
    }),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
