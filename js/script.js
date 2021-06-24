
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
        },
        //Lancio di una funzione in click:
        methods: function() {

        }
    }
);