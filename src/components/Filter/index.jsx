import CountryFilter from "../CountryFilter";
import IndicatorFilter from "../IndicatorFilter";
import RankSlider from "../RankSlider";
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
      <RankSlider />
    </div>
  );
};

export default FilterContainer;
