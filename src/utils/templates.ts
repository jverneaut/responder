interface Template {
  title: string;
  body: string;
  tags: string[];
}

const defaultTemplates: Template[] = [
  {
    title: 'Prise de contact',
    body: `<p>Hello [name],<br><br>
      Merci pour cette prise de contact. Pouvez-vous m’en dire un peu plus sur cette mission ?<br><br>
      Pour me présenter rapidement, je travaille en freelance depuis 4 ans dans l’accompagnement d’agences web pour de l’intégration sur les principaux CMS du marché mais aussi en tant que développeur fullstack pour la création d’applications web et mobile.<br><br>
      Mes clients travaillent principalement avec WordPress mais j’ai également eu l’occasion d’être missionné sur des projets Drupal, PrestaShop ou des bases customs construites avec Node.js, Symfony et Laravel.<br><br>
      Côté front, je maintiens un laboratoire qui me tient actuellement de portfolio et sur lequel j’aime à pousser les limites de ce qu’il est possible de faire dans un navigateur : https://lab.julienverneaut.com. Si je travaille principalement avec les différents systèmes de templating propres aux CMS évoqués précédemment, je suis également à l’aise avec React et Vue.js pour le développement d’applications ou de fonctionnalités plus complexes.<br><br>
      La plupart des projets réalisés pour mes clients étant protégés par un NDA, je n’ai pas l’autorisation de les partager sur mes réseaux publics. Je pourrais néanmoins vous envoyer quelques références par message si mon profil venait à attirer davantage votre attention.<br><br>
      Voici également un lien vers mon GtiHub sur lequel je maintiens quelques projets personnels et qui offre un aperçu de mes pratiques en matière de développement : https://github.com/jverneaut<br><br>
      Merci encore pour prise de contact, je reste à disposition si vous avez besoin d’informations complémentaires.
    </p>`,
    tags: ['linkedin'],
  },
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
