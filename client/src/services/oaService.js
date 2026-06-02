import api from "./axiosInstance";

const oaService = {
  getOADeadlines: async () => {
    const response = await api.get(
      "/oa-deadlines"
    );

    return response.data;
  },

  createOADeadline: async (
    data
  ) => {
    const response = await api.post(
      "/oa-deadlines",
      data
    );

    return response.data;
  },

  updateOADeadline: async (
    id,
    status
  ) => {
    const response =
      await api.patch(
        `/oa-deadlines/${id}`,
        { status }
      );

    return response.data;
  },

  deleteOADeadline: async (
    id
  ) => {
    const response =
      await api.delete(
        `/oa-deadlines/${id}`
      );

    return response.data;
  },
};

export default oaService;