import style from "./style.module.css";
const CountryFilter = () => {
  return (
    <div className={style.container}>
      <h3 className={style.headding}>Country</h3>
      <div className={style.optionCont}>
        <select name="" id="" className={style.select} multiple>
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

export default CountryFilter;
