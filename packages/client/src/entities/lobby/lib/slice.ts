// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type Rating = Record<number, { name: string; score: number }>
// type State = {
//   rating: Rating
// }

// const initialState: State = {
//     rating: {
//         2: { name: "John", score: 2 }
//     }
// }

// const ratingSlice = createSlice({
//   name: 'rating',
//   initialState,
//   reducers: {
//     saveRatingData: (state: State, action: PayloadAction<Rating>) => {
//       state.rating = action.payload
//     },
//   },
// })

// const { saveRatingData } = ratingSlice.actions
// const ratingReducer = ratingSlice.reducer

// export { saveRatingData, ratingReducer }
