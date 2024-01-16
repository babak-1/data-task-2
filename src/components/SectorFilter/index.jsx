import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useEffect } from "react";
import { getSectorThunk } from "../../store/actions/filterActions";
const SectorFilter = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.filter);
  console.log(data);

  useEffect(() => {
    dispatch(getSectorThunk());
  }, []);
  return (
    <div className={style.container}>
      <h3 className={style.headding}>Sector</h3>
      <div className={style.optionCont}>
        <select name="" id="" className={style.select}>
          <option value="" className={style.option}>
            Azerbaycan
          </option>
          <option value="" className={style.option}>
            Turkiye
          </option>
          <option value="" className={style.option}>
            Rusiya
          </option>
          <option value="" className={style.option}>
            Uzbekistan
          </option>
        </select>
      </div>
    </div>
  );
};

export default SectorFilter;
