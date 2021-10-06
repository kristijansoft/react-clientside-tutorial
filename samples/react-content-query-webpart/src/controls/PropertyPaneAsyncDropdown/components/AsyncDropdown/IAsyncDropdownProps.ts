import { IDropdownOption } from 'office-ui-fabric-react';

export interface IAsyncDropdownProps {
  label: string;
  loadingLabel: string;
  errorLabelFormat: string;
  loadOptions: () => Promise<IDropdownOption[]>;
  onChanged?: (option: IDropdownOption, index?: number) => void;
  selectedKey?: string | number;
  disabled?: boolean;
  stateKey?: string;
}