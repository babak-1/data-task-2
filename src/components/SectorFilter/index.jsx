import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import {
  getSectorThunk,
  getSubSectorThunk,
} from "../../store/actions/filterActions";
const SectorFilter = () => {
  const dispatch = useDispatch();
  const sectorData = useSelector((state) => state.sectors);
  const [selectedSector, setSelectedSector] = useState("Economy");

  useEffect(() => {
    dispatch(getSectorThunk());
    dispatch(getSubSectorThunk(selectedSector));
  }, []);

  const handleSectorChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSector(selectedValue);

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
          value={selectedSector}
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
