import {createSlice, nanoid} from '@reduxjs/toolkit'
// as we used date in cntextapi for different ids but here that is covered with nano id
const initialState={
    todos:[{
        id:1,
        text:"hello"
    }]
    // kept as default
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    // every slice has an initial state
    // it can also be written as initialState:{todos:[{id......}]}
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),
                    text:action.payload
                    // payload is an object and it can have id text etc
            }
            state.todos.push(todo)
        },
            // here todos comes from
        //     todos:[{
        //         id:1,
        //         text:"hello"
        //     }]
        // i.e initialState   and we push todo
        // i.e, const todo={
    //         id:nanoid(),
    //         text:action.payload
    // }
    // push is to push it in the array
        
        


        // (state,action) syntax...it gives access to them....state gives the situation of like if there is any todo in array basically about the situation
        // action.. like for removing any todo we need the id that values are taken from action
        removeTodo: (state,action)=>{
            const{id}=action.payload
            console.log("id:",id)
            state.todos=state.todos.filter((todo)=>todo.id!==id)
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload
            // destructing the id and text from action.payload
            state.todos=state.todos.map((todo)=>todo.id===id?{...todo,text}:todo)
        }
                       }
})


export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer