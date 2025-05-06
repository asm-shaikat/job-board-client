'use client';

import { homeService } from "@/services/HomeService";
import { useEffect, useState } from "react";

type Job = {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary: number;
  requirements: string[];
  responsibilities: string[];
  type: string;
  postedBy: {
    _id: string;
    name: string;
    email: string;
  };
  status: string;
  createdAt: string;
  updatedAt: string;
}
export default function Home() {
  const [jobPost,setJobPost] = useState<Job[]>([])

  const fetchJobPost = async () =>{
    const response = await homeService.getAllPost()
    setJobPost(response.jobs)
    console.log("response",response)
  }

  useEffect(()=>{
    fetchJobPost()
  })
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {jobPost.map((job)=>(
          <div key={job._id} className="p-6 bg-white shadow-md text-black rounded-md w-full max-w-xl">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
          <p className="mt-2">{job.description}</p>
        </div>
        ))}
    </div>
  );
}
