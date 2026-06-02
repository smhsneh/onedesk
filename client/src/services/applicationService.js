import api from "./axiosInstance";

const applicationService = {
  getApplications: async () => {
    const response = await api.get(
      "/applications"
    );

    return response.data;
  },

  createApplication: async (
    data
  ) => {
    const response = await api.post(
      "/applications",
      data
    );

    return response.data;
  },

  updateApplication: async (
    id,
    status
  ) => {
    const response =
      await api.patch(
        `/applications/${id}`,
        { status }
      );

    return response.data;
  },

  deleteApplication: async (
    id
  ) => {
    const response =
      await api.delete(
        `/applications/${id}`
      );

    return response.data;
  },
};

export default applicationService;