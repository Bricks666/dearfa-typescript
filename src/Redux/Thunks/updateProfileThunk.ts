import { updateProfile } from "../../Api";
import { updatePhotoThunk } from "./updatePhotoThunk";
import {
	endLoadingProfile,
	startLoadingProfile,
} from "../Reducers/loadingsReducer";
import { setInfo } from "../Reducers/profileReducer";
import { IProfileState, UpdateProfileThunk } from "../../Types/Redux";

export const updateProfileThunk: UpdateProfileThunk = ({
	photo,
	...newContactsData
}) => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingProfile());

			const { resultCode, ...data } = await updateProfile(newContactsData);

			if (resultCode === 0) {
				dispatch(setInfo(newContactsData));
			}

			if (photo.newPhoto !== null) {
				await dispatch(updatePhotoThunk(photo.newPhoto));
			}
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(endLoadingProfile());
		}
	};
};
