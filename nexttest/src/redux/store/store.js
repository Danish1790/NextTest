"use client"

const { configureStore } = require("@reduxjs/toolkit")

import userReducer from '../slice/Users'

export const store = configureStore({
    reducer:{
        userData:userReducer
    }
})