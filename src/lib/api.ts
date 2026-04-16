const BASE_URL = "http://192.168.1.35:3000";

export const api = {
  async login(data: { mobileNo: string; password: string }) {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Invalid credentials");

    return res.json();
  },

  async selectInstitution(token: string, institutionId: string) {
    const res = await fetch(`${BASE_URL}/api/auth/select-institution`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ institutionId }),
    });

    if (!res.ok) throw new Error("Failed to select school");

    return res.json();
  },

  async me(token: string) {
    const res = await fetch(`${BASE_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Unauthorized");

    return res.json();
  },
};
