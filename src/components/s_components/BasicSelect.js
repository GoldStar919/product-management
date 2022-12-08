import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from "react";

export default function BasicSelect({ title = '', options = [], value, onSelected = () => {}, register=()=>{}, name, ...props }) {

    return (
        <Box className="mx-3">
            <FormControl className="w-full">
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    {...register(name, { required: true })}
                    id="demo-simple-select"
                    value={value}
                    label={title}
                    onChange={(event)=>{onSelected(event.target.value)}}
                >
                    {options.map((item, itemIndex, self) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </Box >
    );

};