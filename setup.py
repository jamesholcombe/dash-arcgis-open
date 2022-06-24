import json
import os
from setuptools import setup


with open('package.json') as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description="Open Source implementation of Plotly Dash mapping components, powered by the ESRI ArcGIS API for Javascript.",
    long_description="Open Source implementation of Plotly Dash mapping components, powered by the ESRI ArcGIS API for Javascript.",
    install_requires=[],
    classifiers = [
        'Framework :: Dash',
    ],    
)
