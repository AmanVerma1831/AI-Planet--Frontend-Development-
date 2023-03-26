import React, { useState } from 'react'
import { ReactComponent as ImgVector } from '../images/ImgVector.svg'
import { useNavigate } from 'react-router-dom';

function Submission() {
    const nevigate = useNavigate();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [hackathonName, setHackathonName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [gitHub, setGitHub] = useState('');
    const [links, setLinks] = useState('');

    const formSubmitHandler = (e) => {
        let num = 0;
        e.preventDefault();
        console.log('getting submit....');
        const cardDetails = JSON.parse(localStorage.getItem("cardDetails"));
        localStorage.setItem('cardDetails', JSON.stringify([{
            id: num + 1,
            title: title,
            summary: summary,
            description: description,
            image: `../images/${image}`,
            hackathonName: hackathonName,
            date: `uploaded just now`,
            dateStart: startDate,
            dateEnd: endDate,
            github: gitHub,
            links: links

        }, ...cardDetails]))
        nevigate("/");

    }
    const onTitleChange = (e) => { setTitle(e.target.value) }
    const onSummaryChange = (e) => { setSummary(e.target.value) }
    const onDescriptionChange = (e) => { setDescription(e.target.value) }
    const onImageChange = (e) => { setImage(e.target.files[0].name) }
    const onHackathonChange = (e) => { setHackathonName(e.target.value) }
    const onStartChange = (e) => { setStartDate(e.target.value) }
    const onEndChange = (e) => { setEndDate(e.target.value) }
    const onGitHubChange = (e) => { setGitHub(e.target.value) }
    const onLinksChange = (e) => { setLinks(e.target.value) }

    return (
        <div className='bg-[#F5F5F5]'>
            <div className="px-20 py-10">
                <div>
                    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden ">
                        <div className="w-full p-12 bg-white rounded-md pr-40">
                            <h1 className="text-3xl font-semibold text-start uppercase my-16">
                                New Hackathon Submission
                            </h1>
                            <form className="mt-6" onSubmit={formSubmitHandler}>
                                <div className="mb-12">
                                    <label>
                                        <span className="text-gray-700 text-xl">Title</span>
                                        <input
                                            type="text"
                                            name="Title"
                                            className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="Title of your submission"
                                            value={title}
                                            onChange={onTitleChange}

                                        />
                                    </label>
                                </div>
                                <div className="mb-12">
                                    <label>
                                        <span className="text-gray-700 text-xl">Summary</span>
                                        <input
                                            name="Summary"
                                            type="text"
                                            className="block w-full mt-2 p-2 pl-4 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="A short summary of your submission (this will be visible with your submission)"
                                            value={summary}
                                            onChange={onSummaryChange}

                                        />
                                    </label>
                                </div>
                                <div className="mb-12">
                                    <label>
                                        <span className="text-gray-700 text-xl">Description</span>
                                        <textarea
                                            name="Description"
                                            type="text"
                                            className="block w-full mt-2 p-2 pl-4 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="Write a long description of your project. You can describe your idea and approach here."
                                            rows="10"
                                            value={description}
                                            onChange={onDescriptionChange}

                                        />
                                    </label>
                                </div>
                                <div className="mb-12">
                                    <label>
                                        <span className="text-gray-700 text-xl">Cover Image</span>
                                        <p className="text-gray-400">Minimum resolution: 360px  X 360px</p>
                                        <div className="flex items-center justify-center">
                                            <ImgVector className='absolute' />
                                            <img src={`../images/${image}`}
                                                className="absolute w-[120px] rounded-md" alt="uploded-img" />
                                            <input
                                                name="file-img"
                                                type="file"
                                                id='image'

                                                className="block w-full mt-2 px-4 py-12 border-2 border-dashed border-[#CCCCCC] rounded-md shadow-sm bg-[#F5F5F5]"
                                                // value={image}
                                                onChange={onImageChange}

                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="mb-12">
                                    <label>
                                        <span className="text-gray-700 text-xl">Hackathon Name</span>
                                        <input
                                            type="text"
                                            name="Title"
                                            className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="Enter the name of the hackathon"
                                            value={hackathonName}
                                            onChange={onHackathonChange}

                                        />
                                    </label>
                                </div>
                                <div className="mb-12 flex">
                                    <label className="mr-12">
                                        <span className="text-gray-700 text-xl">Hackathon Start Date</span>
                                        <input
                                            type="date"
                                            name="Date"
                                            className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="Select start date"
                                            value={startDate}
                                            onChange={onStartChange}

                                        />
                                    </label>
                                    <label>
                                        <span className="text-gray-700 text-xl">Hackathon End Date</span>
                                        <input
                                            type="date"
                                            name="Date"
                                            className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="Select end date"
                                            value={endDate}
                                            onChange={onEndChange}

                                        />
                                    </label>
                                </div>
                                <div className="mb-12">
                                    <label>
                                        <span className="text-gray-700 text-xl">GitHub Repository</span>
                                        <input
                                            type="text"
                                            name="GitHub"
                                            className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="Enter your submission’s public GitHub repository link"
                                            value={gitHub}
                                            onChange={onGitHubChange}

                                        />
                                    </label>
                                </div>
                                <div className="mb-12">
                                    <label>
                                        <span className="text-gray-700 text-xl">Other Links</span>
                                        <input
                                            type="text"
                                            name="Other-Links"
                                            className="w-full block p-2 pl-4 mt-2 border-2 border-gray-300 rounded-md shadow-sm"
                                            placeholder="You can upload a video demo or URL of you demo app here."
                                            value={links}
                                            onChange={onLinksChange}

                                        />
                                    </label>
                                </div>



                                <div className="mb-6">
                                    <button
                                        type="submit"
                                        className=" text-xl
                                h-10 px-5 text-indigo-100 
                                bg-green-700 rounded-lg 
                                transition-colors duration-150 hover:bg-green-900 " >
                                        Upload Submission
                                    </button>
                                </div>
                                <div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Submission
