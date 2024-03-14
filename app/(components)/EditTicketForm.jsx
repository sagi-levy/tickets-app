"use client";
import { useState } from "react"; // Import useState from the 'react' package
import Input from "C:/Users/sagil/OneDrive/שולחן העבודה/paintball-app-admin-september2023/paintballAppAdmin-main/fronted/paintball-app/src/components/common/input.jsx";
import { useRouter } from "next/navigation";

const EditTicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  const startingData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "software problem",
  };
  const categories = [
    "software problem",
    "machine problem",
    "hardware problem",
  ];
  if (EDITMODE) {
    startingData["title"] = ticket.title;
    startingData["description"] = ticket.description;
    startingData["priority"] = ticket.priority;
    startingData["progress"] = ticket.progress;
    startingData["status"] = ticket.status;
    startingData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const response = await fetch("/api/Tickets", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ formData }),
      });
      if (!response.ok) {
        throw new Error("failed to create ticket");
      }
    }
    router.push("/");
    router.refresh();

  };
  return (
    <div className=" flex justify-center">
      <form onSubmit={handleSubmit} method="post">
        <h3>{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3>
        <Input
          name={"title"}
          required={true}
          error={null}
          type={"text"}
          id={"title"}
          onChange={handleChange}
          value={formData.title}
        />
        <Input
          name={"description"}
          required={true}
          error={null}
          type={"text"}
          id={"description"}
          onChange={handleChange}
          value={formData.description}
          rows="5" // not working...
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {" "}
          {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div>
          <Input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <Input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <Input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <Input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <Input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <Input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <Input type="submit" className="btn max-w-xs" />
      </form>
    </div>
  );
};

export default EditTicketForm;
