// import { toast } from "react-toastify";
import toast from "react-hot-toast";

export const toastSuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    duration: 4000,
  });
};

export const toastError = (message) => {
  toast.error(message, {
    position: "top-center",
    duration: 4000,
  });
};

export const toastWarning = (message) => {
  toast.warning(message, {
    position: "top-center",
    duration: 4000,
  });
};

export const toastInfo = (message) => {
  toast.info(message, {
    position: "top-center",
    duration: 4000,
  });
};
