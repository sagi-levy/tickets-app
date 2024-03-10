import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import { deleteTicket } from '../Store/ticketActions'; // Import your action creator

const DeleteBlock = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTicket(id)); // Dispatch the action with the ticket ID
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
