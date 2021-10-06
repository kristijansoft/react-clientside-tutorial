# Modern Calendar

## Summary
This is a modern webpart built on the GA version of the [SharePoint Framework](https://dev.office.com/sharepoint/docs/spfx/sharepoint-framework-overview) demonstrating how to build a custom web part with a calendar capabilities in it.  

![SS1](https://cloud.githubusercontent.com/assets/13068139/23584809/14c4333e-0121-11e7-9bf1-3117651222d3.png)
![SS2](https://cloud.githubusercontent.com/assets/13068139/23584808/14c3ec26-0121-11e7-8be8-65fbcca32b62.png)
![SS3](https://cloud.githubusercontent.com/assets/13068139/23584807/14b88f34-0121-11e7-8c91-56ecff9343e1.png)

## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/version-GA-green.svg)

## Applies to

* [SharePoint Framework](https://blogs.office.com/2017/02/23/sharepoint-framework-reaches-general-availability-build-and-deploy-engaging-web-parts-today/)
* [Office 365 tenant](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)

## Prerequisites
 
None

## Solution

Solution|Author(s)
--------|---------
js-modern-calendar | Jeremy Coleman (MCP, PC Professional, Inc.)

## Version history

Version|Date|Comments
-------|----|--------
1.0.0.0|February 11, 2017|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- in the command line run:
  - `npm install`
  - `gulp serve`

- Move to Online Workbench
- Ensure that you have Calendar list in your site
- Set web part properties accordingly
  - Choose site
  - List
  - Start, End, Title and Details fields
  

## Features
Renders a calendar from any list available on the selected site. Site, List, Start, End, Event Title,Event Details and Calendar Theme are user-definable in the web part properties, so that you could technically use a custom list as the source for calendar presentation.

![](https://telemetry.sharepointpnp.com/sp-dev-fx-webparts/samples/js-modern-calendar)