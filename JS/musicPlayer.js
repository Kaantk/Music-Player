class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
    }

    // İlgili indexteki müzik bilgilerini getirir.
    getMusic() {
        return this.musicList[this.index];
    }

    // Index numarasını artırır.
    next() {
        if (this.musicList.length != this.index + 1) {
            return ++this.index;
        }
        else {
            return this.index = 0;
        }
        
    }

    // Index numarasını azaltır.
    previous() {
        if (this.index != 0) {
            return --this.index;
        }
        else {
            return this.index = this.musicList.length - 1;
        }
    }
}