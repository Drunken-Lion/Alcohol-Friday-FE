export interface Member {
  id: number;
  email: string;
  name: string;
  nickname?: string;
  phone: number;
  provider: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
