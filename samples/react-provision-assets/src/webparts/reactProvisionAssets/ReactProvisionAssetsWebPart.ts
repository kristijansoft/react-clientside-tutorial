import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'reactProvisionAssetsStrings';
import ReactProvisionAssets from './components/ReactProvisionAssets';
import { IReactProvisionAssetsProps } from './components/IReactProvisionAssetsProps';
import { IReactProvisionAssetsWebPartProps } from './IReactProvisionAssetsWebPartProps';

export default class ReactProvisionAssetsWebPart extends BaseClientSideWebPart<IReactProvisionAssetsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactProvisionAssetsProps > = React.createElement(
      ReactProvisionAssets,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
