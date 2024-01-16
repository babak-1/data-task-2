import style from "./style.module.css";

const SubSector = () => {
  return (
    <div className={style.container}>
      <h3 className={style.headding}>Subsector</h3>
      <div className={style.optionCont}>
        <select name="" id="" className={style.select}>
          <option value="" className={style.option}>
            a
          </option>
          <option value="" className={style.option}>
            b
          </option>
          <option value="" className={style.option}>
            c
          </option>
          <option value="" className={style.option}>
            d
          </option>
        </select>
      </div>
    </div>
  );
};

export default SubSector;
