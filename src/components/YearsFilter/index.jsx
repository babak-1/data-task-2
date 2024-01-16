import style from "./style.module.css";
const YearFilter = () => {
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
