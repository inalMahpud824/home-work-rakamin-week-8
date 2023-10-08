const Actor = require('./actor.js')
async function getDataFromActorTable() {
    try {
      const actor = await Actor.findAll();
      console.log(actor);
    } catch (error) {
      console.error('Gagal mengambil data dari tabel actor:', error);
    }
  }
  
  getDataFromActorTable();