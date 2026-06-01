import api from "./axiosInstance";

const userService = {
  deleteAccount: async () => {
    const response =
      await api.delete(
        "/auth/delete-account"
      );

    return response.data;
  },
};

export default userService;