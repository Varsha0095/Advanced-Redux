import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(
          "https://advancedredux-aa5ff-default-rtdb.firebaseio.com/cart.json"
        );
        if(!response.ok){
          throw new Error('Error in fetching details of cart');
        }
        const data = await response.json();
        return data;
      };
      try{
        const cartData = await fetchData();
        dispatch(cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
        }));
      }catch(error){
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Error fetching cart data!",
          })
        );
      }
    };
  };
  //action creator thunk
  export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!",
        })
      );
      //for handling error
      const sendRequest = async () => {
        const response = await fetch(
          `https://advancedredux-aa5ff-default-rtdb.firebaseio.com/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify({
              items: cart.items,
              totalQuantity: cart.totalQuantity,
            }),
          }
        );
        if (!response) {
          throw new Error("Error sending cart data");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Successful !",
            message: "Cart data sent successfully !",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Error sending cart data!",
          })
        );
      }
    };
  };


// import { uiActions } from "./ui-slice";
// import { cartActions } from "./cart-slice";

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://advancedredux-aa5ff-default-rtdb.firebaseio.com/cart.json"
//       );

//       if (!response.ok) {
//         throw new Error("error fetching cart data");
//       }
//       const data = await response.json();

//       return data;
//     };
//     try {
//       const cartData = await fetchData();
//       dispatch(cartActions.replaceCart(cartData));
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Error fetching cart data!",
//         })
//       );
//     }
//   };
// };

// //action creator thunk
// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending Cart Data!",
//       })
//     );
//     //for handling error
//     const sendRequest = async () => {
//       const response = await fetch(
//         `https://advancedredux-aa5ff-default-rtdb.firebaseio.com/cart.json`,
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );
//       if (!response) {
//         throw new Error("Error sending cart data");
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Successful !",
//           message: "Cart data sent successfully !",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Error sending cart data!",
//         })
//       );
//     }
//   };
// };

