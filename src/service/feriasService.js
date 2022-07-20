
export const feriasService = {

    salvarFerias() {
        return new Promise((resolve) => {
            let ferias = [{
                idFerias: 0,
                exercicio: 2022,
                dataInicio: "20/12/2022",
                dataFim: "31/12/2022",
                dias: 11,
                processoSei: "2313548",
                urlSei: "wwww.urlSei.com"
    
            }]
            
            resolve (ferias);
        })
        
        
    },
  
}