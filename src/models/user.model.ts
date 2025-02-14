export type User = {
  memberId: number;
  name: string;
  birthdate: Date;
  sex: string;
  mode: string;
  occupation: string;
  interests: string[];
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
  value: string | Date;
  canedit: boolean;
}
