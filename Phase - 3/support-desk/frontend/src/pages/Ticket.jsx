import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTicket, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Ticket = () => {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();

  const params = useParams();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTicket(ticketId));
    //eslint-disable-next-line
  }, [ticketId, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something went wrong!</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        {" "}
        <BackButton url="/tickets" />
        <h2>
          Ticket ID: {ticket._id}{" "}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString("en-IN")}
        </h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
    </div>
  );
};

export default Ticket;
