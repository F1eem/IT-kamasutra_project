let initialState =  {
    friendName: [
      { id: 1, name: "Sergey" },
      { id: 2, name: "Alisa" },
      { id: 3, name: "Igor" },
      { id: 4, name: "Igor" },
    ],
  }

let sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export {sideBarReducer}