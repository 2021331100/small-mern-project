import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for backend submission
    const formData = new FormData(e.target);
    axios.post('http://localhost:3000/create-post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('Post created successfully:', response.data);
      e.target.reset(); // Reset the form after successful submission
      // Optionally, redirect to the feed page or clear the form
      navigate('/feed'); // Redirect to the feed page after successful post creation
    })
    .catch(error => {
      console.error('Error creating post:', error);
    }); 
   
    // Example API Call: await axios.post('/api/posts', formData)
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <input 
          type="file" 
          name="image" 
          accept="image/*" 
          onChange={handleImageChange}
          required 
        />
        <input 
          type="text" 
          name="caption" 
          placeholder="Enter caption" 
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required 
        />
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;