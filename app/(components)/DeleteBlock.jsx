import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import ticketsActions from "../Store/ticketsSlice";
import { deleteTicket } from "../Store/ticketActions";
const DeleteBlock = ({ id }) => {
  const handleDelete = () => {
    deleteTicket();
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={handleDelete}
    />
  );
};

export default DeleteBlock;
