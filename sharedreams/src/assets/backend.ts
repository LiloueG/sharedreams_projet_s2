import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function Adduser(event: Object) {
    try {
        const record = await pb.collection('users').create(event);
        return record;
    } catch (error) {
        return error;
    }
}


export async function logIn(event: Object) {
    try {
        const record = await pb.collection('users').authWithPassword(
            event.email,
            event.password,
        );
        return record;
    } catch (error) {
        return error;
    }
}

export async function getuser(event: Object) {
    try {
        const record = await pb.collection('users').getOne(event);
        return record;
    } catch (error) {
        return error;
    }
}

