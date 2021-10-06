# React Tree Organization Web Part

## Summary
The Tree Organization WebPart shows the Organization Chart of the  or the team, the web part reads infomation from current user to build the Organization Chart.  

We can configure in the webpart properties if it show all Organization Chart or the only user team, (same manager and peers). 
 


![Organization Chart Web Part](./assets/Screenshot1.png)
![Organization Chart Web Part](./assets/Screenshot2.png)
![Organization Chart Web Part](./assets/Screenshot3.png)


## Used SharePoint Framework Version 
![drop](https://img.shields.io/badge/version-GA-green.svg)

## Applies to

* [SharePoint Framework](https:/dev.office.com/sharepoint)
* [Office 365 tenant](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment)

> Update accordingly as needed.

## WebPart Properties
 

Property |Type|Required| comments
--------------------|----|--------|----------
WebPart Title| Text| no|
Show Only My Team| Boolean | true 
MaxDepth | Number| yes | Maximum number of levels to show


## Solution

Solution|Author(s)
--------|---------
Tree Organization WebPart|João Mendes

## Version history

Version|Date|Comments
-------|----|--------
1.0.0|Fev 25, 2019|Initial release

## Disclaimer
**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- in the command line run:
  - `npm install`
  - `gulp build`
  - `gulp bundle --ship`
  - `gulp package-solution --ship`


<img src="https://telemetry.sharepointpnp.com/sp-dev-fx-webparts/samples/readme-template" />
