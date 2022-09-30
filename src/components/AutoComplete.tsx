import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { withStyles } from '@material-ui/core/styles';

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

export default function FreeSolo(props) {
  console.log(props)
  return (
      <Autocomplete
        fullWidth
        freeSolo
        id="tasks"
        disableClearable
        options={tasks.map((option) => option.title)}
        renderInput={(params) => (
          <CssTextField
            focused
            {...params}
            label="Add Tasks"
            value={props.value}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            onChange={props.onChange}
            fullWidth
          />
        )}
      />
  );
}

const tasks = [
  { title: 'Frying'},
  {title: 'Grilling'},
  {title: 'Prepping'},
  {title: 'Cooking'}
];
