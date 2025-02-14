import { ReactNode, Dispatch, SetStateAction } from "react";

export interface ContextTypes {
  children: ReactNode;
}

export interface TaskInputTypes {
  openTaskInputModal: boolean;
  setOpenTaskInputModal: Dispatch<SetStateAction<boolean>>;
  switchCategories: boolean;
  openOverlay: boolean;
  selectedDate: Date | null;
  dateOpen: boolean;
  selectedCheckbox: null | string;
  setSelectedCheckbox: Dispatch<SetStateAction<string | null>>;
  setDateOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setSwitchCategories: Dispatch<SetStateAction<boolean>>;
  openCategoryItemModal: boolean;
  setOpenOverlay: Dispatch<SetStateAction<boolean>>;
  setOpenCategoryItemModal: Dispatch<SetStateAction<boolean>>;
  handleCategoryItemForm: () => void;
  handleOpenTaskInputModal: () => void;
  handleCloseOverlay: () => void;
  handleDateChange: (date: Date | null) => void;
  handleCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
