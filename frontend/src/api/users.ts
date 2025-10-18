const API_URL = process.env.REACT_APP_API_URL;

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}

export async function createUser(user) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}
