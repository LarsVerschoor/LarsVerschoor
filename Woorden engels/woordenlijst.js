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
      words: []
    },
    {
      name: '4. Feelings and attitudes',
      finished: false,
      words: []
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