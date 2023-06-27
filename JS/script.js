const container = document.querySelector('.container');
const title = document.querySelector('.music-name');
const singer = document.querySelector('.songer-name');  
const img = document.querySelector('.music-img');
const audio = document.querySelector('#audio');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const currentTime = document.querySelector('.current-time');
const durationTime = document.querySelector('.duration-time');
const progressBar = document.querySelector('.progress-input');

const player = new MusicPlayer(musicList);

// Sayfa ilk yüklendiğinde müziği görüntüler.
window.addEventListener('load', () => {
    const music = player.getMusic();
    displayMusic(music);
})

// Müzik bilgilerini ekrana yazdırır.
function displayMusic(music) {
    title.innerText = music.title;
    singer.innerText = music.singer;
    img.style.backgroundImage = `url(${music.img})`;
    audio.src = music.file;
}

// Play butonuna tıklandıgında müzik çalar ve durur.
play.addEventListener('click', () => {
    if (container.classList.contains('playing')) {
        audio.pause();
        container.classList.remove("playing");
        play.classList = "fa-solid fa-play fa-2xl";
    }
    else {
        audio.play();
        container.classList.add("playing");
        play.classList = "fa-solid fa-pause fa-2xl";
    }
})

// Next butonuna tıklandıkça sonraki müziği getirir.
next.addEventListener('click', () => {
    displayMusic(musicList[player.next()]);
    container.classList.contains('playing') ? audio.play() : audio.pause();
})

// Previous butonuna  tıklandıkça önceki müziği getirir.
previous.addEventListener('click', () => {
    displayMusic(musicList[player.previous()]);
    container.classList.contains('playing') ? audio.play() : audio.pause();
})

// Serverdan audio bilgileri yüklendikten sonra çalışır.
audio.addEventListener('loadedmetadata', () => {
    durationTime.innerText = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
})

// Müziğin anlık olarak hangi saniyede olduğunu yazdırır.
audio.addEventListener('timeupdate', () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.innerText = calculateTime(audio.currentTime);
})

progressBar.addEventListener('input', () => {
    currentTime.innerText = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
})

// Gelen müziğin süre hesaplamasını yapar ve yazdırır.
function calculateTime(totalSecond) {
    let minute = Math.floor(totalSecond / 60);
    let second = Math.floor(totalSecond % 60)
    let secondControl = second < 10 ? `0${second}` : `${second}`;    
    return `0${minute} : ${secondControl}`;
} 