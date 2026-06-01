import api from "../../services/axiosInstance";

const assignmentService = {
  getAssignments: async () => {
    const response = await api.get(
      "/assignments"
    );

    return response.data;
  },

  createAssignment: async (
    data
  ) => {
    const response = await api.post(
      "/assignments",
      data
    );

    return response.data;
  },

  toggleAssignment: async (id) => {
  const response = await api.patch(
    `/assignments/${id}`
  );

  return response.data;
},

  deleteAssignment: async (
    id
  ) => {
    const response = await api.delete(
      `/assignments/${id}`
    );

    return response.data;
  },
};

export default assignmentService;