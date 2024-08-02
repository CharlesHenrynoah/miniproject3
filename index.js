const quotes = [
  "Chaque goutte d'effort dans l'océan du bien-être collectif compte et crée des vagues de changement positif",
  "Aider intelligemment, en utilisant les ressources au mieux, c'est aider deux fois plus efficacement.",
  "Le cœur doit guider les actions, mais l'esprit doit éclairer les choix pour maximiser l'impact positif.", 
  "Donner avec sagesse et discernement, c'est donner avec une profondeur d'amour qui transforme.", 
  "Un petit sacrifice personnel peut avoir un grand impact sur le bien-être des autres.", 
  "L'efficacité dans la générosité multiplie la portée de chaque acte de bonté.", 
  "La générosité éclairée par la raison est une force puissante pour le changement durable.", 
  "Pour sauver le monde, commence par un acte réfléchi et bien planifié qui maximise le bien que tu peux faire.",
  "Un acte altruiste bien pensé, guidé par l'analyse et le cœur, vaut mille intentions nobles.", 
  "Un geste réfléchi et bien dirigé peut changer le monde plus profondément que mille actions impulsives."

]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }


     while(true){
      const randomIdx = Math.floor(Math.random()* quotes.length)
      if (usedIndexes.has(randomIdx)) continue
      const quote = quotes[randomIdx]
      quoteElement.innerHTML = quote;
      usedIndexes.add(randomIdx)
      break
     }
} 

