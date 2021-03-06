/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserInfo
// ====================================================

export interface UserInfo_country {
  __typename: "Country";
  id: string;
  name: string;
  phonecode: string;
  shortname: string;
}

export interface UserInfo {
  __typename: "User";
  id: string;
  username: string;
  name: string;
  email: string;
  mobile: string;
  language: string | null;
  avatar: string | null;
  bio: string | null;
  country: UserInfo_country | null;
  is_follower: boolean;
  is_following: boolean;
}
