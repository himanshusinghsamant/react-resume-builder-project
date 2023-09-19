// actions.js
export const fetchDataFromLocalStorage = () => (dispatch) => {
	const storedData = JSON.parse(localStorage.getItem("myData")) || [];
	dispatch({ type: "SET_LOCAL_STORAGE_DATA", payload: storedData });
};

export const saveDataToLocalStorage = (data) => (dispatch) => {
	localStorage.setItem("myData", JSON.stringify(data));
};

//   export const deleteDataFromLocalStorage = (id) => (dispatch, getState) => {
//     dispatch(deleteData(id)); // Dispatch the action to remove from Redux store
//     const updatedData = getState().data.data; // Get updated data
//     localStorage.setItem('myData', JSON.stringify(updatedData));
//   };
