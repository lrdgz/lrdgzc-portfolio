import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";


const PortfolioNewForm = ({ onSubmit, loading }) => {

    const [ startDate, setStartDate] = useState(null);
    const [ endDate, setEndDate ] = useState(null);


    const { handleSubmit, register, setValue } = useForm();


    useEffect(() => {
        register({name: 'startDate'});
        register({name: 'endDate'});
    }, [register]);


    const handleDateChange = (dateType, setDate) => date =>{
        setValue(dateType, (date && new Date(date.setHours(0,0,0,0)).toISOString()) || date);
        setDate(date);
    }


    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        ref={register}
                        name="title"
                        type="text"
                        className="form-control"
                        id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                        ref={register}
                        name="company"
                        type="text"
                        className="form-control"
                        id="company" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        ref={register}
                        name="location"
                        type="text"
                        className="form-control"
                        id="location" />
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        ref={register}
                        name="jobTitle"
                        type="text"
                        className="form-control"
                        id="jobTitle" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea  
                        ref={register}
                        name="description"
                        type="text"
                        rows="5"
                        className="form-control"
                        id="description">
                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <div>
                        <DatePicker
                            showYearDropdown
                            selected={startDate}
                            onChange={handleDateChange('startDate', setStartDate)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <div>
                        <DatePicker
                            showYearDropdown
                            disabled={!endDate}
                            selected={endDate}
                            onChange={handleDateChange('endDate', setEndDate)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    {
                        endDate && 
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={ () => handleDateChange('endDate', setEndDate)(null) }
                        >
                            No End Date
                        </button>
                    }
                    {
                        !endDate && 
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={ () => handleDateChange('endDate', setEndDate)(new Date()) }
                        >
                            Set End Date
                        </button>
                    }
                </div>
    
                { 
                    loading && 'Creating...'
                }
                { !loading &&
                    <button
                        onClick={handleSubmit(onSubmit)}
                        type="button"
                        className="btn btn-main bg-blue py-2 ttu">Create</button>
                }
            </form>
        </>
    );
};


export default PortfolioNewForm;