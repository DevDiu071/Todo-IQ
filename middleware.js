import { auth } from "./app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: [
    "/dashboard",
    "/vital-task",
    "/my-task",
    "/task-categories",
    "/settings",
  ],
};
