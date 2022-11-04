export let wordlist

if (localStorage.getItem('wordlist') !== null) {
  wordlist = JSON.parse(localStorage.getItem('wordlist'))
} else {
  wordlist = [
    {
      name: '1. Relationships',
      finished: false,
      words: [
        {
          finished: false,
          english: 'upbringing',
          dutch: 'opvoeding'
        },
        {
          finished: false,
          english: 'offspring',
          dutch: 'nakomeling'
        },
        {
          finished: false,
          english: 'to resemble',
          dutch: 'lijken op'
        },
        {
          finished: false,
          english: 'engaged',
          dutch: 'verloofd'
        },
        {
          finished: false,
          english: 'infant',
          dutch: 'klein kind'
        },
        {
          finished: false,
          english: 'youth',
          dutch: 'jongere, jongeman'
        },
        {
          finished: false,
          english: 'ancestor',
          dutch: 'voorouder'
        },
        {
          finished: false,
          english: 'posterity',
          dutch: 'nageslacht'
        },
        {
          finished: false,
          english: 'hereditary',
          dutch: 'erfelijk'
        },
        {
          finished: false,
          english: 'humanity',
          dutch: 'mensheid'
        },
        {
          finished: false,
          english: 'cemetery',
          dutch: 'begraafplaats'
        },
        {
          finished: false,
          english: 'te descend',
          dutch: 'afstammen'
        },
        {
          finished: false,
          english: 'tribe',
          dutch: 'stam'
        },
        {
          finished: false,
          english: 'ally',
          dutch: 'bondgenoot'
        },
        {
          finished: false,
          english: 'associate',
          dutch: 'relatie'
        },
        {
          finished: false,
          english: 'parental',
          dutch: 'ouderlijk'
        },
        {
          finished: false,
          english: 'guardian',
          dutch: 'voogd'
        },
        {
          finished: false,
          english: 'to rear',
          dutch: 'opvoeden, grootbrengen'
        },
        {
          finished: false,
          english: 'to alienate',
          dutch: 'vervreemden'
        },
        {
          finished: false,
          english: 'innate',
          dutch: 'aangeboren'
        },
        {
          finished: false,
          english: 'to fancy',
          dutch: 'verliefd zijn op'
        },
        {
          finished: false,
          english: 'marital',
          dutch: 'huwelijks-'
        },
        {
          finished: false,
          english: 'adultery',
          dutch: 'overspel'
        },
        {
          finished: false,
          english: 'segregation',
          dutch: 'rassenscheiding'
        },
        {
          finished: false,
          english: 'virgin',
          dutch: 'maagd'
        },
        {
          finished: false,
          english: 'bachelor',
          dutch: 'vrijgezel'
        },
        {
          finished: false,
          english: 'single',
          dutch: 'alleenstaand'
        },
        {
          finished: false,
          english: 'to accompany',
          dutch: 'begeleiden'
        },
        {
          finished: false,
          english: 'tenant',
          dutch: 'huurder'
        },
        {
          finished: false,
          english: 'gap',
          dutch: 'kloof'
        },
        {
          finished: false,
          english: 'row',
          dutch: 'ruzie'
        },
        {
          finished: false,
          english: 'to maintain',
          dutch: 'onderhouden'
        },
        {
          finished: false,
          english: 'affection',
          dutch: 'genegenheid, liefde'
        },
        {
          finished: false,
          english: 'faithful',
          dutch: 'trouw'
        },
        {
          finished: false,
          english: 'to age',
          dutch: 'oud(er) worden'
        },
        {
          finished: false,
          english: 'mutual',
          dutch: 'wederzijds'
        },
        {
          finished: false,
          english: 'guestroom',
          dutch: 'logeerkamer'
        },
        {
          finished: false,
          english: 'coffin',
          dutch: 'doodskist'
        },
        {
          finished: false,
          english: 'deceased',
          dutch: 'overledene'
        },
        {
          finished: false,
          english: 'orphan',
          dutch: 'wees'
        }
      ]
    },
    {
      name: '2. Education',
      finished: false,
      words: [
        {
          finished: false,
          english: 'to enrol',
          dutch: 'inschrijven'
        },
        {
          finished: false,
          english: 'to major in',
          dutch: 'als hoofdvak hebben'
        },
        {
          finished: false,
          english: 'physics',
          dutch: 'natuurkunde'
        },
        {
          finished: false,
          english: 'proficient',
          dutch: 'vaardig, bekwaam'
        },
        {
          finished: false,
          english: 'truant',
          dutch: 'spijbelaar'
        },
        {
          finished: false,
          english: 'public school',
          dutch: 'particuliere kostschool'
        },
        {
          finished: false,
          english: 'comprehensive school',
          dutch: 'scholengemeenschap'
        },
        {
          finished: false,
          english: 'boarding school',
          dutch: 'kostschool'
        },
        {
          finished: false,
          english: 'nursery school',
          dutch: 'peuterspeelzaal'
        },
        {
          finished: false,
          english: 'kindergarten',
          dutch: 'kleuterschool'
        },
        {
          finished: false,
          english: 'attentive',
          dutch: 'oplettend'
        },
        {
          finished: false,
          english: 'by heart',
          dutch: 'van buiten'
        },
        {
          finished: false,
          english: 'GCSE, General Certificate of Secondary Education',
          dutch: 'Examen Algemeen Voortgezet Onderwijs'
        },
        {
          finished: false,
          english: 'curriculum',
          dutch: 'vakkenpakket, leerplan'
        },
        {
          finished: false,
          english: 'tuition fee',
          dutch: 'schoolgeld'
        },
        {
          finished: false,
          english: 'grant',
          dutch: 'studiebeurs'
        },
        {
          finished: false,
          english: 'careers advisor',
          dutch: 'loopbaancoach, decaan'
        },
        {
          finished: false,
          english: 'compulsory',
          dutch: 'verplicht'
        },
        {
          finished: false,
          english: 'obligatory',
          dutch: 'verplicht'
        },
        {
          finished: false,
          english: 'attendance',
          dutch: 'aanwezigheid'
        },
        {
          finished: false,
          english: 'punctual',
          dutch: 'op tijd aanwezig'
        },
        {
          finished: false,
          english: 'fluency',
          dutch: 'spreekvaardigheid'
        },
        {
          finished: false,
          english: 'pronunciation',
          dutch: 'uitspraak'
        },
        {
          finished: false,
          english: 'to multiply',
          dutch: 'vermenigvuldigen'
        },
        {
          finished: false,
          english: 'lecture',
          dutch: 'lezing'
        },
        {
          finished: false,
          english: 'scholar',
          dutch: 'geleerde'
        },
        {
          finished: false,
          english: 'term',
          dutch: 'trimester, schoolperiode'
        },
        {
          finished: false,
          english: 'recipient',
          dutch: 'ontvanger'
        },
        {
          finished: false,
          english: 'to advance',
          dutch: 'vorderen'
        },
        {
          finished: false,
          english: 'illiterate',
          dutch: 'analfabeet'
        },
        {
          finished: false,
          english: 'to conform to',
          dutch: 'zich aanpassen aan'
        },
        {
          finished: false,
          english: 'to assess',
          dutch: 'beoordelen'
        },
        {
          finished: false,
          english: 'to excel',
          dutch: 'uitblinken'
        },
        {
          finished: false,
          english: 'to be in detention',
          dutch: 'nablijven'
        },
        {
          finished: false,
          english: 'to mark',
          dutch: 'nakijken'
        },
        {
          finished: false,
          english: 'to comply with',
          dutch: 'voldoen aan'
        },
        {
          finished: false,
          english: 'comprehension',
          dutch: 'begrip'
        },
        {
          finished: false,
          english: 'industrious',
          dutch: 'ijverig'
        },
        {
          finished: false,
          english: 'survey',
          dutch: 'overzicht'
        },
        {
          finished: false,
          english: 'tedious',
          dutch: 'saai'
        }
      ]
    },
    {
      name: '3. Health and care',
      finished: false,
      words: [
        {
          finished: false,
          english: 'side-effects',
          dutch: 'bijwerkingen'
        },
        {
          finished: false,
          english: 'stroke',
          dutch: 'beroerte'
        },
        {
          finished: false,
          english: 'joint',
          dutch: 'gewricht'
        },
        {
          finished: false,
          english: 'sustainability',
          dutch: 'houdbaarheid'
        },
        {
          finished: false,
          english: 'to recuperate',
          dutch: 'herstellen'
        },
        {
          finished: false,
          english: 'to inoculate',
          dutch: 'inenten'
        },
        {
          finished: false,
          english: 'to benefit',
          dutch: 'goed doen'
        },
        {
          finished: false,
          english: 'strain',
          dutch: 'druk, belasting'
        },
        {
          finished: false,
          english: 'agony',
          dutch: 'ondraaglijke pijn'
        },
        {
          finished: false,
          english: 'cardiac arrest',
          dutch: 'hartstilstand'
        },
        {
          finished: false,
          english: 'obesity',
          dutch: 'zwaarlijvigheid'
        },
        {
          finished: false,
          english: 'paralysis',
          dutch: 'verlamming'
        },
        {
          finished: false,
          english: 'contagious',
          dutch: 'besmettelijk'
        },
        {
          finished: false,
          english: 'to neglect',
          dutch: 'verwaarlozen'
        },
        {
          finished: false,
          english: 'nutritious',
          dutch: 'voedzaam'
        },
        {
          finished: false,
          english: 'disabled',
          dutch: 'invalide'
        },
        {
          finished: false,
          english: 'malignant',
          dutch: 'kwaadaardig'
        },
        {
          finished: false,
          english: 'to shiver',
          dutch: 'rillen'
        },
        {
          finished: false,
          english: 'to cough',
          dutch: 'hoesten'
        },
        {
          finished: false,
          english: 'to vomit',
          dutch: 'braken, overgeven'
        },
        {
          finished: false,
          english: 'to pant',
          dutch: 'hijgen'
        },
        {
          finished: false,
          english: 'to digest',
          dutch: 'verteren'
        },
        {
          finished: false,
          english: 'to callapse',
          dutch: 'in elkaar zakken'
        },
        {
          finished: false,
          english: 'to moan',
          dutch: 'kreunen'
        },
        {
          finished: false,
          english: 'to suffocate',
          dutch: 'stikken'
        },
        {
          finished: false,
          english: 'to go into rehab',
          dutch: 'afkicken'
        },
        {
          finished: false,
          english: 'kidney',
          dutch: 'nier'
        },
        {
          finished: false,
          english: 'germ',
          dutch: 'bacterie'
        },
        {
          finished: false,
          english: 'sedative',
          dutch: 'kalmeringsmiddel'
        },
        {
          finished: false,
          english: 'to soothe',
          dutch: 'verzachten'
        },
        {
          finished: false,
          english: 'prescription',
          dutch: 'recept'
        },
        {
          finished: false,
          english: 'adverse',
          dutch: 'negatief'
        },
        {
          finished: false,
          english: 'to administer',
          dutch: 'toedienen'
        },
        {
          finished: false,
          english: 'to consult',
          dutch: 'raadplegen'
        },
        {
          finished: false,
          english: 'lethal',
          dutch: 'dodelijk, zeer gevaarlijk'
        },
        {
          finished: false,
          english: 'contaminated',
          dutch: 'besmet'
        },
        {
          finished: false,
          english: 'incurable',
          dutch: 'ongeneeslijk'
        },
        {
          finished: false,
          english: 'to subject to',
          dutch: 'onderwerpen aan'
        },
        {
          finished: false,
          english: 'guinea pig',
          dutch: 'proefkonijn'
        },
        {
          finished: false,
          english: 'to regain',
          dutch: 'terugkrijgen'
        }
      ]
    },
    {
      name: '4. Feelings and attitudes',
      finished: false,
      words: [
        {
          finished: false,
          english: 'avid',
          dutch: 'enthousiast'
        },
        {
          finished: false,
          english: 'biased',
          dutch: 'bevooroordeeld'
        },
        {
          finished: false,
          english: 'commitment',
          dutch: 'grote inzet'
        },
        {
          finished: false,
          english: 'overwhelmed',
          dutch: 'overweldigd'
        },
        {
          finished: false,
          english: 'awe',
          dutch: 'ontzag, enorm respect'
        },
        {
          finished: false,
          english: 'to reconcile',
          dutch: 'verzoenen'
        },
        {
          finished: false,
          english: 'to adore',
          dutch: 'aanbidden'
        },
        {
          finished: false,
          english: 'to mock',
          dutch: 'bespotten, belachelijk maken'
        },
        {
          finished: false,
          english: 'hostile',
          dutch: 'vijandig'
        },
        {
          finished: false,
          english: 'appaling',
          dutch: 'vreselijk'
        },
        {
          finished: false,
          english: 'desperate',
          dutch: 'wanhopig'
        },
        {
          finished: false,
          english: 'to appal',
          dutch: 'verbijsteren'
        },
        {
          finished: false,
          english: 'indignant',
          dutch: 'verontwaardigd'
        },
        {
          finished: false,
          english: 'disdain',
          dutch: 'minachting'
        },
        {
          finished: false,
          english: 'outrage',
          dutch: 'verontwaardiging'
        },
        {
          finished: false,
          english: 'rage',
          dutch: 'woede'
        },
        {
          finished: false,
          english: 'resentment',
          dutch: 'haat, wrok'
        },
        {
          finished: false,
          english: 'furious',
          dutch: 'woedend'
        },
        {
          finished: false,
          english: 'anxious',
          dutch: 'ongerust'
        },
        {
          finished: false,
          english: 'concerned',
          dutch: 'bezorgd'
        },
        {
          finished: false,
          english: 'anguish',
          dutch: 'enorme bezorgdheid en angst'
        },
        {
          finished: false,
          english: 'agonizing',
          dutch: 'zeer pijnlijk'
        },
        {
          finished: false,
          english: 'to sense',
          dutch: 'voelen'
        },
        {
          finished: false,
          english: 'tendency',
          dutch: 'neiging'
        },
        {
          finished: false,
          english: 'blunt',
          dutch: 'bot'
        },
        {
          finished: false,
          english: 'patronising',
          dutch: 'neerbuigend'
        },
        {
          finished: false,
          english: 'condescending',
          dutch: 'neerbuigend'
        },
        {
          finished: false,
          english: 'to reject',
          dutch: 'afwijzen'
        },
        {
          finished: false,
          english: 'prejudice',
          dutch: 'vooroordeel'
        },
        {
          finished: false,
          english: 'suspicous',
          dutch: 'verdacht'
        },
        {
          finished: false,
          english: 'to envy',
          dutch: 'benijden om, benijden'
        },
        {
          finished: false,
          english: 'to bear',
          dutch: 'verdragen'
        },
        {
          finished: false,
          english: 'grief',
          dutch: 'verdriet'
        },
        {
          finished: false,
          english: 'to mourn',
          dutch: 'rouwen over, treuren over'
        },
        {
          finished: false,
          english: 'pledge',
          dutch: 'plechtige belofte'
        },
        {
          finished: false,
          english: 'to humiliate',
          dutch: 'vernederen'
        },
        {
          finished: false,
          english: 'daunting',
          dutch: 'ontmoedigend'
        },
        {
          finished: false,
          english: 'to be eager',
          dutch: 'heel graag willen'
        },
        {
          finished: false,
          english: 'keen',
          dutch: 'enthousiast'
        },
        {
          finished: false,
          english: 'to long',
          dutch: 'sterk verlangen'
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        {
          finished: false,
          english: '',
          dutch: ''
        },
        
      ]
    },
    {
      name: '8. Sports and leisure',
      finished: false,
      words: []
    },
    {
      name: '9. Communication and information',
      finished: false,
      words: []
    },
    {
      name: '11. Economy and money',
      finished: false,
      words: []
    },
    {
      name: '12. Science and technology',
      finished: false,
      words: []
    },
    {
      name: '13. Culture and art',
      finished: false,
      words: []
    },
    {
      name: '14. Nature and the environment',
      finished: false,
      words: []
    }
  ]

  localStorage.setItem('wordlist', JSON.stringify(wordlist))
}

export function updateFinished(item, finished) {
  item.finished = finished
  localStorage.setItem('wordlist', JSON.stringify(wordlist))
  console.log(item)
  console.log(wordlist)
}
