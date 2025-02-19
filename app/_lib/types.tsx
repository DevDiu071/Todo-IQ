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
  vitalTaskView: Task | null;
  setVitalTaskView: Dispatch<SetStateAction<Task | null>>;
  myTaskView: Task | null;
  setMyTaskView: Dispatch<SetStateAction<null | Task>>;
  selectedTaskId: number | null;
  setSelectedTaskId: Dispatch<SetStateAction<number | null>>;
  setSelectedVitalId: Dispatch<SetStateAction<number | null>>;
  selectedVitalId: number | null;
  handleCategoryItemForm: () => void;
  handleOpenTaskInputModal: () => void;
  handleCloseOverlay: () => void;
  handleDateChange: (date: Date | null) => void;
  handleCheckBox: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  vital: boolean;
  completed: boolean;
  created_at: string;
  taskcategories: {
    categoryvalues: {
      value: string;
      categories: {
        name: string;
      };
    };
  }[];
}

export interface TaskView {
  tasks: Task[];
}
