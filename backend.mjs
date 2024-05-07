import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function Allevents(){
    const records = await pb.collection('Evenement').getFullList();
    return records;
}

export async function AddEvent(event){
    const record = await pb.collection('Evenement').create(event);
    return record;
}

export async function OneEvent(id){
    const record = await pb.collection('Evenement').getOne(id);
    return record;
}

export async function nomEvent(nom_event) {
    const records = await pb.collection('Evenement').getFullList
    ({
        filter: `nom_event = {nom_event}`, 
        sort: 'date',
    });
    return records;
}



