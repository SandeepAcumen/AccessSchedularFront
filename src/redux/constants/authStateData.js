export let authStateData = {
  loading: false,
  error: false,
  success: false,
  message: "",
  accessToken: null,
};

if (localStorage.getItem("accessToken")) {
  authStateData = {
    ...authStateData,
    accessToken: localStorage.getItem("accessToken"),
  };
}
