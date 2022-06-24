
module DashArcgisOpen
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.3"

include("jl/geojsonlayer.jl")
include("jl/mapview.jl")
include("jl/basemapgallery.jl")
include("jl/editor.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_arcgis_open",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_arcgis_open.min.js",
    external_url = "https://unpkg.com/dash_arcgis_open@0.0.3/dash_arcgis_open/dash_arcgis_open.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_arcgis_open.min.js.map",
    external_url = "https://unpkg.com/dash_arcgis_open@0.0.3/dash_arcgis_open/dash_arcgis_open.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
