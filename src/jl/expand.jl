# AUTO GENERATED FILE - DO NOT EDIT

export expand

"""
    expand(;kwargs...)
    expand(children::Any;kwargs...)
    expand(children_maker::Function;kwargs...)


An Expand component.

Keyword arguments:
- `children` (optional): Another widget that will be rendered inside the Expand widget.
- `id` (optional): The ID used to identify this component in Dash callbacks.
- `label` (optional): The widget's default label.
- `position` (optional): position of the basemap gallery. Defaults to top-right.
- `visible` (optional): Indicates whether the widget is visible.
"""
function expand(; kwargs...)
        available_props = Symbol[:children, :id, :label, :position, :visible]
        wild_props = Symbol[]
        return Component("expand", "Expand", "dash_arcgis_open", available_props, wild_props; kwargs...)
end

expand(children::Any; kwargs...) = expand(;kwargs..., children = children)
expand(children_maker::Function; kwargs...) = expand(children_maker(); kwargs...)

