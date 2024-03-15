import { createSlice } from "@reduxjs/toolkit";

const getAllTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "GET",
    });

    const data = await res.tickets.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch tickets");
  }
};

let tickets = getAllTickets();



const ticketsSlice = createSlice({
  name: "tickets",
  initialState: tickets,
  reducers: {
    createTicket(state, action) {
      state.tickets.push(action.payload);
    },
    deleteTicket(state, action) {
      const id = action.payload;
      return state.tickets.filter((ticket) => ticket.id !== id);
    },
    updateTicket(state, action) {
      const updatedTicket = action.payload;
      return state.map((ticket) =>
        ticket.id === updatedTicket.id ? updatedTicket : ticket
      );
    },
    getSpecificTicket(state, action) {
      const id = action.payload.id;
      const specificTicket = state.tickets.find((ticket) => ticket.id === id);
      return specificTicket;
    },
    getAllTickets(state, action) {
      return state.tickets;
    },
  },
});

export const ticketsActions = ticketsSlice.actions;

export default ticketsSlice;
