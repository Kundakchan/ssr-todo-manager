export default defineNuxtRouteMiddleware((from, to) => {
  const accessToken = useCookie("accessToken").value;
  if (!accessToken) return navigateTo({ name: "auth" });
});
