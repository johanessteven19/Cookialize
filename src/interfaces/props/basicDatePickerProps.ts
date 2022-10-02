import React from "react";
import { Dayjs } from 'dayjs';

interface IBasicDatePicker {
  setDateFunc: (newValue: Dayjs | null) => void
  setTimeFunc: (newValue: Dayjs | null) => void
  date : Dayjs | null;
  time: Dayjs | null;
}

export default IBasicDatePicker;