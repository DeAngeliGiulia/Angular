import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DettagliServizioService {

  constructor() { }

  mostre = [
    {nome:'Botticelli', pittore:'Sandro Botticelli', immagine:'./assets/botticelli.png', dInizio: new Date(2024, 5, 1), dFine: new Date(2024, 5, 4),},
    {nome:'Munch', pittore:'Edvard Munch', immagine:'./assets/munch.png', dInizio: new Date(2024, 5, 5), dFine: new Date(2024, 5, 9),},
    {nome:'Picasso', pittore:'Pablo Picasso', immagine:'./assets/picasso.png', dInizio: new Date(2024, 5, 10), dFine: new Date(2024, 5, 13),},
    {nome:'Van Gogh', pittore:'Vincent Van Gogh', immagine:'./assets/van-gogh.png', dInizio: new Date(2024, 5, 14), dFine: new Date(2024, 5, 17),},
    {nome:'Monet', pittore:'Claude Monet', immagine:'./assets/monet.png', dInizio: new Date(2024, 5, 18), dFine: new Date(2024, 5 , 21),},
    {nome:'Da Vinci', pittore:'Leonardo Da Vinci', immagine:'./assets/davinci.png', dInizio: new Date(2024, 5, 22), dFine: new Date(2024, 5, 26),},
    {nome:'Vermeer', pittore:'Johannes Vermeer', immagine:'./assets/vermeer.png', dInizio: new Date(2024, 5, 27), dFine: new Date(2024, 5, 31),},
    ]

    dati=[
      {pittore:'Botticelli', nome1:'Primavera', anno1:'1482', immagine1:'./assets/primavera.png', descrizione1:"L'opera è ambientata in un boschetto di aranci e va letta da destra verso sinistra. In questo ombroso boschetto, che forma una sorta di semi-cupola di aranci colmi di frutti e arbusti sullo sfondo di un cielo azzurrino, sono disposti nove personaggi. Il suolo è composto da un verde prato, disseminato da un'infinita varietà di specie vegetali e un ricchissimo campionario di fiori.",
        nome2:'Venere e Marte', anno2:'1483', immagine2:'./assets/venereemarte.png', descrizione2:"La scena raffigura Venere mentre osserva Marte dormiente, distesi su un prato e circondati da piccoli fauni che giocano allegri con le armi del dio. I satiri sembrano tormentare Marte disturbando il suo sonno, mentre ignorano del tutto Venere, vigile e cosciente. Nonostante il contorno scherzoso dei fauni, nel dipinto serpeggiano anche elementi di inquietudine, come il sonno spossato e abbandonato di Marte o lo sguardo lievemente malinconico di Venere.",
        nome3:'Nasicta di Venere', anno3:'1483', immagine3:'./assets/nascitavenere.png', descrizione3:"Contrariamente al titolo con cui l'opera è nota, essa non raffigura la nascita della dea, ma il suo approdo sull'isola di Cipro. Venere avanza leggera fluttuando su una conchiglia lungo la superficie del mare increspata dalle onde, in tutta la sua grazia e ineguagliabile bellezza, nuda e distante come una splendida statua antica. Viene sospinta e riscaldata dal soffio di Zefiro, abbracciato a un personaggio femminile con cui simboleggia la fisicità dell'atto d'amore, che muove Venere col vento della passione."
      },
      {pittore:'Munch', nome1:'Amore e Dolore', anno1:'1482', immagine1:'./assets/amoredolore.png', descrizione1:"Il dipinto mostra una donna con lunghi capelli rosso fuoco che bacia un uomo sul collo, mentre la coppia si abbraccia. Sebbene altri abbiano visto in esso ''un uomo rinchiuso nell'abbraccio torturato di un vampiro, i suoi capelli rosso fuoco che correvano lungo la sua morbida pelle nuda'', lo stesso Munch ha sempre affermato che non mostrava altro che ''solo una donna che bacia un uomo sul collo''.",
        nome2:'Night in Saint Cloud, la Senna a St. Cloud', anno2:'1890', immagine2:'./assets/nightinsaintcloud.png', descrizione2:"Questo dipinto è un capolavoro di impressionismo. Questa opera d'arte è una rappresentazione impressionante della bellezza naturale della notte a Saint Cloud, un sobborgo di Parigi.",    
        nome3:"L'urlo", anno3:'1893', immagine3:'./assets/Urlo.png', descrizione3:" L'urlo rappresenta un sentiero sul quale si sta consumando un urlo acuto, che eleva la scena a simbolo del dramma collettivo dell'angoscia, del dolore e della paura. Il soggetto urlante è la figura in primo piano, terrorizzata, che per emettere il grido si comprime la testa con le mani, perdendo ogni forma e diventando preda del suo stesso sentimento: più che un uomo, infatti, ricorda un ectoplasma, con il suo corpo serpentiforme, quasi senza scheletro, privo di capelli, deforme."
      },
      {pittore:'Picasso', nome1:'Il Vecchio Chitarrista Cieco', anno1:'1904', immagine1:'./assets/chitarrista.png', descrizione1:"Picasso raffigura in questo quadro un vecchio mendicante cieco, su di un marciapiede, intento a suonare una grossa chitarra, che nel dipinto occupa molto più spazio di lui e si contrappone nella sua rotondità alla magrezza del vecchio. La figura dell'anziano signore ha una forma allungata ed è descritta mediante una linea di contorno. Il colore è innaturale ed annulla quasi i piani spaziali, rendendo l'immagine come isolata nello spazio.",
        nome2:'La Stanza Blu', anno2:'1901', immagine2:'./assets/stanzablu.png', descrizione2:"Raffigura una scena di una donna nuda mentre fa il bagno. L'immagine della camera da letto della donna offre uno spaccato dell'abitazione di Picasso dell'epoca. L'ambientazione di questo dipinto è il monolocale di Picasso",
        nome3:'Bambino con una colomba', anno3:'1901', immagine3:'./assets/bambino.png', descrizione3:"Raffigura una ragazza, con corti capelli rossi, che indossa un abito bianco legato in vita con una fascia blu. Il soggetto sta in piedi e tiene una colomba bianca con entrambe le mani, accanto a una palla con segmenti dai colori vivaci. Lo sfondo è dipinto in modo piatto, come un cielo azzurro astratto e un'erba verde. Gli elementi della scena, come i capelli della ragazza, la palla e le piume della colomba, sono suggeriti dalle loro forme, ma mostrano pochissimi dettagli. ",
      },
      {pittore:'Van Gogh', nome1:'La Notte Stellata', anno1:'1889', immagine1:'./assets/nottestellata.png', descrizione1:"A sinistra la scena è chiusa da un cipresso alto e severo che agisce come un intermediario vegetale tra la terra e il cielo, tra la vita e la morte: più che un albero sembrerebbe quasi una fiamma scura che divampa all'improvviso alla ricerca dell'infinito. A fianco del cipresso troviamo un piccolo paesino che, disperdendosi su una vallata, sembra perduto nell'immensità del movimento cosmico che fluisce sopra esso.",
        nome2:'Notte Stellata sul Rodano', anno2:'1888', immagine2:'./assets/nottestellatasulrodano.png', descrizione2:"Concede un'ampia rilevanza alla magnifica visione del cielo notturno, reso con una sensibilità quasi romantica. Nel dipinto quest'idillio notturno avvolge anche due innamorati, visibili in basso, oltre che le città addormentate di Arles e Trinquetaille.",
        nome3:'Campo di grano con volo di corvi', anno3:'1890', immagine3:'./assets/campo.png', descrizione3:"Il campo di grano, sconquassato senza pietà dal vento, è stato realizzato mediante vere e proprie frustate di giallo, mentre il cielo, inizialmente terso, è ora foriero di burrasca, a tal punto da essere offuscato dall'intenso colore nero delle nubi che, inesorabilmente, si calano ostili e minacciose. Il campo di grano è inoltre solcato da tre sentieri serpeggianti: il primo nell'angolo in basso a sinistra, il secondo al centro e il terzo nell'angolo in basso a destra. Si noti come i due sentieri laterali sembrano non avere né un punto d'origine né tanto meno sembrano condurre ad un punto preciso del quadro.",
      },
      {pittore:'Van Gogh', nome1:'La Notte Stellata', anno1:'1889', immagine1:'./assets/nottestellata.png', descrizione1:"",
        nome2:'Venere e Marte', anno2:'1483', immagine2:'./assets/venereemarte.png', descrizione2:"",
        nome3:'Nasicta di Venere', anno3:'1483', immagine3:'./assets/nascitavenere.png', descrizione3:"",
      },
      {pittore:'Van Gogh', nome1:'La Notte Stellata', anno1:'1889', immagine1:'./assets/nottestellata.png', descrizione1:"",
      nome2:'Venere e Marte', anno2:'1483', immagine2:'./assets/venereemarte.png', descrizione2:"",
      nome3:'Nasicta di Venere', anno3:'1483', immagine3:'./assets/nascitavenere.png', descrizione3:"",
    },
    {pittore:'Van Gogh', nome1:'La Notte Stellata', anno1:'1889', immagine1:'./assets/nottestellata.png', descrizione1:"",
    nome2:'Venere e Marte', anno2:'1483', immagine2:'./assets/venereemarte.png', descrizione2:"",
    nome3:'Nasicta di Venere', anno3:'1483', immagine3:'./assets/nascitavenere.png', descrizione3:"",
    }
  ]
}
