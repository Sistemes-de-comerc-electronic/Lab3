# Activitat guiada amb IA - Lab 3

Aquest laboratori treballa dades, persistència i cache. Cada tasca ha de tenir PR propi i proves que demostrin el comportament de BD o cache.

## Nivell de guia

**Nivell 3 - Semiguiat.** La IA pot proposar alternatives, però vosaltres decidiu criteri de cerca, dades de prova, TTL i riscos.

## Entrega per cada tasca

- **Descripció funcional:** què s'ha de fer i per què aporta valor al projecte.
- **Prompt utilitzat:** prompt inicial i prompts de refinament, si n'hi ha.
- **Pla generat per la IA:** pla complet o resum si l'eina no el guarda.
- **Link al PR:** URL del PR amb els commits associats. Pot estar obert o merged.
- **Joc de proves:** casos correctes, errors esperats, dades de prova, codis HTTP si n'hi ha, captures, curl/Postman o comprovació a BD.
- **Revisió crítica:** què ha fet bé la IA, què heu hagut de corregir i quines decisions són vostres.

## Tasques suggerides

1. Implementar una consulta amb QueryBuilder.
2. Crear o actualitzar una entitat amb `persist()` i `flush()`.
3. Afegir cache amb clau i TTL.

## Exemple de joc de proves

- Consulta amb resultats -> retorna els elements esperats.
- Consulta sense resultats -> retorna llista buida o resposta controlada.
- Cache buida -> consulta BD i desa resultat.
- Cache plena -> reutilitza resultat i es documenta el risc de dades obsoletes.
