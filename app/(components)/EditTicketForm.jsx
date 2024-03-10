"use client";
// EditTicketForm.js

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updateTicket, createTicket } from "../Store/ticketActions"; // Import the action creator

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: EDITMODE ? ticket.title : "",
    description: EDITMODE ? ticket.description : "",
    priority: EDITMODE ? ticket.priority : 1,
    progress: EDITMODE ? ticket.progress : 0,
    status: EDITMODE ? ticket.status : "not started",
    category: EDITMODE ? ticket.category : "Hardware Problem",
  });
  const categories = [
    "Hardware Problem",
    "Software Problem",
    "Application Development",
    "Project",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      try {
        // Dispatch the action to update the ticket
        await dispatch(updateTicket(ticket._id, formData));
      // or like this ? updateTicket(ticket._id, formData)
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // Dispatch the action to update the ticket
        await dispatch(ticketsActions.createTicket({ data: formData }));
  // or like this ? createTicket(ticket._id, formData)
        // Refresh and navigate to home page
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/2">
        <h3>{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          required
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>Priority</label>
        <div>
          {[1, 2, 3, 4, 5].map((priority) => (
            <div key={priority}>
              <input
                type="radio"
                name="priority"
                value={priority}
                checked={formData.priority === priority}
                onChange={handleChange}
              />
              <label>{priority}</label>
            </div>
          ))}
        </div>
        <label>Progress</label>
        <input
          type="range"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          {["not started", "started", "done"].map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
        <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default EditTicketForm;
