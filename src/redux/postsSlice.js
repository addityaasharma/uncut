import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        username: "john_doe",
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        images: [
            "https://images.pexels.com/photos/16830925/pexels-photo-16830925.jpeg",
            "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg"
        ],
        caption: "Beautiful sunset!",
        likes: 120,
        comments: 15
    },
    {
        id: 2,
        username: "jane_doe",
        userImage: "https://randomuser.me/api/portraits/women/2.jpg",
        images: [
            "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
            "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg"
        ],
        caption: "Beach day memories 🏖️",
        likes: 89,
        comments: 22
    },
    {
        id: 3,
        username: "solo_poster",
        userImage: "https://randomuser.me/api/portraits/men/3.jpg",
        images: [
            "https://images.pexels.com/photos/16830925/pexels-photo-16830925.jpeg"
        ],
        caption: "Just a thought...",
        likes: 45,
        comments: 5
    }
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
});

export default postsSlice.reducer;
