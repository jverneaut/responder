interface Template {
  title: string;
  body: string;
  tags: string[];
}

const defaultTemplates: Template[] = [
  {
    title: 'Réponse favorable proposition de poste',
    body: `<p>
      Bonjour [interlocuteur],<br><br>
      Merci de m'avoir contacté au sujet de votre offre de [nom de l'offre].
      Je suis actuellement à la recherche de nouvelles opportunités et je souhaiterai en discuter avec vous.<br><br>
      Seriez vous disponible pour un rendez-vous [date] ?<br><br>
      [formule de politesse],<br>
      [signature]
    </p>`,
    tags: ['positif', 'linkedin', 'recruteur', 'oui', 'entretien'],
  },
  {
    title: 'Réponse défavorable proposition de poste',
    body: `<p>
      Bonjour [interlocuteur],<br><br>
      Merci de m'avoir contacté au sujet de votre offre de [nom de l'offre].
      Je suis actuellement en mission jusqu'à [date de fin de mission] et ne pourrait donc pas y répondre favorablement.<br><br>
      En revanche, je reste à l'écoute de toute proposition future de votre part.<br><br>
      [formule de politesse],<br>
      [signature]
    </p>`,
    tags: ['négatif', 'linkedin', 'recruteur', 'oui', 'entretien'],
  },
];

export const getTemplates = (): Template[] => {
  return defaultTemplates;
};
