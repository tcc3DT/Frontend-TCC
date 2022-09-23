import React from 'react'
import '../../Styles/dashboard.css'


function InfoCard({ title, value, icon }) {
    return (
        <div className='cards'>
            <div className='card'>
                <div class="card-body">
                    <div class="stat-widget-five">
                        <div class="stat-icon">
                            {icon}
                        </div>
                        <div class="stat-content">
                            <div class="text-left dib">
                                <div class="stat-text">{title}</div>
                                <div class="stat-heading">{value}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;