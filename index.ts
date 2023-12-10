// crear la clase Banda aquí

class Banda {
  members: string[];
  albums: any[];
  constructor(members: string[], albums: any[]) {
    this.members = members;
    this.albums = albums;
  }
  getFirstAlbum() {
    return this.albums[0];
  }
  getAllAlbums() {
    return this.albums;
  }
  getAllMembers() {
    return this.members;
  }

  getRandomSong(albumTitle) {
    const album = this.albums.find((album) => {
      if (album.title == albumTitle) {
        return true;
      }
    });
    const posicionRandom = Math.random() * album.songs.length;
    const posicionRandomRedondeada = Math.floor(posicionRandom);
    return album.songs[posicionRandomRedondeada];
  }
}

function testClaseBanda() {
  const members = ["dana", "pau"];
  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };
  const banda = new Banda(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  const firstAlbum = banda.getFirstAlbum();
  const allMembers = banda.getAllMembers();
  const randomSongAlbum1 = banda.getRandomSong("album 1");

  if (
    firstAlbum.title == fa.title &&
    fa.songs.length == firstAlbum.songs.length &&
    JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
    fa.songs.includes(randomSongAlbum1)
  ) {
    console.log("testClaseBanda passed");
  } else {
    throw "testClaseBanda not passed";
  }
}

function main() {
    const bandaDePrueba= new Banda(
        ["Mollo","Luca Prodan","Arnedo","Troglio"],
        [
            {title:"LLegando los monos",songs:["a","b","c"]},
            {title:"After chabon",songs:["d","e","f"]}
        ]
    );
    
 testClaseBanda();
}

main();
