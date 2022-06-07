# AUTO GENERATED FILE - DO NOT EDIT

export geojsonlayer

"""
    geojsonlayer(;kwargs...)

A GeoJSONLayer component.

Keyword arguments:
- `id` (optional): The ID used to identify this component in Dash callbacks.
- `url` (optional)
"""
function geojsonlayer(; kwargs...)
        available_props = Symbol[:id, :url]
        wild_props = Symbol[]
        return Component("geojsonlayer", "GeoJSONLayer", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

