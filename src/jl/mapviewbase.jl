# AUTO GENERATED FILE - DO NOT EDIT

export mapviewbase

"""
    mapviewbase(;kwargs...)

A MapViewBase component.

Keyword arguments:
- `id` (optional)
- `animation` (optional): The ID used to identify this component in Dash callbacks.
- `basemap` (optional)
- `center` (optional)
- `style` (optional)
- `type` (optional)
- `viewPoint` (optional)
- `widthBreakpoint` (optional)
- `zoom` (optional)
"""
function mapviewbase(; kwargs...)
        available_props = Symbol[:id, :animation, :basemap, :center, :style, :type, :viewPoint, :widthBreakpoint, :zoom]
        wild_props = Symbol[]
        return Component("mapviewbase", "MapViewBase", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

