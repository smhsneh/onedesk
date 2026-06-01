import api from "../../services/axiosInstance";

const cgpaService = {
  getProgress: async () => {
    const response = await api.get(
      "/progress"
    );

    return response.data;
  },

  updateProgress: async (
    semesters
  ) => {
    const response = await api.put(
      "/progress",
      {
        semesters,
      }
    );

    return response.data;
  },
};

export default cgpaService;