import React from 'react'
import { Link } from 'react-router-dom'
import { Button, CssBaseline } from '@mui/material'
import { ReactComponent as Design } from '../images/design.svg'

function Hero() {
    return (
        <div>
            <CssBaseline />
            <main>
                <div className="flex w-full bg-[#003145] p-16 justify-between">
                    <div className="text-white w-[60%] p-4" >
                        <div className='mb-2'>
                            <h2 className="text-4xl font-bold">Hackathon Submissions</h2>
                        </div>
                        <div className='mb-4'>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae.</p>
                        </div>
                        <div>
                            <Link to="/submission">
                                <Button variant='contained' color='success'>
                                    Upload Submission
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <Design className='w-[150px] h-[200px]' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Hero
