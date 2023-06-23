import { SortingStyle } from './SortingStyle'
import { useState } from 'react'

export const Sorting = () => {
  const [flag, setFlag] = useState(Boolean)

  const togglePrice = () => {
    if (flag) {
      setFlag(false)
    } else {
      setFlag(true)
    }
  }

  return (
    <SortingStyle>
      <h2>Catalog</h2>
      <div className="sort_categories">
        <div>
          <div className="sort_categories_element">Genre</div>
          {/* <div>
            <input type="checkbox" />
            <p>Fiction</p>
          </div> */}
        </div>
        <div>
          <div
            className="sort_categories_element"
            onClick={() => togglePrice()}
          >
            Price
          </div>
          {flag ? (
            <div className="sort_price_regulator">
              <div className="sort_price_mark"></div>
              <div className="sort_band">
                <div className="sort_price_start"></div>
                <div className="sort_price_end"></div>
              </div>
              <div className="sort_price">
                <p className="sort_price_min">$ 6,00</p>
                <p className="sort_price_max">$ 6,00</p>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <div className="sort_categories_element">Sort by price</div>
          {/* <div>
                            <input type="checkbox" /><p>Fiction</p>

                        </div> */}
        </div>
      </div>
    </SortingStyle>
  )
}
