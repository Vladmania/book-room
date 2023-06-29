import { GenrePanelStyle } from './GenrePanelStyle'
import defaultimg from '../../pablic/Default.svg'
import default1img from '../../pablic/Default1.svg'
import { useAppDispatch } from '../../store/Store'
import { useAppSelector } from '../../store/Store'
import {thankSortProductGanre, SwitchSortGanreOn, SwitchSortGanreOff} from '../../store/Slice/SortingSlice'
import { thankGetProduct} from '../../store/Slice/ProductSlice'

interface IGenrePanel {
  genre: string;
  switch: boolean
}

export const GenrePanel = (props: IGenrePanel) => {
  const currentPage = useAppSelector(state => state.product.currentPage)
  const dispatch = useAppDispatch()

  return (
    <GenrePanelStyle>
     {!props.switch ? <img
        src={defaultimg}
        alt=""
        onClick={() => {
            dispatch(SwitchSortGanreOn(props.genre))
            dispatch(thankSortProductGanre({genre: props.genre, currentPage})) 
        }}
      />: <img
      src={default1img }
      alt=""
      onClick={() => {
        dispatch(SwitchSortGanreOff(props.genre))
        dispatch(thankGetProduct(currentPage))
      }}
    />}
      <span>{props.genre}</span>
    </GenrePanelStyle>
  )
}
