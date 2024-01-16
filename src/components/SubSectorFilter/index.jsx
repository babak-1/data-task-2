import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { getIndicatorsThunk } from "../../store/actions/filterActions";

const SubSector = () => {
  const dispatch = useDispatch();
  const subSectorData = useSelector((state) => state.subSectors);
  const [selectedSubSector, setSelectedSubSector] = useState("Money");

  useEffect(() => {
    dispatch(getIndicatorsThunk(selectedSubSector));
  }, []);

  const handleSubSectorChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSubSector(selectedValue);
    dispatch(getIndicatorsThunk(selectedValue));
  };

  return (
    <div className={style.container}>
      <h3 className={style.headding}>Subsector</h3>
      <div className={style.optionCont}>
        <select
          name=""
          id=""
          className={style.select}
          onChange={handleSubSectorChange}
          value={selectedSubSector}
        >
          {subSectorData?.subSector.map((item, index) => (
            <option value={item} className={style.option} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SubSector;
