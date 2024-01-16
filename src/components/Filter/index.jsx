import CountryFilter from "../CountryFilter";
import IndicatorFilter from "../IndicatorFilter";
import SectorFilter from "../SectorFilter";
import SubSector from "../SubSectorFilter";
import YearFilter from "../YearsFilter";
import style from "./style.module.css";

const FilterContainer = () => {
  return (
    <div className={style.container}>
      <CountryFilter />
      <YearFilter />
      <SectorFilter />
      <SubSector />
      <IndicatorFilter />
    </div>
  );
};

export default FilterContainer;
