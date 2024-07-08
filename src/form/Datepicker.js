import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export const DatepickerStep = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDayClick = (date, modifiers) => {
        if (modifiers.disabled) {
            return;
        }
        setSelectedDate(date);
        console.log("Selected Date:", date);
    };

    return (
        <div>
            <DayPicker
                selected={selectedDate}
                onDayClick={(day, modifiers) => handleDayClick(day, modifiers)}
            />
            {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
        </div>
    );
};
