import { IDropdownOption } from 'office-ui-fabric-react/lib/components/Dropdown';

/**
 * Properties for the chart palette select
 */
export interface IChartPaletteSelectorProps {
  disabled: boolean;
  label: string;
  options: IDropdownOption[];
  selectedKey: string | number;
  stateKey: string;
  onChanged: (option: IDropdownOption, index?: number) => void;
}

export interface IChartPaletteSelectorState {
  selectedKey: string | number;
}
