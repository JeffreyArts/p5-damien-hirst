# P5 Damien Hirst Spot Painting Generator

Dit project genereert een interactieve spot painting in de stijl van Damien Hirst met behulp van de p5.js library. Het canvas past zich automatisch aan de schermgrootte aan en genereert gekleurde stippen over het gehele scherm.

## Project Structuur

- `index.html` - HTML bestand dat de p5.js library laadt en het canvas container element bevat
- `sketch.js` - Hoofdbestand met alle JavaScript code voor de spot painting generator
- `libraries/p5.min.js` - De p5.js library

## Variabelen Uitleg

### Canvas & Layout Variabelen
- `canvasWidth` - De breedte van het canvas (wordt ingesteld op de volledige vensterbreedte)
- `canvasHeight` - De hoogte van het canvas (wordt ingesteld op de volledige vensterhoogte)
- `backgroundColor` - De achtergrondkleur van het canvas ("#f3f3f3" - lichtgrijs)

### Stippen Configuratie
- `horizontaleStippen` - Het aantal stippen horizontaal (wordt dynamisch berekend)
- `verticaleStippen` - Het aantal stippen verticaal (wordt dynamisch berekend)
- `stipDiameter` - De diameter van elke stip (32 pixels)
- `afstandTussenStippen` - De afstand tussen de stippen (2x de stip diameter)

## Functies Uitleg

### `resetStippen()`
Deze functie berekent het aantal stippen dat horizontaal en verticaal op het canvas past op basis van de huidige canvas grootte. Het gebruikt de formule:
- Horizontale stippen = canvas breedte ÷ (stip diameter × afstand tussen stippen)
- Verticale stippen = canvas hoogte ÷ (stip diameter × afstand tussen stippen)

### `generateStippen()`
De hoofdfunctie die alle stippen genereert en tekent:

1. **Reset**: Roept eerst `resetStippen()` aan om het aantal stippen te berekenen
2. **Kleurmodus**: Schakelt over naar HSL (Hue, Saturation, Lightness) kleurmodus om eenvoudiger willekeurige kleuren te genereren, zonder dat ze te licht, te donker of te grijs/grauw worden.
3. **Dubbele loop**: Itereert door alle x en y posities om elke stip te plaatsen
4. **Positie berekening**: Voor elke stip wordt de exacte x,y positie berekend:
   - `xPos = x × stipDiameter × afstandTussenStippen + stipDiameter`
   - `yPos = y × stipDiameter × afstandTussenStippen + stipDiameter`
5. **Willekeurige kleuren**: Genereert voor elke stip een willekeurige HSL kleur:
   - Hue: 0-360 graden (alle kleuren van het spectrum)
   - Saturation: 30-100% (van gedempt tot zeer verzadigd)
   - Lightness: 25-75% (van donker tot licht)
6. **Tekenen**: Tekent elke stip als een cirkel op de berekende positie

### P5.js Lifecycle Functies

#### `setup()`
Wordt één keer uitgevoerd wanneer het programma start:
- Creëert het canvas met de berekende afmetingen
- Voegt het canvas toe aan de HTML container
- Stelt de achtergrondkleur in
- Schakelt lijnen uit (`noStroke()`)
- Genereert de eerste set stippen

#### `draw()`
Wordt continu uitgevoerd (momenteel leeg, omdat de stippen statisch zijn)

#### `windowResized()`
Wordt automatisch aangeroepen wanneer het venster wordt vergroot of verkleind:
- Update de canvas afmetingen naar de nieuwe venstergrootte
- Past het canvas aan de nieuwe grootte aan
- Genereert nieuwe stippen voor de nieuwe canvas grootte

## Technische Details

### HSL Kleurmodus
Het project gebruikt HSL (Hue, Saturation, Lightness) in plaats van RGB voor kleurgeneratie omdat:
- Hue geeft directe controle over de kleurtoon (0-360°)
- Saturation controleert de intensiteit van de kleur
- Lightness controleert de helderheid
- Dit maakt het makkelijker om esthetisch aangename kleuren te genereren

### Responsief Design
Het canvas past zich automatisch aan aan verschillende schermgroottes door:
- Het gebruik van `window.innerWidth` en `window.innerHeight`
- Dynamische berekening van het aantal stippen
- Automatische hertekening bij vensterresize

### Performance
- Stippen worden alleen opnieuw gegenereerd bij vensterresize
- De `draw()` functie blijft leeg omdat er geen animatie nodig is
- Efficiënte dubbele loop voor het plaatsen van stippen

## Gebruik

1. Open `index.html` in een webbrowser
2. Het canvas wordt automatisch gevuld met willekeurige gekleurde stippen
3. Pas de venstergrootte aan om te zien hoe de stippen zich aanpassen
4. Refresh de pagina voor een nieuwe willekeurige kleurverdeling

## Inspiratie

Dit is een digitale reproductie van Damin Hirst's spot paintings Damien Hirst. Hierbij worden willekeurige gekleurde stippen gebruikt om een abstract kunstwerk te creëren. De digitale versie behoudt de essentie van willekeur en kleurrijkheid terwijl het zich aanpast aan moderne digitale interfaces. Door het in een verkleind browserscherm te plaatsen, kun je het als digitaal kunstwerk plaatsen op je bureaublad. Dit project is onderdeel van een bredere serie digitale reproducties, gemaakt met behulp van P5.js 