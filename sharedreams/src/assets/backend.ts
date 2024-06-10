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


export async function getFriends() {
    try {
        const friend = await pb.collection('users').getFullList({
            filter: `user = '${pb.authStore.model!.id}'`, 
            expand: 'user_friend'
        });
        return friend;
        
    } catch (error) {
        console.error("Error while retrieving friends:", error);
        throw error;
    }
}
    

// export const fetchData = async () => {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   };
      
  // Fonction pour envoyer un message à l'API de Together.ai
  //ajoute le code pour ma cle api
const apiKey = 'a83b6e25dbfcac4699f79cf64e8cea6f6e0fa3767c405d5ef4febf259efc9a88';
export const sendToTogetherAI = async (message: string): Promise<string> => {
  // Envoi d'une requête POST à l'API avec le message de l'utilisateur
  const response = await fetch('https://api.together.xyz/v1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ message }), // Le message est envoyé dans le corps de la requête
  });

  // Récupération de la réponse au format JSON
  const data = await response.json();
  // Retour de la réponse de l'IA
  return data.response;
};

export const fetchData = async () => {
    return [
      { title: 'Slide 1', content: 'Content for slide 1' },
      { title: 'Slide 2', content: 'Content for slide 2' },
      { title: 'Slide 3', content: 'Content for slide 3' }
    ];
  };