import React from 'react';
import { TextareaAutosize } from '@mui/material';

 

export default function Textarea(){
    return(
      <TextareaAutosize
      aria-label="minimum hight"
      minRows={15}
      placeholder=" Type a content here..."
      color='black'
      variant="outlined"
      />
    );
}