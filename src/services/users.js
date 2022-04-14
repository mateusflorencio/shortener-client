import Api from "./api";

const UserService = {
    register: (params) => Api.post("/users/register", params),
    login: async (params) => {
        const response = await Api.post("/users/login", params);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token).replace("\"", ""));
    },
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user")

    }
};

export default UserService;