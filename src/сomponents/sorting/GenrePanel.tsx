import { GenrePanelStyle } from "./GenrePanelStyle";
import defaultimg from "../../pablic/Default.svg";
import default1img from "../../pablic/Default1.svg";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import {
  SwitchSortGanreOn,
  SwitchSortGanreOff,
} from "../../store/Slice/SortingSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IGenrePanel {
  genre: string;
  switch: boolean;
  sorting: string
}

export const GenrePanel = (props: IGenrePanel) => {
  const minPrice = useAppSelector((state) => state.sorting.sliderMin)
  const maxPrice = useAppSelector((state) => state.sorting.sliderMax)
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <GenrePanelStyle>
      {!props.switch ? (
        <img
          src={defaultimg}
          alt=""
          onClick={() => {
            dispatch(SwitchSortGanreOn(props.genre || searchParams.get("genre")));
            navigate({
              search: `genre=${props.genre}&minprice=${minPrice}&maxprice=${maxPrice}&sort=${props.sorting}`
            })
          }}
        />
      ) : (
        <img
          src={default1img}
          alt=""
          onClick={() => {
            dispatch(SwitchSortGanreOff(props.genre));
            navigate({
              search: `genre=${""}&minprice=${minPrice}&maxprice=${maxPrice}&sort=${props.sorting}`
            })
          }}
        />
      )}
      <span>{props.genre}</span>
    </GenrePanelStyle>
  );
};
