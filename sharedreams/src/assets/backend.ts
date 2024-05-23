import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://sharedreams.lguyot.fr:443');

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

export async function getuser(event: string) {
    try {
        const record = await pb.collection('users').getOne(event);
        return record;
    } catch (error) {
        return error;
    }
}

export async function createDream(event: Object) {
    try {
        const record = await pb.collection('dreams').create(event);
        return record;
    } catch (error) {
        return error;
    }
}

export async function getDreams() {
    try {
        const record = await pb.collection('dreams').getFullList(1, { perPage: 10, sort: '-created'});
        return record;
    } catch (error) {
        return error;
    }
}
