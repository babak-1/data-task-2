import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { useState } from "react";
import { setSelectedCountryRedux } from "../../store/reducers/countriesReducer";

const CountryFilter = () => {
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countries);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedCountryRedux = selectedCountries.join(";");
  dispatch(setSelectedCountryRedux(selectedCountryRedux));
  console.log(selectedCountryRedux);

  const handleCheckboxChange = (item) => {
    if (selectAll) {
      setSelectedCountries([]);
      setSelectAll(false);
    } else {
      if (selectedCountries.includes(item)) {
        setSelectedCountries((prevSelected) =>
          prevSelected.filter((country) => country !== item)
        );
      } else {
        setSelectedCountries((prevSelected) => [...prevSelected, item]);
      }
    }
  };

  const handleSelectAllChange = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setSelectedCountries(selectAll ? [] : countryData.country);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className={style.container}>
      <h3 className={style.headding}>Country</h3>
      <div className={style.optionCont}>
        <div className={style.optionHeader} onClick={handleMenuToggle}>
          <input
            type="text"
            className={style.optionHeaderInput}
            value={selectedCountries.join(";")}
            readOnly
          />
          <div className={style.arrow}>&#9660;</div>
        </div>
        {menuOpen && (
          <ul className={style.ul}>
            <li className={style.li}>
              <span> Hamısı seç</span>{" "}
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectAll}
              />
            </li>
            {countryData.country.map((item, index) => (
              <li className={style.li} key={index}>
                <span> {item}</span>{" "}
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(item)}
                  checked={selectedCountries.includes(item)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CountryFilter;
