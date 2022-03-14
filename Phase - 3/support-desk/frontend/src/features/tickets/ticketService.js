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

//Get All Tickets of the User

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

//Get a particular ticket

const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      authorization: token,
    },
  };

  const response = await axios.get(API_URL + ticketId, config);
  // console.log(response.data);

  return response.data;
};

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
};

export default ticketService;
