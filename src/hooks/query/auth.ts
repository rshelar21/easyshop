import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "../../lib/axios";
import { IRegisterFormValues, ILoginFormValues } from "../../interfaces/forms";

export const fetchGithubUser = async () => {
  const res = await fetch("https://api.github.com/users/kiranm27");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  const user = {
    name: data?.name || "",
    bio: data?.bio || "",
  };
  return user;
};

export const useGithubUser = () => {
  return useQuery({
    queryKey: ["githubUser"],
    queryFn: fetchGithubUser,
  });
};

export const registerUser = async (values: IRegisterFormValues) => {
  try {
    console.log("values", values);
    const res = await axios.post("/register", values);
    console.log(res, "res");
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};

export const loginUser = async (values: ILoginFormValues) => {
  try {
    console.log("values", values);
    const res = await axios.post("/login", values);
    console.log(res, "res");
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.get("/logout");
    return res.data;
  } catch (error: any) {
    console.log("error", error);
    if (error) {
      throw new Error(error.response.data.message);
    }
  }
};
