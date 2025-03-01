//@ts-nocheck
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function Lessons() {
    const [lessonsData, setLessonsData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);
    const [currentFileToOpen, setCurrentFileToOpen] = useState("");
    const [currentLessonsToOpen, setCurrentLessonsToOpen] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileUrl, setFileUrl] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cityCountry, setCityCountry] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [ageRange, setAgeRange] = useState("");
    const [referralSource, setReferralSource] = useState("");
    const router = useRouter();

    async function fetchLessons() {
        try {
            const response = await axios.get('/api/fetchlessons');
            const updatedLessons = await Promise.all(
                response.data.map(async (lesson) => {
                    try {
                        const thumbnailResponse = await axios.post('/api/fetchthumbnail', { title: lesson.title });
                        lesson.thumbnail = thumbnailResponse.data.thumbnail;
                    } catch (error) {
                        console.error(`Error fetching thumbnail for ${lesson.title}: ${error}`);
                        lesson.thumbnail = null;
                    }
                    return lesson;
                })
            );
            setLessonsData(updatedLessons);
        } catch (error) {
            console.error(`Error fetching lessons: ${error}`);
        }
    }

    const showLessonModal = (lessonsToOpen) => {
        setCurrentLessonsToOpen(lessonsToOpen);
        setIsModalOpen(true);
    };

    const closeLessonModal = () => {
        setIsModalOpen(false);
    };

    const openFile = (url) => {
        setFileUrl(url);
        if (!isSubmitted) {
            setShowFormModal(true);
        }
        if (isSubmitted) {
            window.open(url, '_blank');
        }
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const compiledFormData = {
            name,
            email,
            city_country: cityCountry,
            school_name: schoolName,
            age_range: ageRange,
            referral_source: referralSource
        };
        try {
            const response = await axios.post('/api/uploadteacherdata', compiledFormData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.data.success) {
                setName("");
                setEmail("");
                setCityCountry("");
                setSchoolName("");
                setAgeRange("");
                setReferralSource("");
                setIsSubmitted(true);
                setShowFormModal(false);
                if (fileUrl) {
                    window.open(fileUrl, '_blank');
                    setFileUrl("");
                }
                closeLessonModal();
            } else {
                console.error('Form submission failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const renderLessons = (gradeLevel) => {
        let updatedLessonsData = [...lessonsData];
        let renderedLessons = [];
        for (let i = 0; i < updatedLessonsData.length; i++) {
            const lesson = updatedLessonsData[i];
            if (lesson.grade_level !== gradeLevel) continue;
            let secondLessonTitle = lesson.title + " 2";
            let lessonsToOpen = [lesson.title];
            for (let j = 0; j < updatedLessonsData.length; j++) {
                if (updatedLessonsData[j].title === secondLessonTitle) {
                    lessonsToOpen.push(updatedLessonsData[j].title);
                    updatedLessonsData.splice(j, 1);
                    break;
                }
            }
            renderedLessons.push(
                <div onClick={() => {
                    showLessonModal(lessonsToOpen);
                }} key={lesson.title} className="cursor-pointer">
                    <div className="bg-gray-300 rounded-2xl p-2">
                        <Image src={lesson.thumbnail && lesson.thumbnail.thumbnail ? `data:image/png;base64,${lesson.thumbnail.thumbnail}` : ""} width={256} height={256} />
                    </div>
                    <p className="mt-2 text-left font-bold text-xl">{lesson.title}</p>
                    <p className="text-left text-md font-medium">{lesson.description}</p>
                    <p className="text-left mt-5">
                        <span className="px-5 py-1 bg-gray-300 font-medium rounded-2xl text-sm">{lesson.category}</span>
                    </p>
                </div>
            );
        }
        return renderedLessons;
    };

    useEffect(() => {
        fetchLessons();
    }, []);

    return (
        <>
            <Head>
                <title>The Green Cause - Home</title>
                <meta name="description" content="The Green Cause" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div style={{ fontFamily: "'Inter', sans-serif" }} className="h-[100vh]">
                <Navbar/>
                <div className="text-black px-20 py-10 bg-white">
                    <p className="text-center font-bold text-5xl mb-5">Our Lessons</p>
                    <p className="text-left font-regular text-xl">The Green Cause’s 30+ lessons cover a wide array of environmental topics from introducing key themes like global warming and deforestation to more detailed presentations like sharks and chemical pollution. To accompany the lessons, they will come with interactive materials such as videos, games, or other relevant links. We make sure to create each lesson using our three pillars (engagement, solutions-based learning, and considering the impacts). For more information on the pillars, read the About Us section. 
                    <br/>                    <br/>
                    The lesson creating process consists of members creating an outline, which includes target audience, lesson layout, and accompanying interactive activities. After approval from chapter leads, the members use any feedback given to create the lessons which are then reviewed using our rubric. In order to ensure our lessons are of quality, we are establishing a Teachers’ Lesson Review where formal educators and those with education credentials can provide feedback to our lessons. If you are interested in joining, please fill out this form
                    <br/><br/>
                    </p>
                    <div className="flex">
                        <button onClick={() => {router.push("https://drive.google.com/file/d/1f2uzaEGg79h6Epgs47VpiACov9JNMBW1/view?usp=sharing")}} className="mx-auto bg-[#35B6FF] text-white text-center px-5 py-1 rounded-md mb-[80px]">Flyer</button>
                    </div>
                    <p>
                    <br/><br/>
                    You are free to use our content to supplement any and all educational events and classes. Our lessons are completely free and created by youth for youth! 
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <div id="k2" className="mb-10">
                        <p className="font-semibold text-2xl mb-5">Lessons suitable for elementary school students.</p>
                        <hr />
                        <div className="rounded-2xl px-5 py-5 grid md:grid-cols-5 grid-cols-1 gap-8 text-center">
                            {renderLessons("Elementary")}
                        </div>
                    </div>
                    <div id="35" className="mt-10 mb-10">
                        <p className="font-semibold text-2xl mb-5">Lessons suitable for middle school students.</p>
                        <hr />
                        <div className="rounded-2xl px-5 py-5 grid md:grid-cols-5 grid-cols-1 gap-8 text-center">
                            {renderLessons("Middle")}
                        </div>
                    </div>
                    <div id="68" className="mt-10 mb-10">
                        <p className="font-semibold text-2xl mb-5">Lessons suitable for high school students.</p>
                        <hr />
                        <div className="rounded-2xl px-5 py-5 flex md:grid-cols-5 grid-cols-1 gap-8 text-center">
                            {renderLessons("High")}
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Select an Option</h2>
                        {currentLessonsToOpen.length > 1 ? (
                            currentLessonsToOpen.map((title, index) => (
                                <button
                                    key={index}
                                    onClick={() => openFile(`/api/fetchfiles?title=${encodeURIComponent(title)}`)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2"
                                >
                                    {title.endsWith(" 2") ? "Open Presentation" : "Open Video"}
                                </button>
                            ))
                        ) : (
                            <button
                                onClick={() => openFile(`/api/fetchfiles?title=${encodeURIComponent(currentLessonsToOpen[0])}`)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mr-2"
                            >
                                Open Lesson
                            </button>
                        )}
                        <button onClick={closeLessonModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
            {showFormModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="bg-white p-5 rounded-lg w-1/3 shadow-xl">
                        <form onSubmit={handleSubmitForm}>
                            <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="block rounded p-2 border-2 border-black w-full mb-2" required />
                            <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="block rounded p-2 border-2 border-black w-full mb-2" required />
                            <input type="text" name="cityCountry" placeholder="City & Country" value={cityCountry} onChange={e => setCityCountry(e.target.value)} className="block p-2 rounded border-2 border-black w-full mb-2" required />
                            <input type="text" name="schoolName" placeholder="School Name (if applicable)" value={schoolName} onChange={e => setSchoolName(e.target.value)} className="block p-2 rounded border-2 border-black w-full mb-2" />
                            <input type="text" name="ageRange" placeholder="Age Range of Students" value={ageRange} onChange={e => setAgeRange(e.target.value)} className="block p-2 rounded border-2 border-black w-full mb-2" required />
                            <input type="text" name="referralSource" placeholder="Where did you hear about us?" value={referralSource} onChange={e => setReferralSource(e.target.value)} className="block p-2 rounded border-2 border-black w-full mb-2" required />
                            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                                Submit
                            </button>
                        </form>
                        <button onClick={() => setShowFormModal(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
