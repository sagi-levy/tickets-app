// ticketActions.js
import { NextResponse } from "next/server";

// Action creator to fetch all tickets
export const fetchTickets = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets");
      if (!res.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await res.json();
      dispatch({ type: "FETCH_TICKETS_SUCCESS", payload: data.tickets });
    } catch (error) {
      dispatch({ type: "FETCH_TICKETS_FAILURE", payload: error.message });
    }
  };
};

// Action creator to create a new ticket
export const createTicket = (formData) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/api/Tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
      dispatch(fetchTickets()); // Refetch tickets after creating a new one
    } catch (error) {
      dispatch({ type: "CREATE_TICKET_FAILURE", payload: error.message });
    }
  };
};

// Action creator to update a ticket
export const updateTicket = (id, formData) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
      dispatch(fetchTickets()); // Refetch tickets after updating
    } catch (error) {
      dispatch({ type: "UPDATE_TICKET_FAILURE", payload: error.message });
    }
  };
};

// Action creator to delete a ticket
export const deleteTicket = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete ticket");
      }
      dispatch(fetchTickets()); // Refetch tickets after deleting
    } catch (error) {
      dispatch({ type: "DELETE_TICKET_FAILURE", payload: error.message });
    }
  };
};
export const fetchTicketById = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch ticket");
      }
      const data = await res.json();
      dispatch({ type: "FETCH_TICKET_SUCCESS", payload: data.foundTicket });
    } catch (error) {
      dispatch({ type: "FETCH_TICKET_FAILURE", payload: error.message });
    }
  };
};
