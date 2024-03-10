// Store/reducers/ticketReducer.js
const initialState = {
  tickets: [],
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        tickets: action.payload,
      };
    case 'ADD_TICKET':
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    case 'DELETE_TICKET':
      return {
        ...state,
        tickets: state.tickets.filter(ticket => ticket._id !== action.payload),
      };
    // Add more cases for other CRUD operations
    default:
      return state;
  }
};

export default ticketReducer;
