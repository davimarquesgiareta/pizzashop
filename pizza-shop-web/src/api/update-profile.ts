import { api } from "@/lib/axios";

export interface UpdateProfilebody {
  name: string;
  description: string | null;
}

export async function updateProfile({ name, description }: UpdateProfilebody) {
  await api.put("/profile", { name, description });
}
