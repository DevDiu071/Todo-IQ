import { ReactNode, Dispatch, SetStateAction } from "react";

export interface ContextTypes {
  children: ReactNode;
}

export interface TaskInputTypes {
  openTaskInputModal: boolean;
  setOpenTaskInputModal: Dispatch<SetStateAction<boolean>>;
  switchCategories: boolean;
  setSwitchCategories: Dispatch<SetStateAction<boolean>>;
}
