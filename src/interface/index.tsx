import { InteractionManager } from "react-native";

export interface AuthStackParams {
  SignIn: string;
}

export interface LoginCredientialsSchema {
  email:string;
  password:string
} 

export interface InputStyles {
  width: number;
  color: string;
  borderRadius: number;
  justifyContent: string;
  alignItems: string;
  height: number;
  textAlignVertical: string;
  fontWeight: string;
  paddingLeft: number;
  fontFamily: string;
  fontSize: any;
  backgroundColor: string;
  borderWidth: number;
  borderColor: string;
}