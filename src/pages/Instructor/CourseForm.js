// import React, { useState } from 'react';
// import axios from 'axios';

// const CourseForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [video, setVideo] = useState(null);

//   const handleVideoChange = (event) => {
//     setVideo(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('video', video);

//     try {
//       const response = await axios.post('http://localhost:5477/courses/upload', formData);
//       const videoURL = response.data.videoURL; // Assuming server returns video URL

//       await axios.post('http://localhost:5477/courses/add', {
//         title,
//         description,
//         videos: [videoURL],
//       });

//       // Clear form fields
//       setTitle('');
//       setDescription('');
//       setVideo(null);
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
//       <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <input type="file" accept="video/*" onChange={handleVideoChange} />
//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default CourseForm;
import React, { useState } from 'react';
import axios from 'axios';
import "./courseForm.css"

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [videos, setVideos] = useState(['']); // Initialize with an empty video input

  const handleVideoChange = (e, index) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = e.target.value;
    setVideos(updatedVideos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = {
      title,
      description,
      price,
      videos,
    };

    try {
      const response = await axios.post("http://localhost:5477/courses/add", courseData);
      console.log('Course created:', response.data);
      // Reset form fields or show success message
      setTitle('');
      setDescription('');
      setPrice('');
      setVideos(['']); // Reset videos to an empty input
    } catch (error) {
      console.error('Error creating course:', error);
      // Handle error scenario
    }
  };

  return (
    <div className="container mt-5">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title:</label>
        <input type="text" className="form-control" id="title" placeholder='Name the course here' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description:</label>
        <textarea className="form-control" id="description" placeholder='Write something About Course' value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price:</label>
        <input type="number" placeholder='Enter the price in Rupees' className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Videos:</label>
        {videos.map((video, index) => (
          <input
            key={index}
            placeholder='type or paste here url '
            type="text"
            className="form-control mb-2"
            value={video || ''}
            onChange={(e) => handleVideoChange(e, index)}
          />
        ))}
        <button type="button" className="btn btn-primary" onClick={() => setVideos([...videos, ''])}>Add Video</button>
      </div>
      <button type="submit" className="btn btn-primary">Create Course</button>
    </form>
  </div>
  );
};

export default CourseForm;
