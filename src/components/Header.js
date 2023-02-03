import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { dateSelector } from '../store/galleryData/galleryDataSelectors';
import { setDate } from '../store/galleryData/galleryDataSlice';

function Header() {
  const dispatch = useDispatch();
  const date = useSelector(dateSelector);

  return (
    <div className="d-flex flex-column align-items-center py-4 sticky-top bg-light">
      <h2 className="mb-4">Gallery React app</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Please choose the date"
          value={date}
          onChange={(value) => {
            dispatch(setDate(value.toString()));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Header;
