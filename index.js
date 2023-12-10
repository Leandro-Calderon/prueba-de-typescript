// crear la clase Banda aquí
var Banda = /** @class */ (function () {
    function Banda(members, albums) {
        this.members = members;
        this.albums = albums;
    }
    Banda.prototype.getFirstAlbum = function () {
        return this.albums[0];
    };
    Banda.prototype.getAllAlbums = function () {
        return this.albums;
    };
    Banda.prototype.getAllMembers = function () {
        return this.members;
    };
    Banda.prototype.getRandomSong = function (albumTitle) {
        var album = this.albums.find(function (album) {
            if (album.title == albumTitle) {
                return true;
            }
        });
        var posicionRandom = Math.random() * album.songs.length;
        var posicionRandomRedondeada = Math.floor(posicionRandom);
        return album.songs[posicionRandomRedondeada];
    };
    return Banda;
}());
function testClaseBanda() {
    var members = ["dana", "pau"];
    var fa = {
        title: "album 1",
        songs: ["album 1 - tema 1", "album 1 - tema 2"],
    };
    var banda = new Banda(members, [
        fa,
        {
            title: "album 2",
            songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
        },
    ]);
    var firstAlbum = banda.getFirstAlbum();
    var allMembers = banda.getAllMembers();
    var randomSongAlbum1 = banda.getRandomSong("album 1");
    if (firstAlbum.title == fa.title &&
        fa.songs.length == firstAlbum.songs.length &&
        JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
        fa.songs.includes(randomSongAlbum1)) {
        console.log("testClaseBanda passed");
    }
    else {
        throw "testClaseBanda not passed";
    }
}
function main() {
    var bandaDePrueba = new Banda(["Mollo", "Luca Prodan", "Arnedo", "Troglio"], [
        { title: "LLegando los monos", songs: ["a", "b", "c"] },
        { title: "After chabon", songs: ["d", "e", "f"] }
    ]);
    testClaseBanda();
}
main();
