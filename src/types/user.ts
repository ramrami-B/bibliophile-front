export interface UserStateType {
  isLoggedIn: boolean | undefined;
  loading: boolean;
  isWordCloudLoading: boolean;
  wordCloudImageUrl: string | null;
  error: string | undefined;
  isNicknameExist: boolean;
  isFirst: boolean;
  user: UsersResponse;
}

export interface SignupRequest {
  nickname: string;
  email: string;
  gender: "MAN" | "WOMAN";
  birthday: string;
  classification: ClassificationType[];
  profileImage: string;
  oauthServerType: "KAKAO" | "GOOGLE" | "NAVER";
}

export interface UsersResponse {
  userId: number;
  email: string;
  nickname: string;
  gender: "MAN" | "WOMAN";
  birthday: string;
  classification: ClassificationType[];
  profileImage: string;
  oauthServerType: "KAKAO" | "GOOGLE" | "NAVER";
}

export interface NicknameResponse {
  exist: boolean;
}

export interface UpdateUserRequest {
  nickname: string;
  classification: ClassificationType[];
  profileImage: string;
}

export type ClassificationType =
  | "SOCIETY"
  | "FICTION"
  | "SCIENCE"
  | "ARTS"
  | "LANGUAGE"
  | "HISTORY";
