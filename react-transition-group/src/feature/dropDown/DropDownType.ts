export type DropDownItemType = string;

export type DropDownItemsType = DropDownItemType[];

export type DropDownPropsType = {
  active: boolean;
  selectDropDownItem: DropDownItemType;
  unSelectDropDownItems: DropDownItemsType;
  onDropDownItemClick: (dropDownItem: DropDownItemType) => void;
  onDropDownSectionClick: () => void;
};

export type DropDownSliceInitialStateType = {
  selectDropDownItem: DropDownItemType;
  defaultDropDownItems: DropDownItemsType;
  unSelectDropDownItems: DropDownItemsType;
};
export type SelectDropDownItemPayloadActionType = {
  dropDownItem: DropDownItemType;
};

export type DropDownTestInitialPropsType = {
  active?: boolean;
  selectDropDownItem?: DropDownItemType;
  unSelectDropDownItems?: DropDownItemsType;
  onDropDownItemClick?: (dropDownItem: DropDownItemType) => void;
  onDropDownSectionClick?: () => void;
};
