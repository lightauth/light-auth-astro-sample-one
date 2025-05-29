import { CreateLightAuthClient } from "@light-auth/astro/client";

export const { getAuthSession, getUser, signIn, signOut } = CreateLightAuthClient();
