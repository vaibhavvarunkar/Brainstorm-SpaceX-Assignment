import React from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import { Option } from '../../../../service/models';

interface FilterProps{
    options:Option[]
    selected:MultiValue<Option> | SingleValue<Option>
    handleChange:(item:MultiValue<Option> | SingleValue<Option>) => void
    placeholder:string
    isMulti:boolean
}

const Filter: React.FC<FilterProps> = (props) => {
    return (
        <>
            <Select
                options={props.options}
                value={props.selected}
                onChange={(e) => props.handleChange(e)}
                isMulti={props.isMulti}
                placeholder={props.placeholder}
                styles={{
                    container: (provided) => ({
                      ...provided,
                      width: '300px',
                      margin:"10px 0"
                    }),
                  }}
            />
        </>
    );
};

export default Filter;
