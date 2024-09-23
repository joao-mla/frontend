import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();

    if (!token) {
        return null;
    }

  if (tokenDuration < 0) {
    return 'EXPIRED';
  } 

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLeader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth?mode=signup");
  }

  return null;
}

export function getTokenDuration() {
    const storedExpriationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpriationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}