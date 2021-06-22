import img1 from '../assets/img/avatar1.png'
import img2 from '../assets/img/avatar2.png'
import Audio from '../assets/img/audio2.mp3'
import audiod from '../assets/img/audio1.mp3'


export const DATA = {
    dialogfrstperson:
        [
            {replic:"Looks like somebody forgot to do the breakfast dishes. Whose turn was it ?", audio:Audio},
            {replic:"Oh. Why didn’t you do them?", audio:audiod},
            {replic:"It's your responsibility to remember.", audio:Audio},
            {replic:"Well , just because I'm working doesn't mean you can shirk your responsibilities here at home .", audio:audiod},
        ],
    namefrstperson: 'Elyse Keaton',
    avatarfrstperson: img1,
    dialogscndperson:
        [
            {replic:"Mine.", audio:audiod},
            {replic:"Guess i forgot.", audio:Audio},
            {replic:"What's the difference ? You're gone all day. Who's gonna notice ?", audio:audiod},
            {replic:"Why not? You do.", audio:Audio},
        ],
    avatarscndperson: img2,
    namescndperson:"Jennifer Keaton",
}