# AUTO GENERATED FILE - DO NOT EDIT

export dasharcgisopen

"""
    dasharcgisopen(;kwargs...)

A DashArcgisOpen component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; required): A label that will be printed when this component is rendered.
- `value` (String; optional): The value displayed in the input.
"""
function dasharcgisopen(; kwargs...)
        available_props = Symbol[:id, :label, :value]
        wild_props = Symbol[]
        return Component("dasharcgisopen", "DashArcgisOpen", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

