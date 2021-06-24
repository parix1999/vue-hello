
const app = new Vue (
    {
        //Dichciare in quale contenitore inserirlo
        el:'#app',
        //-----------
        //Inserimento dei dati quindi le nostre variabili utilizzabii
        data:{
            text:'',
            contentClass: 'larghezza',
            testoButton:'Click to show',
            testoScomparsa:'hidden',
            immagine:'img/pic.png'
        },
        //Lancio di una funzione in click:
        methods:{
            checkShow : function (){
                if (this.testoScomparsa === 'hidden') {
                    this.testoButton = 'Click to hide',
                    this.testoScomparsa =  'show';
                    
                } else {
                    this.testoButton = 'Click to show';
                    this.testoScomparsa = 'hidden';

                }

            }

        }

    }
);