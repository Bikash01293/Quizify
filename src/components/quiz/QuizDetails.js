import React, { useState } from 'react'
import style from '../quiz/QuizDetails.module.css'

function QuizDetails() {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div>
            <div >
                {isReadMore ? 
                    <p>
                    <span className={style.about}>
                        The Microsoft Excel Proficiency Test is a comprehensive evaluation of an individual's knowledge and skills in using Microsoft Excel. The test covers a wide range of topics, including da...<button className={style.readBtn} onClick={toggleReadMore}>read more</button>
                    </span>
                    </p>
                    :
                    <p>
                    <span className={style.about}>
                        The Microsoft Excel Proficiency Test is a comprehensive evaluation of an individual's knowledge and skills in using Microsoft Excel. The test covers a wide range of topics, including data manipulation, formatting, functions, and more. The questions are designed to assess an individual's understanding
                        of the basic and advanced features of Excel, including the use of formulas and functions, conditional formatting, charts and graphs, and data management.<button className={style.readBtn}  onClick={toggleReadMore}>read less</button>
                    </span>
                    </p>
                }
                <p className={style.titleText}>This Quiz includes</p>
                <div >
                     <p >
                        <img className={style.imageAdjust} src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1674128706840-Group%208418.png" alt="passing" />50% Passing Percentage
                    </p>
                    <p >
                        <img className={style.imageAdjust} src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1664012272662-Group%208310.png" alt="questions" />5 Questions
                    </p>
                    <p >
                        <img className={style.imageAdjust} src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1664012293444-Group%208311.png" alt="duration" />
                        1 Minute
                    </p>
                    <p >
                        <img className={style.imageAdjust} src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1674468165626-Group%208417.png" alt="attempts" />1 Attempt Daily
                    </p>

                   

                   

                   

                </div>
            </div>
        </div>
    )
}

export default QuizDetails