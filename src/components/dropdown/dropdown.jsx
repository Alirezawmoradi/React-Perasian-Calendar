import {useEffect, useState} from "react";
import {Calendar} from "./calendar.jsx";

export const Dropdown = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <div>
            <button className='bg-gray-300 hover:bg-gray-400 outline-none w-28 h-9 rounded-full'
                    onClick={() => setShowDatePicker(!showDatePicker)}>
                {
                    showDatePicker ?
                        (
                            <div className='flex flex-col py-1 items-center'>
                                <div>
                                    <span>Close</span>
                                </div>
                                <div className='mt-3'>
                                    <Calendar/>
                                </div>
                            </div>
                        )
                        :
                        <span>Date Picker</span>
                }
            </button>
        </div>

    )
}