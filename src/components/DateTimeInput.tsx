import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Grid } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import IBasicDatePicker from '../interfaces/props/basicDatePickerProps';
import dayjs, { Dayjs } from 'dayjs';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: "#784CF4",
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: "#784CF4",
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: "#784CF4",
        },
        '&:hover fieldset': {
          borderColor: "#784CF4",
        },
        '&.Mui-focused fieldset': {
          borderColor: "#784CF4",
        },
      },
    },
  })(TextField);

export default function BasicDatePicker({setTimeFunc, setDateFunc, date, time} : IBasicDatePicker) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container spacing={1} justifyContent="space-between" alignItems="center">
        <Grid item xs={6}>
            <DatePicker
            label="Date"
            value={date}
            onChange={setDateFunc}
            renderInput={(params) => <CssTextField name="date" focused {...params} />}
            />        
        </Grid>
        <Grid item xs={6}>
            <TimePicker
                label="Time"
                value={time}
                onChange={setTimeFunc}
                renderInput={(params) => <CssTextField focused {...params} />}
            />
        </Grid>
        </Grid>
    </LocalizationProvider>
  );
}