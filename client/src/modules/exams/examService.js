import api from "../../services/axiosInstance";

const examService = {
  getExams: async () => {
    const response =
      await api.get("/exams");
    return response.data;
  },

  createExam: async (
    data
  ) => {
    const response =
      await api.post(
        "/exams",
        data
      );

    return response.data;
  },

  deleteExam: async (id) => {
    const response =
      await api.delete(
        `/exams/${id}`
      );

    return response.data;
  },
};

export default examService;