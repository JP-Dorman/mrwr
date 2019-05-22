console.clear();

// Action creators
const createPolicy = (name, amount) => {
  return { // Action
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  }
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  }
};

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amount
    }
  }
};


// Reducers - set default of oldListOfClaims to empty array in case undefined
const claimsHistory = (oldListOfClaims = [], action) => {
   if(action.type === 'CREATE_CLAIM') {
    return[...oldListOfClaims, action.payload]
  }

  return oldListOfClaims;
};


const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amount;
  }
  else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};


const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
     return [...listOfPolicies, action.payload.name];
  }
  else if(action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }

  return listOfPolicies;
};


/*========== Redux magic ==========*/
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// Create magic store object that holds our entire application so far
const store = createStore(ourDepartments);

// Create a new action to be handled by the application
const action = createPolicy('Jason', 20);

// dispatch the action to all the reducers for processing
store.dispatch(action);


// See what we did when our action was processed
console.log(store.getState());



store.dispatch(createPolicy('Alex', 40));
store.dispatch(createPolicy('Billy', 10));
store.dispatch(createPolicy('Gary', 30));
console.log(store.getState());

store.dispatch(createClaim('Alex', 120));
console.log(store.getState());

store.dispatch(deletePolicy('Billy'));
console.log(store.getState());
