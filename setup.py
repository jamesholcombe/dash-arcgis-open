import json
import os
from setuptools import setup
from pathlib import Path

with open('package.json') as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")


this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description="Open Source implementation of Plotly Dash mapping components, powered by the ESRI ArcGIS API for Javascript.",
    long_description=long_description,
    install_requires=[],
    classifiers = [
        'Framework :: Dash',
    ],  
    keywords=["Dash", "Plotly", "ESRI", "ArcGIS", "Map", "Mapping"],
)
