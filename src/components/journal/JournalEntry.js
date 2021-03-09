import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div className='journal__entry-picture' style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://i.blogs.es/aa1b9a/luna-100mpx/450_1000.jpg)'
            }}>
            </div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    Un nuevo dia
                </p>
                <p className='journal__entry-content'>
                   Lorem impsun dolore lo que sea url yes ndsjkndask
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span className='journal__entry-date-box-span'>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
