import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useEffect } from "react";
import { getYearsThunk } from "../../store/actions/filterActions";
const YearFilter = () => {
  const dispatch = useDispatch();
  const { selectedIndicator } = useSelector((state) => state.indicators);
  const { selectedCountry } = useSelector((state) => state.countries);
  console.log(selectedCountry, selectedIndicator);

  useEffect(() => {
    dispatch(getYearsThunk(selectedCountry, selectedIndicator));
    console.log(selectedCountry, selectedIndicator, "useeffect");
  }, [selectedCountry, selectedIndicator]);
  return (
    <div className={style.container}>
      <h3 className={style.headding}>Year</h3>
      <div className={style.optionCont}>
        <select name="" id="" className={style.select}>
          <option value="" className={style.option}>
            2023
          </option>
          <option value="" className={style.option}>
            2022
          </option>
          <option value="" className={style.option}>
            2021
          </option>
          <option value="" className={style.option}>
            2020
          </option>
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
