const { Pool } = require('pg');
 
class MusicsService {
  constructor() {
    this._pool = new Pool();
  }
 
  async getMusic(playlistId) {
    const query = {
      text: `SELECT openmusic.* FROM openmusic
      JOIN playlistsongs ON openmusic.id = playlistsongs.song_id 
      WHERE playlistsongs.playlist_id = $1;`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}
 
module.exports = MusicsService;