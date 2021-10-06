# React Visio Embed

## Summary

This sample shows how the [Visio JavaScript APIs](https://dev.office.com/reference/add-ins/visio/visio-javascript-reference-overview) can be used within a web part. For sample purposes, this web part will display the name and the hyperlinks of a Visio shape when the user selects it.

To test the web part, upload the sample file provided to a SharePoint document library. Then open the file on the Visio web client and copy the Url from the browser. Add that url on the web part properties field and the EmbeddedSession will start and display the diagram.

![Demo](./assets/Preview.PNG)

## Used SharePoint Framework Version

![drop](https://img.shields.io/badge/drop-1.7.1-green.svg)

## Applies to

* [SharePoint Framework](https:/dev.office.com/sharepoint)
* [Visio JavaScript APIs](https://dev.office.com/reference/add-ins/visio/visio-javascript-reference-overview)

## Prerequisites

* Office 365 subscription with SharePoint Online licence
* SharePoint Framework [development environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment) already set up.

## Solution

Solution|Author(s)
--------|---------
react-visio|Joel Rodrigues

## Version history

Version|Date|Comments
-------|----|--------
1.2|January 4, 2019|Update to SPFx 1.7.1
1.1|October 3, 2018|Update to SPFx 1.6.0
1.0|August 23, 2018|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

* Clone this repository
* in the command line run:
  * `npm install`
  * `gulp serve`

## Features

This Web Part illustrates the following concepts on top of the SharePoint Framework:

* Using the Visio JavaScript APIs to embed a diagram on a page
* Using the Visio JavaScript APIs to interact with the Visio diagram and data available
