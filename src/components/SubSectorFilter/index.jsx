import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useEffect } from "react";
import { getIndicatorsThunk } from "../../store/actions/filterActions";
import { setCurrentSubsector } from "../../store/reducers/subSectorsReducer";

const SubSector = () => {
  const dispatch = useDispatch();
  const subSectorData = useSelector((state) => state.subSectors);
  const { currentSubsector } = useSelector((state) => state.subSectors);
  const { currentSector } = useSelector((state) => state.sectors);

  console.log(currentSubsector, "current");

  useEffect(() => {
    dispatch(getIndicatorsThunk(currentSubsector));
  }, [dispatch, currentSubsector, currentSector]);

  const handleSubSectorChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(setCurrentSubsector(selectedValue));
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
          value={currentSubsector}
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
