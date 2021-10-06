import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'LineChartDemoWebPartStrings';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
} from '@microsoft/sp-webpart-base';
import { PropertyPaneWebPartInformation } from '@pnp/spfx-property-controls/lib/PropertyPaneWebPartInformation';
import LineChartDemo from './components/LineChartDemo';
import { ILineChartDemoProps } from './components/ILineChartDemo.types';

export interface ILineChartDemoWebPartProps {
  description: string;
}

export default class LineChartDemoWebPart extends BaseClientSideWebPart<ILineChartDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ILineChartDemoProps > = React.createElement(
      LineChartDemo,
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

