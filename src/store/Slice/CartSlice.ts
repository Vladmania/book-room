import { createSlice } from "@reduxjs/toolkit";
import {
  addInCart,
  getCart,
  deleteFromCart,
  editCartQuantity,
  shoppingProduct
} from "../../api/ServerRequests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface IProductInCart {
  id: number;
  userId: number;
  productId: number;
  name: string;
  autor: string;
  cover: string;
  price: number;
  quantity: number;
}
export interface IInitialState {
  product: IProductInCart[];
  successfulPurchase: boolean;
  loading: boolean;
  error: boolean;
}

interface IEditCart {
  id: number;
  quantity: number;
}
export interface IProps {
  userId: number;
  productId: number;
  name: string;
  autor: string;
  cover: string;
  price: number;
  quantity: number;
}

const initialState: IInitialState = {
  product: [],
  successfulPurchase: false,
  loading: false,
  error: false,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    modalSuccessfulPurchase: (state, action) => {
      state.successfulPurchase = action.payload
    },
    deleteProduct: (state, action) => ({
      ...state,
      product: state.product.filter((e) => e.id !== action.payload),
    }),
    increaseQuantity: (state, action) => ({
      ...state,
      product: state.product.map((prod) => {
        if (prod.id === action.payload) {
          return { ...prod, quantity: prod.quantity + 1 };
        }
        return prod;
      }),
    }),
    decreaseQuantity: (state, action) => ({
      ...state,
      product: state.product.map((prod) => {
        if (prod.id === action.payload) {
          return { ...prod, quantity: prod.quantity - 1 };
        }
        return prod;
      }),
    }),
  },
  extraReducers: (bulder) => {
    bulder.addCase(thankaddInCart.pending, (state) => {
      state.loading = true;
    });
    bulder.addCase(thankaddInCart.fulfilled, (state, actions) => {
      state.product = actions.payload;
      state.loading = false;
    });
    bulder.addCase(thankaddInCart.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    bulder.addCase(thankGetProductCart.pending, (state) => {
      state.loading = true;
    });
    bulder.addCase(thankGetProductCart.fulfilled, (state, actions) => {
      state.product = actions.payload;
      state.loading = false;
    });
    bulder.addCase(thankGetProductCart.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    bulder.addCase(thankShoppingProduct.pending, (state) => {
      state.loading = true;
    });
    bulder.addCase(thankShoppingProduct.fulfilled, (state, actions) => {
      state.product = [];
      state.loading = false;
    });
    bulder.addCase(thankShoppingProduct.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { deleteProduct, decreaseQuantity, increaseQuantity, modalSuccessfulPurchase } =
  CartSlice.actions;

export const thankaddInCart = createAsyncThunk<IProductInCart[], IProps>(
  "cart/thankaddInCart",
  async ({ ...data }) => {
    try {
      const respons = await addInCart({ ...data });
      return respons.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankGetProductCart = createAsyncThunk<IProductInCart[], string>(
  "cart/thankGetProductCart",
  async (token) => {
    try {
      const respons = await getCart(token);
      return respons.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankDeleteProduct = createAsyncThunk<IProductInCart[], number>(
  "cart/thankDeleteProduct",
  async (id) => {
    try {
      const respons = await deleteFromCart(id);
      return respons.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankShoppingProduct = createAsyncThunk<IProductInCart[]>(
  "cart/thankShoppingProduct",
  async () => {
    try {
      const respons = await shoppingProduct();
      return respons.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankIncreaseQuantityInCart = createAsyncThunk<
  IProductInCart[],
  IEditCart
>(
  "cart/thankIncreaseQuantityInCart",
  async ({ id, quantity }, { dispatch }) => {
    try {
      const respons = await editCartQuantity(id, quantity);
      dispatch(increaseQuantity(id));
      return respons.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const thankDecreaseQuantityInCart = createAsyncThunk<
  IProductInCart[],
  IEditCart
>(
  "cart/thankDecreaseQuantityInCart",
  async ({ id, quantity }, { dispatch }) => {
    try {
      const respons = await editCartQuantity(id, quantity);
      dispatch(decreaseQuantity(id));
      return respons.data;
    } catch (e) {
      console.log(e);
    }
  }
);
