interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
songs.add({ title: 'My song', artist: 'My artist' });

const videos = new Playlist<Video>();
videos.add({ title: 'My song', creator: 'My artist', resolution: '1080' });
