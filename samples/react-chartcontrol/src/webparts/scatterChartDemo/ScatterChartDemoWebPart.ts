import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
} from '@microsoft/sp-webpart-base';
import { PropertyPaneWebPartInformation } from '@pnp/spfx-property-controls/lib/PropertyPaneWebPartInformation';


import * as strings from 'ScatterChartDemoWebPartStrings';
import ScatterChartDemo from './components/ScatterChartDemo';
import { IScatterChartDemoProps } from './components/IScatterChartDemo.types';

export interface IScatterChartDemoWebPartProps {
  description: string;
}

export default class ScatterChartDemoWebPart extends BaseClientSideWebPart<IScatterChartDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IScatterChartDemoProps > = React.createElement(
      ScatterChartDemo,
      {
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupFields: [
                PropertyPaneWebPartInformation({
                  description: strings.WebPartDescription,
                  moreInfoLink: strings.MoreInfoLinkUrl,
                  key: 'webPartInfoId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
