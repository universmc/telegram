### Chiffrer votre diffusion à l'aide de RTMPS
Vous pouvez diffuser du contenu via YouTube En direct à l'aide de RTMPS, une extension sécurisée du protocole populaire de streaming vidéo RTMP. Il s'agit du protocole RTMP sur une connexion Transport Layer Security (TLS/SSL) qui permet le chiffrement.

## Avant de commencer
Assurez-vous que votre encodeur est compatible avec le protocole RTMPS et que vous maîtrisez les principes fondamentaux du streaming en direct sur YouTube.

1. Rechercher le préréglage "YouTube RTMPS"
Mettez à jour votre encodeur pour utiliser la version la plus récente et recherchez un paramètre intégré permettant de diffuser du contenu sur YouTube avec RTMPS.

Lorsque vous avez trouvé le préréglage YouTube RTMPS, sélectionnez-le. Il est possible que vous deviez également saisir votre clé de flux dans la salle de contrôle du direct. Vous pouvez maintenant lancer votre diffusion.

Si votre encodeur ne dispose pas d'un préréglage YouTube RTMPS, passez à l'étape "Configurer l'URL du serveur".

2. Configurer l'URL du serveur
Vous pouvez obtenir l'URL RTMPS dans la salle de contrôle du direct. Sachez que l'URL RTMP standard s'affichera par défaut. Assurez-vous donc d'avoir récupéré l'URL RTMPS.

Ouvrez la salle de contrôle du direct YouTube.
Cliquez sur l'onglet Diffusion en streaming ou programmez une diffusion.
Sous "Paramètres de flux", cliquez sur l'icône en forme de cadenas dans le champ "URL de flux" pour afficher l'URL RTMPS.
Copiez l'URL du flux.
Collez-la ensuite dans votre encodeur.
Copiez votre clé de flux YouTube depuis la salle de contrôle du direct et collez-la dans votre encodeur.
Dépannage
Erreurs SSL
Si un message d'erreur du type "Le serveur RTMPS a envoyé un certificat SSL non valide" s'affiche, procédez comme suit :

 

1. Assurez-vous que l'URL du serveur est correcte.

Suivez la procédure de l'étape Configurer l'URL du serveur pour vous assurer que l'URL du serveur est correcte. Le protocole et le serveur doivent être définis sur rtmps, et non rtmp.

 
2. Spécifiez le numéro de port.

Si l'URL est correcte mais qu'un message d'erreur SSL continue de s'afficher, spécifiez le port 443 dans l'URL. Voici un exemple (vous devrez modifier l'URL du serveur avec celle indiquée dans la salle de contrôle du direct) :

rtmps://exempleServeurYouTube.com:443/stream

 
Si votre encodeur vous permet de spécifier le numéro de port dans les options de configuration, vous pouvez également saisir "443" dans ces paramètres.

Connexion expirée
Si un message d'erreur du type "Échec de la connexion au serveur – Connexion expirée" s'affiche, procédez comme suit :

 
1. Assurez-vous que l'URL du serveur est correcte.

Suivez la procédure de l'étape Configurer l'URL du serveur pour vous assurer que l'URL du serveur est correcte.

 
Le protocole et le serveur doivent être définis sur "rtmps", et non "rtmp".

 
2. Vérifiez que votre encodeur est compatible avec RTMPS.

Si le problème persiste, il est possible que votre encodeur ne soit pas compatible avec ce protocole. Consultez sa documentation pour vous en assurer.