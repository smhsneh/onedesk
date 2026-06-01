import api from "../../services/axiosInstance";

const calendarService = {
  getEvents: async () => {
    const response =
      await api.get(
        "/calendar"
      );

    return response.data;
  },

  createEvent: async (
    data
  ) => {
    const response =
      await api.post(
        "/calendar",
        data
      );

    return response.data;
  },

  deleteEvent: async (
    id
  ) => {
    const response =
      await api.delete(
        `/calendar/${id}`
      );

    return response.data;
  },
};

export default calendarService;