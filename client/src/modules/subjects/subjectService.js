import api from "../../services/axiosInstance";

const subjectService = {
  getSubjects: async () => {
    const response = await api.get("/subjects");
    return response.data;
  },

  createSubject: async (data) => {
    const response = await api.post(
      "/subjects",
      data
    );

    return response.data;
  },

  deleteSubject: async (id) => {
    const response = await api.delete(
      `/subjects/${id}`
    );

    return response.data;
  },
};

export default subjectService;