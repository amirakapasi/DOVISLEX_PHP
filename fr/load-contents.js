/* 
 *  Author: Anthea Jung
 *  Created: 10/27/2015
 *  Last modified: 10/28/2015
 *  
 *  Instead of using css (traduzioni.css) to fill the elements with new manual 
 *  tranlsation, loadContents() function is used to place the given value to the 
 *  element with the given id. Depending on if the element is empty or not, value 
 *  is either appended or replaced */


    
function loadContents() {
    //example: appendORreplace('#L19', "appeal to the Boards of Appeal");
    //see DE/load-contents.js for more examples
    
    //INDEX.html
    appendORreplace('#F1', "En particulier, les associés du cabinet ont plaidé quelques soixante-dix affaires devant la Cour de justice de l'Union européenne à Luxembourg.");
    appendORreplace('.F2', "DE NOBIS");
    appendORreplace('#F3', "CABINET D'AVOCATS DONÀ VISCARDINI");
    appendORreplace('#F4', "DOMAINES DE COMPÉTENCE");
    appendORreplace('#F5', "Commerce à l'intérieur de l'UE");
    appendORreplace('#F6', "Droit douanier");
    appendORreplace('#F7', "Marques UE");
    appendORreplace('#F8', "Droit du commerce international et / ou droit de l'UE");
    appendORreplace('#F9', "Arbitrages, ADR, stratégie de négociation");
    appendORreplace('#F10', "Droit pénal et administratif concernant les ressources financières de l'UE");
    appendORreplace('#F11', "TRIBUNAUX, PROCÉDURES ET LES ZONES GÉOGRAPHIQUES DE COMPÉTENCE");
    appendORreplace('#F12', "procédures devant les tribunaux d'Italie, d'Allemagne, Belgique et France (civiles, pénales, administratives et fiscales)");
    appendORreplace('#F13', "procédures devant le Tribunal et la Cour de justice de l'Union européenne à Luxembourg");
    appendORreplace('#F14', "procédures devant la Cour européenne des droits de l'homme à Strasbourg");
    appendORreplace('#F15', "procédures d'arbitrage national et international");
    appendORreplace('#F16', "En outre -  grâce également au rôle de Mr. Gabriele DONÀ en tant que vice-président de l'Union des avocats européens - le cabinet est relié à un vaste réseau de professionnels avec des expériences spécifiques,notamment dans les États membres de l'Union européenne ainsi qu'aux États-Unis ( New York, Houston).");
    
    appendORreplace('#F17', "Le cabinet d'avocats Donà Viscardini a été fondé en 1974 par Maître Wilma Viscardini qui voulait mettre à la disposition des entreprises et des particuliers son expertise dans le domaine du droit communautaire - développée au fil des ans dans les institutions européennes. Elle était, en fait, fonctionnaire de la Commission européenne depuis 14 ans (1959-1973) et, en particulier, membre du service juridique de la Commission à Bruxelles pendant neuf ans (1964-1973).");
     
    appendORreplace('#F18', "De plus, Maître Viscardini, était depuis des années professeur de droit communautaire à l'Université de Padoue et est toujours active dans le monde académique et invitée comme conférencier lors de nombreuses conférences.");
    
    appendORreplace('#F19', "Par la suite, l'avocat de Viscardini a été rejoint dans la pratique de ses enfants, avocat Gabriele Dona et avocat Simonetta DONÀ, à la fois avec une vaste expérience professionnelle et académique.");
    appendORreplace('#F20', "Les autres partenaires et associés du cabinet ont également une vaste expertise en droit européen et international, parfois enrichie avec des expériences professionnelles et académiques importantes (dans les institutions communautaires et les grands cabinets d'avocats à l'étranger).");
   appendORreplace('#D9',"Avocat plaidant devant les tribunaux nationaux italiens, belges, français et luxembourgeois; la Cour suprême de cassation et autres juridictions italiennes de plus haut degré; le Tribunal et la Cour de justice des Communautés européennes à Luxembourg; la Cour européenne des droits de l'homme à Strasbourg; dans les procédures administratives avec les institutions de l'UE; en arbitrage interne et international. Précédemment ...");
appendORreplace('#F21',"• Fonctionnaire CEE au Luxembourg et ensuite à Bruxelles - Belgique (1959-1973). En particulier, membre du Service juridique de la Commission européenne, chargé de donner des avis sur les projets d'actes communautaires élaborés par les DG de la Commission; assister pour les aspects juridiques, les représentants de la Commission lors de l'examen des propositions de telle-ci, aussi bien devant le Parlement européen et le Conseil des Ministres; représenter et défendre la Commission devant la Cour de justice des Communautés européennes;");
appendORreplace('#F22',"• Professeur de droit européen et du Commerce international - Faculté de sciences politiques scientifiques et Faculté des sciences de l'Agriculture - Université de Padoue (1974-1999)");
appendORreplace('#F23',"• Auteur pour 'Il Sole-24 Ore' d'articles concernant le droit communautaire, et notamment les arrêts du Tribunal de première instance et de la Cour de justice des Communautés européennes (1999) ");
appendORreplace('#F24',"agriculture, pêche, alimentation, environnement");
appendORreplace('#F25',"concurrence");
appendORreplace('#F26',"échanges à l'intérieur de l'UE");
appendORreplace('#F27',"relations commerciales UE / pays tiers");
appendORreplace('#F28',"droit pénal et administratif concernant les ressources financières communautaires");

//professionisti
appendORreplace('#D8'," (depuis 1974)");

//contenzioso php & html
appendORreplace('#F29',"Liste des affaires représentées par les partenaires du cabinet devant le Tribunal et la Cour de justice de l'Union européenne");
appendORreplace('#F30',"Aide pour l'extensification dans le secteur de la viande  bovine");
appendORreplace('#F31',"Recettes sur la fiscalité pétrolière");
appendORreplace('#F32',"Ce tableau répertorie uniquement les affaires qui ont atteint le Tribunal ou la Cour de justice. La grande majorité des affaires ont lieu devant les juridictions nationales, les autres institutions européennes, ou suivent les procédures administratives.");
appendORreplace('#F33',"Pour des raisons de confidentialité (en particulier, pour éviter l'identification du client), pour chaque afaire le numéro de rôle a été omis. Pour chaque cas sont rapportés:");
appendORreplace('#F34',"l'année de l'origine de l'affaire;");
appendORreplace('#F35',"Recours en carence");
appendORreplace('#F36',"Recours en carence");


}

/* If an element is empty, then appends value.
 * If an element is not empty, then replaces the innerHTML with a given value */
function appendORreplace(id, value) {
    if ($(id).html() === "") {
        $(id).append(value);
    } else {
        $(id).text(value);
    }
}

