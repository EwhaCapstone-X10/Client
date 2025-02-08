export type User = {
  name: string;
  birthdate: string;
  gender: string;
  job: string;
  hobby: string[];
  mode: string;
};

export type Gender = {
  id: number;
  type: string;
  isClicked: boolean;
};

export interface InfoItem {
  id: number;
  title: string;
  value: string;
  canedit: boolean;
}
