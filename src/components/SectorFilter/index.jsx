import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useEffect } from "react";
import {
  getSectorThunk,
  getSubSectorThunk,
} from "../../store/actions/filterActions";
import { setCurrentSector } from "../../store/reducers/sectorsReducer";
const SectorFilter = () => {
  const dispatch = useDispatch();
  const sectorData = useSelector((state) => state.sectors);
  const { currentSector } = useSelector((state) => state.sectors);
  console.log(currentSector, "buudubudu");

  useEffect(() => {
    dispatch(getSectorThunk());
    dispatch(getSubSectorThunk(currentSector));
  }, []);

  const handleSectorChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(setCurrentSector(selectedValue));
    dispatch(getSubSectorThunk(selectedValue));
  };
  return (
    <div className={style.container}>
      <h3 className={style.headding}>Sector</h3>
      <div className={style.optionCont}>
        <select
          name=""
          id=""
          className={style.select}
          onChange={handleSectorChange}
          value={currentSector}
        >
          {sectorData?.sector.map((item, index) => (
            <option value={item} className={style.option} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SectorFilter;
