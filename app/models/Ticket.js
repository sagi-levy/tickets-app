import mongoose, { Schema } from "mongoose";
mongoose.connect("mongodb+srv://sagilevy1612:MongoDB-paintball@cluster0.o6lbx2w.mongodb.net/TicketsDB");
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
