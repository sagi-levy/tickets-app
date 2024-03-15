"use client";
import TicketCard from "./(components)/TicketCard";
import EditTicketForm from "./(components)/EditTicketForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "./Store/ticketActions";
import React, { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/Tickets", {
          method: "GET",
        });

        const data = await res.json();
        dispatch(fetchTickets(data)); // Assuming fetchTickets is an action creator
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      }
    };

    getAllTickets();
  }, [dispatch]);

  // Render loading state if tickets are not yet available
  if (!tickets) {
    return <p>Loading...</p>;
  }

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div>
      <div>Dashboard</div>
      <div className="p-5">
        <div>
          {uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
