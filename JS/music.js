class Music {
    constructor(title, singer, img, file) {
        this.title = title,
        this.singer = singer,
        this.img = img,
        this.file = file
    }
}

const musicList = [
    new Music("Die For You", "The Weeknd & Ariana Grande", "/image/dieForYou.jpg", "/music/The Weeknd & Ariana Grande - Die For You.mp3"),
    new Music("Tutuşmuş Beraber", "Melike Şahin", "/image/tutusmusBeraber.jpg", "/music/Melike Şahin - Tutuşmuş Beraber.mp3"),
    new Music("Olsun", "Sertab Erener", "/image/olsun.jpg", "/music/Sertab Erener - Olsun.mp3"),
    new Music("Ben De Yoluma Giderim", "Sezen Aksu", "/image/benDeYolumaGiderim.jpg", "/music/Sezen Aksu - Ben De Yoluma Giderim.mp3")
]
