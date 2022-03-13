import axios from "axios";

const API_URL = "/api/tickets/";

//Create new ticket

const createTicket = async (ticektData, token) => {
  const config = {
    headers: {
      authorization: token,
    },
  };

  const response = await axios.post(API_URL, ticektData, config);

  return response.data;
};

//Get User Ticket

const getTickets = async (token) => {
  const config = {
    headers: {
      authorization: token,
    },
  };

  const response = await axios.get(API_URL, config);
  // console.log(response.data);

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
};

export default ticketService;
