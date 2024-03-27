import {generateDate} from "../../utils/generate-date.js";
import moment from "jalali-moment";
import {PersianDays, PersianMonths} from "../../utils/date.js";
import {useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {useAppContext} from "../../contexts/app/app-context.jsx";

export const Calendar = ({inputFill}) => {
    const currentDate = moment();
    const [today, setToday] = useState(currentDate);
    const {selectedDate, changeSelectedDate} = useAppContext();
    return (
        <div className='flex mx-auto divide-x-2 items-center gap-10 h-screen'>
            <div className='flex flex-col w-96 h-96'>
                <div className='flex flex-row-reverse justify-between cursor-default'>
                    <h1 className='font-semibold'>{PersianMonths[today.jMonth()]},{today.jYear()}</h1>
                    <div className='flex items-center gap-5'>
                        <GrFormPrevious className='w-5 h-5 cursor-pointer'
                                        onClick={() => {
                                            setToday(moment(today).jMonth(today.jMonth() - 1))
                                        }}/>
                        <h1 className='cursor-pointer' onClick={() => {
                            changeSelectedDate(currentDate)
                            setToday(currentDate)
                        }}>امروز</h1>
                        <GrFormNext className='w-5 h-5 cursor-pointer'
                                    onClick={() => {
                                        setToday(moment(today).jMonth(today.jMonth() + 1))
                                    }}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-7 w-full text-gray-500'>
                    {
                        PersianDays.map((day, index) => {
                            return (
                                <h1 className='h-14 grid place-content-center text-sm' key={index}>{day}</h1>
                            )
                        })
                    }
                </div>
                <div className='grid grid-cols-7 w-full font-medium text-sm'>
                    {
                        generateDate(moment(today).jMonth(today.jMonth()), moment(today).jYear(today.jYear())).map(({
                                                                                                                        date,
                                                                                                                        currentMonth,
                                                                                                                        today
                                                                                                                    }, index) => {
                            const isDisabled = !currentMonth;
                            const isSelected = moment(selectedDate).format('jYYYY/jMM/jDD') === moment(date, 'jYYYY-jM-jD').format('jYYYY/jMM/jDD');
                            return (
                                <div className='h-14 border grid place-content-center' key={index}>
                                    <h1 className={`${currentMonth ? '' : 'text-gray-400'} 
                                    ${today ? 'bg-red-600 text-white' : ''} 
                                    ${isSelected && !isDisabled ? "bg-black text-white" : ""} 
                                    ${!isDisabled ? 'hover:bg-black hover:text-white cursor-pointer' : 'cursor-default'}
                                    h-10 w-10 grid place-content-center rounded-full transition-all duration-300`}
                                        onClick={isDisabled ? undefined : () => changeSelectedDate(moment(date, 'jYYYY-jM-jD'))}
                                    >
                                        {moment(date, 'jYYYY-jM-jD').format('jD')}
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='h-96 w-52 px-5'>
                <h1 className='font-semibold'>{moment(selectedDate).format('jYYYY/jMM/jDD')}</h1>
            </div>
        </div>
    )
}