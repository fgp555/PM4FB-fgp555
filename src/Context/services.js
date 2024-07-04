const api_url = "http://localhost:3000/";

const apiServices = {
  getProductsService: async () => {
    const response = await fetch(api_url + "products");
    const products = await response.json();
    return products.data;
  },

  userRegisterService: async (data) => {
    const response = await fetch(api_url + "auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    return res.result;
  },

  userLoginService: async (data) => {
    const response = await fetch(api_url + "auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    localStorage.setItem("token", res.token);
    localStorage.setItem("userId", res.user.id);
    console.log({ login: true, userId: res.user.id, token: res.token });
    return res;
  },
  userGetOrdersService: async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const response = await fetch(api_url + "orders/" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await response.json();
    return res;
  },
  logoutService: async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    return true;
  },
};
export default apiServices;
