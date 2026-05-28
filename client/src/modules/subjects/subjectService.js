const subjectService = {
  getSubjects: async () => {
    return [];
  },

  createSubject: async (data) => {
    return data;
  },

  updateSubject: async (
    id,
    data
  ) => {
    return {
      id,
      ...data,
    };
  },

  deleteSubject: async (id) => {
    return id;
  },
};

export default subjectService;