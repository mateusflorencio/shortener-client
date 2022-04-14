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
    },
    delete: async () => {
        await Api.delete("/users", {
            headers: {
                'x-acess-token': localStorage.getItem("token").replace("\"", "")
            }
        });
        localStorage.removeItem("token");
        localStorage.removeItem("user")
    },
    update: async (params) => {
        await Api.put("/users", (params), {
            headers: {
                'x-acess-token': localStorage.getItem("token").replace("\"", "")
            }
        })
    }
};

export default UserService;