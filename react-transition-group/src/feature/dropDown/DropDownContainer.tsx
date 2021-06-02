import React, { useEffect, useState } from "react";

import { DropDownItemType, DropDownItemsType } from "./DropDownType";

import DropDown from "./DropDown";

const DropDownContainer = () => {
  const defaultdropDownItems = ["사과", "딸기", "바나나", "수박", "당근"];

  const [active, setActive] = useState(false);
  const [
    selectDropDownItem,
    setSelectDropDownItem,
  ] = useState<DropDownItemType>(defaultdropDownItems[0]);
  const [
    unSelectDropDownItems,
    setUnSelectDropDownItems,
  ] = useState<DropDownItemsType>(
    defaultdropDownItems.filter((item) => item !== defaultdropDownItems[0])
  );

  const onDropDownItemClick = (dropDownItem: DropDownItemType) => {
    setSelectDropDownItem(dropDownItem);
    setUnSelectDropDownItems(
      defaultdropDownItems.filter((item) => item !== dropDownItem)
    );
  };
  const onDropDownSectionClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleWindowClick = (e) => {
    if (!e.target.closest(`.drop-down-section`)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleWindowClick);

    return () => {
      document.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <DropDown
      active={active}
      selectDropDownItem={selectDropDownItem}
      unSelectDropDownItems={unSelectDropDownItems}
      onDropDownItemClick={onDropDownItemClick}
      onDropDownSectionClick={onDropDownSectionClick}
    />
  );
};

export default DropDownContainer;
