import api from "./axiosInstance";

const resourceService = {
  getResources: async () => {
    const response = await api.get(
      "/resources"
    );

    return response.data;
  },

  createResource: async (
    data
  ) => {
    const response = await api.post(
      "/resources",
      data
    );

    return response.data;
  },

  deleteResource: async (
    id
  ) => {
    const response =
      await api.delete(
        `/resources/${id}`
      );

    return response.data;
  },
};

export default resourceService;