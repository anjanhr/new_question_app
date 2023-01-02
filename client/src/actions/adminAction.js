import axios from "axios";
import cogoToast from "cogo-toast";

export const startGetAdminQuestion = (reDirect) => {
  return (dispatch) => {
    axios
      .get("/api/admin/questions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          cogoToast.error(response.data.error.message); // token altered
        } else if (response.data.notice) {
          cogoToast.error(response.data.notice); // token not given
        } else {
          dispatch(getAdminQuestion(response.data));
        }
      })
      .catch((error) => {
        cogoToast.error(error.message);
      });
  };
};

const getAdminQuestion = (questionData) => {
  return {
    type: "GET_ADMIN_QUESTION",
    payload: questionData,
  };
};

export const startGetFeedBackResponses = (questionId, reDirect) => {
  return (dispatch) => {
    axios
      .get(`/api/questions/${questionId}/feedback`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          cogoToast.error(response.data.error.message); // token altered
        } else if (response.data.notice) {
          cogoToast.error(response.data.notice); // token not given
        } else {
          reDirect(response.data);
        }
      })
      .catch((error) => {
        cogoToast.error(error.message);
      });
  };
};

export const startAnswerQuestion = (qtnId, formData, reDirect) => {
  return () => {
    axios
      .post(`/api/questions/${qtnId}/answertype`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          cogoToast.error(response.data.error.message); // token altered
        } else if (response.data.notice) {
          cogoToast.error(response.data.notice); // token not given
        } else {
          reDirect();
        }
      })
      .catch((error) => {
        cogoToast.error(error.message);
      });
  };
};

export const startPutQuestionRating = (qtnId, responses) => {
  return () => {
    axios
      .put(`/api/questions/${qtnId}/rating`, responses, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("myToken")}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          cogoToast.error(response.data.error.message); // token altered
        } else if (response.data.notice) {
          cogoToast.error(response.data.notice); // token not given
        } else {
        }
      })
      .catch((error) => {
        cogoToast.error(error.message);
      });
  };
};
