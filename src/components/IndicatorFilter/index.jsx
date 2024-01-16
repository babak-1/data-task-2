import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { getCountriesThunk } from "../../store/actions/filterActions";
import { setSelectedIndicatorRedux } from "../../store/reducers/indicatorsReducer";
const IndicatorFilter = () => {
  const dispatch = useDispatch();
  const indicatorData = useSelector((state) => state.indicators);
  const [selectedIndicator, setSelectedIndicator] = useState("Broad Money M3");

  useEffect(() => {
    dispatch(getCountriesThunk(selectedIndicator));
  }, []);

  const handleIndicatorChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedIndicator(selectedValue);
    dispatch(getCountriesThunk(selectedValue));
    dispatch(setSelectedIndicatorRedux(selectedValue));
  };

  return (
    <div className={style.container}>
      <h3 className={style.headding}>Indicator</h3>
      <div className={style.optionCont}>
        <select
          name=""
          id=""
          className={style.select}
          onChange={handleIndicatorChange}
          value={selectedIndicator}
        >
          {indicatorData?.indicator.map((item, index) => (
            <option value={item} className={style.option} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default IndicatorFilter;
