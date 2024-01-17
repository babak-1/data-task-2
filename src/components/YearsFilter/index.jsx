import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useEffect } from "react";
import { getYearsThunk } from "../../store/actions/filterActions";
import { setSelectedYearRedux } from "../../store/reducers/yearsReducer";
const YearFilter = () => {
  const dispatch = useDispatch();
  const { selectedIndicator } = useSelector((state) => state.indicators);
  const { selectedCountry } = useSelector((state) => state.countries);
  const { year, selectedYear } = useSelector((state) => state.years);

  console.log(selectedYear, "ilim menim");
  useEffect(() => {
    dispatch(
      getYearsThunk({
        countries: selectedCountry,
        indicator: selectedIndicator,
      })
    );
  }, [selectedCountry, selectedIndicator]);

  const handleYearChange = (e) => {
    dispatch(setSelectedYearRedux(e.target.value));
  };

  return (
    <div className={style.container}>
      <h3 className={style.headding}>Year</h3>
      <div className={style.optionCont}>
        <select
          name=""
          id=""
          className={style.select}
          onChange={handleYearChange}
          value={selectedYear}
        >
          {year?.map((item, index) => (
            <option value={item} className={style.option} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default YearFilter;
