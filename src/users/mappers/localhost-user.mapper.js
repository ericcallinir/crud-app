import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;


    return new User({
        avatar,
        balance,
        firstName: first_name,//Solo se deben poner las que no tienen el mismo nombre en el backend, en las demas no es necesario.
        gender,
        id,
        isActive,
        lastName: last_name,//Solo se deben poner las que no tienen el mismo nombre en el backend, en las demas no es necesario.
    });
}