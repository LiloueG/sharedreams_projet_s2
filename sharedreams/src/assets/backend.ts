import type { TypedPocketBase } from '@/pocketbase-types';
import PocketBase from 'pocketbase';
import { useRouter } from 'vue-router'
export const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

const router = useRouter

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
            event.password
        );
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
        const record = await pb.collection('dreams').getFullList(1, { perPage: 10, sort: '-created', expand: 'user'});
        console.log(record);
        
        return record;
    } catch (error) {
        return error;
    }
}


export async function getUsersbyEmail(mail) {
   try {
       const record = await pb.collection('dreams').getOne({ email: mail });
       return record;
   } catch (error) {
         return error;
}
}

export async function logout() {
    pb.authStore.clear()
    router.push('/nuage')
  }

  export async function getDreamsforProfil() {
    try {
        const records = await pb.collection('dreams').getFullList({
        filter: `user = '${pb.authStore.model!.id}'`,
        sort: '-created', 
        expand: 'user', // Filtrer les rêves par l'ID de l'utilisateur connecté
      });
      return records;
    } catch (error) {
      console.error("Erreur lors de la récupération des rêves:", error);
      throw error;
    }
  }

  export default {
    name: 'counterLike',
    data(){
        return {
            counter: 0
        }
    }
}

export async function getImg() {
    try {
        const record = await pb.collection('img').getFullList(1, { perPage: 10, sort: '-created', expand: 'user'});
        console.log(record);
        
        return record;
    } catch (error) {
        return error;
    }
}

export async function getFriendCount() {
    try {
        const user = await pb.collection('users').getOne(pb.authStore.model!.id); // Get the logged-in user
        return user.user_friend.length;
    } catch (error) {
        console.error("Error while retrieving friends:", error);
        throw error;
    }
}
