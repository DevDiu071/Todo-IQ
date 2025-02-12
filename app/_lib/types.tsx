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
  setDateOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setSwitchCategories: Dispatch<SetStateAction<boolean>>;
  openCategoryItemModal: boolean;
  setOpenCategoryItemModal: Dispatch<SetStateAction<boolean>>;
  handleCategoryItemForm: () => void;
  handleOpenTaskInputModal: () => void;
  handleCloseOverlay: () => void;
  handleDateChange: (date: Date | null) => void;
}
