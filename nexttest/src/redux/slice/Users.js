import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Utility function to sort users
const sortUsers = (users, field, order) => {
    return users.slice().sort((a, b) => {
      let aValue = a[field];
      let bValue = b[field];
  
      // Ensure that the values are strings
      if (typeof aValue !== 'string') {
        aValue = String(aValue);
      }
  
      if (typeof bValue !== 'string') {
        bValue = String(bValue);
      }
  
      if (order === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  };

const initialState = {
  users: [],
  status: 'idle',
  error: null,
  sortField: 'id',   // Default sorting field
  sortOrder: 'asc',  // Default sorting order (asc or desc)
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: 'users slice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: state.users.length + 1,
        first_name: action.payload.name,
        email: action.payload.email,
        ...action.payload,
      };
      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    updateUser: (state, action) => {
      const { id, name, email, ...updatedUserData } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
        state.users[userIndex] = {
          first_name: name,
          email: email,
        };
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    },
    deleteUser: (state, action) => {
      const data = state.users.filter((item) => item.id !== action.payload);
      state.users = data;
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    setSort: (state, action) => {
      state.sortField = action.payload.field;
      state.sortOrder = action.payload.order;
      state.users = sortUsers(state.users, state.sortField, state.sortOrder);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        localStorage.setItem('users', JSON.stringify(state.users));
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
        localStorage.setItem('users', JSON.stringify(state.users));
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        localStorage.setItem('users', JSON.stringify(state.users));
      });
  },
});

export const { addUser, deleteUser, updateUser, setSort } = userSlice.actions;
export default userSlice.reducer;
