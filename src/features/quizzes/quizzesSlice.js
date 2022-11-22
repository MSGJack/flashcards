import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const createQuiz = (quiz) => {
    return (dispatch) => {
        dispatch(addQuiz(quiz))
        dispatch(addQuizId(quiz))
    }
}

const quizSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = { name, topicId, cardIds };
        }
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const {addQuiz} = quizSlice.actions
export default quizSlice.reducer;