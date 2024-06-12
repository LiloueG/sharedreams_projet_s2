import type { TypedPocketBase } from '@/pocketbase-types';
import PocketBase from 'pocketbase';
export const pb = new PocketBase('https://sharedreams.lguyot.fr') as TypedPocketBase;



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
            filter: `id = '${pb.authStore.model!.id}'`, 
            expand: 'user_friend'
        });
        return friend;
        
    } catch (error) {
        console.error("Error while retrieving friends:", error);
        throw error;
    }
}


export async function DeleteAmis(id: string){
    try {
        const del = await pb.collection('Users').update(pb.authStore.model!.id, {
            'user_friend-': id
        });
        return del;
    } catch (error) {
        return error;
    }
}

export async function AddAmis(id: string){
    try {
        const add = await pb.collection('users').update(pb.authStore.model!.id, {
            'user_friend+': id
        });

        return add;
    } catch (error) {
        return error;
    }
}

export async function getUsers() {
    try {
        const allIDs = [...pb.authStore.model!.user_friend, pb.authStore.model!.id];
        const allUsers = await pb.collection('users').getFullList();

        const users = allUsers.filter(user => !allIDs.includes(user.id));

        return users;
    } catch (error) {
        console.error("Error while retrieving users:", error);
        throw error;
    }
}

export async function getUserFriends() {
    try {
        const userId = pb.authStore.model!.id;
        const friendIds = pb.authStore.model!.expand.user_friend;
        console.log(friendIds);

        // Création du filtre pour exclure l'utilisateur actuel et ses amis
        const filter = `id != '${userId}' AND id NOT IN (${friendIds.map(id => `'${id}'`).join(', ')})`;

        const users = await pb.collection('users').getFullList({
            filter
        });

        return users;
    } catch (error) {
        return error;
    }
}

export async function UpdateUser(event: Object) {
    try {
        await pb.collection('users').update(pb.authStore.model!.id, event);
        //return record;
    } catch (error) {
        return error;
    }
    
}


export async function UpdateLike(idDream: string, like: boolean) {
    try {
        if (like === true) {
            const record = await pb.collection('dreams').update(idDream, {
                'like+': pb.authStore.model!.id
            });
            return record.like;
        } else {
        const record = await pb.collection('dreams').update(idDream, {
            'like-': pb.authStore.model!.id
        });
        return record.like;
    }
    } catch (error) {
        return error;
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


  export async function getAllData() {
    try {
      // Assurez-vous que 'day' est le nom correct du champ date dans votre collection
      const records = await pb.collection('sleepData').getFullList(1, {
        perPage: 100, // Vous pouvez ajuster le nombre par page selon vos besoins
        sort: "day", // Trie les enregistrements par la date de manière ascendante
      });
      return records;
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      throw error;
    }
  }
  
  
  // Définition de la fonction pour évaluer la qualité du sommeil
  const evaluateSleepQuality = (hours) => {
      if (hours < 5) {
          return "Mauvaise";
      } else if (hours >= 5 && hours < 7) {
          return "Acceptable";
      } else if (hours >= 7 && hours <= 9) {
          return "Bonne";
      } else {
          return "Excessive";
      }
  };
  
  // Fonction pour ajouter des données de sommeil
  export async function addSleepData(sleepData) {
      try {
          // Assurez-vous que l'utilisateur est connecté
          if (!pb.authStore.model) {
              throw new Error("Utilisateur non connecté.");
          }
  
          // Évaluer la qualité du sommeil
          const sleepQuality = evaluateSleepQuality(sleepData.sleepHours);
  
          const record = await pb.collection('sleepData').create({
              day: sleepData.day,
              sleepHours: sleepData.sleepHours,
              sleepQuality: sleepQuality,  // Utiliser la valeur évaluée
              sleepUser: pb.authStore.model.id // Utilisez l'ID de l'utilisateur connecté
          });
          return record;
      } catch (error) {
          console.error('Erreur lors de la création des données de sommeil', error);
          return null;
      }
  }
  
  