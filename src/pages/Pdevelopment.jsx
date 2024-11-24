import React from 'react';

const Pdevelopment = () => {
    return (
        <div className='px-[60px]'>
            <div >
                {/* Professional Development Header */}
                <div className='border-b-2 text-left pb-2 pt-20'>
                    <h1 className='font-bold text-[22px] leading-[28px]'>Professional Development</h1>
                </div>

                {/* Timeline Section */}
                <div className='border-b-2 text-left pt-4'>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex-1  items-start'>
                            <div className='mr-4 font-bold '>2023</div>
                            <div>
                                <h2 className='font-semibold'>M.D., University of California, San Francisco</h2>
                            </div>
                        </div>
                        <div className='flex-1 items-start'>
                            <div className='mr-4 font-bold '>2021</div>
                            <div>
                                <h2 className='font-semibold'>Resident, Internal Medicine, University of California, San Francisco</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Timeline Entries */}
                <div className='text-left pt-4'>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex-1 items-start'>
                            <div className='mr-4 font-bold '>2019</div>
                            <div>
                                <h2 className='font-semibold'>M.P.H., Epidemiology, University of California, Berkeley</h2>
                            </div>
                        </div>
                        <div className='flex-1  items-start'>
                            <div className='mr-4 font-bold '>2017</div>
                            <div>
                                <h2 className='font-semibold'>A.B., Molecular Biology, Princeton University</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='border-b-2 text-left font-bold text-[22px] leading-[28px] pt-20'>Continuing Education</div>

            {/* Continuing Education Timeline */}
            <div className='border-b-2 text-left pt-4'>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex-1 items-start'>
                        <div className='mr-4 font-bold '>2025</div>
                        <div>
                            <h2 className='font-semibold'>Epidemiology Summer Institute, Johns Hopkins University</h2>
                        </div>
                    </div>
                    <div className='flex-1  items-start'>
                        <div className='mr-4 font-bold '>2022</div>
                        <div>
                            <h2 className='font-semibold'>R Programming Bootcamp, Coursera</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Continuing Education Entries */}
            <div className='border-b-2 text-left pt-4'>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex-1  items-start'>
                        <div className='mr-4 font-bold '>2019</div>
                        <div>
                            <h2 className='font-semibold'>Biostatistics Workshop, Harvard T.H. Chan School of Public Health</h2>
                        </div>
                    </div>
                    <div className='flex-1  items-start'>
                        <div className='mr-4 font-bold '>2016</div>
                        <div>
                            <h2 className='font-semibold'>Data Visualization Course, DataCamp</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-left pt-20 font-bold text-[22px] leading-[28px]'>Honors and Awards</div>

            {/* Honors and Awards Timeline */}
            <div className='border-b-2 text-left pt-4'>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex-1  items-start'>
                        <div className='mr-4 font-bold '>2024</div>
                        <div>
                            <h2 className='font-semibold'>Young Investigator Award, American Thoracic Society</h2>
                        </div>
                    </div>
                    <div className='flex-1 items-start'>
                        <div className='mr-4 font-bold '>2023</div>
                        <div>
                            <h2 className='font-semibold'>Outstanding Fellow Award, Massachusetts General Hospital</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Honors and Awards Entries */}
            <div className='border-b-2 text-left pt-4'>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex-1 items-start'>
                        <div className='mr-4 font-bold '>2022</div>
                        <div>
                            <h2 className='font-semibold'>Best Abstract Award, American College of Chest Physicians</h2>
                        </div>
                    </div>
                    <div className='flex-1  items-start'>
                        <div className='mr-4 font-bold '>2021</div>
                        <div>
                            <h2 className='font-semibold'>Scholarship, Cystic Fibrosis Foundation</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Honors and Awards Entry */}
            <div className='text-left pt-4'>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex-1  items-start'>
                        <div className='mr-4 font-bold '>2020</div>
                        <div>
                            <h2 className='font-semibold'>Trainee Travel Grant, Keystone Symposia</h2>
                        </div>
                    </div>
                    <div className='flex-1  items-start'>
                        <div className='mr-4 font-bold'>2019</div>
                        <div>
                            <h2 className='font-semibold'>Medical Student Research Prize, University of California, San Francisco</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pdevelopment;
