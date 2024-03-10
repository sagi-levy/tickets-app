import TicketCard from "./(components)/TicketCard";
import EditTicketForm from "./(components)/EditTicketForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "./Store/ticketActions";
import React, { useEffect } from "react";

const Dashboard = async () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(fetchTickets()); // Dispatch action to fetch tickets when the component mounts
  }, [dispatch]);
  // Make sure we have tickets needed for production build.
  if (!tickets) {
    return <p>No tickets.</p>;
  }

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div>
      {" "}
      <div>Dashboard</div>
      <div className="p-5">
        <div>
          {tickets &&
            uniqueCategories?.map((uniqueCategory, categoryIndex) => (
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
