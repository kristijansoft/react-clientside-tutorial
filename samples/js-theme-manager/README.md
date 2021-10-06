# Modern Experience Theme Manager

## Summary
This sample web part provides a user interface for creating, updating, deleting and applying a Modern Experience SharePoint theme in SharePoint Online.

The Theme Palette can be generated using the UI Fabric Theme Generator at: https://developer.microsoft.com/en-us/fabric#/styles/themegenerator

<h2>The following four features are available within this sample:</h2>

<b>Create a theme:</b><br>
Using a provided theme name and theme color palette a Modern Experience them is created and available at the tenant level.
![preview](./assets/create-a-theme.png)

<b>Update a theme:</b><br>
By selecting a pre-existing theme from the dropdown, the theme at the tenant level will be updated with the palette provided in the Theme Palette texbox.
![preview](./assets/update-a-theme.png)

<b>Delete a theme:</b><br>
By selecting a pre-existing theme from the dropdown, the theme will be deleted from the tenant level.
![preview](./assets/delete-a-theme.png)

<b>Appply a theme:</b><br>
By providing a Site Collection URL, along with a theme name and palette, the theme will be applied to the Site Collection directly without being added to the tenant Company Theme options.<br>
NOTE: This is a great option to provide theme management of a Site Collection without adding a theme to the "Company Themes" choices within the "Change the Look" options at the tenant level. The web part could be added to a Site Collection App Catalog to ensure availability of the web part is only available to those approved for theme management.
![preview](./assets/apply-a-theme.png)


## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/drop-1.7.1-orange.svg)

## Applies to

* [SharePoint Framework](https:/dev.office.com/sharepoint)
* [Office 365 tenant](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)


## Solution

Solution|Author(s)
--------|---------
js-theme-manager | David Warner II ([@DavidWarnerII](https://twitter.com/davidwarnerii) / [Warner Digital](http://warner.digital))
js-theme-manager | Beau Cameron ([@Beau__Cameron](https://twitter.com/@Beau__Cameron) / [Blog](https://beaucameron.net/))

## Version history

Version|Date|Comments
-------|----|--------
1.0|February 27, 2019|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- in the command line run:
  - `npm install`
  - `gulp serve`



## Features
This Web Part illustrates the following concepts on top of the SharePoint Framework:

- Using the SharePoint Online REST API to manage Modern Experience Themes

## Additional Information:
- [Office UI Fabric Theme Palette Generator](https://developer.microsoft.com/en-us/fabric#/styles/themegenerator)

<img src="https://telemetry.sharepointpnp.com/sp-dev-fx-webparts/samples/js-theme-manager" />