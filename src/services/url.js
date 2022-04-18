import Api from "./api";

const UrlService = {
    getAll: () => Api.get("/shortener", {
        headers: {
            "x-acess-token": localStorage.getItem("token").replace("\"", "")
        }
    }),
    create: (params) => Api.post("/shortener/new", params, {
        headers: {
            "x-acess-token": localStorage.getItem("token").replace("\"", "")
        }
    }),
    delete: async (params) => await Api.delete(`/shortener/${params}`, {
        headers: {
            "x-acess-token": localStorage.getItem("token").replace("\"", "")
        }
    }),
    update: async (req) => await Api.put(`/shortener/${req.params}`, req.body, {
        headers: {
            "x-acess-token": localStorage.getItem("token").replace("\"", "")
        }
    })
};


export default UrlService;