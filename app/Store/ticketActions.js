// ticketActions.js
import { NextResponse } from "next/server";
import { ticketsActions } from "../Store/ticketsSlice";
export const createNewTicket = (formData) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await res.json();

      dispatch(ticketsActions.createTicket(data));
    } catch (error) {
      throw new Error("Failed to fetch tickets");
      // dispatch({ type: "FETCH_TICKETS_FAILURE", payload: error.message });
    }
  };
};
export const deleteTicket = (ticketID) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        method: "DELETE",
        body: JSON.stringify(ticketID),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await res.json();

      dispatch(ticketsActions.deleteTicket(ticketID));
    } catch (error) {
      throw new Error("Failed to fetch tickets");
      // dispatch({ type: "FETCH_TICKETS_FAILURE", payload: error.message });
    }
  };
};
export const updateTicket = (ticket) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        method: "PUT",
        body: JSON.stringify(ticket),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await res.json();
      dispatch(ticketsActions.updateTicket(ticket));
    } catch (error) {
      throw new Error("Failed to fetch tickets");
      // dispatch({ type: "FETCH_TICKETS_FAILURE", payload: error.message });
    }
  };
};
export const getSpecificTicket = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        method: "GET",
        body: JSON.stringify(id),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await res.json();
      dispatch(ticketsActions.getSpecificTicket(id));
    } catch (error) {
      throw new Error("Failed to fetch tickets");
      // dispatch({ type: "FETCH_TICKETS_FAILURE", payload: error.message });
    }
  };
};
export const getAllTickets = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        method: "GET",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await res.json();
      dispatch(ticketsActions.getAllTickets());
    } catch (error) {
      throw new Error("Failed to fetch tickets");
      // dispatch({ type: "FETCH_TICKETS_FAILURE", payload: error.message });
    }
  };
};
