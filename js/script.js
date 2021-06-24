
const app = new Vue (
    {
        //Dichciare in quale contenitore inserirlo
        el:'#app',
        //-----------
        //Inserimento dei dati quindi le nostre variabili utilizzabii
        data:{
            text:'Liverpool',
            contentClass: 'larghezza',
            testoButton:'Click to hide',
            testoScomparsa:'show',
            immagine:'img/pic.png',
            box: 'box-image'
        },
        //Lancio di una funzione in click:
        methods:{
            checkShow : function (){
                if (this.testoScomparsa === 'show') {
                    this.testoScomparsa =  'hidden';
                    this.testoButton = 'Click to show';
                    
                } else {
                    this.testoScomparsa = 'show';
                    this.testoButton = 'Click to hide';

                }

            }

        }

    }
);
// ------------------------
//Logica seconda parte domande:
const secondaApp = new Vue (
    {
        el:'#seconda-App',
        data:{
            buttonText:'Check',
            premierLeage:10,
            coppeInghilterra:4,
            shiel:3,
            champions:6
        
        },
        methods:{
            checkScorse: function() {
                
            }
        }
    }
)