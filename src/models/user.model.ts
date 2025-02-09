export type User = {
  memberId: number;
  name: string;
  birthdate: string;
  sex: string;
  mode: string;
  occupation: string;
  hobby: string[];
};

export type Gender = {
  id: number;
  title: string;
  type: string;
  isClicked: boolean;
};

export interface InfoItem {
  id: number;
  title: string;
  value: string;
  canedit: boolean;
}
