import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { SPPermission } from "@microsoft/sp-page-context";
import { PropertyFieldListPicker, PropertyFieldListPickerOrderBy } from '@pnp/spfx-property-controls/lib/PropertyFieldListPicker';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown, IPropertyPaneDropdownOption,
  PropertyPaneCheckbox,
  PropertyPaneToggle
} from "@microsoft/sp-webpart-base";
import pnp from "sp-pnp-js";
import * as strings from "spSecurityStrings";
import SpSecurity from "./components/SpSecurity";
import { ISpSecurityProps } from "./components/ISpSecurityProps";

import { ISpSecurityWebPartProps } from "./ISpSecurityWebPartProps";
import { PropertyPaneSlider } from "@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneSlider/PropertyPaneSlider";
import PropertyPane from "@microsoft/sp-webpart-base/lib/propertyPane/propertyPane/PropertyPane";

export default class SpSecurityWebPart extends BaseClientSideWebPart<ISpSecurityWebPartProps> {
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      pnp.setup({
        spfxContext: this.context,
        defaultCachingStore: "session", // or "local"
        defaultCachingTimeoutSeconds: 30,
        globalCacheDisable: true // or true to disable caching in case of debugging/testing
      });
    });
  }
  public render(): void {

    const props: ISpSecurityProps = {
      permission: this.properties.permission,
      showHiddenLists: this.properties.showHiddenLists,
      showCatalogs: this.properties.showCatalogs,
      showEmail: this.properties.showEmail,
      showSecurityGroups: this.properties.showSecurityGroups,
      showUsers: this.properties.showUsers,
      letUserSelectPermission: this.properties.letUserSelectPermission,
      letUserSelectUsers: this.properties.letUserSelectUsers,
      letUserSelectLists: this.properties.letUserSelectLists,
      includeAdminSelectedLists: this.properties.includeAdminSelectedLists,
      adminSelectedLists: this.properties.adminSelectedLists,
      listTitleColumnWidth: this.properties.listTitleColumnWidth,
      users: this.properties.users,
      getPermissionTypes: this.getPermissionTypes,
      graphHttpClient: this.context.graphHttpClient,
      domElement : this.domElement

    };
    const element: React.ReactElement<ISpSecurityProps> = React.createElement(
      SpSecurity, props
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
  public getPermissionTypes(): IPropertyPaneDropdownOption[] {
    let perms = new Array();
    for (const perm in SPPermission) {

      if (typeof (SPPermission[perm]) === "object") {
        perms.push({
          text: perm,
          key: perm
        });
      }
    }
    return perms;
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Configuration"
          },
          groups: [
            {
              groupName: "Permission Settings",
              groupFields: [

                PropertyPaneDropdown("permission", {
                  label: "Permission Type",
                  options: this.getPermissionTypes()
                }),
                PropertyPaneCheckbox("letUserSelectPermission", {
                  text: "Let user select Permission"
                }),

              ]
            },
            {
              groupName: "User Settings",
              groupFields: [

                PropertyPaneToggle("showEmail", {
                  label: "Show Email or Name",
                  onText: "Show Email",
                  offText: "Show Name",
                }),
                PropertyPaneCheckbox("showSecurityGroups", {
                  text: "Show Security Groups"
                }),
                PropertyPaneCheckbox("showUsers", {
                  text: "Show Users"
                }),

                PropertyPaneCheckbox("letUserSelectUsers", {
                  text: "Let user select Users"
                })
              ]
            },
            {
              groupName: "Display Settings",
              groupFields: [
                PropertyPaneSlider("listTitleColumnWidth", {
                  label: "Initial title column width",
                  min: 1,
                  max: 1000
                }),
              ]
            }
          ]
        },
        {
          header: {
            description: "Configure Lists"
          },
          groups: [
            {
              groupName: "List Settings",
              groupFields: [
                PropertyPaneCheckbox("showHiddenLists", {
                  text: "Show Hidden Lists"
                }),
                PropertyPaneCheckbox("showCatalogs", {
                  text: "Show System Lists"
                }),
                PropertyPaneCheckbox("letUserSelectLists", {
                  text: "Let user select Lists"
                }),

              ]
            },
            {
              groupName: "Select Lists",
              groupFields: [
                PropertyPaneToggle("includeAdminSelectedLists", {
                  label: "Inclued/exclude selected lists",
                  onText: "Include selected lists",
                  offText: "Exclude selected lists",


                }),
                PropertyFieldListPicker("adminSelectedLists", {
                  label: 'Select lists to include/exclude',
                  selectedList: this.properties.adminSelectedLists,
                  includeHidden: this.properties.showHiddenLists,
                  orderBy: PropertyFieldListPickerOrderBy.Title,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'listPickerFieldId',
                  multiSelect: true
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
