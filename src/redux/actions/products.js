import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
	"products/fetch",
	(_, { rejectWithValue }) =>
		axios
			.get("http://localhost:3000/db.json")
			.then(resp => resp.data)
			.catch(error => {
				if (!error.response) {
					throw error
				}
				return rejectWithValue(error.message)
			})
)
